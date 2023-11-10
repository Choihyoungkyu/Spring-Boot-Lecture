import React from "react";
import Navbar from "../navbar/Navbar";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

Layout.propsTypes = {
  children: PropTypes.node.isRequired,
};
