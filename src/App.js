import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Work,
  Writing,
  About
} from "./components";

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
  <ChakraProvider>
      <Router>
      {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/work" element={<Work />}/>
          <Route path ="/writing" element={<Writing/> } />
          <Route path ="/about" element = {<About/>}/>
        </Routes>
      </Router>
  </ChakraProvider>
  );
}

export default App;
