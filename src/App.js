import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Features from "./components/Features";
import Samples from "./components/Samples";
import Prices from "./components/Prices";

const Container = styled.div`
   height: 100vh;
   overflow: hidden;
   position: relative;
`;

const Shape = css`
   height: 100%;
   width: 100%;
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;
`;

const IntroShape = styled.div`
   ${Shape}
   clip-path: polygon(100% 0, 70% 0, 53% 100%, 100% 100%);
   background-color: crimson;
`;
const FeatureShape = styled.div`
   ${Shape}
   clip-path: polygon(53% 0, 0% 0, 0 100%, 30% 100%);
   background-color: pink;
`;
const ServicesShape = styled.div`
${Shape}
clip-path: polygon(30% 0, 0% 0, 0 100%, 30% 100%);
background-color: #ff8da0;
`
const PricesShape = styled.div`
${Shape}
clip-path: polygon(100% 0, 30% 0, 70% 100%, 100% 100%);
background-color: crimson;
`

function App() {
   return (
      <>
         <Container>
            <Navbar />
            <Intro />
            <IntroShape />
         </Container>

         <Container>
            <Features />
            <FeatureShape/>
         </Container>
         <Container>
            <Samples/>
            <ServicesShape/>
         </Container>
         <Container>
           <Prices/>
           <PricesShape/>
         </Container>
      </>
   );
}

export default App;
