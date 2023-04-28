import React from "react";
import styled from "styled-components";

const Container = styled.div`
   background-color: #222;
   color: white;
   height: 10%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-size: 18px;
   @media only screen and (max-width: 430px) {
   }
`;
const Links = styled.ul`
   display: flex;
   list-style: none;
   @media only screen and (max-width: 430px) {
      padding-left: 15px;
   }
`;
const Link = styled.li`
   margin-right: 25px;
   @media only screen and (max-width: 430px) {
      margin-right: 10px;
      list-style: none;
   }
`;

const Brand = styled.div`
   display: flex;
   align-items: center;
   @media only screen and (max-width: 430px) {
      font-size: 20px;
   }
`;
const CopyrightSign = styled.div`
   margin-right: 10px;
   margin-left: 5px;
   font-size: 30px;
`;

const Footer = () => {
   return (
      <Container>
         <Links>
            <Link>Guide </Link>
            <Link>Support </Link>
            <Link>API </Link>
            <Link>Community </Link>
         </Links>
         <Brand>
            Oxin Web
            <CopyrightSign>©</CopyrightSign>
         </Brand>
      </Container>
   );
};

export default Footer;
