import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Button from '../Button/Button';
import { StyledRow, Text, Image, Title, Paragraph, Line, ImageWrapper, TextWrapper } from './Row.styled';

const Row = ({ title, text, img, ctaUrl, cta, placement, boxShadow, backgroundColor, textAlign, zIndex }) => {
	const data = useStaticQuery(getImage);

	return (
		<StyledRow shadow={boxShadow} background={backgroundColor}>
			<Text order={placement}>
				<TextWrapper align={textAlign}>
					<Line />
					<Title>{title}</Title>
					<Paragraph>{text}</Paragraph>
					<Button
						url={ctaUrl}
						bckColor="rgba(0, 0, 0, 0.3);"
						hBckColor={(props) => props.theme.primaryColor}
						txtColor={(props) => props.theme.textColor}
						hTxtColor={(props) => props.theme.navbarColor}
						brdrColor={(props) => props.theme.primaryColor}
						hBrdrColor={(props) => props.theme.primaryColor}
					>
						{cta}
					</Button>
				</TextWrapper>
			</Text>
			<Image>
				<ImageWrapper level={zIndex}>
					<Img fluid={img || data.coverimage.childImageSharp.fluid} />
				</ImageWrapper>
			</Image>
		</StyledRow>
	);
};

const getImage = graphql`
	{
		coverimage: file(relativePath: { eq: "mxcMiner.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_withWebp_tracedSVG
				}
			}
		}
	}
`;

export default Row;
