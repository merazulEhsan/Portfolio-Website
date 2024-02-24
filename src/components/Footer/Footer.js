import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gradient-to-r from-[#07233b] from-1.67% via-[#041d34] via-58.95% to-[#050c16] to-80.48%  border-t border-[#072d4f]">
      <footer className="footer footer-center p-4 text-gray-300 text-sm h-16 font-grotesk tracking-wide font-normal">
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
