import React from 'react';
import 'tachyons';
import {HomePage} from "./Components/homePage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutPage from "./Components/aboutPage";
import ProductsPage from "./Components/productsPage";
import ContactUs from "./Components/contactUs";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/about' element={<AboutPage/>}/>
                  <Route path='/products' element={<ProductsPage/>}/>
                  <Route path='/contactus' element={<ContactUs/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
