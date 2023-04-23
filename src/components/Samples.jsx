import React from "react";
import styled from "styled-components";
import tablet from "../images/tabletGirl.png";

const Container = styled.div`
   height: 100vh;
   display: flex;
   position: relative;
   justify-content: space-between;
   align-items: center;
`;
const Left = styled.div`
   height: 100%;
   width: 50%;
`;
const Image = styled.img`
   width: 35%;
   margin-left: 30px;
   position: absolute;
   bottom: 0;
`;
const Right = styled.div`
   height: 100%;
   width: 50%;
   display: flex;
   flex-direction: column;
   
`;

const Title = styled.span`
font-size: 50px;
font-weight: bold;
margin-top: 30px;
`;
const Description = styled.p`
   width: 90%;
   font-size: 20px;
   color: #777;
   margin-top: 30px;
`;

const Boxes = styled.div``;

const Button = styled.button`
   width: 150px;
   border: none;
   padding: 15px 20px;
   background-color: darkblue;
   color: white;
   font-size: 20px;
   border-radius: 20px;
   cursor: pointer;
   margin-top: 20px;
`;
const Samples = () => {
   return (
      <Container>
         <Left>
            <Image src={tablet} />
         </Left>
         <Right>
            <Title>My Title</Title>
            <Description>
               kadsjfakdsjfasdjfjasdfjaldsflkaflkjadlfjladkjf
            </Description>
            <Boxes />
            <Button >How it works!</Button>
         </Right>
      </Container>
   );
};

export default Samples;
