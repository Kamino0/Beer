import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  height: 100px;
  margin-top: 30px;
  background-color: ${props => props.theme.mainColor};
`
