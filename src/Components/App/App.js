import './App.css';
import Homepage from "../Homepage/Homepage"
import Services from "../Services/Services"
import Navbar from "../Navbar/Navbar"
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "../i18n/i18n";
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
