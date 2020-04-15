import React from 'react';
import { StyledButton } from './Row.styled.js';
import { Link } from 'gatsby';

const Button = ({ children, url }) => {
	return (
		<Link to={url}>
			<StyledButton type="button">{children}</StyledButton>
		</Link>
	);
};

export default Button;
