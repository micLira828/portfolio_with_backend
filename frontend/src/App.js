import { Route, Routes } from "react-router-dom";

import Services from './pages/Services';
import Example from './pages/Example';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    
    <Routes>
   
        <Route path="/" element={<Home/>}>
        <Route path="/example" element={<Example/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        </Route>
    
    </Routes>
    
     
  
  );
}

export default App;

