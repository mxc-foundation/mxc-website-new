import styled from 'styled-components';
import img from '../../images/button_image.png';

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledButton = styled.button`
	align-self: center;
	background-color: ${(props) => props.backgroundColor};
	border: 2px solid ${(props) => props.borderColor};
	border-radius: 26.5px;
	background-image: url(${img});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	text-align: center;
	font-size: 1.1rem;
	cursor: pointer;
	transition: ${(props) => props.theme.mainTransition};
	margin-top: 1rem;
	margin-bottom: 1rem;
	padding: 1rem 3rem;
	text-decoration: none;
	color: white;
	text-transform: uppercase;
	${StyledButton}:hover {
		background: ${(props) => props.hoverBackgroundColor};
		color: ${(props) => props.hoverTextColor};
		border: 2px solid ${(props) => props.hoverBorderColor};
	}
`;
