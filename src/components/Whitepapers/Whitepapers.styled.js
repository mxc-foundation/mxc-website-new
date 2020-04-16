import styled from 'styled-components';

export const Container = styled.div`text-align: center;`;

export const StyledWhitepapers = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	flex: 1 0 25%;
`;

export const Widget = styled.div`
	padding: 2rem;
	margin: 0;
`;

export const WidgetTitle = styled.div`
	font-size: 1.2rem;
	font-weight: 500;
`;

export const WidgetText = styled.div`font-weight: 300;`;

export const Line = styled.p`
	width: 10vw;
	height: 2px;
	border-width: 1;
	color: white;
	background-color: black;
	margin-bottom: 3vh;
`;
