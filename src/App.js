import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from 'react-particles-js';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
     <Particles
      className=".tsparticles-canvas"
      params={{
        particles: {
          color: {value: "#87CEFA"},
          links: {color: "#87CEFA"},
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
              
            }
          },
          shape: {
            type: "circle",
            stroke:{
              width: 6,
              color:"#FFFFFF"
              
            }
          }
        }
      }}
     />
     <Navbar />
     <Header />
     <AboutMe />
    </>
  );
}

export default App;
