import React from 'react';
import { StyledBanner } from './Banner.styled';

const Banner = ({ title, info, children }) => {
	return (
		<StyledBanner>
			<h1>{title}</h1>
			<p>{info}</p>
			{children}
		</StyledBanner>
	);
};

export default Banner;
