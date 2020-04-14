import styled from 'styled-components';

export const StyledBanner = styled.div`
	text-align: center;
	letter-spacing: ${(props) => props.theme.mainSpacing};
	color: ${(props) => props.theme.primaryColor};
	h1 {
		font-size: 2.3rem;
		margin-bottom: 2rem;
		padding: 0 1rem;
		letter-spacing: 6px;
	}
	p {
		width: 85%;
		margin: 0 auto;
		margin-bottom: 2rem;
	}
`;
