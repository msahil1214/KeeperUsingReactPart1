import "./styles.css";

import { React } from "react";

const CurrentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p>copyright {CurrentYear}</p>
    </footer>
  );
}

export default Footer;
