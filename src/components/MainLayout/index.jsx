import {useState} from "react";
import {Outlet} from "react-router-dom";
import styled from "@emotion/styled";
import Sidebar from "../Sidebar";

const MainLayout = () => {
  const [isFixed, setIsFixed] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(24);
  const [resizable, setResizable] = useState(true);

  return (
    <div>
      <Sidebar
        isFixed={isFixed}
        setIsFixed={setIsFixed}
        width={sidebarWidth}
        setWidth={setSidebarWidth}
        resizable={resizable}
        setResizable={setResizable}
      />
      <ContentWrapper isFixed={isFixed} width={sidebarWidth}>
        <Outlet />
      </ContentWrapper>
    </div>
  )
};
export default MainLayout;

const ContentWrapper = styled.div`
  padding: 2rem;
  transition: margin-left 0.2s;
  margin-left: ${props => props.isFixed ? `${props.width}rem` : "0"};
  
  h1 {
    margin-bottom: 1.5rem;
  }
`;