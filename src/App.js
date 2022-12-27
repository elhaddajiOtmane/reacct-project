import React, {useState,useEffect} from "react";
import { Routes, Route, Form } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AboutUs from "./pages/AboutUs";


// import '../AddBooks.css';

 
function App(){
    const [books, setbooks] = useState([]);
    useEffect(() => {
   getBook();
  },
  [])
  const back = {
    backgroundImage: 'url(/pictures/download.jpg)',
  };
//   
//   
 
   const getBook = async () => {
   const response = await fetch("http://localhost:3000/api/books");
    const data = await response.json();
    setbooks(data)
   }

    return(
        <div style={back}>
    
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Books" element={<Books books={books}/>} />
                <Route path="AboutUs" element={<AboutUs />} />
            </Routes>
        </div>
    )
}
 
export default App;

