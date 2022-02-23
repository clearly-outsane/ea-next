import React, { useRef, useState, useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Head from "next/head";

//style
import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles/sellers.module.scss";

//components
import Header from "../components/Header";
// import MobileHeader from "../components/mobile-header/index.js";
import Footer from "../components/Footer";
import BottomCTA from "../components/BottomCTA";
import Button from "../components/PrimaryButton";
import InfoGraphic from "../components/InfoGraphic";
import TransactionCard from "../components/TransactionCard";
import CustomerReviewCard from "../components/CustomerReviewCard";

// install Swiper modules
SwiperCore.use([Navigation]);

const Sellers = ({ sellersTransactions }) => {
  const swiperRef = React.useRef(null);

  const CharacteristicsCard = ({ text }) => {
    return (
      <div
        className={`${styles["characteristics-card"]} py-8 px-10 flex items-center w-full`}
        style={{ minHeight: 115 }}
      >
        <Image
          width={20}
          height={20}
          src='/svgs/green-tick.svg'
          alt='checkmark icon'
        />
        <p className='mb-0 pl-6 flex-1'>{text}</p>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Effective Agents | Find Top Realtors Near you </title>
        <meta
          name='description'
          content='Find Top Realtors Near you | Based on 2021 Sales data'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main>
        <section
          className={`${styles["hero-section"]} w-full h-screen flex justify-center content-center px-8 overflow-hidden`}
        >
          <div className='container mx-auto flex flex-row justify-center content-center'>
            <div className='hero-content flex flex-col basis-1/2 w-6/12 justify-center content-start items-start'>
              <div className='mb-8'>
                <Image
                  src='/svgs/ea-icon.svg'
                  alt='Effective Agents Logo'
                  height={35}
                  width={35}
                />
              </div>
              <h1>
                Find Top Selling <br /> Realtors<sup>®</sup> in Your
                Neighborhood!
              </h1>
              <h4 className='max-w-md'>
                Our algorithm analyzes millions of real estate transactions and
                reviews to find the best Real Estate Agents near you.
              </h4>
              <div className='mt-4'>
                <Button text='Sell my home' />
              </div>
            </div>

            <div className=' flex flex-col basis-1/2 justify-center content-end items-end relative '>
              <div
                className={`${styles["hero-section__right"]} bg-light-blue-background mt-24 mb-36 h-full  absolute left-0 overflow-hidden`}
              >
                <div className='h-full w-full relative swiper-container'>
                  <Swiper
                    observer={true}
                    ref={swiperRef}
                    init={false}
                    navigation={{
                      prevEl: ".prev",
                      nextEl: ".next",
                    }}
                    className='h-full w-full z-0'
                    spaceBetween={50}
                    slidesPerView={1}
                    onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={(i) => console.log("slide change", i)}
                  >
                    <SwiperSlide>
                      <InfoGraphic
                        number='$41,693'
                        numberText='More Than The Average Agent'
                        label='Last year our Agents sold homes for'
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <InfoGraphic
                        number='$41,693'
                        numberText='More Than The Average Agent'
                        label='Last year our Agents sold homes for'
                      />
                    </SwiperSlide>
                  </Swiper>
                  <div className='absolute bottom-4 lg:bottom-12 lg:right-12 z-10 sellers-slide-nav-container'>
                    <div className='flex flex-row gap-3 z-10'>
                      <div className='prev cursor-pointer'>
                        <div
                          className='bg-brand-green rounded-full flex justify-center items-center'
                          style={{ width: 70, height: 70 }}
                        >
                          <Image
                            width={24}
                            height={24}
                            src='/svgs/left-arrow.svg'
                            alt='left arrow'
                          />
                        </div>
                      </div>
                      <div className='next cursor-pointer'>
                        <div
                          className='bg-brand-green rounded-full flex justify-center items-center'
                          style={{ width: 70, height: 70 }}
                        >
                          <Image
                            width={24}
                            height={24}
                            src='/svgs/right-arrow.svg'
                            alt='right arrow'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles["why-section"]} w-full flex flex-col justify-center items-center pb-24 pt-8 px-8 fade-in-section`}
        >
          <div className='container mx-auto flex flex-col justify-center content-center '>
            <div style={{ maxWidth: 640 }} className='self-center'>
              <h2 className='text-center capitalize'>
                Why Should you Sell Your Home Using Effective Agents?
              </h2>
            </div>
            <div className='points mt-16 self-center'>
              <div className='flex flex-col lg:flex-row items-center gap-10'>
                <div
                  className={`${styles["why-section__info-card"]} flex flex-col ${styles["why-section__safari-gap"]}`}
                >
                  <h2 className='capitalize'> Sell for more </h2>
                  <p>
                    Sell for up to 12.56% more! In a recent survey of
                    transactions of existing homes sold through the platform,
                    our clients were able to achieve an increased price of
                    $41,693* over the national average sale price of existing
                    homes. We all know that time-is-money, and the fact that our
                    agents can sell faster and for more money, well, that&apos;s
                    a win-win for sure.
                  </p>
                </div>
                <div
                  className={`${styles["why-section__green-circle"]} bg-brand-green rounded-full flex items-center justify-center ${styles["why-section__safari-gap"]}`}
                >
                  <Image
                    width={28}
                    height={28}
                    src='/svgs/plus.svg'
                    alt='plus icon'
                  />
                </div>
                <div
                  className={`${styles["why-section__info-card"]} flex flex-col ${styles["why-section__safari-gap"]}`}
                >
                  <h2 className='capitalize'> Sell quickly </h2>
                  <p>
                    One of the variables that influences our matching algorithm
                    is ADOM (or Active / Agent Days on Market). Our expert
                    agents are aggressive and know how to position a home for
                    multiple offers. Top REALTORS® and real estate agents
                    don&apos;t merely react to market trends, they influence
                    them, and they know how to stage and price homes to appeal
                    to the right buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles["transactions-section"]}  w-full flex justify-center items-center pb-24 pt-16 px-8  `}
        >
          <div className='container mx-auto grid lg:flex justify-center items-center'>
            <div className='basis-2/3 swiper-container pt-6 lg:pt-0'>
              <div
                className={`${styles["transactions-section__carousel"]} flex justify-end lg:mr-16 relative items-center`}
              >
                <Swiper
                  loop={true}
                  loopedSlides={5}
                  breakpoints={{
                    320: {
                      centeredSlides: true,
                      centeredSlidesBounds: true,
                    },
                    1024: {
                      centeredSlides: false,
                      centeredSlidesBounds: false,
                    },
                  }}
                  observer={true}
                  init={false}
                  watchSlidesProgress={true}
                  slidesPerView={"auto"}
                  spaceBetween={30}
                  ref={swiperRef}
                  className='w-full'
                  initialSlide={3}
                  navigation={{
                    prevEl: `.transactions-section__prev`,
                    nextEl: `.transactions-section__next`,
                  }}
                  // onSetTranslate={(swiper, translate) => {
                  //   console.log(translate);
                  // }}
                  // onSlideChange={(i) => console.log("slide change", i.activeIndex)}
                >
                  {sellersTransactions.map((transaction, i) => {
                    return (
                      <SwiperSlide
                        key={transaction.name}
                        className='swiper-slide-animated width-auto-important'
                      >
                        <TransactionCard {...transaction} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <div
                  className={`${styles["transactions-section__next"]} transactions-section__next cursor-pointer ml-8`}
                >
                  <div
                    className='bg-brand-green rounded-full flex justify-center items-center'
                    style={{ width: 70, height: 70 }}
                  >
                    <Image
                      width={24}
                      height={24}
                      src='/svgs/right-arrow.svg'
                      alt='right arrow'
                    />
                  </div>
                </div>
                <div
                  className={`${styles["transactions-section__prev-wrapper"]} absolute left-0 z-10 h-full flex items-center pl-10 pr-20`}
                >
                  <div className={`transactions-section__prev cursor-pointer `}>
                    <div
                      className='bg-brand-green rounded-full flex justify-center items-center'
                      style={{ width: 70, height: 70 }}
                    >
                      <Image
                        width={24}
                        height={24}
                        src='/svgs/left-arrow.svg'
                        alt='left arrow'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='basis-1/3'>
              <div className='flex flex-col justify-between fade-in-section'>
                <h2 className='capitalize' style={{ maxWidth: 478 }}>
                  Our Elite Agents Are Waiting To Sell Your Home
                </h2>
                <p>
                  You&apos;ve decided to sell your home. Let us help you find
                  the perfect real estate agent based on their actual
                  performance. Effective Agents has analyzed over 1.5 million
                  agents in the United States.
                </p>
                <span style={{ width: 220 }}>
                  <Button text='Find an agent' />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          className={` ${styles["speak-section"]} w-full flex justify-center items-center pb-24 pt-16 px-8 `}
        >
          <div className='container mx-auto flex justify-center items-center'>
            <div
              className={`${styles["speak-section__call-card"]}  self-stretch my-10 relative overflow-hidden webkit-rounded-full`}
            >
              <div className={`${styles["speak-section__agent-image"]}`}>
                <Image
                  src='/images/agents/ContactAgent.jpeg'
                  layout='fill'
                  alt='bg image'
                  objectFit='cover'
                  className={`${styles["speak-section__agent-image"]}`}
                />
              </div>
              <div
                className={`${styles["speak-section__overlay"]} p-8 h-full w-full flex justify-center items-end pointer-events-auto`}
              >
                <a
                  className={`justify-center items-center flex w-full ${styles["speak-section__button-container"]}`}
                  href='#'
                >
                  <div
                    className={`${styles["speak-section__button-label"]}  py-6 px-5`}
                  >
                    A team member is ready!
                  </div>
                  <div
                    className={`${styles["speak-section__button"]} uppercase text-white justify-self-end py-6 px-5`}
                  >
                    Call now
                  </div>
                </a>
              </div>
            </div>
            <div
              className={`${styles["speak-section__content"]} relative flex w-full h-full items-center overflow-hidden pointer-events-none`}
            >
              <Image
                src='/images/light-blue-roads.jpg'
                layout='fill'
                alt='bg image'
                objectFit='cover'
                className={`${styles["speak-section__bg-image"]}`}
              />

              <div className='absolute top-0 bottom-0 left-0 right-0 -z-20 overlay' />

              <div className='hidden lg:block basis-1/3'> </div>
              <div className='flex flex-col my-24'>
                <h2 style={{ maxWidth: 610 }}>
                  Speak To A Team Member About Selling Your Home Faster & For
                  More Money.
                </h2>
                <p style={{ maxWidth: 527 }}>
                  We have an experienced team of home seller advocates standing
                  by to help you sort through thousands of real estate agents in
                  your area. Our analysts have access to proprietary performance
                  data that can help you sell your home for the best price in
                  record time. <br /> <br /> Representatives are available 7
                  days a week 9:00 AM - 7:00 PM.
                </p>
                <a
                  href='tel:855-472-9275'
                  className='text-sky-600 pointer-events-auto'
                >
                  Call (855) 472-9275
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles["characteristics-section"]} w-full flex justify-center items-center pb-24 pt-16 px-8 relative`}
          // style={{ backgroundImage: `url(${housebgtwo})` }}
        >
          <Image
            objectPosition='bottom'
            layout='fill'
            src='/svgs/house-bg-2.svg'
            alt=''
            objectFit='contain'
            className={`${styles["characteristics-section__bg-image"]}`}
          />
          <div className='container mx-auto flex flex-col justify-center items-center'>
            <h2 style={{ maxWidth: 730 }} className='text-center'>
              What characteristics should you look for in a great real estate
              agent?
            </h2>
            <p style={{ maxWidth: 720 }} className='text-center pt-1'>
              The best listing agents don&apos;t just post your home for sale
              online, snap a few pictures and call it a day; they maximize your
              odds of getting multiple offers as quickly as possible. You should
              expect the following level of service from our agents:
            </p>
            <div
              className={`${styles["characteristics-section__cards"]} pt-20 w-full grid grid-cols-3 gap-10`}
            >
              <div className='flex flex-col gap-8 pt-32'>
                <CharacteristicsCard text='In-depth market analysis and an explanation of their pricing strategy' />
                <CharacteristicsCard text='Your listing syndicated to all major online home search websites' />
                <CharacteristicsCard text='Near immediate response turnaround time on client requests' />
                <CharacteristicsCard text='Well written ad-copy and a thorough and accurate listing description' />
              </div>
              <div className='flex flex-col gap-8 pt-16'>
                <CharacteristicsCard text='Advertising in relevant local publications' />
                <CharacteristicsCard text='Access to home staging and design consultants' />
                <CharacteristicsCard text='Professional photography' />
                <CharacteristicsCard text='Customized, property specific, marketing flyers' />
              </div>
              <div className='flex flex-col gap-8'>
                <CharacteristicsCard text='Development of virtual tours (high-end properties)' />
                <CharacteristicsCard text='Exclusive previews for other real estate brokers' />
                <CharacteristicsCard text='Access and monitoring of your private lock-box' />
                <CharacteristicsCard text='Access and monitoring of your private lock-box' />
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles["stories-section"]} w-full flex justify-center items-center pb-24 pt-36 px-8`}
        >
          <div className='container mx-auto flex flex-col justify-center items-center'>
            <h2 style={{ maxWidth: 500 }}>What Our Customers Say</h2>
            <p className='text-center' style={{ maxWidth: 458 }}>
              Meet some of our customers, read their stories, and imagine what
              EffectiveAgents® can do for you.
            </p>
            <div className='container mx-auto flex flex-col lg:flex-row justify-center items-stretch content-center pt-6'>
              <CustomerReviewCard
                name='Pete D******'
                review="I couldn't decide which agent that I should hire so I researched many
          local agents online. Eventually I found effective agents and they were
          very helpful. We put our house up for sale last week and have already
          gotten multiple offers and are deciding which offer is best. This
          saved me a lot of time and the agents really are effective!"
                date='A month ago in Tampa, FL.'
                source='See review on ShopperApproved'
              />

              <CustomerReviewCard
                name='Peggy C****'
                review='I live in Texas and was concerned about finding a realtor to
            sell a property out of state. Mr. Howard Jefferson did a great
            job from the very beginning of listing the property to the sale.
            He knew the market and offered great advice. I was very grateful
            for his integrity and knowledge.'
                date='A week ago in Austin, TX.'
                source='See review on ShopperApproved'
              />
            </div>
            <div
              className={`${styles["stories-section__btn-container"]} py-20`}
            >
              <Button text='View all Reviews' />
            </div>
          </div>
        </section>

        <BottomCTA />
        <Footer />
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  const sellersTransactions = [
    {
      price: "$1,200,000",
      special_tag: "",
      date: "11/30/2021",
      name: "Bryan Huff",
      city: "Leawood",
      state: "KS",
      house: "Leawood.jpg",
    },
    {
      price: "$1,198,000",
      special_tag: "",
      date: "1/19/2021",
      name: "Stacy Esser",
      city: "Cresskill",
      state: "NJ",
      house: "Wilson Dr, Cresskill.png",
    },
    {
      price: "$3,200,000",
      special_tag: "",
      date: " 2/02/2022",
      name: "Hedda Parashos",
      city: "San Diego",
      state: "CA",
      house: "Ocean Front Walk, San Diego, CA.png",
    },
    {
      price: "$1,000,000",
      special_tag: "Sold in 6 days",
      date: "7/28/2021  ",
      name: "Julia Runyan",
      city: "Gig Harbor",
      state: "WA",
      house: "Gig Harbor, WA.png",
    },
    {
      price: "$2,200,000",
      special_tag: "Sold in 6 days",
      date: " 8/20/2021",
      name: "Tom Ruch",
      city: " Bethany Beach ",
      state: "DE",
      house: "Bethany Beach, DE.webp",
    },
  ];
  return {
    props: { sellersTransactions }, // will be passed to the page component as props
  };
}

export default Sellers;
