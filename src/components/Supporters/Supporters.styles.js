import styled from 'styled-components';

export const SupportersRow = styled.div`
	background-color: ${(props) => props.theme.lightRow};
	border-top: 1px solid rgba(0, 0, 0, 0.25);

	color: ${(props) => props.theme.lightRowText};
	padding: 10vh 10vw;

	h2 {
		font-weight: 500;
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	p {
		font-weight: 300;
	}
`;

export const Supporter = styled.div`
	flex: 1 0 10rem;
	margin-top: 5vh;
	width: 10vh;
	margin: 5vh 1vw;
`;

export const TheSupporters = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;
