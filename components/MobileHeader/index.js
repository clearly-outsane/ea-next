import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";

//styles
import styles from "./mobileHeader.module.scss";

//images
import EALogo from "../../assets/svgs/ea-text-logo.svg";

//components
import Button from "../PrimaryButton";

const Hamburger = ({ size = 40, expanded }) => {
  return (
    <button
      className={`menu ${expanded ? "opened" : ""}`}
      aria-label='Main Menu'
    >
      <svg width={size} height={size} viewBox='0 0 100 100'>
        <path
          className='line line1'
          d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
        />
        <path className='line line2' d='M 20,50 H 80' />
        <path
          className='line line3'
          d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
        />
      </svg>
    </button>
  );
};

// markup
const MobileHeader = () => {
  const [expanded, setExpanded] = useState(false);
  const [debounce, setDebounce] = useState(false);

  useEffect(() => {
    if (debounce) return;
    setDebounce(true);
    if (expanded) {
      gsap.to(".line", { stroke: "white" });
      setTimeout(() => setDebounce(false), 1200);
    } else {
      gsap.to(".line", { delay: 0.8, stroke: "black" });

      setTimeout(() => setDebounce(false), 1200);
    }

    return () => {};
  }, [expanded]);

  return (
    <div
      className={`${styles["nav-container"]} ${
        expanded ? styles["nav-container--active"] : ""
      } `}
    >
      <nav className={`${styles["nav-container__wrapper"]} w-full fixed`}>
        <div className='px-6 flex items-center justify-between'>
          <div className='flex items-center' aria-label='Home' role='img'>
            <Link href='/'>
              <a className={`${styles["nav-container__nav-logo"]}`}>
                <EALogo />
              </a>
            </Link>
          </div>
          <div
            onClick={() => {
              if (debounce) return;
              setExpanded(!expanded);
            }}
          >
            <Hamburger fill='#000' expanded={expanded} />
          </div>
        </div>
      </nav>

      <div
        className={`${styles["nav-container__nav"]} ${
          expanded ? "" : "pointer-events-none"
        }`}
      >
        <div className={`${styles["nav-container__content"]}`}>
          <ul
            className={`${styles["nav-container__list"]} flex flex-col items-center gap-4`}
          >
            <li className={`${styles["nav-container__list-item"]}`}>
              <Link href='/'>
                <a> Home</a>
              </Link>
            </li>
            <li className={`${styles["nav-container__list-item"]}`}>
              <Link href='/buyers/'>
                <a>For Buyers </a>
              </Link>
            </li>
            <li className={`${styles["nav-container__list-item"]}`}>
              <Link href='/sellers/'>
                <a> For Sellers</a>
              </Link>
            </li>
            <li className={`${styles["nav-container__list-item"]}`}>
              <Link href='/why-it-works/'>
                <a>Why it Works </a>
              </Link>
            </li>
            <li
              className={`pt-8 ${styles["nav-container__list-item"]} ${
                expanded ? " pointer-events-auto" : "pointer-events-none"
              }`}
              style={{ maxWidth: 220 }}
            >
              <Button text='Find an agent' variant={"button--white"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
