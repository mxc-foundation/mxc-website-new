import styled from 'styled-components';

export const StyledHero = styled.div`
	display: flex;
	flex-direction: column;
	background: ${(props) => props.theme.linearGradient};
	background-position: center;
	background-size: cover;
	opacity: 1 !important;
	display: flex;
	justify-content: center;
	min-height: 100vh;
	align-items: center;
`;

export const StyledCover = styled.div`
	margin-bottom: -10vh;
	flex: 1;
`;
