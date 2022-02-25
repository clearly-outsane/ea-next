import React from "react";
import Image from "next/image";

//styles
import styles from "./agentCard.module.scss";
import Button from "../PrimaryButton";

const AgentCard = ({
  name,
  showButton = true,
  state,
  city,
  reviews,
  listings_sold,
  average_day_on_market,
  star_rating,
}) => {
  let nameSplit = name ? name.split(" ") : " ";
  return (
    <div
      className={`${
        styles["agent-card"]
      } h-96 w-72 p-4 sm:p-8 rounded-3xl sm:rounded-t-none lg:rounded-3xl ${
        showButton ? "" : styles["agent-card--no-button"]
      }`}
    >
      <div className='grid h-full grid-flow-row auto-rows-max grow divide-y divide-blue-divide-color text-white'>
        <div className='flex pb-4 '>
          <div className='flex justify-start items-center	'>
            <div className={`${styles["agent-card__pic"]}`}>
              <Image
                src={`/images/agents/${name}.jpg`}
                alt={name}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
          </div>
          <div
            className={`flex justify-start items-center ${styles["agent-card__right-side-of-pic"]} `}
          >
            <div className='flex flex-col lg:grid lg:gap-0 lg:grid-rows-3 '>
              <div
                className={`text-xl font-light text-left ${styles["agent-card__name"]} truncate`}
              >
                {nameSplit[0] +
                  " " +
                  nameSplit[nameSplit.length - 1]
                    .substring(0, 1)
                    .toUpperCase() +
                  "."}
              </div>
              <div
                className={`text-sm  italic text-left ${styles["agent-card__location"]} truncate`}
              >
                {city}, {state}
              </div>
              <div className={`text-left ${styles["agent-card__location"]}`}>
                {star_rating} stars, {reviews}
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center py-1 sm:py-4'>
          <div className={`text-base italic ${styles["agent-card__stat"]}`}>
            Listings Sold
          </div>
          <div
            className={`text-3xl text-green-200 ${styles["agent-card__number"]}`}
          >
            {listings_sold}
          </div>
        </div>
        <div className='flex justify-between items-center py-1 sm:py-4'>
          <div className={`text-base italic ${styles["agent-card__stat"]}`}>
            Average days on market
          </div>
          <div
            className={`text-3xl text-green-200 ${styles["agent-card__number"]}`}
          >
            {average_day_on_market}
          </div>
        </div>
        <div className='flex justify-between items-center py-1 sm:py-4'>
          <div className={`text-base italic ${styles["agent-card__stat"]}`}>
            All time transactions
          </div>
          <div
            className={`text-3xl text-green-200 ${styles["agent-card__number"]}`}
          >
            21k
          </div>
        </div>
        {showButton ? (
          <div
            className={`flex justify-center items-center pt-4 ${styles["agent-card__button"]}`}
          >
            <Button
              text={"Talk to" + nameSplit[0]}
              variant='button--white'
              className={`${styles["agent-card__button-text"]}`}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default AgentCard;
