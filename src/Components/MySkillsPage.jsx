import React from "react";
import styled, { ThemeProvider } from "styled-components";
import BigTitle from "../SubComponents/BigTitle";
import LogoComponent from "../SubComponents/LogoComponent";
import ParticleComponent from "../SubComponents/ParticleComponent";
import PowerButton from "../SubComponents/PowerButton";
import SocialIcons from "../SubComponents/SocialIcons";
import { Develope } from "./AllSvgs";
import { lightTheme } from "./Themes";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  height: 60vh;
  width: 30vw;
  z-index: 3;
  line-height: 1.5;
  padding-top: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  font-family: "Ubuntu Mono", monospace;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  padding: 0.5rem 0;
  font-size: calc(0.6em + 1vw);

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  p {
    margin-left: 2rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Frontend Developer
          </Title>
          <Description>
            I like to bring ideas to life, by developing designs, elegantly.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React.js, Bootstrap</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VSCode, Github, Postman, Notion, etc.</p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} />
            Frontend Developer
          </Title>
          <Description>
            I like to bring ideas to life, by developing designs, elegantly.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Css, Js, React.js, Bootstrap</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VSCode, Github, Postman, Notion, etc.</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
