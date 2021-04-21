import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex-grow bg-gray-100">
      {/* <Navbar /> */}

      <div className="max-w-5xl mx-auto container">{children}</div>

      <footer className="max-w-5xl mx-auto container my-10 flex space-x-4 items-center justify-center py-10">
        <div className="font-semibold">Github </div>
        <div className="font-semibold">Database </div>
        <div className="font-semibold">About </div>
      </footer>
    </div>
  );
};

export default MainLayout;
