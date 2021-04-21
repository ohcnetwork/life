import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div
      className="flex-grow bg-gray-100 relative"
      style={{ minHeight: "85vh" }}
    >
      {/* <Navbar /> */}

      <div className="max-w-5xl mx-auto container px-2">{children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
