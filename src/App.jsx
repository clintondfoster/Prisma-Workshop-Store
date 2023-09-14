import Products from "./pages/Products";
import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css'

function App() {

  const userRouter = (
    <Routes>
      <Route index element={<Products/>}/>
      <Route />
      <Route />
    </Routes>
  )

  return userRouter;
}

export default App;
