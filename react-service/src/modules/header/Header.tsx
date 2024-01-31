import React from 'react';
import styled from 'styled-components';
import Sidebar from '../sidebar/Sidebar';
import { useSidebar } from '../sidebar/SidebarContext';

const MainBlock = styled.div`
  background-color: #808080;
  color: #f0f0f0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

interface HeaderProps {
  onContentToggle: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onContentToggle }) => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <MainBlock>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => {
        toggleSidebar();
        onContentToggle(!isSidebarOpen);
      }} />
    </MainBlock>
  );
}

export default Header;
