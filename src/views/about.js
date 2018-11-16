import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  text-align: left;
`;

const Header = styled.h1`
  margin: 0 0 15px;
  font-size: 20px;
  font-weight: bold;
`;

const SubHeader = styled.h2`
  margin: 20px 0 10px;
  font-size: 16px;
  font-weight: bold;
`;

const Line = styled.p`
  margin: 0 0 10px;
  color: #333;
  font-size: 15px;
  line-height: 18px;
`;

const LineBordered = styled.p`
  margin: 0 0 10px;
  padding: 2px 0 2px 10px;
  border-left: solid 4px #ddd;
  color: #333;
  font-size: 15px;
  line-height: 18px;
`;

const Code = styled.pre`
  width: 100%;
  padding: 16px;
  border-radius: 3px;
  background-color: #f6f8fa;
  font-size: 13px;
  overflow: auto;
`;

const About = () => {
  const link = <a href="http://archillect.com">Archillect API</a>;
  const code = `{
  "sourceLinks": [
    "https://www.google.com/searchbyimage?safe=offℑurl=http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif"
  ],
  "imageSource": "http://78.media.tumblr.com/a06af535eb801c32ff60c5dbb0031d13/tumblr_olhnlsSjnS1vczpxxo1_400.gif",
  "original": "http://archillect.com/147836",
  "id": 147836
}`;

  return (
    <Wrapper>
      <Header>About the App</Header>
      <Line>
        This app uses the
        {' '}
        {link}
        {' '}
        for search visuals by [ID].
      </Line>
      <SubHeader>
        <strong>Brings one visual [ID] specified</strong>
      </SubHeader>
      <LineBordered>GET https://archillect-api.now.sh/visuals/[ID]</LineBordered>
      <Line>Example esponse:</Line>
      <Code>
        <code>{code}</code>
      </Code>
    </Wrapper>
  );
};

export default About;
