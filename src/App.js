
import './App.css';
import Nav from './components/Nav';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Container from "@material-ui/core/Container"
import Four from './components/Four';
import Five from "./components/Five";
import FootLow from './components/FootLow';
import Footer from "./components/Footer";

function App() {
  return (
  <Container  style={{backgroundColor:"#21212E",maxWidth:"100%"
  ,color:"#46C2FF"}} >
    <Nav/>
    <One/>
    <Two/>
    <Three/>
    
    <Five/>
    <Four/>
    <Footer/>
   
  </Container>
  );
}

export default App;
