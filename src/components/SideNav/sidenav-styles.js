import styled from "styled-components";

export const SideNavContainer = styled.div`
  height: 100vh;
  width: 237px;
  background-color: #fafbfd;
`;

export const SideNavHeader = styled.div`
  text-align: center;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SideNavLogo = styled.h2`
  font-size: 1.2rem;
`;

export const NavContainer = styled.div`
  height: 400px;
  width: 100%;
  margin-top: 80px;
`;

export const SideNavList = styled.li`
  list-style: none;
  padding-top: 40px;
  padding-left: 40px;
`;
export const SideNavAnchor = styled.a`
  text-decoration: none;
  color: #9e9e9e;
  cursor: pointer;
  &:hover,
  &:focus {
    color: #090f31;
    font-weight: 700;
  }
`;
