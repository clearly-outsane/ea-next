import React from "react";
import Image from "next/image";

//styles
import styles from "./smallProfile.module.scss";

const SmallProfile = ({
  fontColorClass = "text-white",
  name = "Jane Smith",
  city = "Tampa",
  state = "FL",
}) => {
  return (
    <div className={`${styles["small-profile"]}  flex items-center`}>
      <div
        className={`${styles["small-profile__pic"]} relative rounded-full overflow-hidden webkit-rounded-full`}
      >
        {/* <AgentImage name={name} className=' w-full h-full' /> */}
        <Image layout='fill' src={`/images/agents/${name}.jpg`} alt={name} />
      </div>
      <div className='flex flex-col pl-2 lg:pl-5'>
        <div
          className={`${styles["small-profile__name"]}  ${fontColorClass} font-bold`}
        >
          {name}
        </div>
        <div
          className={`${styles["small-profile__location"]} italic ${fontColorClass}`}
        >
          {city}, {state}
        </div>
      </div>
    </div>
  );
};

export default SmallProfile;
