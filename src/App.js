import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Work,
} from "./components";

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
  <ChakraProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Work />}/>
        <Route path ="/writing" element={<Writing/> } />
      </Routes>
    </Router>
  </ChakraProvider>
  );
}

export default App;
