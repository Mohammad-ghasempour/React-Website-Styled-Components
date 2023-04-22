import React from "react";
import styled from "styled-components";
import ImageOfMe from "../images/Mohammad-Ghasempour.png";

const Container = styled.div`
   height: calc(100vh - 50px);
   display: flex;
   padding: 20px;
`;
const Left = styled.div`
   width: 60%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;
const Title = styled.h1`
   width: 60%;
   font-size: 60px;
`;
const IntroText = styled.p`
   width: 60%;
   font-size: 20px;
   text-align: justify;
   text-justify: inter-word;
   margin-top: 20px;
`;
const Info = styled.div`
   width: 60%;
   margin-top: 50px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const ContactInformation = styled.div`
   display: flex;
   flex-direction: column;
`;

const ContactPhone = styled.span`
   font-weight: bold;
   color: #e85c78;
`;
const ContactText = styled.p`
   font-weight: bold;
   margin-top: 5px;
   color: gray;
`;

const Button = styled.button`
   padding: 15px;
   font-weight: bold;
   color: white;
   background-color: darkblue;
   border: none;
   letter-spacing: 2px;
   border-radius: 10px;
   cursor: pointer;
`;

const Right = styled.div`
   width: 40%;
   display: flex;
   align-items: center;
   margin-right: 10px;
`;
const Image = styled.img`
   width: 100%;
   height: 600px;
`;
const Intro = () => {
   return (
      <Container>
         <Left>
            <Title>Adventures in Creative age</Title>
            <IntroText>
               User friendly and highly affordable website builder. Mohammad
               Ghasempour, the website designer invite you to start a project
               for half free...
            </IntroText>
            <Info>
               <Button>START A PROJECT</Button>{" "}
               <ContactInformation>
                  <ContactPhone>Call Me (+47) 938 28 281</ContactPhone>
                  <ContactText>For any question or concern</ContactText>
               </ContactInformation>
            </Info>
         </Left>
         <Right>
            <Image src={ImageOfMe}></Image>
         </Right>
      </Container>
   );
};

export default Intro;
