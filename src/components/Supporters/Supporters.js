import React from 'react';
import { SupportersRow, Supporter, TheSupporters, Text } from './Supporters.styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Supporters = () => {
	const data = useStaticQuery(query);
	console.log(data);

	return (
		<SupportersRow>
			<h2>MXC Supporters</h2>
			<p>
				Our supporters believe heavily in the MXC vision for the Future of IoT. Our progress towards an
				open-source IoT network is made possible through their generous support.
			</p>
			<TheSupporters>
				{data.allFile.edges.map((edges, index) => (
					<Supporter>
						<Img fluid={edges.node.childImageSharp.fluid} key={index} />
					</Supporter>
				))}
			</TheSupporters>
		</SupportersRow>
	);
};

export default Supporters;

export const query = graphql`
	{
		allFile(filter: { extension: { eq: "png" }, sourceInstanceName: { eq: "supporters" } }) {
			edges {
				node {
					id
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid_withWebp_tracedSVG
						}
					}
				}
			}
		}
	}
`;
