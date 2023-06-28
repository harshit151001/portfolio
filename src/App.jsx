import { ThemeProvider } from "styled-components";
import { lightTheme } from "./Components/Themes";
import GlobalStyle from "./globalStyles";
import Main from "./Components/Main";
import AboutPage from "./Components/AboutPage";
import WorkPage from "./Components/WorkPage";
import BlogPage from "./Components/BlogPage";
import MySkillsPage from "./Components/MySkillsPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./SubComponents/SoundBar";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" Component={Main} />
            <Route exact path="/about" Component={AboutPage} />
            <Route exact path="/work" Component={WorkPage} />
            <Route exact path="/blog" Component={BlogPage} />
            <Route exact path="/myskills" Component={MySkillsPage} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
