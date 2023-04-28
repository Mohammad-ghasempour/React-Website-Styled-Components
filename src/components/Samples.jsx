import React from "react";
import styled from "styled-components";
import tablet from "../images/tabletGirl.png";
import playIcon from "../images/playIcon.png";
import MiniCard from "./MiniCard";
import { useState } from "react";

const Container = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   position: relative;
   justify-content: space-between;
   align-items: center;
   @media only screen and (max-width: 430px) {
      flex-direction: column;
      width: 100%;
   }
`;
const Left = styled.div`
   height: 100%;
   width: 50%;
   position: relative;
   @media only screen and (max-width: 430px) {
      ////////////////////////////////////  Maybe I should Delete this @media
      display: none;
   }
`;
const Image = styled.img`
   display: ${(props) => props.open && "none"};
   width: 70%;
   margin-left: 35px;
   position: absolute;
   bottom: 0;
   @media only screen and (max-width: 430px) {
      display: none;
   }
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
   @media only screen and (max-width: 430px) {
    width: 100%
   }
`;

const Right = styled.div`
   height: 100%;
   width: 50%;
   display: flex;
   flex-direction: column;
   @media only screen and (max-width: 430px) {
      width: 100%;
   }
`;

const Title = styled.span`
   font-size: 40px;
   font-weight: bold;
   margin-top: 30px;
   @media only screen and (max-width: 430px) {
      padding: 20px;
   }
`;
const Description = styled.p`
   width: 90%;
   font-size: 20px;
   color: #777;
   margin-top: 20px;
   text-align: justify;
   @media only screen and (max-width: 430px) {
      padding: 20px;
   }
`;

const CardContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 90%;
   margin-top: 40px;
   @media only screen and (max-width: 430px) {
      width: 100%;
      margin-top: 20px;
      justify-content: space-around;
   }
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
   @media only screen and (max-width: 430px) {
      margin-left: 20px;
   }
`;
const Icon = styled.img`
   width: 25px;
   height: 25px;
   margin-right: 5px;
`;

const Modal = styled.div`
   height: 100vh;
   width: 100vw;
   background-color: rgba(0, 0, 0, 0.5);
   position: absolute;
   top: 0;
   left: 0;
`;
const CloseButton = styled.span`
   width: 60px;
   height: 20px;
   padding: 5px;
   // background-color: yellow;
   border: 2px solid white;
   border-radius: 10px;
   color: white;
   font-size: 16px;
   font-weight: bold;
   position: absolute;
   top: 32%;
   right: 2%;
`;

const Samples = () => {
   const [open, setOpen] = useState(false);
   const smallScreen = window.screen.width <= 430 ? true : false;

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
         {smallScreen && open && (
            <Modal>
               <Video
                  open={open}
                  autoPlay
                  muted
                  loop
                  controls
                  src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
               />
               <CloseButton
                  onClick={() => {
                     setOpen(false);
                  }}
               >
                  Close X
               </CloseButton>
            </Modal>
         )}
      </Container>
   );
};

export default Samples;
