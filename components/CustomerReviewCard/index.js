/**
 * NOTE - This component uses basis-1/2 when put in a flex container
 */
import React from "react";
import Image from "next/image";

//styles
import styles from "./customerReviewCard.module.scss";

const CustomerReviewCard = ({ review, date, name, source, border = true }) => {
  return (
    <a
      className={`${styles["story-card"]} basis-1/2 flex  ${
        border ? "flex-col" : styles["story-card--no-border"]
      }`}
    >
      <div
        style={border ? {} : { minWidth: 46 }}
        className={`${border ? "" : "mr-4"} ${
          styles["story-card__quotation-mark"]
        }`}
      >
        <Image
          width={31}
          height={34}
          src='/svgs/quote-mark.svg'
          alt='Quotation Mark'
        />
      </div>
      <div className='flex flex-col h-full justify-between'>
        <p>{review}</p>

        <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
          <div className='flex flex-col'>
            <h5>{name}</h5>
            <a>{source}</a>
          </div>
          <p className={`${styles["story-card__post-time"]}`}>
            <i>{date}</i>
          </p>
        </div>
      </div>
    </a>
  );
};

export default CustomerReviewCard;
