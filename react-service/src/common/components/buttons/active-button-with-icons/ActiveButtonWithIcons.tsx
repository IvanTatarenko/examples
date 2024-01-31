import React, { ReactNode } from "react";

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
    <button onClick={onClick}>{isActive ? activeIcon : inactiveIcon}</button>
  );
};

export default ActiveButtonWithIcons;
