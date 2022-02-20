import Head from "next/head";
import Image from "next/image";

//components
import Header from "../components/Header";
import FindAgentForm from "../components/FindAgentForm";

//stlyes
import styles from "../styles/home.module.scss";

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
          <div className={`${styles["hero-section__bg-image"]}`}>
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
      </main>
    </div>
  );
}
