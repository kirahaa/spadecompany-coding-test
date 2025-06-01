import {useCallback, useEffect, useState} from "react";
import menuData from '../../data/tree.json';
import styled from "@emotion/styled";
import {useLocation} from "react-router-dom";
import TreeNode from "./TreeNode";
import ToggleSwitch from "../Button/ToggleSwitch";
import ResizeHandler from "./ResizeHandler";

const Sidebar = ({ isFixed, setIsFixed, width, setWidth, resizable, setResizable }) => {
  const location = useLocation();
  const [activeId, setActiveId] = useState(null);

  const minWidth = 19;
  const maxWidth = (window.innerWidth / 10) - 40;

  const handleResize = useCallback((deltaRem) => {
    setWidth((prev) => {
      let newWidth = prev + deltaRem;
      if (newWidth <= minWidth) return minWidth;
      if (newWidth >= maxWidth) return maxWidth;
      return newWidth;
    });
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;
    const findActiveId = (nodes) => {
      for (let node of nodes) {
        if (node.href === currentPath) return node.id;
        if (node.children?.length) {
          const found = findActiveId(node.children);
          if (found) return found;
        }
      }
      return null;
    };
    const newActiveId = findActiveId(menuData);
    setActiveId(newActiveId);
  }, [location.pathname]);

  useEffect(() => {
    const onResize = () => {
      const updatedMax = (window.innerWidth / 10) - 40;
      if (width > updatedMax) {
        setWidth(updatedMax);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [width]);

  return (
    <SidebarWrapper isFixed={isFixed} width={width}>
      <ToggleWrapper>
        <ToggleSwitch
          checked={isFixed}
          onChange={() => setIsFixed((prev) => !prev)}
          label={'Fixed/Floating'}
        />
        <ToggleSwitch
          checked={resizable}
          onChange={() => setResizable(prev => !prev)}
          label={'Resize Handler'}
        />
      </ToggleWrapper>

      {menuData.map((elem) => (
        <TreeNode
          key={elem.id}
          id={elem.id}
          href={elem.href}
          label={elem.label}
          children={elem.children}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}

      {resizable && (
        <ResizeHandler
          onResize={handleResize}
        />
      )}
    </SidebarWrapper>
  )
}
export default Sidebar;

const SidebarWrapper = styled.nav`
  position: ${props => (props.isFixed ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  width: ${props => props.width}rem;
  height: 100vh;
  background: #f8f9fa;
  border-right: 0.1rem solid #ddd;
  transition: width 0.2s;
`;

const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;