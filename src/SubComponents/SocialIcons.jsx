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
  margin-bottom: 1rem;
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
      <Icon
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ type: "spring", duration: 1, delay: 1 }}>
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

      <Icon
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}>
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
