import React from "react";
import styled from "styled-components";
import ActiveButtonWithIcons from "../../common/components/buttons/active-button-with-icons/ActiveButtonWithIcons";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import VerticalMenu from "../../common/components/menus/vertical-menu/vertical-menu";
import { MenuItem } from "../../common/components/menus/MenuItem";

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
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-250px)"};
  transition: transform 0.3s ease-in-out;
  z-index: 10;
`;

const ButtonDiv = styled.div`
  position: absolute;
  left: 15px;
`;

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const menuItems: MenuItem[] = [
  { label: "Пункт 1", icon: <ArrowLeftOutlined />, url: "/page1" },
  { label: "Пункт 2", icon: <ArrowLeftOutlined />, url: "/page2" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <ButtonDiv>
        <ActiveButtonWithIcons
          isActive={isOpen}
          activeIcon={<ArrowLeftOutlined style={{ color: "#f0f0f0" }} />}
          inactiveIcon={<ArrowRightOutlined style={{ color: "#f0f0f0" }} />}
          onClick={toggleSidebar}
        />
      </ButtonDiv>
      <SidebarContainer isOpen={isOpen}>
        <VerticalMenu items={menuItems} />
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
