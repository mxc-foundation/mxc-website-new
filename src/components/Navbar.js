import React from 'react'
import styles from '../css/navbar.module.css'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const getLogo = graphql`
{
    logo:file(relativePath: {eq:"mxclogo.png"}) {
      childImageSharp {
        fluid {
            src
        }
      }
    }
  }
  
`  


const Navbar = () => {
    const data = useStaticQuery(getLogo)

    return (
        <div className={styles.navbarStart}>
            Navbar
            <Image fluid={data.childImageSharp.fluid}></Image>
        </div>
    )
}

export default Navbar