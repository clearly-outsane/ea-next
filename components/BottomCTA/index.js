import React from "react";
import Image from "next/image";

//components
import Button from "../PrimaryButton";

//styles
import styles from "./bottomCTA.module.scss";

const BottomCTA = () => {
  return (
    <section className={`${styles["call-to-action"]} w-full px-8`}>
      <div
        className={`container mx-auto flex flex-col justify-center items-center content-center ${styles["call-to-action__content"]} relative`}
        // style={{ backgroundImage: `url(${blueroads})` }}
      >
        <Image
          src='/images/blue-roads.png'
          layout='fill'
          alt=''
          className={`${styles["call-to-action__bg-image"]}`}
        />
        <h2>Let’s Get Started</h2>
        <Button text='Find an Agent' variant={`button--white`} />
      </div>
    </section>
  );
};

export default BottomCTA;
