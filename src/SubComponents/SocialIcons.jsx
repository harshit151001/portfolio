import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github, Twitter } from "../Components/AllSvgs";
import { darkTheme } from "../Components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > div:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 0.2rem;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href="https://www.github.com/harshit151001"
          rel="noreferrer">
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </div>

      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.twitter.com/atharva_ajit" }}>
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>

      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
