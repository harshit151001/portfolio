import { ThemeProvider } from "styled-components"
import { lightTheme } from "./Components/Themes"
import GlobalStyle from "./globalStyles"
import Main from "./Components/Main"
import AboutPage from "./Components/AboutPage"
import WorkPage from "./Components/WorkPage"
import BlogPage from "./Components/BlogPage"
import MySkillsPage from "./Components/MySkillsPage"
import { Route, Routes } from "react-router-dom"


function App() {
  return <>
  <GlobalStyle />

  <ThemeProvider theme={lightTheme}>
    <Routes>
    <Route exact path="/" Component={Main}/>
    <Route exact path="/about" Component={AboutPage}/>
    <Route exact path="/work" Component={WorkPage}/>
    <Route exact path="/blog" Component={BlogPage}/>
    <Route exact path="/skills" Component={MySkillsPage}/>
    </Routes>
    
  </ThemeProvider>

    </>
    
}

export default App

