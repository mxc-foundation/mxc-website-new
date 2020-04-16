import styled from 'styled-components';
import screens from '../constants/Screens';

export const NewsRow = styled.div`
	background-color: ${(props) => props.theme.lightRow};
	min-height: 20vh;
	color: ${(props) => props.theme.textColor};
	padding: 10vh 7vw;
	border-top: 1px solid rgba(0, 0, 0, 0.25);
	min-height: 80vh;
`;

export const TitleBar = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;
export const Title = styled.h2`
	font-weight: 500;
	letter-spacing: .15rem;
	font-size: 2rem;
	${screens.tablet`
margin-top: 1rem;
margin-bottom: 1rem;
`};
`;

export const Widgets = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const WidgetImage = styled.div``;

export const WidgetTitle = styled.h3``;

export const WidgetBlurb = styled.p``;

export const Widget = styled.div`
	background-color: ${(props) => props.theme.lightRow};
	color: ${(props) => props.theme.lightRowText};
	border-radius: 15px;
	margin: 1rem;
	flex: 1 0 20rem;
	text-align: center;
`;
