import React from "react";
import "../index.css";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-5">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} -{" "}
          <a href="https://github.com/khaicalalf" className="link link-hover">
            React
          </a>{" "}
          with 💓
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
