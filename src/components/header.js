import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <MainLogo>Beer</MainLogo>
      </Link>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  height: 100px;
  padding: 10px 40px;
  margin-bottom: 30px;
  color: #fff;
  background-color: ${props => props.theme.mainColor};
`
const MainLogo = styled.h1`
  text-transform: uppercase;
`
