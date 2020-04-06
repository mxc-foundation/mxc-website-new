import React from 'react'
import styles from '../css/navbar.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const NavStyle = styled.nav `
  left: 0;
  box-sizing: border-box;
  width: 100%;
  font-weight: 500;
  color: white;
  padding: 0;

`


const getLogo = graphql`
{
    logo:file(relativePath: {eq:"mxclogo.png"}) {
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
    console.log(data);
    

    return (
        <NavStyle>

          <Image fixed={data.logo.childImageSharp.fixed}></Image>
        </NavStyle>
    )
}

export default Navbar