import Link from "next/link";
import React, { useRef, useState } from "react";

const NavComponent = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const mobileNav = useRef();
  const mobileNavOpen = useRef();
  const mobileNavClose = useRef();

  function toggleNav() {
    setToggleMobileNav(!toggleMobileNav);

    if (toggleMobileNav) {
      mobileNav.current.style.display = "none";
    } else {
      mobileNav.current.style.display = "flex";
    }
  }
  return (
    <>
      <nav className="w-full px-2 flex items-center justify-between bg-white">
        <Link
          href="/"
          className="primary-font dark-font font-medium text-2xl lg:text-3xl"
        >
          Amhad <span className="main-blue">Aesthetics</span>
        </Link>
        <ul className="hidden primary-font font-light items-center gap-10 lg:flex">
          <li className="menu-link text-lg dark-font">
            <Link href="/">Services</Link>
          </li>
          <li className="menu-link text-lg dark-font">
            <Link href="/">Doctors</Link>
          </li>
          <li className="menu-link text-lg dark-font">
            <Link href="/">How it works</Link>
          </li>
          <li className="menu-link text-lg dark-font">
            <Link href="/">Reviews</Link>
          </li>
          <li className="menu-link text-lg dark-font">
            <Link href="/">Contact us</Link>
          </li>
        </ul>
        <button className="hidden primary-font p-4 font-light text-white border border-primary-blue bg-main-blue rounded duration-300 ease-in-out hover:border hover:border-main-blue hover:bg-white hover:main-blue lg:block">
          Book an appointment
        </button>
        <div
          ref={mobileNavOpen}
          onClick={toggleNav}
          className="w-[30px] h-[22px] flex items-center justify-between flex-col cursor-pointer lg:hidden"
        >
          <div className="w-full h-[2px] bg-main-blue"></div>
          <div className="w-full h-[2px] bg-main-blue"></div>
          <div className="w-full h-[2px] bg-main-blue"></div>
        </div>
        <ul
          ref={mobileNav}
          className="hidden absolute inset-0 w-full h-screen bg-main-blue primary-font font-light items-center justify-center flex-col gap-12 z-[99] lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="white"
            stroke="none"
            stroke-width="1"
            ref={mobileNavClose}
            onClick={toggleNav}
            className="absolute top-[15px] right-[15px] cursor-pointer"
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
          <li className="menu-link text-2xl text-white">
            <Link href="/">Services</Link>
          </li>
          <li className="menu-link text-2xl text-white">
            <Link href="/">Doctor</Link>
          </li>
          <li className="menu-link text-2xl text-white">
            <Link href="/">How it works</Link>
          </li>
          <li className="menu-link text-2xl text-white">
            <Link href="/">Reviews</Link>
          </li>
          <button className="primary-font px-4 py-3 font-light text-white text-2xl border border-white bg-main-blue rounded duration-300 ease-in-out hover:border hover:border-white hover:bg-white hover:main-blue">
            Book an appointment
          </button>
        </ul>
      </nav>
    </>
  );
};

export default NavComponent;
