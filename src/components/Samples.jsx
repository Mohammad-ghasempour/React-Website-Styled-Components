import React from "react";
import styled from "styled-components";
import tablet from "../images/tabletGirl.png";
import playIcon from "../images/playIcon.png";
import MiniCard from "./MiniCard";
import { useState } from "react";

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
   position: relative;
`;
const Image = styled.img`
   display: ${(props) => props.open && "none"};
   width: 70%;
   margin-left: 35px;
   position: absolute;
   bottom: 0;
`;

const Video = styled.video`
   display: ${(props) => !props.open && "none"};
   height: 300px;
   background-color: lightcoral;
   position: absolute;
   top: 0;
   bottom: 0;
   right: 0;
   left: 0;
   margin: auto;
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

const Samples = () => {
   const [open, setOpen] = useState(false);
   return (
      <Container>
         <Left>
            <Image open={open} src={tablet} />
            <Video
               open={open}
               autoPlay
               muted
               loop
               controls
               src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
            />
         </Left>
         <Right>
            <Title>Samples projects I've built</Title>
            <Description>
               Our templates include all the elements you need to easily launch
               a professional-looking campaign in no time. More than 100 designs
               for every moment and message Whether you're selling stuff or just
               saying hi, our landing page and email templates help you get the
               job done.
            </Description>
            <CardContainer>
               <MiniCard />
               <MiniCard />
               <MiniCard />
            </CardContainer>
            <Button onClick={() => setOpen(true)}>
               <Icon src={playIcon} />
               How it works!
            </Button>
         </Right>
      </Container>
   );
};

export default Samples;
