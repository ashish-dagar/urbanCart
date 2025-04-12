import React from "react";
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
// import Signup from "./pages/signup";

import './App.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
// const router = createBrowserRouter([
//   {
//     path: "/login",
//     Component: Login,
//   },
//   {
//     path: "/signup",
//     Component: Signup,
//   },
//   {
//     path: "/",
//     element: <h1>Home</h1>
//   }
// ]);

// const App = () => {
//   return <RouterProvider router={router} />
// }

