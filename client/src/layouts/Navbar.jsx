import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../utils/Logo";
import Hero from '../features/Hero';
import loginLogo from "../assets/login-logo.svg";
import arrowDown from "../assets/drop-down-img.svg";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <>
      <main className="  bg-[url('/Frame%209325.png')] text-white bg-cover bg-center">
        <nav className="wrapper bg-black/15 flex justify-between">
          {/* Logo */}
          <Link to="/">
            <section><Logo /></section>
          </Link>

          {/* Desktop Nav Links */}
          <section className="hidden md:block">
            <ul className="font-Exo-2 font-[500] lg:text-[18px] leading-[50px] tracking-[0%] flex lg:gap-[33.05px] gap-[15px]">
              <li>Home</li>
              <li>Properties</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </section>

          {/* Auth (Desktop) */}
          <section className="md:flex lg:gap-[34px] gap-[20px] hidden relative">
            {user ? (
              <div className="relative flex items-center">
                <figure
                  className="md:flex md:items-center md:gap-3 cursor-pointer"
                  onClick={() => setShowDropdown(prev => !prev)}
                >
                  <img src={loginLogo} alt="User Icon" />
                  <figcaption>{user.firstName}</figcaption>
                  <img src={arrowDown} alt="Dropdown Arrow" />
                </figure>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-md z-50 w-[150px]">
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 text-red-500 py-2 text-sm hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="md:flex lg:gap-[34px] gap-[20px] hidden">
                <Link to="/signup">
                  <div className="border-[#F5F5F5] border-[2px] rounded-[8px] px-6 py-3 hover:bg-[#3D9970] hover:text-white text-center text-sm font-[400]">
                    Sign Up
                  </div>
                </Link>
                <Link to="/login">
                  <div className="border-[#F5F5F5] border-[2px] rounded-[8px] px-6 py-3 bg-[#3D9970] text-white hover:opacity-90 text-center text-sm font-[400]">
                    Login
                  </div>
                </Link>
              </div>
            )}
          </section>

          {/* Hamburger icon (Mobile) */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 text-[#C7C7C7] font-Exo-2 text-[16px]">
            <ul className="flex flex-col gap-4 items-center">
              <Link to="/"><li onClick={() => setMenuOpen(false)}>Home</li></Link>
              <Link to="/properties"><li onClick={() => setMenuOpen(false)}>Properties</li></Link>
              <Link to="/aboutUs"><li onClick={() => setMenuOpen(false)}>About Us</li></Link>
              <Link to="/blog"><li onClick={() => setMenuOpen(false)}>Blog</li></Link>
              <Link to="/contact"><li onClick={() => setMenuOpen(false)}>Contact</li></Link>

              {user ? (
                <li
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600 cursor-pointer"
                >
                  Logout
                </li>
              ) : (
                <>
                  <Link to="/signup"><li onClick={() => setMenuOpen(false)}>Sign up</li></Link>
                  <Link to="/login"><li onClick={() => setMenuOpen(false)}>Login</li></Link>
                </>
              )}
            </ul>
          </div>
        )}

        {/* Hero Section */}
        <section><Hero /></section>
      </main>
    </>
  );
};

export default Navbar;
