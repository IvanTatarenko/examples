import React, { ReactNode } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  background: none;
  border: none;
  transition: background-color 0.3s ease;
  min-height: 25px;
  min-height: 25px;
  border-radius: 5px;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1); /* Додаємо легкий фон при наведенні */
  }
`


interface StateButtonWithIconsProps {
  isActive: boolean;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  onClick: () => void;
}

const ActiveButtonWithIcons: React.FC<StateButtonWithIconsProps> = ({
  isActive,
  activeIcon,
  inactiveIcon,
  onClick,
}) => {
  return (
    <Button onClick={onClick}>{isActive ? activeIcon : inactiveIcon}</Button>
  );
};

export default ActiveButtonWithIcons;
