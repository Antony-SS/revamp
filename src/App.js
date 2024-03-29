import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Work,
  Writing,
  About
} from "./components";



 function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/work" element={<Work/>} />
        <Route path ="/writing" element={<Writing/> } />
        <Route path ="/about" element = {<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
