import React from "react";
import styled from "styled-components";
import tablet from "../images/tabletGirl.png";
import playIcon from "../images/playIcon.png";
import Magnifire from "../images/Magnifire.png";
import MiniCard from "./MiniCard";

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
   margin-left: 35px;
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
   font-size: 40px;
   font-weight: bold;
   margin-top: 30px;
`;
const Description = styled.p`
   width: 90%;
   font-size: 20px;
   color: #777;
   margin-top: 20px;
   text-align: justify;
`;

const CardContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 90%;
   margin-top: 40px;

`;
const Box = styled.div`
   width: 140px;
   height: 140px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-right: 70px;
   -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.38);
   box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.38);
`;

const Button = styled.button`
   width: 180px;
   border: none;
   padding: 10px 15px;
   background-color: darkblue;
   color: white;
   font-size: 20px;
   border-radius: 20px;
   cursor: pointer;
   margin-top: 40px;
   display: flex;
   align-items: center;
`;

const Icon = styled.img`
   width: 25px;
   height: 25px;
   margin-right: 5px;
`;
const Desc = styled.p`
   width: 88%;
   overflow-wrap: break-word;
   text-align: center;

   margin-top: 10px;
   font-size: 16px;
`;

const Samples = () => {
   return (
      <Container>
         <Left>
            <Image src={tablet} />
         </Left>
         <Right>
            <Title>Samples projects I've done</Title>
            <Description>
               Our templates include all the elements you need to easily launch
               a professional-looking campaign in no time. More than 100 designs
               for every moment and message Whether you're selling stuff or just
               saying hi, our landing page and email templates help you get the
               job done.
            </Description>
            <CardContainer>
               <MiniCard/>
               <MiniCard/>
               <MiniCard/>
              
            </CardContainer>
            <Button>
               <Icon src={playIcon} />
               How it works!
            </Button>
         </Right>
      </Container>
   );
};

export default Samples;
