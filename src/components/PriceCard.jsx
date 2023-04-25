import React from "react";
import styled from "styled-components";

const Container = styled.div`
   height: 400px;
   width: 280px;
   padding: 20px;
   margin: 30px;
   margin-top: 70px;
   background-color: white;
   border-radius: 10px;
   -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
   box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
   display: flex;
   flex-direction: column;
   // justify-content: center;
   align-items: center;
`;
const Price = styled.span`
   margin-top: 10px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;
const Number = styled.h1`
   font-size: 60px;
   padding-left: 5px;
`;
const Plan = styled.button`
   padding: 10px;
   margin-top: 10px;
   border: 1.5px solid crimson;
   border-radius: 30px;
   color: crimson;
   font-size: 16px;
   background-color: white;
`;
const List = styled.ul`
   // margin-top: 30px;
   font-weight: bold;
   list-style: none;
`;
const ListItem = styled.li`
   margin: 25px 0px;
   color: #444;
`;
const Button = styled.button`
   padding: 15px;
   margin-top: 20px;
   border: 2px solid white;
   border-radius: 10px;
   color: white;
   font-size: 16px;
   font-weight: bold;
   background-color: darkblue;
   cursor: pointer;
`;

const PriceCard = ({price , type}) => {
   return (
      <Container>
         <Price>
            $<Number>{price}</Number>/Month
         </Price>
         <Plan>{type} Plan</Plan>
         <List>
            <ListItem>200 Hand-Crafted Template</ListItem>
            <ListItem>Exclusive Support</ListItem>
            <ListItem>50+ PreBuilt Websites</ListItem>
            <ListItem>Premium Plugins</ListItem>
         </List>
         <Button>Join Now</Button>
      </Container>
   );
};

export default PriceCard;
