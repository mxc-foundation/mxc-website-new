import styled from "styled-components"
import screens from './Screens'

export const StyledNav = styled.nav `
display: flex;
flex-direction:column;
padding: .5rem .5rem 1rem;
flex-wrap: wrap;
background-color: ${(props)=>props.theme.navbarColor};
color: ${(props)=>props.theme.textColor};
a {
    text-decoration: none;
    color: white;
}
a:hover {
    text-decoration: none;
    color: ${(props)=>props.theme.secondaryColor};
}
${screens.tablet`flex-direction:row;`}
`;

export const StyledMenu = styled.ul `
list-style: none; 
margin: 0; 
align-items:center;
padding: 0; 
display: flex; 
justify-content: flex-start;
flex: 4;
font-weight: 500;
flex-direction:column;

${screens.tablet`flex-direction:row;`}


`;

export const MenuItem = styled.li `
padding: 1rem 2rem;
`;

export const NavRight = styled.div `
flex: 2;
justify-content: right;
text-align: right;
padding-right: 1rem;
align-items:center;
`;

export const MobileMenu = styled.button `
color: ${(props)=>props.theme.primaryColor};
background-color: transparent;
border: none;
outline: none;
font-size: 1.5rem;
`