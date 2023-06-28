import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Particles config files
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticleComponent = (props) => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  return (
    <Box>
      <Particles
        id="particles"
        init={particlesInit}
        style={{ position: "absolute", top: 0 }}
        options={props.theme === "light" ? configLight : configDark}
      />
    </Box>
  );
};

export default ParticleComponent;
