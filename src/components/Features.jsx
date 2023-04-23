import React from "react";
import styled from "styled-components";
import reactImage from "../images/react.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
   display: flex;
   height: 100vh;
`;
const Left = styled.div`
   width: 50%;
`;
const Right = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   width: 50%;
`;
const Image = styled.img`
   width: 80%;
   height: 80%;
margin-top: 30px;   
`;
const Title = styled.span`
   font-size: 70px;
`;

const SubTitle = styled.h3`
   font-size: 24px;
   font-style: italic;
   font-weight: 400;
   color: #333;
   margin-top: 30px;
`;

const Description = styled.p`
   width: 90%;
   font-size: 20px;
   color: #777;
   margin-top: 30px;
`;
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
const Features = () => {
   return (
      <Container>
         <Left>
            <Image src={reactImage} />
         </Left>
         <Right>
            <Title>
               {" "}
               <b>Good</b> design
               <br /> <b>Good</b> business
            </Title>
            <SubTitle>We know that good design means good business.</SubTitle>
            <Description>
               Deliver seamless digital experiences using the technologies,
               languages, and frameworks of your choice. Oxin web has an
               API-first cloud-native headless solution, supporting development
               that's fast, efficient, and always secure.
            </Description>
            <Button>Learn More</Button>
         </Right>
         <AnimatedShapes/>
      </Container>
   );
};

export default Features;
