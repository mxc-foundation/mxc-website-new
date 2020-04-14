import styled from 'styled-components';

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyledButton = styled.button`
	align-self: center;
	background-color: rgba(0, 0, 0, 0.3);
	border: 2px solid ${(props) => props.theme.primaryColor};
	text-align: center;
	font-size: 1rem;
	cursor: pointer;
	transition: ${(props) => props.theme.mainTransition};
	margin: 0 1rem 1rem;
	padding: .75rem 3rem;
	text-decoration: none;
	color: ${(props) => props.theme.primaryColor};
	text-transform: uppercase;
	${StyledButton}:hover {
		background: ${(props) => props.theme.primaryColor};
		color: ${(props) => props.theme.navbarColor};
	}
`;
