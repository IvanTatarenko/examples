import React, { useState } from "react";
import styled from "styled-components";
import { SidebarProvider } from "../../modules/sidebar/SidebarContext";
import Header from "../../modules/header/Header";
import { Outlet } from "react-router-dom";

const Content = styled.div<{ isSidebarOpen: boolean }>`
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${(props) => (props.isSidebarOpen ? "250px" : "0")};
`;

const Main: React.FC = () => {
  const [isContentOpen, setIsContentOpen] = useState(false);

  return (
    <SidebarProvider>
      <Header onContentToggle={(isOpen) => setIsContentOpen(isOpen)} />
      <Content isSidebarOpen={isContentOpen}>
        <Outlet />
      </Content>
    </SidebarProvider>
  );
};

export default Main;
