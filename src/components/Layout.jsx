// src/components/Layout.jsx
import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className="max-w-[1200px] mx-auto px-4 w-full">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
