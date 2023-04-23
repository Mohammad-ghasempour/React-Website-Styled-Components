import React from 'react'
import styled from 'styled-components'

const Square = styled.div`
width: 60px;
height: 60px;
background-color: #4d4de9;
opacity: 0.6;
z-index: -1;
position: absolute;
top: -60px;
left: -60px;
animation: square 20s linear alternate infinite;

@keyframes square {
    to {
        transform : translate(80vw , 80vh);
    }
}
`
const Circle = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
background-color: #fd76b7;
z-index: -1;
position: absolute;
top: 50px;
left: -60;

animation: circle 25s linear alternate infinite;

@keyframes circle {
    to {
        transform : translate(50vw , 5vh);
    }
}
`
const RectAngle = styled.div`
width: 150px;
height: 50px;
background-color: #a9dbcd;
opacity: 0.6;
z-index: -1;
position: absolute;
top: 140px;
left: 100px;

animation: rectAngle 15s linear alternate infinite;

@keyframes rectAngle {
    to {
        transform : translate(15vw , 65vh);
    }
}
`

const AnimatedShapes = () => {
  return (
    <>
    <Square/>
    <Circle/>
    <RectAngle/>
    </>
    
  )
}

export default AnimatedShapes