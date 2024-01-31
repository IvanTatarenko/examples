import React, { useEffect } from 'react';
import styled from 'styled-components';

interface SidebarContainerProps {
  isOpen: boolean;
}

const SidebarContainer = styled.div<SidebarContainerProps>`
  width: 250px;
  height: 100%;
  background-color: #808080;
  position: fixed;
  top: 50px;
  left: 0;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-250px)'}; // Зсув вліво на ширину сайдбару
  transition: transform 0.3s ease-in-out;
  z-index: 10;
`;

const ToggleButton = styled.button`
  position: absolute;
  left: 15px;
`;

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? 'Закрити' : 'Відкрити'}
      </ToggleButton>
      <SidebarContainer isOpen={isOpen}>
        {/* Контент сайдбару */}
      </SidebarContainer>
    </>
  );
}

export default Sidebar;
