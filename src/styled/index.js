import styled, { injectGlobal } from 'styled-components'
import { Link } from 'react-router-dom'

injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  body {
    font-family: sans-serif;
    color: #171504;
  }

  input {
    color: inherit;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

export const Button = styled.button`
  display: block;
  height: 40px;
  width: 100px;
  text-transform: uppercase;
  line-height: 40px;
  text-align: center;
  font-weight: 600;
  color: #fff;
  background-color: ${props => props.theme.mainColor};
  border: none;
  border-radius: 4px;
  transition: .2s all;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    box-shadow: -5px 5px 0px 0px ${props => props.theme.mainColor};
    transform: translate(5px, -5px);
  }
`

export const LinkButton = Button.withComponent(Link)

export const ContentWrapper = styled.div`
  grid-area: content;
  max-width: 1800px;
  min-height: calc(100vh - 260px);
  margin: 0 auto;
`
