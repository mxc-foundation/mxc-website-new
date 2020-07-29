import styled from 'styled-components';

export const Container = styled.div`text-align: center;`;

export const StyledWhitepapers = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	flex: 1;
`;

export const WidgetContainer = styled.div`
	padding: 2rem;
	margin: 0;
	padding: 0;
	color: ${(props) => props.theme.secondaryTextColor};
	min-width: 25vw;
`;

export const WidgetTextContainer = styled.div`padding: 2rem 1rem;`;

export const WidgetTitle = styled.div`
	font-size: 1.2rem;
	font-weight: 500;
`;

export const WidgetText = styled.div`font-weight: 300;`;

export const Line = styled.p`
	width: 10vw;
	height: 2px;
	border-width: 1;
	color: ${(props) => props.theme.secondaryTextColor};
	background-color: ${(props) => props.theme.secondaryTextColor};
	margin-bottom: 3vh;
`;
