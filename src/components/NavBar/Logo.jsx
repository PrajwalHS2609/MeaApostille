import React from "react";
import "./NavBar.css";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="logo-container">
      <Link href="/">
        <img
          src="https://techtoday.lenovo.com/themes/custom/lenovod8/images/lenovo-techtoday.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
