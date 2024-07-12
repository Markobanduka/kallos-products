import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  React.useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/" onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={handleLinkClick}>
                    About
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/">
            <div className="btn btn-ghost text-xl">Kallos</div>
          </Link>
        </div>
        <div className="navbar-end gap-3">
          <span className="btn btn-ghost btn-circle">
            <FaPhoneAlt size={20} className="hidden md:block" />
          </span>
          <a href="tel:0644865787" className="underline p-2 hidden md:block">
            +971 50 208 8998
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
