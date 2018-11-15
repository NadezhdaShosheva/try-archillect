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
  padding: 10px 20px;
  background-color: #f2f2f2;
  top:
`;

const Dashboard = () => (
  <Wrapper>
    <Nav>
      <NavLink
        className="main-anchor"
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className="main-anchor"
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