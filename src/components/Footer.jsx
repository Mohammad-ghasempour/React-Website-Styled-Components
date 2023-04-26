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
`;
const Links = styled.ul`
   display: flex;
   list-style: none;
`;
const Link = styled.li`
   margin-right: 25px;
`;

const Brand = styled.div`
   display: flex;
   align-items: center;
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
            <CopyrightSign>
               ©
            </CopyrightSign>
         </Brand>
      </Container>
   );
};

export default Footer;
