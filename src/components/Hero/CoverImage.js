import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { StyledCover } from './Hero.styled';

const getImage = graphql`
	{
		coverimage: file(relativePath: { eq: "windowapp.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
	}
`;

const CoverImage = () => {
	const data = useStaticQuery(getImage);
	return (
		<StyledCover>
			<Img fluid={data.coverimage.childImageSharp.fluid} alt="Screenshots from MXC Supernodes" />
		</StyledCover>
	);
};

export default CoverImage;
