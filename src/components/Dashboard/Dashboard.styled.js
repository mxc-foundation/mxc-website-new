import styled from 'styled-components';
import screens from '../constants/Screens';

export const StyledDashboard = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	box-shadow: 0px 1px 15px #888;
	margin-top: 10vh;
	min-height: 20vh;
	flex-wrap: wrap;
	${screens.tablet`flex-wrap: no-wrap;`};
`;

export const StyledWidget = styled.div`
	text-align: center;

	h4 {
		font-size: .75rem;
	}
	h3 {
		font-weight: 900;
		font-size: 2rem;
		margin-top: 1rem;
	}
	margin: 5vh;
	${screens.tablet`margin: 0;`};
`;
