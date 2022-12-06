import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content h-20">
        <div>
          <p>
            Copyright &#169; {currentYear} - All right reserved by Merazul Ehsan
            Sowad
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
