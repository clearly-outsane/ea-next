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

// install Swiper modules
SwiperCore.use([Navigation]);

const Sellers = () => {
  const swiperRef = React.useRef(null);

  const CharacteristicsCard = ({ text }) => {
    return (
      <div
        className='characteristics-card py-8 px-10 flex items-center w-full'
        style={{ minHeight: 115 }}
      >
        <Image
          width={24}
          height={24}
          src='/svgs/green-tick.svg'
          alt='checkmark icon'
        />
        {/* <GreenTick /> */}
        <p className='mb-0 pl-6'>{text}</p>
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
              <div className='flex items-center gap-10'>
                <div
                  className={`${styles["why-section__info-card"]} flex flex-col points-safari-gap`}
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
                  className={`${styles["why-section__green-circle"]} bg-brand-green rounded-full flex items-center justify-center points-safari-gap`}
                >
                  <Image
                    width={28}
                    height={28}
                    src='/svgs/plus.svg'
                    alt='plus icon'
                  />
                </div>
                <div
                  className={`${styles["why-section__info-card"]} flex flex-col points-safari-gap`}
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

        <BottomCTA />
        <Footer />
      </main>
    </div>
  );
};

export default Sellers;
