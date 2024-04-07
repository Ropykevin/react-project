import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Layout from './components/layout';
import Login from './pages/login';
import Logout from './pages/logout';


const App = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} /> {/* Add the logout route */}

        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Route>
      </Routes>
  );
};

export default App;
