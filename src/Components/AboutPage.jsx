import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import LogoComponent from "../SubComponents/LogoComponent";
import ParticleComponent from "../SubComponents/ParticleComponent";
import PowerButton from "../SubComponents/PowerButton";
import SocialIcons from "../SubComponents/SocialIcons";
import { darkTheme } from "./Themes";
import astronaut from "../assets/Images/spaceman.png";
import BigTitle from "../SubComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform : translateY(-10px) }
50% { transform : translateY(15px) translateX(15px) }
100% { transform : translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;

  animation: ${float} 4s ease infinite;

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  color: ${(props) => props.theme.text};
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          I'm a front-end developer located in India. I love to create simple
          yet beautiful websites with great user experience.
          <br />
          <br />
          I'm interested in the whole frontend stack Like trying new things and
          building great projects.
          <br />
          <br />
          I'm an independent freelancer and blogger. I love to write blogs and
          read books. I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
