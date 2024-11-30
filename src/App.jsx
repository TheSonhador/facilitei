import React from 'react';
import "./styles.css";

import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar';

const App = () => {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;