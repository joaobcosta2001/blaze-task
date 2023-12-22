import './App.css';
import Homepage from "../Homepage/Homepage"
import Services from "../Services/Services"
import Navbar from "../Navbar/Navbar"
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
