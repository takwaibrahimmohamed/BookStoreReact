import Header from "./component/Header/Header";
import './App.css'

import Footer from "./component/footer/Footer";
import { Route,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Auther from "./pages/Authers/Auther";
import Card from "./pages/card/Card";
import Book from './pages/book/Book'
import About from './pages/about/About'

import Regester from "./pages/forms/Register";
import Contact from './pages/contact/Contact'
import Login from "./pages/forms/Login";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/authers" element={<Auther/>}/>
        <Route path="/card" element={<Card/>}/>  
        <Route path="/login" element={<Login/>}/>
        <Route path="/regester" element={<Regester/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/book/:id" element={<Book/>}/>

        
       
       
       
      </Routes>
    
      <Footer />
    </div>
  );
}

export default App;
