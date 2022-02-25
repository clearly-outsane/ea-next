import React from "react";
import Image from "next/image";
import Head from "next/head";

//styles
import styles from "../styles/whyItWorks.module.scss";

//components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/PrimaryButton";
import AgentCard from "../components/AgentCard";

const WhyItWorks = ({ bestAgents }) => {
  return (
    <div>
      <Head>
        <title>
          Effective Agents | Why it works |Find Top Realtors Near you{" "}
        </title>
        <meta
          name='description'
          content='Find Top Realtors Near you | Based on 2021 Sales data'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Header />
      <main>
        <section
          className={`${styles["hero-section"]} w-full h-screen flex justify-center content-center px-5 lg:px-8 overflow-hidden`}
          style={{ minHeight: 820 }}
        >
          <div className='container mx-auto flex flex-row justify-center content-center'>
            <div className='hero-content flex flex-col basis-1/2 justify-center content-start items-start'>
              <div className='pb-6'>
                <Image
                  src='/svgs/ea-icon.svg'
                  alt='Effective Agents Logo'
                  height={35}
                  width={35}
                />
              </div>
              <h1>
                It starts <br /> with data!
              </h1>
              <h4 style={{ maxWidth: 495, marginBottom: 30 }}>
                For over a decade we have collected performance data on over 1.5
                million Realtors® and commercial real estate agents. <br />
                <br /> In 2020, sellers that used our service to sell their
                homes beat the national average home sale price by $41,693.
              </h4>
              <Button
                text='Sell my home'
                href='https://www.effectiveagents.com/sellers/?c1=a'
              />
            </div>

            <div
              className={` ${styles["hero-section__stats-content"]} flex flex-col basis-1/2 justify-center content-end items-end relative`}
            >
              <div
                className={`mt-16 mb-32 h-full ${styles["hero-section__right"]} absolute left-0`}
              >
                <div className=' w-full h-full relative flex items-center '>
                  <div
                    className={` ${styles["hero-section__right-container"]}  w-full relative `}
                  >
                    <Image
                      objectFit='cover'
                      layout='fill'
                      src='/images/stock/laptop.jpg'
                      alt='bg-image'
                      className={`${styles["hero-section__bg-image"]}`}
                    />
                    <div
                      className={`${styles["hero-section__overlay"]} h-full w-full absolute`}
                    />
                    <div
                      className={`${styles["hero-section__agent-card-container"]} flex items-stretch gap-8 absolute bottom-0 left-0`}
                    >
                      <div className='self-end'>
                        <AgentCard {...bestAgents[3]} showButton={false} />
                      </div>
                      <div className='mb-20 self-end'>
                        <AgentCard {...bestAgents[4]} showButton={false} />
                      </div>
                      <div style={{ marginBottom: 160 }}>
                        <AgentCard {...bestAgents[5]} showButton={false} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps(context) {
  const bestAgents = [
    {
      name: "Jason Strattom",
      state: "IL",
      city: "Chicago",
      listings_sold: "170",
      average_day_on_market: "45",
      star_rating: "5",
      reviews: "185",
      sales: [
        {
          id: "10102967",
          lat: "41.914191",
          lng: "-87.686433",
          represented: "Seller",
          price: "445000",
        },
        {
          id: "10102969",
          lat: "41.880043",
          lng: "-87.649307",
          represented: "Seller",
          price: "800000",
        },
        {
          id: "10102968",
          lat: "41.906909",
          lng: "-87.676034",
          represented: "Seller",
          price: "1093000",
        },
      ],
    },
    {
      name: "Amanda Lefebvre",
      city: "Houston",
      state: "TX",
      listings_sold: "6",
      average_day_on_market: "45",
      star_rating: "5",
      reviews: "16",
      sales: [
        {
          id: "10961598",
          lat: "29.921012",
          lng: "-95.589601",
          represented: "Seller",
          price: "0",
        },
        {
          id: "10961601",
          lat: "29.916248",
          lng: "-95.565898",
          represented: "Buyer",
          price: "0",
        },
        {
          id: "10758934",
          lat: "29.864625",
          lng: "-95.590462",
          represented: "Seller",
          price: "0",
        },
      ],
    },
    {
      name: "Brad Korb",
      city: "Los Angeles",
      state: "CA",
      listings_sold: "209",
      average_day_on_market: "31",
      star_rating: "5",
      reviews: "814",
      sales: [
        {
          id: "9996622",
          lat: "34.19846",
          lng: "-118.49398",
          represented: "Seller",
          price: "474000",
        },
        {
          id: "9996632",
          lat: "34.053075",
          lng: "-118.266088",
          represented: "Seller",
          price: "560000",
        },
        {
          id: "9996635",
          lat: "34.118876",
          lng: "-118.260865",
          represented: "Both",
          price: "500000",
        },
      ],
    },
    {
      name: "Tom Baron",
      city: "New York",
      state: "NY",
      listings_sold: "6",
      average_day_on_market: "45",
      star_rating: "5",
      reviews: "3",
      sales: [
        {
          id: "11370565",
          lat: "40.781365",
          lng: "-73.951866",
          represented: "Buyer",
          price: "750000",
        },
        {
          id: "11370566",
          lat: "40.747833",
          lng: "-73.971131",
          represented: "Buyer",
          price: "585000",
        },
        {
          id: "11370567",
          lat: "40.723828",
          lng: "-73.989034",
          represented: "Buyer",
          price: "2530000",
        },
      ],
    },
    {
      city: "Las Vegas",
      state: "NV",
      name: "William (Billy) Alt",
      listings_sold: "153",
      average_day_on_market: "43",
      star_rating: "5",
      reviews: "188",
    },
    {
      city: "Atlanta",
      state: "GA",
      name: "Andy Peters",
      listings_sold: "118",
      average_day_on_market: "4",
      star_rating: "5",
      reviews: "348",
    },
  ];

  return {
    props: { bestAgents }, // will be passed to the page component as props
  };
}

export default WhyItWorks;
