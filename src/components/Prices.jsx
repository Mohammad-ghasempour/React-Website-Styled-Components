import React from 'react'
import styled from 'styled-components'
import PriceCard from './PriceCard'

const Container = styled.div`
height: 100vh;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
@media only screen and (max-width: 430px) {
    flex-direction: column;
    
   }

`

const Prices = () => {
  return (
    <Container>
        <PriceCard price="10" type="Basic"/>
        <PriceCard price="20" type="Premium"/>
        <PriceCard price="30" type="Advanced"/>
        
        
    </Container>
  )
}

export default Prices