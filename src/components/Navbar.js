import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import {StyledNav} from './styled/StyledNav'
import { StyledMenu, MobileMenu } from './styled/StyledNav'
import { MenuItem } from './styled/StyledNav'
import { NavRight } from './styled/StyledNav'
import { Link } from "gatsby"
import links from './constants/Links'
import socialIcons from './constants/SocialIcons'
import { FaBars } from 'react-icons/fa'

const getLogo = graphql`
{
    logo:file(relativePath: {eq:"mxcLogoStars.png"}) {
      childImageSharp {
        fixed (width: 100){
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
  
`  

const Navbar = () => {
    
  const data = useStaticQuery(getLogo)
  const [isOpen,setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

    

    return (
        <StyledNav>
          <Link to="/"><Image fixed={data.logo.childImageSharp.fixed}></Image></Link>
          <MobileMenu type="button" onClick={toggleNav}>
            <FaBars /> 
          </MobileMenu>
          <StyledMenu>
            {links.map((item,index) => {
              return (
              <MenuItem key={index}>
                <Link to={item.path}>{item.text}</Link></MenuItem>)
            })}
          </StyledMenu>
          <NavRight>
          {socialIcons.map((item,index)=>{
              return <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a>

            })}</NavRight>
        </StyledNav>
    )
}

export default Navbar