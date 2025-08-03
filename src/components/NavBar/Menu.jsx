"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./NavBar.css";
import Link from "next/link";

const Menu = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
  };

  const hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.transform = "translateX(620px)";
  };

  const handleDropDown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="menuContainer">
      <ul className="menuContent">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
        <li>
          <Link href={"/"}>Services</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/eggfree-cake-diploma-baking-course"}>
              <div className="dropItems">
                <p>Educational Document Apostille</p>
              </div>
            </Link>
            <Link href={"/classic-cake-diploma-baking-course"}>
              <div className="dropItems">
                <p>Personal Document Apostille</p>
              </div>
            </Link>
            <Link href={"/classic-cake-diploma-baking-course"}>
              <div className="dropItems">
                <p>Commercial Document Apostille</p>
              </div>
            </Link>
          </div>
        </li>
        <li>
          <Link href={"/"}>Country List</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/"}>
              <div className="dropItems">
                <p>Oman </p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="dropItems">
                <p>Italy</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="dropItems">
                <p>Germany</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="dropItems">
                <p>Australia</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="dropItems">
                <p>Austria</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="dropItems">
                <p>France</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="dropItems">
                <p>Lithuania</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="dropItems">
                <p>Mexico</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="dropItems">
                <p>Netherlands</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="dropItems">
                <p>UK</p>
              </div>
            </Link>
            <Link href={"/"}>
              <div className="dropItems">
                <p>USA</p>
              </div>
            </Link>
          </div>
        </li>
        {/* <li>
          <Link href={"/"}>Apostille Online</Link>
        </li> */}
        {/* <li>
          <Link href={"/"}>Collection Centers</Link>
          <MdKeyboardArrowDown className="menuIcon" />
          <div className="menuDrop">
            <Link href={"/master-cake-pastry-and-baking-classes"}>
              <div className="dropItems">
                <p>Apostille in Karnataka</p>
              </div>
            </Link>
            <Link href={"/one-day-cake-pastry-and-baking-class"}>
              <div className="dropItems">
                <p>Apostille in Kerala</p>
              </div>
            </Link>
          </div>
        </li> */}
        <li>
          <Link href={"/"}>Blogs</Link>
        </li>

        <li>
          <Link href={"/contact-us"}>Contact Us</Link>
        </li>
        {/* <li>
          <Link href={"/"}>Useful Links</Link>
        </li>
        <li>
          <Link href={"/"}>Resource</Link>
        </li> */}
      </ul>

      {/* Hamburger Icon */}
      <ul onClick={showSideBar} className="mainMenu">
        <FaBars className="hamIcon" />
      </ul>

      {/* Responsive Sidebar */}
      <div className="respMenu">
        <div className="respMenuScroll" id="respMenuScrollId">
          <ul id="respMenuScrollUl">
            <h2>
              <Link onClick={hideSideBar} href={"/"}>
                Home
              </Link>
            </h2>
            <h2 className="cross">
              <FaXmark className="respIcon" onClick={hideSideBar} />
            </h2>
          </ul>

          {/* ABOUT MEJORIA */}
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} href={"/about-us"}>
                About Us
              </Link>
            </h2>
          </ul>

          {/* DIPLOMA PROGRAM */}
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} href={"#"}>
                Services
              </Link>
              <MdKeyboardArrowDown
                className="menuIcon"
                onClick={() => handleDropDown("diploma")}
              />
            </h2>
            {openDropdown === "diploma" && (
              <span className="respMenuSpan">
                <li>
                  <h4>
                    <Link
                      onClick={hideSideBar}
                      href={"/eggfree-cake-diploma-baking-course"}
                    >
                      Educational Document Apostille
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link
                      onClick={hideSideBar}
                      href={"/eggfree-cake-diploma-baking-course"}
                    >
                      Commercial Document Apostille
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link
                      onClick={hideSideBar}
                      href={"/classic-cake-diploma-baking-course"}
                    >
                      Personal Document Apostille
                    </Link>
                  </h4>
                </li>
              </span>
            )}
          </ul>

          {/* CERTIFICATION COURSES */}
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} href={"#"}>
                Country List
              </Link>
              <MdKeyboardArrowDown
                className="menuIcon"
                onClick={() => handleDropDown("certification")}
              />
            </h2>
            {openDropdown === "certification" && (
              <span className="respMenuSpan">
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      Australia
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      Austria
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link
                      onClick={hideSideBar}
                      href={"/home-bakers-certificate-course"}
                    >
                      Belgium
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      Finland
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      France
                    </Link>
                  </h4>
                </li>
              </span>
            )}
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} href={"/contact-us"}>
                Apostille Online{" "}
              </Link>
            </h2>
          </ul>
          {/* SHORT COURSES */}
          <ul className="serviceDrop">
            <h2>
              <Link onClick={hideSideBar} href={"#"}>
                Collection Centers{" "}
              </Link>
              <MdKeyboardArrowDown
                className="menuIcon"
                onClick={() => handleDropDown("short")}
              />
            </h2>
            {openDropdown === "short" && (
              <span className="respMenuSpan">
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      Apostille in Karnataka
                    </Link>
                  </h4>
                </li>
                <li>
                  <h4>
                    <Link onClick={hideSideBar} href={"/"}>
                      Apostille in Kerala
                    </Link>
                  </h4>
                </li>
              </span>
            )}
          </ul>

          {/* CONTACT */}
          <ul>
            <h2>
              <Link onClick={hideSideBar} href={"/contact-us"}>
                Blogs
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} href={"/contact-us"}>
                Contact Us
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} href={"/contact-us"}>
                Useful Links
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} href={"/contact-us"}>
                Resource
              </Link>
            </h2>
          </ul>
          <ul>
            <div className="respMenuGap"></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
