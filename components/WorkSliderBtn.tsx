"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

type buttonProps = {
  containerStyles: string;
  btnStyles: string;
};

const WorkSliderBtn = ({
  containerStyles,
  btnStyles,
}: buttonProps) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button className={btnStyles} type="button" title="button" onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold />
      </button>
      <button className={btnStyles} type="button" title="button" onClick={() => swiper.slideNext()}>
        <PiCaretRightBold />
      </button>
    </div>
  );
};

export default WorkSliderBtn;
