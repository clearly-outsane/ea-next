import React from "react";
import Image from "next/image";

//styles
import styles from "./footer.module.scss";

//components
import Button from "../PrimaryButton";

const Footer = () => {
  return (
    <footer
      className={`${styles["footer"]} w-full flex justify-center content-center py-28 px-8 fade-in-section`}
    >
      <div className='flex flex-col divide-y-2 divide-gray-divide-color container mx-auto'>
        <div className='flex justify-between items-center pb-12'>
          <h2 className='mb-0'>Find an Effective Agent Near You</h2>
          <div>
            <Button text='Find an Agent' />
          </div>
        </div>
        <div className='py-10 '>
          <div className='grid lg:flex lg:flex-row justify-between footer-link-section'>
            <div
              className={`${styles["footer__heading"]} uppercase text-brand-green font-bold text-sm tracking-widest footer-links-block`}
              style={{ width: 148 }}
            >
              Popular cities
              <div className='flex tracking-normal flex-col font-normal capitalize text-slate-800 justify-between pt-8 gap-1'>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/ga/atlanta/'
                >
                  Atlanta
                </a>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/tx/austin/'
                >
                  Austin
                </a>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/ma/boston/'
                >
                  Boston
                </a>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/il/chicago/'
                >
                  Chicago
                </a>
                <a
                  className={`${styles["footer__link"]} lg:hidden`}
                  href='https://www.effectiveagents.com/ca/los-angeles/'
                >
                  Los Angeles
                </a>
                <a
                  className={`${styles["footer__link"]} lg:hidden`}
                  href='https://www.effectiveagents.com/fl/miami/'
                >
                  Miami
                </a>
              </div>
            </div>
            <div
              className={`${styles["footer__heading"]} uppercase text-brand-green font-bold text-sm tracking-widest footer-links-block hidden lg:block`}
              style={{ width: 148 }}
            >
              &nbsp;
              <div className='flex tracking-normal flex-col font-normal capitalize text-slate-800 justify-between pt-8 gap-1'>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/ca/los-angeles/'
                >
                  Los Angeles
                </a>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/fl/miami/'
                >
                  Miami
                </a>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/ny/new-york/'
                >
                  New York
                </a>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/tx/portland/'
                >
                  Portland
                </a>
              </div>
            </div>
            <div
              className='capitalize text-cyan-600  text-sm top-margin'
              style={{ width: 148 }}
            >
              View all cities
              <div className='flex tracking-normal flex-col font-normal text-normal text-slate-800 justify-between pt-8 gap-1'>
                <a
                  className={`${styles["footer__link"]}  lg:hidden`}
                  href='https://www.effectiveagents.com/ny/new-york/'
                >
                  New York
                </a>
                <a
                  className={`${styles["footer__link"]}  lg:hidden`}
                  href='https://www.effectiveagents.com/tx/portland/'
                >
                  Portland
                </a>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/ca/san-diego/'
                >
                  San Diego
                </a>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/ca/san-francisco/'
                >
                  San Francisco
                </a>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/fl/sarasota/'
                >
                  Sarasota
                </a>
                <a
                  className={`${styles["footer__link"]}`}
                  href='https://www.effectiveagents.com/wa/seattle/'
                >
                  Seattle
                </a>
              </div>
            </div>
            <div
              className={`${styles["footer__heading"]} uppercase text-brand-green font-bold text-sm tracking-widest footer-links-block top-margin`}
              style={{ width: 148 }}
            >
              General
              <div className='flex tracking-normal flex-col font-normal capitalize text-slate-800 justify-between pt-8 gap-1'>
                <a className={`${styles["footer__link"]}`} href='#'>
                  For sellers
                </a>
                <a className={`${styles["footer__link"]}`} href='#'>
                  For Buyers
                </a>
                <a className={`${styles["footer__link"]}`} href='#'>
                  Why it works
                </a>
                <a className={`${styles["footer__link"]}`} href='#'>
                  Resources
                </a>
              </div>
            </div>
            <div
              className={`${styles["footer__heading"]} uppercase text-brand-green font-bold text-sm tracking-widest footer-links-block top-margin`}
              style={{ width: 148 }}
            >
              About Us
              <div className='flex tracking-normal flex-col font-normal capitalize text-slate-800 justify-between pt-8 gap-1'>
                <a className={`${styles["footer__link"]}`} href='#'>
                  Company
                </a>
                <a className={`${styles["footer__link"]}`} href='#'>
                  Stories
                </a>
                <a className={`${styles["footer__link"]}`} href='#'>
                  Press
                </a>
                <a className={`${styles["footer__link"]}`} href='#'>
                  Contact Us
                </a>
              </div>
            </div>
            <div
              className={`${styles["footer__heading"]} uppercase text-brand-green font-bold text-sm tracking-widest footer-links-block top-margin`}
              style={{ width: 148 }}
            >
              For Agents
              <div className='flex tracking-normal flex-col font-normal capitalize text-slate-800 justify-between pt-8 gap-1'>
                <a className={`${styles["footer__link"]}`} href='#'>
                  Agents Portal
                </a>
                <a className={`${styles["footer__link"]}`} href='#'>
                  For Agents
                </a>
                <a className={`${styles["footer__link"]}`} href='#'>
                  Becoming an agent
                </a>
              </div>
            </div>
            <div
              className={`${styles["footer__heading"]} uppercase text-brand-green font-bold text-sm tracking-widest footer-links-block top-margin lg:hidden`}
              style={{ width: 148 }}
            >
              <div>
                {/* <Facebook className='inline' style={{ marginRight: 12 }} />
                <Twitter className='inline' style={{ marginRight: 12 }} />
                <Linkedin className='inline' /> */}
              </div>
              <div className='flex tracking-normal flex-col font-normal capitalize text-slate-800 justify-between pt-8 gap-1'>
                <div className={`${styles["footer__link"]}`}>Terms </div>
                <div className={`${styles["footer__link"]}`}>Privacy</div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom pt-10 flex justify-between'>
          <div
            className='grid grid-flow-col auto-cols-auto items-center text-slate-600'
            style={{ gap: 30 }}
          >
            {/* <EaIcon className='inline' /> */}
            <Image
              src='/svgs/ea-icon-green.svg'
              width={32}
              alt='effective agents icon'
              height={32}
            />
            <div className=' italic '>©2021, All rights Reserved</div>
            <div className='hidden lg:block'>Terms | Privacy</div>
          </div>
          <div className='hidden lg:flex lg:gap-8 '>
            <Image
              src='/svgs/socials/Facebook.svg'
              width={12}
              height={12}
              alt='facebook icon'
            />
            <Image
              src='/svgs/socials/Twitter.svg'
              width={22}
              height={22}
              alt='Twitter icon'
            />
            <Image
              src='/svgs/socials/Linkedin.svg'
              width={20}
              height={20}
              alt='Linkedin icon'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
