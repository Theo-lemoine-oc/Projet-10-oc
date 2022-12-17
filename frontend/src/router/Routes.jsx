import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Navbar} from '../components/header/navbar/Navbar.jsx';
import {Footer} from '../components/footer/Footer.jsx';
import Home from "../pages/Home.jsx";
import Error from "../pages/Error.jsx";
import About from "../pages/About.jsx";
import LocationPage from "../pages/LocationPage.jsx";


export const RoutesPage = () => {
    return (
        <BrowserRouter>
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/about" element={<About />} />
                <Route path="locations/:locationId" element={<LocationPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}