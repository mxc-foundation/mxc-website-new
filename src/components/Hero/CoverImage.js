import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { StyledCover } from './Hero.styled';

const getImage = graphql`
	{
		coverimage: file(relativePath: { eq: "windowapp.png" }) {
			childImageSharp {
				fixed(width: 1200) {
					...GatsbyImageSharpFixed_withWebp_tracedSVG
				}
			}
		}
	}
`;

const CoverImage = () => {
	const data = useStaticQuery(getImage);
	return (
		<StyledCover>
			<Img fixed={data.coverimage.childImageSharp.fixed} alt="Screenshots from MXC Supernodes" />
		</StyledCover>
	);
};

export default CoverImage;
