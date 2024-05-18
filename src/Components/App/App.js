import './App.css';
import Homepage from "../Homepage/Homepage"
import Services from "../Services/Services"
import Navbar from "../Navbar/Navbar"
import { BrowserRouter,Route,Routes, useLocation } from 'react-router-dom';
import "../i18n/i18n";
import Footer from '../Footer/Footer';
import Contacts from '../Contacts/Contacts';
import AboutUs from '../AboutUs/AboutUs'
import NotFound from '../NotFound/NotFound';
import ReactGA from 'react-ga';

function App() {

  ReactGA.initialize('G-511H5GLMN3');
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);


  return (
    <BrowserRouter>
    
      
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/process" element={<Services/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
