import React from 'react';
import { Container, StyledWhitepapers } from './Whitepapers.styled';
import Widget from './Widget';

const Whitepapers = () => {
	return (
		<Container>
			<h2>Whitepapers</h2>
			<p>
				Our white papers explain in detail how MXC is building an open-source protocol to revolutionize
				open-source wireless communication. Our one-pagers transform the "tech talk" into everyday language.
			</p>
			<StyledWhitepapers>
				<Widget />
				<Widget />
				<Widget />
				<Widget />
			</StyledWhitepapers>
		</Container>
	);
};

export default Whitepapers;
