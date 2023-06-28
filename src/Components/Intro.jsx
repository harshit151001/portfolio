import styled from "styled-components";
import Me from "../assets/Images/profile-img.png";
import { motion } from "framer-motion";
import { darkTheme } from "./Themes";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient
      (
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;

const SubBox = styled(motion.div)`
  width: 50%;
  position: relative;
  display: flex;

  &:nth-child(1) {
    padding-left: 32px;
  }
  &:nth-child(2) {
    padding-right: 32px;
  }

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 1.5rem;

  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}>
      <SubBox
        initial={{
          borderTop: "0px solid transparent",
          borderBottom: "0px solid transparent",
        }}
        animate={{
          borderTop: `2px solid ${darkTheme.text}`,
          borderBottom: `2px solid ${darkTheme.text}`,
        }}
        transition={{ type: "spring", duration: 1, delay: 2 }}>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Harshit Shukla,</h3>
          <h6>I am smart and diligent developer</h6>
        </Text>
      </SubBox>
      <SubBox
        initial={{
          borderTop: "0px solid transparent",
          borderBottom: "0px solid transparent",
        }}
        animate={{
          borderTop: `2px solid ${darkTheme.body}`,
          borderBottom: `2px solid ${darkTheme.body}`,
        }}
        transition={{ type: "spring", duration: 1, delay: 2 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}>
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
