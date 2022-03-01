import React from "react";
import Image from "next/image";
import Head from "next/head";

//styles
import styles from "../styles/whyItWorks.module.scss";

//components
import MobileHeader from "../components/MobileHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/PrimaryButton";
import AgentCard from "../components/AgentCard";
import InfoGraphic from "../components/InfoGraphic";
import SmallProfile from "../components/SmallProfile";
// import GoogleMaps from "../components/StyledGoogleMaps";

const WhyItWorks = ({ bestAgents, mapsStyleArray }) => {
  const DataCard = ({
    number,
    title,
    subtitle1,
    content1,
    subtitle2,
    content2,
  }) => {
    const LeftSide = () => {
      if (number === "01")
        return (
          <div
            className={`${styles["left-01"]} w-full h-full flex items-end ${styles["data-card__left"]} overflow-hidden relative webkit-rounded-full`}
          >
            <Image
              layout='fill'
              objectFit='cover'
              src='/images/stock/ladderInHouse.jpg'
              alt=''
              className={`${styles["left-01__bg-image"]}`}
            />

            <div
              className={`${styles["left-01__overlay"]}  absolute top-0 bottom-0 left-0 right-0 -z-10`}
            />
            <div
              className={`${styles["left-01__overlay-content"]}  w-full flex justify-between`}
            >
              <div className='p-6 lg:p-12 profile-container'>
                <SmallProfile
                  name='Julia Runyan'
                  city='Gig Harbor'
                  state='WA'
                />
              </div>
              <div className={`p-12 ${styles["left-01__bottom-content"]}`}>
                <div
                  className={`bg-white p-5 flex items-center ${styles["left-01__label-container"]}`}
                >
                  <div className={`${styles["left-01__label"]} pr-2`}>
                    Sold in <strong>6 days</strong>
                  </div>
                  <div>
                    <Image
                      width={24}
                      height={24}
                      src='/svgs/calender-icon.svg'
                      alt='calender icon'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      if (number === "02")
        return (
          <div
            className={`${styles["left-02"]} w-full h-full bg-light-blue-background ${styles["data-card__left"]} overflow-hidden  webkit-rounded-full`}
          >
            <InfoGraphic
              number='104%'
              numberText='Sold 4% Over Asking Price'
              showProfile={true}
              {...bestAgents[2]}
            />
          </div>
        );

      if (number === "03") {
        let images = [];
        for (let i = 1; i <= 9; i++) {
          images.push(
            <div
              className={`overflow-hidden webkit-rounded-full ${styles["left-03__image-container"]} relative`}
              key={i}
            >
              <Image
                layout='fill'
                objectFit='cover'
                src={`/images/stock/house-${i}.jpg`}
                alt=''
              />
            </div>
          );
        }
        return (
          <div
            className={`${styles["left-03"]}  w-full h-full grid grid-cols-3 gap-5`}
          >
            {images}
          </div>
        );
      }

      if (number === "04")
        return (
          <div
            className={`${styles["left-04"]}  w-full h-full ${styles["data-card__left"]} relative overflow-hidden webkit-rounded-full`}
          >
            <div className='w-full h-full'>
              {/* <GoogleMaps
                center={{ lat: 33.4484, lng: -112.074 }}
                mapsStyleArray={mapsStyleArray}
              /> */}
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/PhoenixMap.png'
                alt='calender icon'
              />
              <div
                className={`absolute top-0 bottom-0 left-0 right-0 ${styles["left-04__overlay"]} `}
              >
                <div
                  className={`${styles["left-04__map-stack"]} w-full h-full flex justify-between items-end`}
                >
                  <div
                    className={`p-12 ${styles["left-04__profile-container"]}`}
                  >
                    <SmallProfile name='Bruno Arapovic' />
                  </div>
                  <div className={`p-12 ${styles["left-04__bottom-content"]}`}>
                    <div
                      className={`bg-white p-5 flex items-center ${styles["left-04__label-container"]}`}
                    >
                      <div className={`${styles["left-04__label"]} pr-2`}>
                        Sold in <strong>47 days</strong>
                      </div>
                      <div>
                        <Image
                          width={24}
                          height={24}
                          src='/svgs/calender-icon.svg'
                          alt='calender icon'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      if (number === "05")
        return (
          <div
            className={` ${styles["left-05"]} w-full h-full ${styles["data-card__left"]} overflow-hidden `}
          >
            <div
              className={`${styles["left-05__grid"]} w-full h-full grid grid-cols-2 gap-5`}
            >
              <div
                style={{ borderRadius: 30 }}
                className='overflow-hidden webkit-rounded-full relative'
              >
                <Image
                  layout='fill'
                  objectFit='cover'
                  src={`/images/stock/house-${2}.jpg`}
                  alt=''
                />
              </div>
              <div
                style={{ borderRadius: 30 }}
                className='overflow-hidden bg-brand-blue flex justify-center items-center'
              >
                <div className='flex flex-col items-center'>
                  <div
                    className={`${styles["left-05__profile-wrapper"]} relative overflow-hidden rounded-full webkit-rounded-full`}
                  >
                    <Image
                      src={`/images/agents/Andy Peters.jpg`}
                      alt='andy peters pic'
                      layout='fill'
                    />
                  </div>
                  <div className='pt-2 lg:pt-6'>
                    <div
                      className={` text-white ${styles["left-05__profile-name"]} font-bold`}
                    >
                      Andy Peters
                    </div>
                    <div
                      className={` text-white ${styles["left-05__profile-location"]} italic text-center`}
                    >
                      Atlanta, GA
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ borderRadius: 30 }}
                className={`overflow-hidden ${styles["left-05__info"]} `}
              >
                <div className=' flex flex-col justify-center items-center h-full w-full'>
                  <div
                    className={`text-center text-white font-bold ${styles["left-05__top-text"]}`}
                  >
                    Specializes in home <br /> with a value between.
                  </div>
                  <div
                    className={`text-center text-white font-bold ${styles["left-05__number"]}  pt-2`}
                  >
                    $425k-$780k
                  </div>
                </div>
              </div>
              <div
                style={{ borderRadius: 30 }}
                className='overflow-hidden webkit-rounded-full relative'
              >
                <Image
                  layout='fill'
                  objectFit='cover'
                  src={`/images/stock/house-${6}.jpg`}
                  alt=''
                />
              </div>
            </div>
          </div>
        );

      if (number === "06")
        return (
          <div
            className={`${styles["left-06"]} w-full h-full ${styles["data-card__left"]} overflow-hidden relative webkit-rounded-full`}
          >
            <Image
              layout='fill'
              objectFit='cover'
              src={`/images/stock/guyOnLaptop.jpg`}
              alt=''
            />
          </div>
        );

      if (number === "07")
        return (
          <div
            className={`left-07 w-full h-full bg-light-blue-background ${styles["data-card__left"]} overflow-hidden webkit-rounded-full`}
          >
            <InfoGraphic
              number='190'
              numberText='Successful Transactions'
              showProfile={true}
              {...bestAgents[6]}
            />
          </div>
        );
      return <div>This shouldn&apos;t be blank</div>;
    };
    return (
      <div
        className={`${styles["data-card"]} w-full h-full flex flex-col lg:flex-row items-center`}
      >
        <div className='lg:basis-1/2 w-full h-full relative '>
          <LeftSide />
        </div>
        <div className='lg:basis-1/2 right pl-20 flex flex-col'>
          <div className={`${styles["data-card__number"]}  font-bold`}>
            {number}{" "}
          </div>
          <div className={`${styles["data-card__title"]} font-bold mt-5`}>
            {title}{" "}
          </div>
          <div
            className={`${styles["data-card__subtitle"]}  text-brand-green font-bold uppercase mt-12 mb-3`}
          >
            {subtitle1}
          </div>
          <p style={{ marginBottom: 0 }}>{content1}</p>
          <div
            className={`${styles["data-card__subtitle"]} text-brand-green font-bold uppercase pt-6 mb-3`}
          >
            {subtitle2}
          </div>
          <p>{content2}</p>
          <div style={{ maxWidth: 220 }}>
            <Button
              href='https://www.effectiveagents.com/sellers/?c1=a'
              text='Find an agent'
            />
          </div>
        </div>
      </div>
    );
  };

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
      <MobileHeader />
      <main>
        <section
          className={`${styles["hero-section"]} w-full h-screen flex justify-center content-center px-8 overflow-hidden`}
          style={{ minHeight: 820 }}
        >
          <div className='container mx-auto flex flex-row justify-center content-center'>
            <div
              className={`${styles["hero-section__left"]} flex flex-col lg:basis-1/2 justify-center content-start items-center lg:items-start`}
            >
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

        <section
          className={`${styles["data-section"]} w-full flex justify-center content-center px-8 lg:mt-32 relative overflow-hidden`}
        >
          <div
            className={`absolute top-0 left-0 right-0 ${styles["data-section__background-gradient"]} -z-10`}
          >
            <div className='top-0'>
              <Image
                src='/svgs/shape4.svg'
                layout='fill'
                objectPosition='center -350px'
                alt=''
              />
              {/* <Shape4 style={{ width: "105%" }} /> */}
            </div>
          </div>
          <div className='container mx-auto flex flex-row justify-center content-center'>
            <div className='flex flex-col items-center w-full '>
              <h1 className='mt-36'>The data we care about! </h1>
              <div
                className={`${styles["data-section__down-arrow"]}  mt-10 rounded-full bg-brand-green flex justify-center items-center`}
              >
                <Image
                  src='/svgs/arrow-down.svg'
                  width={24}
                  height={24}
                  alt='arrow down'
                />
              </div>
              <div
                className={`${styles["data-section__data-col"]}  mt-24 w-full flex flex-col items-center gap-32 mb-36`}
              >
                <DataCard
                  number='01'
                  title='Days On Market'
                  subtitle1='What is it?'
                  content1='Days on market (DOM) is the number of days from the date in which a property is listed for sale until the date when the seller accepts an offer on the property.'
                  subtitle2='Why it moves the needle.'
                  content2='Agents that get homes under contract quickly are motivated, they typically have a larger sphere of influence and are better connected than average agents.  These agents also tend to be more organized and effective at negotiating.'
                />
                <DataCard
                  number='02'
                  title='Sale-to-List Price Ratio'
                  subtitle1='What is it?'
                  content1='The sale-to-list price ratio is the final sale price divided by the last listing price for which the home was offered. '
                  subtitle2='Why it matters.'
                  content2='Top real estate agents that sell homes for more than “average” agents are keenly aware of local pricing trends…they are also excellent marketers that tend to emphasize providing high quality staging and photography.'
                />
                <DataCard
                  number='03'
                  title='Transaction Volume'
                  subtitle1='What is it?'
                  content1='Simply put, transaction volume is the number of transaction sides that an agent completes over a specified period of time.  We look at agent transaction volume over the last 12 months and over the agent’s lifetime.'
                  subtitle2='Why it will improve your transaction.'
                  content2='Being a good real estate agent doesn’t tend to come naturally.  Every transaction carries with it a unique set of barriers that the agent must overcome.  Agents that sell a lot of homes have overcome a tremendous number of transaction obstacles.'
                />
                <DataCard
                  number='04'
                  title='Geographic Competency'
                  subtitle1='What is it?'
                  content1='Successful Realtors® tend to focus on specific market areas. This is obvious when you consider how difficult it would be for an agent to sell homes that are not conveniently located to the where the agent resides.'
                  subtitle2='Why it’s relevant. '
                  content2='When we make a match it’s critical that the agent is experienced selling homes just like yours.  We go to great lengths to connect top agents to homeowners based on a variety of datapoints – but having a strong focus on the geographic dispersion of past sales is paramount.'
                />
                <DataCard
                  number='05'
                  title='Price Range Parity'
                  subtitle1='What is it?'
                  content1='When two assets are roughly equal in value they are said to have parity. '
                  subtitle2='Why it will improve your transaction.'
                  content2='The value of your home matters because many top performing agents tend to work within defined home value ranges.  An extreme example of why this is an important consideration: You wouldn’t hire a luxury agent that sells multi-million dollar homes to sell a property worth substantially less.  That transaction isn’t going to go well for anyone.'
                />

                <DataCard
                  number='06'
                  title='Gated Systems'
                  subtitle1='What is that?'
                  content1='While any agent can apply for consideration, only agents that meet our exacting requirements are connected with our clients.'
                  subtitle2='WHY IT MATTERS.'
                  content2='Our objective is to consistently improve transaction outcomes.  By staying true to our production thresholds and quality benchmarks we consistently outperform “average” real estate agents year after year.  Since we manually review so many qualitative attributes we are frequently able to rule out anomalies. As an example, agents that work for home builders often have what appear to be fantastic track records – the problem is that they are sitting in a sales office in a new neighborhood selling a standardized product.  An agent like this wouldn’t make it past our research team.'
                />
                <DataCard
                  number='07'
                  title='Success Rates'
                  subtitle1='What is that?'
                  content1='An agent’s on platform success rate is critical to ensuring that they get the job done for you.'
                  subtitle2='WHY IT MATTERS to you.'
                  content2='Lets be honest, you aren’t on this website for fun – you’re here for help.  We track how well our agents engage with our clients, how frequently they are able to help them buy and sell and how quickly they get the job done.  This ensures that you get a motivated agents that’s ready to make your housing dreams come true.'
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles["algorithm-section"]} w-full flex justify-center content-center px-8 mt-32 relative overflow-hidden`}
        >
          {/* <StaticImage
          style={{ position: "absolute" }} //this is to override styling in production build
          quality={90}
          className='absolute w-full top-0 bottom-0 left-0 right-0'
          alt=''
          src={"../assets/images/map-gray.jpg"}
        /> */}
          <Image
            src='/images/light-blue-roads.jpg'
            layout='fill'
            objectFit='cover'
            alt=''
          />
          <div className='blend-overlay container mx-auto flex flex-col items-center'>
            <div
              className={`${styles["algorithm-section__wrapper"]} relative flex flex-col justify-center w-full h-full my-36`}
            >
              <h2 className='capitalize'>Our algorithm</h2>
              <div
                className={`${styles["algorithm-section__content"]} w-full mt-5 flex items-stretch`}
              >
                <div
                  className={`p-10 flex flex-col bg-white ${styles["algorithm-section__left-content"]}`}
                >
                  <h5>Logic</h5>
                  <p>
                    Since 2009 we have actively worked to perfect our systems,
                    along the way we have learned a lot about what makes top
                    real estate agents outperform their peers. The data-points
                    and methodologies explained above are weighted, some get
                    more consideration than others. We are constantly testing
                    and tweaking so that our systems are optimized for the next
                    ten years – no matter the market conditions.
                  </p>
                  <div style={{ maxWidth: 220 }} className='mt-16'>
                    <Button
                      text='Find an agent'
                      href='https://www.effectiveagents.com/sellers/?c1=a'
                    />
                  </div>
                </div>
                <div
                  className={`bg-brand-blue  ${styles["algorithm-section__right-content"]} grow p-10 flex flex-col`}
                >
                  <h5>Results</h5>
                  <div>
                    <h2
                      className='font-normal text-white'
                      style={{ lineHeight: "160%" }}
                    >
                      In 2020, homeowners that used our service to sell their
                      homes beat the national average home sale price by
                    </h2>
                    <div
                      className={`w-full text-right ${styles["algorithm-section__large-number"]}  text-brand-green`}
                    >
                      $41,693
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
    {
      city: "San Antonio",
      state: "TX",
      name: "Zachariah Castillo",
      listings_sold: "190",
      average_day_on_market: "41",
      star_rating: "4.9",
      reviews: "113",
    },
  ];

  const mapsStyleArray = [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [
        {
          color: "#157395",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text",
      stylers: [
        {
          color: "#e0e0e0",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          color: "#3990b0",
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          color: "#25586a",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [
        {
          color: "#52aacd",
        },
      ],
    },
  ];

  return {
    props: { bestAgents, mapsStyleArray }, // will be passed to the page component as props
  };
}

export default WhyItWorks;
