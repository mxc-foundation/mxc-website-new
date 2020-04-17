import React from 'react';
import { WidgetContainer, WidgetTitle, WidgetText, Line, WidgetTextContainer } from './Whitepapers.styled';
import { graphql, useStaticQuery } from 'gatsby';
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

const Widget = ({ img, title, text }) => {
	const data = useStaticQuery(getImage);
	return (
		<WidgetContainer>
			<BackgroundImage
				fluid={img || data.defaultBcg.childImageSharp.fluid}
				style={{
					// Defaults are overwrite-able by setting one or each of the following:
					backgroundSize: 'auto',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					height: '25vh'
				}}
			>
				<WidgetTextContainer>
					<Line />
					<WidgetTitle>{title || 'Sample Title'} </WidgetTitle>
					<WidgetText>{text || 'Sample Text'}</WidgetText>
				</WidgetTextContainer>
			</BackgroundImage>
		</WidgetContainer>
	);
};

export default Widget;
