import React, { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;

box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;  z-index: 1000;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const NavContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
  color: #303030;
  font-family: 'Playfair Display';
  font-size: clamp(20px,5rem,40px);
  font-weight: 700;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: white;
    padding: 20px 0;
    gap: 20px;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const NavItem = styled.li``;

const NavLink = styled.a`
  text-decoration: none;
  color: #303030;
  font-size: 16px;
  transition: 0.3s;

  &:hover {
    color: #ff7a00;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const SearchForm = styled.form`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;



const Button = styled.button`
  padding: 8px 24px;
  border: 1px solid #303030;
  border-radius: 6px;
  background-color: rgb(255, 255, 255);
  color: #303030;
  cursor: pointer;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo href="#">alliatus</Logo>

        <Hamburger onClick={() => setOpen(!open)}>
          ☰
        </Hamburger>

        <NavLinks open={open}>
          <NavItem><NavLink href="#">Home</NavLink></NavItem>
          <NavItem><NavLink href="#">About</NavLink></NavItem>
          <NavItem><NavLink href="#">How it works</NavLink></NavItem>
          <NavItem><NavLink href="#">Member stories</NavLink></NavItem>
          <NavItem><NavLink href="#">Events</NavLink></NavItem>
          <Button type="submit">Log in</Button>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
