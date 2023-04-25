import React from "react";
import styled from "styled-components";

const Container = styled.div`
   height: 100vh;
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
`;
const Form = styled.div`
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

         <Right>R</Right>
      </Container>
   );
};

export default Contact;
