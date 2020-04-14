import styled from 'styled-components';

export const StyledHero = styled.header`
	min-height: ${(props) => (props.home ? 'calc(100vh - 62px)' : '50vh')};
	background: ${(props) => props.theme.linearGradient};
	background-position: center;
	background-size: cover;
	opacity: 1 !important;
	display: flex;
	justify-content: center;
	align-items: center;
`;
