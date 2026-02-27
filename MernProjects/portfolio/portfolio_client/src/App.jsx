import {Fragment} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage} from "./pages/HomePage.jsx";
import {AboutPage} from "./pages/AboutPage.jsx";
import {ServicePage} from "./pages/ServicePage.jsx";
import {ContactPage} from "./pages/ContactPage.jsx";
function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/service" element={<ServicePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
