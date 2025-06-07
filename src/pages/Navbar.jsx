// src/Navbar.jsx
import React from "react";
import logo from "/src/assets/images/image.png";

const Navbar = () => {
  console.log("Rendering Navbar component");

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Poplar Grove Estate" className="h-25" />
      </div>
      <nav className="space-x-6 text-16 font-semibold text-black">
        <a href="#" className="hover:underline">HOME</a>
        <a href="#" className="hover:underline">ABOUT US</a>
        <a href="#" className="hover:underline">DEVELOPMENT</a>
        <a href="#" className="hover:underline">FLOOR PLANS</a>
        <a href="#" className="hover:underline">CONTACT US</a>
      </nav>
    </header>
  );
};

export default Navbar;
