import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Admission from './pages/Admission';
import MandatoryPublicDisclosure from './pages/MandatoryPublicDisclosure';
import Academic from './pages/Academic';
import Achievment from './pages/Achievment';
import Infrastructure from './pages/Infrastructure';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='w-full'>

    {/* Header */}
      <Header/>
      {/* <body>
        
      </body> */}
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/admission' element={<Admission />} />
        <Route path='/mandatorypublicdisclosure' element={<MandatoryPublicDisclosure />} />
        <Route path='/academic' element={<Academic />} />
        <Route path='/achievment' element={<Achievment />} />
        <Route path='/infrastucture' element={<Infrastructure />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>

      {/* Footer */}

      <div>
        <Footer/>
      </div>
      </div>
  );
}

export default App;
