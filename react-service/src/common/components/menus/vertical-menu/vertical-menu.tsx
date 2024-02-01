import React from "react";

import { MenuItem } from "../MenuItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface VerticalMenuProps {
  items: MenuItem[];
}

const NavDiv = styled.nav`
  display: flex;
  
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Li = styled.li`
  text-decoration: none;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ItemText = styled.div`
  margin-left: 20px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const VerticalMenu: React.FC<VerticalMenuProps> = ({ items }) => {
  return (
    <NavDiv>
      <Ul>
        {items.map((item) => (
          <StyledLink to={item.url}>
          <Li>
            <ItemText>{item.icon} {item.label}</ItemText>
          </Li>
          </StyledLink>
        ))}
      </Ul>
    </NavDiv>
  );
};

export default VerticalMenu;
