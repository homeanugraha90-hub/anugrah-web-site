
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
// import Demo from './pages/demo'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Price from './pages/Price'
import Media from './pages/Media'
import WhyJewar from './pages/WhyJewar'
import Amenities from './pages/Amenities'
import Faq from './pages/Faq'
import SiteVisit from './pages/SiteVisit'
// import AuthPage from './pages/AuthPage'
import SignIn from './pages/SignIn'
import Login from './pages/Login'
import AdminDash from './pages/Dashboard/AdminDash'


function App() {

  return (
    
    <div>
       <Router>
        <Navbar/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
           <Route path="/price" element={<Price/>} />
           <Route path="/media" element={<Media/>} />
            <Route path="/why-jewar" element={<WhyJewar/>} />
            <Route path="/amenities" element={<Amenities/>} />
            <Route path="/faq" element={<Faq/>} />
             <Route path="/site-visit" element={<SiteVisit/>} />
              <Route path="/auth" element={<SignIn/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/adminDash" element={<AdminDash/>} />
       </Routes>
       
       <Footer />
   </Router>
      {/* <Demo/> */}
    </div>
  )
}

export default App
