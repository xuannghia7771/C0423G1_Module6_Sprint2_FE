import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Header/Navbar.jsx";
import HeroBanner from "./components/HeroBanner.jsx";
import Login from "./components/Login.jsx";
import Whisky from "./components/Whisky.jsx";
import ProductDetail from "./components/ProductDetail.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path="/header" element={<Navbar/>}/>
          <Route path="/banner" element={<HeroBanner/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/chivas" element={<ProductDetail/>}/>
      </Routes>
    </>
  )
}

export default App
