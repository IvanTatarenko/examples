import React, { useState } from 'react';
import Header from './modules/header/Header';
import { SidebarProvider } from './modules/sidebar/SidebarContext';
import styled from 'styled-components';

const Content = styled.div<{ isSidebarOpen: boolean }>`
  transition: margin-left 0.3s ease-in-out;
  margin-left: ${props => props.isSidebarOpen ? '250px' : '0'};
`;

const App: React.FC = () => {
  const [isContentOpen, setIsContentOpen] = useState(false);

  return (
    <SidebarProvider>
      <Header onContentToggle={(isOpen) => setIsContentOpen(isOpen)} />
      <Content isSidebarOpen={isContentOpen}>
        контент
      </Content>
    </SidebarProvider>
  );
}

export default App;
