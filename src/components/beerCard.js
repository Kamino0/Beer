import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const stringDelimiter = (str, limit) =>
  `${str.substring(0, limit)}...`

const BeerCard = ({
  beer
}) => {
  const description = stringDelimiter(beer.description, 140)
  return (
    <Wrapper to={`/beer/${beer.id}`}>
      <ImageWrapper>
        <img src={beer.image_url} height='250' alt={`${beer.name} logo`}/>
      </ImageWrapper>
      <CardInfo>
        <BeerCardName>{beer.name}</BeerCardName>
        <p>{description}</p>
      </CardInfo>
    </Wrapper>
  )
}

BeerCard.propTypes = {
  beer: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
  }).isRequired
}

export default BeerCard

const Wrapper = styled(Link)`
  display: flex;
  padding: 20px;
  margin: 0 10px 20px 10px;
  border: 1px solid #ccc;
  transition: .2s all;

  &:hover {
    box-shadow: -5px 5px 0px 0px ${props => props.theme.mainColor};
    transform: translate(5px, -5px);
  }
`
const ImageWrapper = styled.figure`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  margin: 0;
  width: 126px;
`
const CardInfo = styled.div`
  padding: 0 20px;
`
const BeerCardName = styled.h4`
  margin-top: 0;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-size: 24px;
`
