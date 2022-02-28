import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//styles
import styles from "./agentCarousel.module.scss";

//components
import GoogleMaps from "../StyledGoogleMaps";
import AgentCard from "../AgentCard";

const MapCard = ({ bestAgents, mapsStyleArray, currentSlide }) => {
  return (
    <div className='bg-transparent h-full w-full webkit-rounded-full'>
      <div
        id='map_div'
        className='h-full w-full rounded-3xl sm:rounded-b-none lg:rounded-3xl overflow-hidden'
      >
        <GoogleMaps
          mapsStyleArray={mapsStyleArray}
          markers={bestAgents[currentSlide].sales}
        />
      </div>
    </div>
  );
};

const AgentCarousel = ({ bestAgents, mapsStyleArray }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const onThumbClick = (i) => {
    setCurrentSlide(i);
  };

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <>
      <div className={`${styles["agent-carousel"]} relative`}>
        <div
          className={`flex justify-start items-start ${styles["agent-carousel__map"]} `}
        >
          <MapCard
            mapsStyleArray={mapsStyleArray}
            bestAgents={bestAgents}
            currentSlide={currentSlide}
          />
        </div>
        <div
          className={` bottom-0 right-0 absolute sm:relative lg:absolute ${styles["agent-carousel__cards-carousel"]}`}
          style={{ backgroundColor: "transparent" }}
        >
          <Carousel
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            showArrows={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  className='control-arrow control-prev'
                  aria-label='previous slide / item'
                  type='button'
                  onClick={onClickHandler}
                ></button>
              )
            }
            useKeyboardArrows={true}
            swipeable={true}
            infiniteLoop={true}
            selectedItem={currentSlide}
            onChange={updateCurrentSlide}
          >
            {bestAgents.slice(0, 4).map((agent, i) => {
              return <AgentCard key={i} {...agent} />;
            })}
          </Carousel>
        </div>
        <div
          className={`${styles["agent-carousel__thumbs"]} absolute bottom-0 left-6`}
        >
          <div className='font-light text-slate-700 agent-controls-text'>
            <div className='inline font-bold '>
              {bestAgents[currentSlide].agent_count}+{" "}
            </div>
            Realtors®
            <br /> in {bestAgents[currentSlide].city} ,
            {bestAgents[currentSlide].state}
          </div>
          <div className='pt-4 flex'>
            {bestAgents.slice(0, 4).map((agent, i) => {
              return (
                <span
                  className={`h-full outline outline-2 rounded-full relative ${
                    styles["agent-carousel__thumbs-image-wrapper"]
                  } flex justify-center items-center ${
                    i !== 0 ? "-ml-2" : ""
                  } ${
                    currentSlide === i ? "outline-brand-blue" : "outline-white"
                  }`}
                  onClick={() => onThumbClick(i)}
                  key={i}
                  style={{ zIndex: 4 - i }}
                >
                  <Image
                    src={`/images/agents/${agent.name}.jpg`}
                    alt={agent.name}
                    layout='fill'
                    objectFit='cover'
                  />

                  {/* <div
                    className={`webkit-rounded-full rounded-full overflow-hidden absolute top-0 left-0 right-0 bottom-0 ${
                      currentSlide === i ? "bg-brand-blue" : "bg-white"
                    }`}
                  /> */}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentCarousel;
