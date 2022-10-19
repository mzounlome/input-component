import {
  NavContainer,
  SideNavAnchor,
  SideNavContainer,
  SideNavHeader,
  SideNavList,
  SideNavLogo,
} from "./sidenav-styles";

import React from "react";

const SideNav = () => {
  return (
    <SideNavContainer>
      <SideNavHeader>
        <SideNavLogo>DevChallenges.io</SideNavLogo>
      </SideNavHeader>
      <NavContainer>
        <ul>
          <SideNavList>
            <SideNavAnchor>Typography</SideNavAnchor>
          </SideNavList>
          <SideNavList>
            <SideNavAnchor>Grid</SideNavAnchor>
          </SideNavList>
          <SideNavList>
            <SideNavAnchor>Buttons</SideNavAnchor>
          </SideNavList>
          <SideNavList>
            <SideNavAnchor>Inputs</SideNavAnchor>
          </SideNavList>
        </ul>
      </NavContainer>
    </SideNavContainer>
  );
};

export default SideNav;
