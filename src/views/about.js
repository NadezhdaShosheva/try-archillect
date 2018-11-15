import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  margin: 0 0 20px;
  font-size: 18px;
  font-weight: bold;
`;

const Line = styled.p`
  width: 80%;
  min-width: 300px;
  margin: 0 0 10px;
  color: #333;
  font-size: 15px;
  line-height: 18px;
  text-align: left;
`;

const About = () => (
  <div>
    <Header>About Component works</Header>
    <Line>
      This app uses the
      <a href="http://archillect.com">Archillect</a>
      API for search visuals.
    </Line>
    <Line>Brings one visual id specified</Line>
    <Line>GET https://archillect-api.now.sh/visuals/[id]</Line>
  </div>
);

export default About;
