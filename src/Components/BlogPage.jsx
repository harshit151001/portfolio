import React from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoComponent from '../SubComponents/LogoComponent'
import PowerButton from '../SubComponents/PowerButton'
import SocialIcons from '../SubComponents/SocialIcons'

const MainContainer = styled.div`
   background-image : url(${img});
   background-size : cover;
   background-repeat : no-repeat;
   background-attachment : fixed;
   background-position : center;
   width : 100vw;
`

const Container = styled.div`
  background-color : ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width : 100%;
  height : 100vh;
  padding-bottom : 5rem;
`

const BlogPage = () => {
  return (
    <MainContainer>
      <Container>
        <LogoComponent />
        <PowerButton />
        <SocialIcons />
      </Container>
    </MainContainer>
  )
}

export default BlogPage