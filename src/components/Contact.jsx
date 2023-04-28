import React from "react";
import styled from "styled-components";
import LocationIcon from "../images/LocationIcon.png";
import PhoneIcon from "../images/PhoneIcon.png";
import PaperflyIcon from "../images/PaperFly.png";
import BackgroundImage from "../images/background.jpg";

const Container = styled.div`
   height: 90%;
   background-image: url(${BackgroundImage});
   background-size: cover;
   display: flex;
   align-items: center;
   @media only screen and (max-width: 430px) {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
           
   }
`;

const Left = styled.div`
   width: 50%;
   margin-left: 50px;
   margin-top: 60px;
   @media only screen and (max-width: 430px) {
      width: 100%;
      margin-left: 0px;
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
   }
   `;
const Title = styled.span`
   font-size: 30px;
   font-weight: bold;
   @media only screen and (max-width: 430px) {
      text-align: center;
      margin-bottom: 15px;
   }
`;

const Form = styled.form`
   height: 300px;
   width: 500px;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   margin-top: 20px;
   @media only screen and (max-width: 430px) {
      flex-wrap: nowrap;
      margin-top: 5px;
      width: 50%;
   }
`;
const Input = styled.input`
   width: 200px;
   height: 20px;
   padding: 10px;
   margin: 15px 0px;
   @media only screen and (max-width: 430px) {
      margin: 5px 0px;
      padding: 5px;
   }
`;
const TextBox = styled.textarea`
   width: 200px;
   height: 90px;
   padding: 20px;
   margin: 15px 0px;
   @media only screen and (max-width: 430px) {
      margin: 5px 0px;
      padding: 8px;
   }
`;
const Button = styled.button`
   width: 240px;
   border: none;
   background-color: darkblue;
   color: white;
   font-size: 20px;
   border-radius: 10px;
   padding: 10px;
   cursor: pointer;
   @media only screen and (max-width: 430px) {
      width: 220px;
      padding: 5px;
      margin-top: 10px;
   }
`;

const Right = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   @media only screen and (max-width: 430px) {
      width: 100%;
           
   }
`;

const InfoContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 10px;
   @media only screen and (max-width: 430px) {
      margin-bottom: 0px;
      height: 50px;;
      margin-left: 20px;
      align-items: center;
   }
`;
const Icon = styled.img`
   width: 30px;
   height: 30px;
   padding: 10px;
   `;
const Text = styled.p`
   margin-left: 20px;
   font-size: 20px;
   color: #333;
   @media only screen and (max-width: 430px) {
      font-size: 18px;
      margin-left: 10px;
   }
`;

const Contact = () => {
   return (
      <Container>
         <Left>
            <Title>
               Question?
               <br /> Let's Get In Touch
            </Title>
            <Form>
               <Input placeholder="Your Name" />
               <Input placeholder="Your Email" />
               <Input placeholder="Subject" />
               <TextBox placeholder="Your Message" />
               <Button>Send</Button>
            </Form>
         </Left>

         <Right>
            <InfoContainer>
               <Icon src={LocationIcon}></Icon>{" "}
               <Text>Stavanger, Rogaland State of Norway</Text>
            </InfoContainer>
            <InfoContainer>
               <Icon src={PhoneIcon} /> <Text>+47 93 828 281</Text>{" "}
               <Text>+47 93 828 281</Text>
            </InfoContainer>
            <InfoContainer>
               <Icon src={PaperflyIcon} /> <Text>Info@oxinweb.com</Text>{" "}
               <Text>M.gh84nor@gmail.com</Text>
            </InfoContainer>
         </Right>
      </Container>
   );
};

export default Contact;
