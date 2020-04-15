import styled from 'styled-components';

export const SupportersRow = styled.div`
	background-color: ${(props) => props.theme.lightRow};
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

export const Supporter = styled.a`
	flex: 1 0 10rem;
	margin-top: 5vh;
`;

export const TheSupporters = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;
