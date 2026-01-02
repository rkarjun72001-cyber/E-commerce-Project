import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#13183d",
        width: "100%",
        position: "fixed",
        bottom: "0",
        left: "0",
        zIndex: "1000"
      }}
      className="text-center py-3"
    >
      <p className="mb-0 text-light">
        © {new Date().getFullYear()} MyStore. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
