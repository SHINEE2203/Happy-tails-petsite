import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Loadings from "./components/Loadings";
import Home from "./components/Home";
import Pets from "./components/Pets";
import Dog from "./components/Dog";
import Cat from "./components/Cat";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loadings />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pets" element={<Pets/>} />
        <Route path="/home/Dog.js" element={<Dog/>} />
        <Route path="/home/Cat.js" element={<Cat/>} />
        <Route path="/About" element={<About/>} />
     
     </Routes>
    </BrowserRouter>
    
  );
}

export default App;