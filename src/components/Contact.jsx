import React from "react";
import styled from "styled-components";
import LocationIcon from "../images/LocationIcon.png";
import PhoneIcon from "../images/PhoneIcon.png";
import PaperflyIcon from "../images/PaperFly.png";
import BackgroundImage from "../images/background.jpg"


const Container = styled.div`
   height: 90%;
   background-image: url(${BackgroundImage});
   background-size: cover;
   display: flex;
   align-items: center;
`;

const Title = styled.span`
   font-size: 30px;
   font-weight: bold;
`;

const Left = styled.div`
   width: 50%;
   margin-left: 50px;
   margin-top: 60px;
`;
const Form = styled.form`
   height: 300px;
   width: 500px;
   display: flex;
   flex-direction: column;
   flex-wrap: wrap;
   margin-top: 20px;
`;
const Input = styled.input`
   width: 200px;
   height: 20px;
   padding: 10px;
   margin: 15px 0px;
`;
const TextBox = styled.textarea`
   width: 200px;
   height: 90px;
   padding: 20px;
   margin: 15px 0px;
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
`;

const Right = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
`;

const InfoContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 10px;
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
               <Icon src={LocationIcon} ></Icon>    <Text>Stavanger, Rogaland State of Norway</Text>
            </InfoContainer>
            <InfoContainer>
               <Icon src={PhoneIcon} /> <Text>+47 938 282 81</Text> <Text>+47 93 828 81</Text>
            </InfoContainer>
            <InfoContainer>
               <Icon src={PaperflyIcon} /> <Text>Info@oxinweb.com</Text> <Text>M.gh84nor@gmail.com</Text>
            </InfoContainer>
         </Right>
      </Container>
   );
};

export default Contact;
