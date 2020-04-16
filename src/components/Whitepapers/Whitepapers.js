import React from 'react';
import { Container, StyledWhitepapers, Widget, WidgetTitle, WidgetText, Line } from './Whitepapers.styled';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';

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

const Whitepapers = ({ img }) => {
	const data = useStaticQuery(getImage);

	return (
		<Container>
			<h2>Whitepapers</h2>
			<p>
				Our white papers explain in detail how MXC is building an open-source protocol to revolutionize
				open-source wireless communication. Our one-pagers transform the "tech talk" into everyday language.
			</p>
			<StyledWhitepapers>
				<Widget>
					<BackgroundImage fluid={img || data.defaultBcg.childImageSharp.fluid}>
						<Line />
						<WidgetTitle>Title </WidgetTitle>
						<WidgetText>English | Korean | Chinese | Jeffish</WidgetText>
					</BackgroundImage>
				</Widget>
				<Widget>
					<BackgroundImage fluid={img || data.defaultBcg.childImageSharp.fluid}>
						<Line />
						<WidgetTitle>Title </WidgetTitle>
						<WidgetText>English | Korean | Chinese | Jeffish</WidgetText>
					</BackgroundImage>
				</Widget>
				<Widget>
					<BackgroundImage fluid={img || data.defaultBcg.childImageSharp.fluid}>
						<Line />
						<WidgetTitle>Title </WidgetTitle>
						<WidgetText>English | Korean | Chinese | Jeffish</WidgetText>
					</BackgroundImage>
				</Widget>
				<Widget>
					<BackgroundImage fluid={img || data.defaultBcg.childImageSharp.fluid}>
						<Line />
						<WidgetTitle>Title </WidgetTitle>
						<WidgetText>English | Korean | Chinese | Jeffish</WidgetText>
					</BackgroundImage>
				</Widget>
			</StyledWhitepapers>
		</Container>
	);
};

export default Whitepapers;
