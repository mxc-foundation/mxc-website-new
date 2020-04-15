import styled from 'styled-components';

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledButton = styled.button`
	align-self: center;
	background-color: ${(props) => props.backgroundColor};
	border: 2px solid ${(props) => props.borderColor};
	text-align: center;
	font-size: 1rem;
	cursor: pointer;
	transition: ${(props) => props.theme.mainTransition};
	margin-top: 1rem;
	margin-bottom: 1rem;
	padding: .75rem 3rem;
	text-decoration: none;
	color: ${(props) => props.textColor};
	text-transform: uppercase;
	${StyledButton}:hover {
		background: ${(props) => props.hoverBackgroundColor};
		color: ${(props) => props.hoverTextColor};
		border: 2px solid ${(props) => props.hoverBorderColor};
	}
`;
