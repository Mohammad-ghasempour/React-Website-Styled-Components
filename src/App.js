import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

const Container = styled.div`
   height: 100vh;
   overflow: hidden;
`;
const IntroShape = styled.div`
   height: 100%;
   width: 100%;
   clip-path: polygon(100% 0, 70% 0, 55% 100%, 100% 100%);
   background-color: crimson;
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;
`;

function App() {
   return (
      <>
         <Container>
            <Navbar />
            <Intro />
            <IntroShape />
         </Container>
        
      </>
   );
}

export default App;
