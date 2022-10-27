import { Route, Routes } from "react-router-dom";
// We will create these two pages in a moment
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';


function App() {
  return (
    
    <Routes>
   
        <Route path="/" element={<Home/>}>
        {/*<Route index element={<Home />} />*/}
        <Route path="/services" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    
    </Routes>
    
     
  
  );
}

export default App;

