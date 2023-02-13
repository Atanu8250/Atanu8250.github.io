import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { Box } from '@chakra-ui/react';

function App() {


  return (
    <div className="App" onMouseMove={(e) => {
      document.querySelector(".cursor").setAttribute("style", `top: ${e.pageY - 9}px; left: ${e.pageX - 10}px`)
    }}>
      <Box display={{ md: "block", base: "none" }} className='cursor'></Box>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
