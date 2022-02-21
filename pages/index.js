import Head from "next/head";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";

//components
import Header from "../components/Header";
import FindAgentForm from "../components/FindAgentForm";

//stlyes
import styles from "../styles/home.module.scss";
import Button from "../components/PrimaryButton";

export default function Home() {
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
          className={`${styles["hero-section"]} w-full h-screen flex justify-center content-center px-5 lg:px-8  `}
        >
          <div className={`bg-image overflow-hidden`}>
            <Image
              alt=''
              src='/svgs/house-bg.svg'
              layout='fill'
              objectFit='cover'
              objectPosition='center -320px'
              // quality={100}
            />
          </div>
          <div className='container mx-auto flex flex-row justify-center content-center'>
            <div
              className={`${styles["hero-section__content"]} flex flex-col basis-1/2 justify-center content-start items-start`}
            >
              <div className='mb-8'>
                <Image
                  src='/svgs/ea-icon.svg'
                  alt='Effective Agents Logo'
                  height={35}
                  width={35}
                />
              </div>

              <h1>Find The Perfect Agent Based On Their Actual Performance.</h1>
              <h4 className='hidden lg:block' style={{ maxWidth: 572 }}>
                Our algorithm analyzes millions of real estate transactions and
                reviews to find top Realtors<sup>®</sup> and Real Estate Agents
                near you.
              </h4>
            </div>

            <div className='flex flex-col basis-1/2 justify-center lg:content-end items-center lg:items-end '>
              <FindAgentForm />
            </div>
          </div>
        </section>

        <section
          className={`${styles["get-matched-section"]} w-full flex justify-center px-5 lg:px-8 h-screen`}
        >
          <div className='container mx-auto flex justify-center '>
            <div
              className={`flex flex-col basis-1/2 justify-center items-start `}
            >
              <div className={`${styles["get-matched-section__left-content"]}`}>
                <h2>
                  Get Deep Performance Insights On Top Real Estate Agents Near
                  You
                </h2>
                <p>
                  Top real estate agents sell homes faster and for more money.
                  We’ve analyzed top agents across the US so you can compare the
                  best real estate agents near you using metrics that matter;
                  how well they sell homes like yours.
                  <br />
                  <br />
                  Get free, objective, performance-based recommendations for top
                  real estate agents in your neighborhood.
                </p>
                <Button text='Get Matched' />
              </div>
            </div>
            <div
              className={`${styles["get-matched-section__map-wrapper"]} flex flex-col basis-1/2 justify-center content-center lg:items-end items-center`}
            >
              agent carousel
            </div>
          </div>
        </section>

        <section className={`${styles["speak-section"]} flex `}>
          <div className={`${styles["speak-section__left"]}`}>
            <div>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/call-us-1.jpg'
                alt=''
              />
            </div>
            <div>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/call-us-2.jpg'
                alt=''
              />
            </div>
          </div>

          <div
            className={`${styles["speak-section__middle"]} flex justify-center align-center content-center relative`}
          >
            <div>
              <div>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/images/kelly.jpg'
                  alt=''
                />
              </div>
              <a
                href='tel:855-472-9275'
                className={`${styles["speak-section__call-now"]}`}
              >
                <p>
                  <b>Kelly</b> is ready!
                </p>
                <div>CALL NOW</div>
              </a>
            </div>
            <div className='flex flex-col justify-center align-start relative overflow-hidden pointer-events-none'>
              <div className={`bg-image `}>
                <Image
                  layout='fill'
                  objectFit='cover'
                  src='/images/light-blue-roads.jpg'
                  alt=''
                />
              </div>
              <h2>Speak About Your Transaction With A Customer Advocate</h2>
              <p>
                Whenever you’re ready we are on the line to answer your
                questions, walk you through your options, and help you make more
                informed decisions about selling or buying a home.
              </p>
              <a href='tel:855-472-9275' className='pointer-events-auto'>
                Call Now (855) 472-9275
              </a>
            </div>
          </div>

          <div className={`${styles["speak-section__right"]} relative`}>
            <div>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/call-us-3.jpg'
                alt='Call us image'
              />
            </div>
            <div>
              <Image
                layout='fill'
                objectFit='cover'
                src='/images/call-us-4.jpg'
                alt='Call us image'
              />
            </div>
          </div>
        </section>

        <section className={`${styles["numbers-section"]} w-full relative`}>
          <Image
            objectPosition='bottom'
            layout='fill'
            src='/svgs/house-bg-2.svg'
            alt=''
            className={`${styles["numbers-section__bg-image"]}`}
          />

          <div className='px-5 lg:px-8'>
            <div
              className={`container mx-auto flex flex-row justify-center content-center ${styles["numbers-section__top-content"]} `}
            >
              <div className='flex flex-col basis-1/2 justify-center content-start items-start'>
                <h2>
                  The Number’s Speak
                  <br /> For Themselves
                </h2>
              </div>

              <div className='flex flex-col basis-1/2 justify-center content-start items-start'>
                <p>
                  For over a decade, EffectiveAgents has helped buyers and
                  sellers like you connect with incredible real estate agents
                  that are capable of producing outstanding results.
                </p>
              </div>
            </div>

            <div className='container mx-auto grid grid-cols-3 lg:divide-x-2 divide-light-blue-divide'>
              <div className='flex flex-col justify-center content-start items-center lg:items-start'>
                <InView triggerOnce>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      {inView ? (
                        <CountUp
                          className={`${styles["numbers-section__stat"]}`}
                          start={100000}
                          end={172700}
                          suffix='+'
                          useEasing={true}
                        />
                      ) : null}
                    </div>
                  )}
                </InView>
                <h4>Homes Sold</h4>
              </div>

              <div className='flex justify-center content-start items-center'>
                <div className='flex flex-col' style={{ minWidth: 276 }}>
                  <InView triggerOnce>
                    {({ inView, ref, entry }) => (
                      <div ref={ref}>
                        {inView ? (
                          <CountUp
                            className={`${styles["numbers-section__stat"]}`}
                            start={800000}
                            end={872700}
                            suffix='+'
                            useEasing={true}
                          />
                        ) : null}
                      </div>
                    )}
                  </InView>
                  <h4>Customer’s Matched</h4>
                </div>
              </div>

              <div className='flex flex-col justify-center content-start items-end'>
                <InView triggerOnce>
                  {({ inView, ref, entry }) => (
                    <div ref={ref}>
                      {inView ? (
                        <CountUp
                          className={`${styles["numbers-section__stat"]}`}
                          start={1000}
                          end={1186}
                          suffix='+'
                          useEasing={true}
                        />
                      ) : null}
                    </div>
                  )}
                </InView>

                <h4>Positive Reviews</h4>
              </div>
            </div>

            <div
              className={`container mx-auto flex flex-col justify-around items-center ${styles["numbers-section__bottom-content"]}`}
            >
              <h2>Find The Perfect Agent For Your Transaction.</h2>
              <Button text='Find an Agent' />
            </div>
          </div>
        </section>

        <section> hi</section>
      </main>
    </div>
  );
}
