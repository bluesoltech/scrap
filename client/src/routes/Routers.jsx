import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../assets/pages/Home'
import About from '../assets/pages/About'
import Contact from '../assets/pages/Contact'
import Product from '../assets/pages/Product'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Product" element={<Product />} />
        </Routes>
    )
}

export default Routers