import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { StyledNav, MobileMenu, StyledMenu, MenuItem, Logo } from './Nav.styled';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import links from '../constants/Links';
import styles from './navbar.module.css';

const getLogo = graphql`
	{
		logo: file(relativePath: { eq: "mxcLogoStars.png" }) {
			childImageSharp {
				fixed(width: 80) {
					...GatsbyImageSharpFixed_withWebp_tracedSVG
				}
			}
		}
	}
`;

const Navbar = () => {
	const data = useStaticQuery(getLogo);
	const [ isOpen, setNav ] = useState(false);
	const toggleNav = () => {
		setNav((isOpen) => !isOpen);
	};

	return (
		<StyledNav>
			<Logo>
				<Link to="/">
					<Image fixed={data.logo.childImageSharp.fixed} />
				</Link>
			</Logo>
			<MobileMenu type="button" onClick={toggleNav}>
				<FaBars />
			</MobileMenu>
			<StyledMenu className={isOpen ? `${styles.show}` : `${styles.hide}`}>
				{links.map((item, index) => {
					return (
						<MenuItem key={index}>
							<Link to={item.path}>{item.text}</Link>
						</MenuItem>
					);
				})}
				{/* <NavRight>
					{socialIcons.map((item, index) => {
						return (
							<a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
								{item.icon}
							</a>
						);
					})}
				</NavRight> */}
			</StyledMenu>
		</StyledNav>
	);
};

export default Navbar;
