import styled from 'styled-components';
import screens from '../constants/Screens';

export const StyledHero = styled.div`
	display: flex;
	flex-direction: column;
	background: ${(props) => props.theme.linearGradient};
	background-position: center;
	background-size: cover;
	opacity: 1 !important;
	display: flex;
	justify-content: center;
	height: 100vh;
	align-items: center;
`;

export const StyledCover = styled.div`
	display: none;

	${screens.tablet`	
	display: block;
	margin-bottom: -10vh;
	flex: 1;
	width: 90vw;`};
`;
