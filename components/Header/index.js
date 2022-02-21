import React from "react";
import Link from "next/link";

//components
import Button from "../PrimaryButton";

//images
import EALogo from "../../assets/svgs/ea-text-logo.svg";

//styles
import styles from "./header.module.scss";

const Header = () => {
  return (
    <nav
      className={`${styles["main-nav"]}  w-screen fixed hidden lg:block bg-white z-20`}
    >
      <div className='px-6 flex items-center justify-between'>
        <div
          className='flex flex-1 items-center'
          aria-label='Home'
          role='img'
          style={{ marginRight: "auto" }}
        >
          <Link href='/'>
            <a className={`${styles["main-nav__logo"]}`}>
              <EALogo />
            </a>
          </Link>
        </div>
        <div className='flex flex-2 justify-center'>
          <ul className='flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20'>
            <li className=' md:ml-5 md:mr-5 pt-10 md:pt-0'>
              <Link href='/sellers'>
                <a className={`${styles["main-nav__link"]}`}>For Sellers </a>
              </Link>
            </li>
            <li className=' md:ml-5 md:mr-5 pt-10 md:pt-0'>
              <Link href='/buyers/'>
                <a className={`${styles["main-nav__link"]}`}>For Buyers </a>
              </Link>
            </li>
            <li className=' md:ml-5 md:mr-5 pt-10 md:pt-0'>
              <Link href='/why-it-works'>
                <a className={`${styles["main-nav__link"]}`}> Why It Works </a>
              </Link>
            </li>
            <li
              className={`${styles.dropdown} md:ml-5 md:mr-5 pt-10 md:pt-0 hidden`}
            >
              {/* TODO REFACTOR */}
              {/* <a className='nav-link dropdown-btn flex items-center gap-2'>
                About <Chevron />
              </a>

              <div className='dropdown-content z-30'>
                <div className='bg-white'>
                  <Link
                    className='nav-link dropdown-link'
                    href='/about/company'
                  >
                    <a className='dropdown-link-container'>Company</a>
                  </Link>
                  <Link
                    className='nav-link dropdown-link'
                    href='/about/stories'
                  >
                    <a className='dropdown-link-container'> Stories </a>
                  </Link>
                  <Link className='nav-link dropdown-link' href='/about/press'>
                    <a className='dropdown-link-container'> Press </a>
                  </Link>
                </div>
              </div> */}
            </li>
          </ul>
        </div>

        <div className='flex flex-1 justify-end' style={{ marginLeft: "auto" }}>
          <Button text='Find An Agent' large />
        </div>
      </div>
    </nav>
  );
};

export default Header;
