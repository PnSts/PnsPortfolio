import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const navLinks = [
    {
      name: "HOME",
      path: "/#home",
      hashLink: true,
    },
    {
      name: "PROJECTS",
      path: "/#projects",
      hashLink: true,
    },
    {
      name: "ABOUT ME",
      path: "/#aboutme",
      hashLink: true,
    },
    {
      name: "CONTACT",
      path: "/#contact",
      hashLink: false,
    },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <main id="home">{children}</main>
      <Footer navLinks={navLinks} />
    </>
  );
};

export default Layout;