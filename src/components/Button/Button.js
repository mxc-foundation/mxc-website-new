import React from 'react';
import { StyledButton } from './Button.styled';
import { Link } from 'gatsby';

const Button = ({ children, url, bckColor, hBckColor, txtColor, hTxtColor, brdrColor, hBrdrColor }) => {
	return (
		<Link to={url}>
			<StyledButton
				type="button"
				backgroundColor={bckColor}
				hoverBackgroundColor={hBckColor}
				textColor={txtColor}
				hoverTextColor={hTxtColor}
				borderColor={brdrColor}
				hoverBorderColor={hBrdrColor}
			>
				{children}
			</StyledButton>
		</Link>
	);
};

export default Button;
