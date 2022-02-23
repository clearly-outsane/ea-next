import Image from "next/image";
import React from "react";
import Moment from "react-moment";

//styles
import styles from "./transactionCard.module.scss";

//components

const TransactionCard = ({
  house = "Gig Harbor, WA.png",
  name = "Jane Smith",
  price = "$512,000.00",
  date = "11/30/2021",
  city = "Tampa",
  state = "FL",
  special_tag,
}) => {
  return (
    <div className={`${styles["transaction-card"]}`}>
      <div
        className={`${styles["transaction-card__image"]}  webkit-rounded-full overflow-hidden grid relative`}
      >
        <Image
          layout='fill'
          objectFit='cover'
          src={`/images/houses/${house}`}
          alt='bg house'
        />
        <div
          className={`grid z-10 w-full h-full ${styles["transaction-card__overlay"]}`}
        >
          <div
            className={`flex uppercase font-bold justify-self-end text-white ${styles["transaction-card__top-label"]} items-start`}
          >
            {special_tag && (
              <span className='bg-brand-green p-3'>{special_tag}</span>
            )}
          </div>
          <div className='flex  justify-self-start text-white  items-end'>
            <span className='flex items-center gap-3 lg:gap-5'>
              <div className='profile-circle webkit-rounded-full rounded-full overflow-hidden safari-profile-gap'>
                {/* <AgentImage name={name.trim()} className='w-full h-full' /> */}
              </div>
              <div className='flex flex-col '>
                <div
                  className={`font-bold capitalize ${styles["transaction-card__profile-name"]}`}
                >
                  {name.trim()}
                </div>
                <div
                  className={`${styles["transaction-card__profile-location"]}`}
                >
                  {city.trim()}, {state}
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className='pt-6 flex items-center justify-between card-bottom-info'>
        <div className=' flex flex-col '>
          <div className={`${styles["transaction-card__title"]} font-bold`}>
            {price.trim()}
          </div>
          <div className={`${styles["transaction-card__subtitle"]} `}>
            Sold on
            <Moment parse='M/D/Y' date={date.trim()} format='MMMM D, Y' />
          </div>
        </div>
        <div
          className={`${styles["transaction-card__blue-circle"]} rounded-full flex justify-center items-center`}
        >
          <Image
            width={32}
            height={32}
            src='/svgs/black-map-pin.svg'
            alt='map pin icon'
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
