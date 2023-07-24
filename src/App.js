import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Work,
  Writing,
  About
} from "./components";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
  fonts: {
    body: "Playfair Display, serif",
    heading: "Oswald, sans-serif",
  },
  // Other theme customizations go here
});

function App() {
  return (
  <ChakraProvider theme= {theme}>
      <Router>
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
