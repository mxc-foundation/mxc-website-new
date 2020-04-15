import styled from "styled-components"
import screens from "../constants/Screens"

export const NewsRow = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor};
  min-height: 20vh;
`

export const Widget = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1vh 1vw;
`
