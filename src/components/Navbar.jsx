import React from "react";
import styled from "styled-components";

const Container = styled.div`
   height: 50px;
`;
const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;
const Left = styled.div`
   width: 60%;
   display: flex;
   align-items: center;
   justify-content: space-between;

   /* @media only screen and (max-width: 834px){
margin-top: 20px;      
   } */
`;

const Logo = styled.h1`
   font-weight: bold;
   text-decoration: underline crimson;

   @media only screen and (max-width: 834px){
      width: 40%;

   }
   
`;
const Menu = styled.ul`
   display: flex;

   @media only screen and (max-width: 430px){
      display: none;
   }
   @media only screen and (max-width: 834px){
      width: 60%
   }
      
   
`;
const MenuItem = styled.li`
   list-style: none;
   display: flex;
   margin-right: 30px;
   font-size: 20px;
   font-weight: bold;
   color: gray;

   @media only screen and (max-width: 834px){
      margin-right: 25px;

   }
`;

const Button = styled.button`
   border: 2px solid white;
   color: white;
   background-color: crimson;
   padding: 10px 15px;
   font-weight: bold;
   border-radius: 10px;
   cursor: pointer;
`;

const Navbar = () => {
   return (
      <Container>
         <Wrapper>
            <Left>
               <Logo>Oxin Web</Logo>
               <Menu>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Features</MenuItem>
                  <MenuItem>Samples</MenuItem>
                  <MenuItem>Prices</MenuItem>
                  <MenuItem>Contact</MenuItem>
               </Menu>
            </Left>
            <Button>Join Today</Button>
         </Wrapper>
      </Container>
   );
};

export default Navbar;