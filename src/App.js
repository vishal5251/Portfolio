import React, { useState } from "react";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import BlogList from "./components/Blog/BlogList";

// bg-[#cffbe7]
function App() {

  const [toggle, setToggle] = useState("light")
  return (
    <Router>
      <Routes>
        <Route path="/blog/:id" element={<Blog /> } />
        <Route path="/blog" element={<BlogList /> } />
        <Route path="/" element={
          <main className={`md:text-[#1b021d] ${toggle === "dark" && "bg-[#1b021d] !text-[#fdf1fe]" }`}>
            <div className="w-[78rem] mx-auto flex flex-col justify-center">
            <Nav theme = {toggle} themeCallBack = {(theme) => {setToggle(theme); } }/>
            <Home />
            {/* <Footer /> */}
            </div>
          </main>
        } />
      </Routes>
    </Router>

  );
}

export default App;
