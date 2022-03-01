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
          {/* Really stupid hack specifically for Zachariah lol */}
          {name.split(" ")[0].length > 8
            ? name.split(" ")[0] +
              " " +
              name.split(" ")[1].substring(0, 1) +
              "."
            : name}
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
