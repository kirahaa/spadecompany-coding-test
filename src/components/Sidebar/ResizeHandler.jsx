import {useEffect, useRef} from "react";
import styled from "@emotion/styled";

const ResizeHandler = ({ onResize }) => {
  const isDragging = useRef(false);
  const startXRef = useRef(0);
  const rafRef = useRef(null);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startXRef.current = e.clientX;

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    if (rafRef.current) return;

    const deltaX = e.clientX - startXRef.current;
    const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const deltaRem = deltaX / remSize;

    rafRef.current = requestAnimationFrame(() => {
      onResize(deltaRem);
      rafRef.current = null;
    })

    startXRef.current = e.clientX;
  }

  const onMouseUp = (e) => {
    isDragging.current = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <Handler
      onMouseDown={onMouseDown}
      role="separator"
      aria-orientation="vertical"
    />
  )
}
export default ResizeHandler;

const Handler = styled.div`
  position: absolute;
  top: 0;
  right: -.4rem;
  width: .8rem;
  height: 100%;
  background: #eee;
  cursor: ew-resize;
  z-index: 10;
  border-radius: 0.4rem;
`