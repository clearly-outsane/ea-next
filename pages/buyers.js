import React, { useRef, useState, useEffect } from "react";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Head from "next/head";

//style
import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles/buyers.module.scss";

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

const Buyers = ({ buyersTransactions }) => {
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
            <div className=' flex flex-col basis-1/2 justify-center content-end items-end relative '>
              <div
                className={`${styles["hero-section__left"]} bg-light-blue-background mt-24 mb-36 h-full  absolute right-0 overflow-hidden`}
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
                        number='$21,693'
                        numberText='Less Than The Average Agent'
                        label='Last year our Agents purchased homes for'
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <InfoGraphic
                        number='$21,693'
                        numberText='Less Than The Average Agent'
                        label='Last year our Agents purchased homes for'
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
            <div className='hero-content flex flex-col basis-1/2 w-6/12 justify-center content-start items-end'>
              <div className='pr-12'>
                <div className='mb-7'>
                  <Image
                    src='/svgs/ea-icon.svg'
                    alt='Effective Agents Logo'
                    height={35}
                    width={35}
                  />
                </div>
                <h1 style={{ maxWidth: 495 }}>
                  Connect with Top Rated & Experienced Buyer&apos;s Agents!
                </h1>
                <h4 className='max-w-md'>
                  In today’s market having a skilled buyer’s agent can give you
                  the edge you need to find your dream home, despite difficult
                  market conditions.
                </h4>
                <div className='mt-4'>
                  <Button text='Buy a home' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles["why-section"]} w-full flex flex-col justify-center items-center pb-24 pt-8 px-8 fade-in-section`}
        >
          <div className='container mx-auto flex flex-col justify-center content-center '>
            <div style={{ maxWidth: 650 }} className='self-center'>
              <h2 className='text-center capitalize'>
                Why Should You Buy Your Home Using An Effective Agent?
              </h2>
            </div>
            <div className='points mt-16 self-center'>
              <div className='flex flex-col lg:flex-row items-center gap-10'>
                <div
                  className={`${styles["why-section__info-card"]} flex flex-col ${styles["why-section__safari-gap"]}`}
                >
                  <h2 className='capitalize'> Better Negotiation </h2>
                  <p>
                    Tactful and strategic negotiating skills can help reduce the
                    amount you pay when it comes time to close. Our matching
                    algorithm is able to improve transaction outcomes by
                    evaluating factors such as the agent&apos;s average listing
                    price vs. actual selling price as well as the agent&apos;s
                    overall transaction volume.
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
                  <h2 className='capitalize'> Local Market Expertise </h2>
                  <p>
                    Our agents will help you find your dream home at the best
                    price by identifying desirable or &quot;trending&quot;
                    areas, having a strong knowledge of housing inventory levels
                    and a keen awareness of market sentiment. They&apos;ll
                    likely have exclusive access to off-market deals and
                    representation is almost always free to you!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`${styles["transactions-section"]}  w-full flex justify-center items-center pb-24 pt-16 px-8 overflow-hidden`}
        >
          <div className='container mx-auto grid lg:flex justify-center items-center'>
            <div className='basis-1/3'>
              <div className='flex flex-col justify-between fade-in-section'>
                <h2 className='capitalize' style={{ maxWidth: 478 }}>
                  Qualified Agents Are Eager To Find You A Home
                </h2>
                <p>
                  You are ready to make, what is likely, the single largest
                  financial transaction of your life and now you need an
                  experienced real estate advisor to help you along your
                  journey. Let&apos;s Go.
                </p>
                <span style={{ width: 220 }}>
                  <Button text='Find an agent' />
                </span>
              </div>
            </div>
            <div className='basis-2/3 swiper-container pt-6 lg:pt-0'>
              <div
                className={`${styles["transactions-section__carousel"]} flex justify-end lg:ml-16 relative items-center pointer-events-auto`}
              >
                <div
                  className={`transactions-section__prev cursor-pointer mr-8`}
                >
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
                  {buyersTransactions.map((transaction, i) => {
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
                  className={`${styles["transactions-section__next-wrapper"]} absolute right-0 z-10 h-full flex items-center pr-10 pl-20 pointer-events-none`}
                >
                  <div
                    className={`${styles["transactions-section__next"]} transactions-section__next cursor-pointer pointer-events-auto`}
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
                </div>
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
                  Speak With A Home Buyer&apos;s Advocate About Finding The
                  Right Home For Your Budget
                </h2>
                <p style={{ maxWidth: 527 }}>
                  Our team of buyer&apos;s advocates are standing buy 7
                  days-a-week to help you connect with a capable, professional,
                  real estate agent. Most real estate markets are facing
                  inventory shortages post-codiv, hiring an experienced
                  buyer&apos;s agent has never been more important.
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
              Top buyer’s agents don&apos;t just sit around and wait for your
              dream home to hit the MLS. They&apos;re well connected, they have
              better access and know of potential listings before they even hit
              the market.
            </p>
            <div
              className={`${styles["characteristics-section__cards"]} pt-20 w-full grid grid-cols-3 gap-10`}
            >
              <div className='flex flex-col gap-8 pt-32'>
                <CharacteristicsCard text='Access to exclusive pre-market listings' />
                <CharacteristicsCard text='Possess Strong negotiating skills' />
                <CharacteristicsCard text='Act as a liaison between you and the seller’s agent' />
                <CharacteristicsCard text='Comfortable having tough talks on your behalf' />
              </div>
              <div className='flex flex-col gap-8 pt-16'>
                <CharacteristicsCard text='Advocating for you best interest' />
                <CharacteristicsCard text='Access to top rated home inspectors' />
                <CharacteristicsCard text='Possess a problem solver mentality' />
                <CharacteristicsCard text='They manage the paperwork' />
              </div>
              <div className='flex flex-col gap-8'>
                <CharacteristicsCard text='They focus on your needs rather that their commission' />
                <CharacteristicsCard text='Know where to get the best interest rate on a home loan' />
                <CharacteristicsCard text='Keep a strict timeline and are very organized' />
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
                name='Randy T****'
                review='This process was ridiculously easy. I provided my information, they provided two really great realtor options. The data provided relative to realtor proficiency helped us feel confident we were hiring a realtor that could match us with our forever home - and she did! We hope this is our last purchase, but would absolutely use the service again if in the market.'
                date='A week ago in Fresno, CA.'
                source='See review on ShopperApproved'
              />

              <CustomerReviewCard
                name='Peggy C****'
                review="This is an amazing platform. It showed me available agents and I simply clicked on 'make an appointment'. My inquiry brought me an outstanding, reputable agent that I have admired for years. Of course, the transaction has moved along smoothly with this efficient, professional individual. We couldn't be more pleased and it was the easiest search ever!"
                date='A week ago in Sarasota, FL.'
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
  const buyersTransactions = [
    {
      price: "$3,219,876",
      special_tag: "",
      date: "11/02/2021",
      name: "Vlatka Bathgate",
      city: "Orindam",
      state: "CA",
      house: "Orindam, CA.webp",
    },
    {
      price: " $2,900,000",
      special_tag: "",
      date: "8/23/21",
      name: "Annabel Taylor",
      city: "Hillsdale",
      state: "NY",
      house: "Hillsdale, NY.webp",
    },
    {
      price: "$1,200,000",
      special_tag: "",
      date: " 05/10/2021 ",
      name: "Mary Ellen Vanaken",
      city: "Alpharetta",
      state: "GA",
      house: "Ocean Front Walk, San Diego, CA.png",
    },
    {
      price: "$2,400,000",
      special_tag: "Sold in 6 days",
      date: "3/10/2021 ",
      name: "Karen Degney",
      city: "Reno",
      state: "NV",
      house: "Reno, NV.webp",
    },
  ];
  return {
    props: { buyersTransactions }, // will be passed to the page component as props
  };
}

export default Buyers;
