import styled from 'styled-components';

export const Menu = styled.ul`
	list-style: none;
	flex: 4;
	font-weight: 500;
	flex-direction: column;
	overflow: hidden;
	transition: all 0.3s linear;
	padding: 1vh 0 0 0;
`;

export const MenuItem = styled.li`
	font-weight: 300;
	padding-top: 1rem;
	font-size: 1rem;
`;

export const Column = styled.div`
	list-style: none;
	font-weight: 500;
	overflow: hidden;
	transition: all 0.3s linear;
	color: white;
	margin-right: 10vw;
	font-size: 1rem;
`;

export const StyledFooter = styled.footer`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: stretch;
	background-color: ${(props) => props.theme.navbarColor};
	color: ${(props) => props.theme.secondaryTextColor};
	padding: 10vh 8vw 20vh 8vw;
	a {
		text-decoration: none;
		color: white;
	}
`;
