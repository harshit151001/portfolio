import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, Twitter } from '../Components/AllSvgs'
import {darkTheme} from '../Components/Themes'

const Icons = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    position : fixed;
    bottom : 0;
    left : 2rem;
    z-index : 3;

    &>*not(:last-child){
        margin : 1rem 0;

    }

`

const Line = styled.span`
    width : 0.2rem;
    height : 60px;
    background-color : ${props => props.theme === 'dark' ? props.theme.text : props.theme.body};
`

const SocialIcons = (props) => {
  return (
    <Icons>
     
     <div>

    <NavLink style={{color : 'inherit'}}  target="_blank" to={{pathname : "https://www.github.com/atharva0298"}}>
        <Github width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
    </NavLink>
    </div>

    <div>
    <NavLink style={{color : 'inherit'}} target="_blank" to={{pathname : "https://www.twitter.com/atharva_ajit"}}>
        <Twitter width={25} height={25} fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}/>
    </NavLink>

    </div>

    <Line color={props.theme} />



    </Icons>
    
  )
}

export default SocialIcons