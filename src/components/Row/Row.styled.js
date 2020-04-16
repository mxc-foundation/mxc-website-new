import styled from 'styled-components';
import screens from '../constants/Screens';

export const StyledRow = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	border-top: 1px solid rgba(0, 0, 0, 0.25);
	background-color: ${(props) => props.background};
	min-height: 80vh;
	justify-content: center;
`;

export const Text = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	order: ${(props) => props.order};
	flex: 1;
`;

export const TextWrapper = styled.div`text-align: ${(props) => props.align};`;

export const Line = styled.p`
	width: 10vw;
	height: 2px;
	border-width: 1;
	color: black;
	background-color: black;
	margin-bottom: 3vh;
`;

export const Title = styled.h2`
	color: black;
	border-color: black;
	margin-bottom: 1rem;
	font-size: 2.5rem;
	${screens.tablet`max-width: 30vw;`};
`;

export const Paragraph = styled.p`
	margin-bottom: 2rem;
	font-size: 1rem;
	font-weight: 300;
	line-height: 2rem;
	${screens.tablet`max-width: 30vw;`};
`;

export const Image = styled.div`
	display: flex;
	justify-content: center;
	flex: 1;
	height: 80vh;
	align-items: center;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	max-height: 500px;
	height: 100%;
	padding: 2rem;
	z-index: ${(props) => props.level};
`;
