import styled from 'styled-components';
import screens from '../constants/Screens';

export const StyledBanner = styled.div`
	display: flex;
	text-align: center;
	align-items: flex-start;
	flex-direction: column;
	letter-spacing: ${(props) => props.theme.mainSpacing};
	color: ${(props) => props.theme.headingHero};
	h1 {
		font-size: 2.8rem;
		margin-bottom: 2rem;
		padding: 0 1rem;
		font-weight: 400;
		line-height: 55px;
	}
	p {
		width: 85%;
		margin: 0 auto;
		margin-bottom: 2rem;
	}
	${screens.tablet`margin-top: 10vh;`};
`;

export const BannerDiv = styled.div``;
