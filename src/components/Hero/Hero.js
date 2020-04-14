import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const getImage = graphql`
	{
		defaultBcg: file(relativePath: { eq: "BG02.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
	}
`;

const Hero = ({ img, children, className }) => {
	const data = useStaticQuery(getImage);
	return (
		<BackgroundImage fluid={img || data.defaultBcg.childImageSharp.fluid} className={className}>
			{children}
		</BackgroundImage>
	);
};

export default styled(Hero)`
display: flex;
flex-direction: column;
background: white;
background-position: top;
background-size: 100%;
justify-content: center;
align-items: center;
min-height: ${(props) => (props.home ? 'calc(100vh - 75px)' : '50vh')};
background-repeat: no-repeat;
`;
