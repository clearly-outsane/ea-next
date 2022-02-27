import React from "react";

//components
// import SmallProfile from "../small-profile";

//styles
import styles from "./infoGraphic.module.scss";

const InfoGraphic = ({
  number,
  numberText,
  showProfile = false,
  showLabel = true,
  label = "",
  name,
  city = "Tempa",
  state = "FL",
}) => {
  return (
    <div
      className={`h-full w-full ${styles["info-graphic"]} relative ${
        showProfile ? styles["info-graphic--small"] : ""
      }`}
    >
      <div className='absolute w-full h-full'>
        {!showProfile && showLabel && (
          <div
            className={`${styles["info-graphic__top-left-text-label"]} absolute font-bold`}
            style={{ maxWidth: 206 }}
          >
            {label}
          </div>
        )}
        <div
          className={`${styles["info-graphic__ellipse1"]} rounded-full absolute`}
        ></div>
        <div
          className={`${styles["info-graphic__ellipse2"]} rounded-full absolute`}
        ></div>
        <div
          className={`${styles["info-graphic__ellipse3"]} rounded-full absolute`}
        ></div>
        <div
          className={`${styles["info-graphic__ellipse4"]} rounded-full absolute`}
        ></div>
        <div
          className={`${styles["info-graphic__ellipse5"]} rounded-full absolute`}
        ></div>
      </div>
      <div className='flex h-full w-full justify-center items-center'>
        <div
          className={`${styles["info-graphic__center-circle"]} rounded-full flex flex-col  justify-center items-center relative`}
        >
          {showProfile && (
            <div className='profile absolute '>
              {/* <SmallProfile name={name} fontColorClass='text-black' /> */}
            </div>
          )}
          <div
            className={`font-bold text-brand-green ${styles["info-graphic__center-number"]}`}
          >
            {number}
          </div>
          <div className={`${styles["info-graphic__number-text"]} font-bold`}>
            {numberText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoGraphic;
