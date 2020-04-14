import styled from 'styled-components';
import screens from '../constants/Screens';

export const StyledNav = styled.nav`
	display: flex;
	flex-direction: row;
	padding: .5rem .5rem .5rem;
	flex-wrap: wrap;
	background-color: ${(props) => props.theme.navbarColor};
	color: ${(props) => props.theme.textColor};
	a {
		text-decoration: none;
		color: white;
	}
	a:hover {
		text-decoration: none;
		color: ${(props) => props.theme.secondaryColor};
	}
	${screens.tablet`flex-direction:row;`};
`;

export const Logo = styled.div`
	${screens.tablet`padding: .25rem 0 0 1rem;
	margin-right: 1rem;`};
`;

export const StyledMenu = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
	margin: 3rem 0 0 0;
	align-items: center;
	padding: 0;
	display: flex;
	justify-content: flex-start;
	flex: 4;
	font-weight: 500;
	flex-direction: column;
	height: 0;
	overflow: hidden;
	transition: all 0.3s linear;

	${screens.tablet`
	flex-direction:row;
	height: auto;
	margin: 0 0 0 0;

	`};
`;

export const MenuItem = styled.li`padding: 1rem 2rem;`;

export const NavRight = styled.div`
	flex: 2;
	justify-content: right;
	text-align: right;
	padding-right: 1rem;
	order: 99;
`;

export const MobileMenu = styled.button`
	color: ${(props) => props.theme.primaryColor};
	background-color: transparent;
	margin-top: 1rem;
	border: none;
	outline: none;
	font-size: 1.5rem;
	order: 99;
	cursor: pointer;
	align-self: first baseline;

	${screens.tablet`display:none;`};
`;
