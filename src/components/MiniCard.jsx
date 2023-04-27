import React from "react";
import styled from "styled-components";
import Magnifire from "../images/Magnifire.png";

const Container = styled.div`
   width: 100px;
   padding: 20px;
   display: flex;
   flex-direction: column;
   align-items: center;
   -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
   box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
   @media only screen and (max-width: 430px) {
    width: 90px;
    padding: 10px;
   }
`;
const Icon = styled.img`
   width: 20px;
   height: 22px;
   margin-right: 5px;
   filter: invert(40%);
`;
const Desc = styled.span`
   text-align: center;
   margin-top: 10px;
   font-size: 16px;
`;

const MiniCard = () => {
   return (
      <Container>
         <Icon src={Magnifire} />
         <Desc>Lorem Ipsum is simply text of the printing.</Desc>
      </Container>
   );
};

export default MiniCard;
