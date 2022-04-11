import React from "react";
import Logo from "./logo";
import Navbar from "./navbar";
import Top from "./top";
import Middle from "./middle";
import Footer from "./footer";

export default function App() {
  return (
    <div className="page-boundary">
      <Logo />
      <Navbar />
      <Top />
      <Middle />
      <Footer />
    </div>
  );
}
