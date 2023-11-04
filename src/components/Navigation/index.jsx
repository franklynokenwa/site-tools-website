"use client";
import * as React from "react";
import "./nav.css";
import logo from "../../../public/logo.png";
import iso from "../../../public/iso.png";
import Image from "next/image";
import { PortfolioItems } from "../helper";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
PortfolioItems;
const Navigation = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const [isFixed, setIsFixed] = React.useState(false);
  const handleMenuClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  function toTitleCase(str) {
    // Split the string into words using spaces as separators
    let words = str.split(" ");

    // Capitalize the first letter of each word and convert the rest to lowercase
    for (let i = 0; i < words.length; i++) {
      words[i] =
        words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase();
    }

    // Join the words back into a single string with spaces
    return words.join(" ");
  }

  React.useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        id="menu-icon"
        className={menuOpen ? `active ${isFixed && "fixed"}` : ""}
        onClick={handleMenuClick}
      >
        <span className="first"></span>
        <span className="second"></span>
        <span className="third"></span>
      </div>
      <div className={isFixed ? "header fixed" : "header"}>
        <div className="logo">
          <Link href="/">
            <Image src={logo} alt="ST & T Logo" priority />
          </Link>
        </div>
        <nav style={{ display: menuOpen ? "block" : "none" }}>
          <ul>
            <li>
              <Link href="/" onClick={() => setMenuOpen(!menuOpen)}>
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link href="/about#" onClick={() => setMenuOpen(!menuOpen)}>
                About Us
              </Link>
              <ul>
                <li>
                  <Link href="/about" onClick={() => setMenuOpen(!menuOpen)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/operational-structure"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    Operational Structure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/quality-policy"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    Quality Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about/leadership"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    Leadership
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/#">Service Portfolio</Link>
              <ul className="mega-dropdown">
                <li className="row">
                  <ul className="mega-col">
                    {PortfolioItems?.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={`/portfolio/${item.url}`}
                          onClick={() => setMenuOpen(!menuOpen)}
                        >
                          {toTitleCase(item.name)}
                        </Link>
                      </li>
                    )).slice(0, 7)}
                  </ul>
                  <ul className="mega-col">
                    {PortfolioItems?.slice(7)
                      ?.map((child, x) => (
                        <li key={x}>
                          <Link
                            href={`/portfolio/${child.url}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                          >
                            {toTitleCase(child.name)}
                          </Link>
                        </li>
                      ))
                      .slice(0, 5)}
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/locations" onClick={() => setMenuOpen(!menuOpen)}>
                Locations
              </Link>
            </li>
            <li className="contact">
              <Link href="/contact" onClick={() => setMenuOpen(!menuOpen)}>
                <FaPhoneAlt /> Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="iso">
          <Image src={iso} alt="ISO Logo" priority />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
