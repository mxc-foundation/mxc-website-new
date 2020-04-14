import React from 'react';
import { StyledHero } from './Hero.styled';

const Hero = ({ img, children, home }) => {
	return (
		<StyledHero home={home} fluid={img}>
			{children}
		</StyledHero>
	);
};

export default Hero;
