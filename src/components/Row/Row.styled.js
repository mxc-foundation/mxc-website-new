import styled from 'styled-components';
import screens from '../constants/Screens';

export const StyledRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	margin: 10vh 0;
	padding: 10vh 5vw;
	box-shadow: ${(props) => props.shadow};
	background-color: ${(props) => props.background};
	${screens.tablet`
		padding: 10vh 10vh;
		margin: 0;
		justify-content: space-around;
	`};
`;

export const Image = styled.div``;

export const Title = styled.h2`
	color: black;
	text-align: center;
	margin-bottom: 1rem;
	font-size: 2.5rem;
	${screens.tablet`max-width: 30vw; text-align:left;`};
`;

export const Text = styled.div`
	order: ${(props) => props.order};
	flex-direction: column;
	justify-content: center;
`;

export const Paragraph = styled.p`
	text-align: center;
	margin-bottom: 2rem;
	font-size: 1rem;
	font-weight: 300;
	line-height: 2rem;
	${screens.tablet`max-width: 30vw; text-align:left;`};
`;

export const StyledButton = styled.button`
	align-self: center;
	min-width: 90vw;
	background-color: transparent;
	border: 2px solid ${(props) => props.theme.buttonOutline};
	text-align: center;
	font-size: 1rem;
	cursor: pointer;
	transition: ${(props) => props.theme.mainTransition};
	padding: .75rem 3rem;
	text-decoration: none;
	color: ${(props) => props.theme.buttonOutline};
	text-transform: uppercase;
	margin: 10vh 0;
	${StyledButton}:hover {
		background: ${(props) => props.theme.navbarColor};
		color: ${(props) => props.theme.primaryColor};
	}

	${screens.tablet`min-width: 5vw; margin: 0 0;`};
`;
