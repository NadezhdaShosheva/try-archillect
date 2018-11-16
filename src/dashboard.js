import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Router from './router';

const Wrapper = styled.div`
  padding: 50px 30px 0;
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 15px 50px;
  background-color: #f2f2f2;

  a {
    display: inline-block;
    padding: 3px 10px;
    color: #333;
    font-size: 16px;
    text-decoration: none;

    &:hover {
      color: #666;
    }

    &.active {
      color: #000;
    }
  }
`;

const Dashboard = () => (
  <Wrapper>
    <Nav>
      <NavLink
        to="/try-archillect"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
      >
        About
      </NavLink>
    </Nav>
    <div>
      <Router />
    </div>
  </Wrapper>
);

export default Dashboard;
