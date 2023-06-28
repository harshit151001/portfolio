import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, LinkedIn, Twitter } from "../Components/AllSvgs";
import { darkTheme } from "../Components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *not(:last-child) {
    margin: 1rem 0;
  }
`;

const Icon = styled(motion.div)`
  margin-bottom: 1.2rem;
  scale: 0;
  animation: animate 0.5s forwards;

  &:nth-child(1) {
    animation-delay: 1s;
  }

  &:nth-child(2) {
    animation-delay: 1.2s;
  }

  @keyframes animate {
    0% {
      scale: 0;
    }
    75% {
      scale: 1.5;
    }
    100% {
      scale: 1;
    }
  }
`;

const Line = styled(motion.span)`
  width: 0.2rem;
  height: 60px;
  background-color: ${(props) => {
    if (props.color) {
      return props.color;
    }
    return props.theme === "dark" ? props.theme.body : props.theme.text;
  }};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <Icon>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://www.github.com/harshit151001"
          rel="noopener noreferrer">
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </Icon>

      <Icon>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://www.linkedin.com/in/harshit--shukla/"
          rel="noopener noreferrer">
          <LinkedIn
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </Icon>

      <Line
        color={props.theme === "dark" && darkTheme.text}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
