import styled from 'styled-components';
import screens from '../constants/Screens';

export const StyledFooter = styled.footer`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: stretch;
	background-color: ${(props) => props.theme.navbarColor};
	color: ${(props) => props.theme.darkRowText};
	padding: 5vh 5vw;
`;

export const List = styled.ul`
	list-style: none;
	font-weight: 500;
	height: 0;
	overflow: hidden;
	transition: all 0.3s linear;
`;

export const Menu = styled.div``;
