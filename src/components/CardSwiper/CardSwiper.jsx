import React, { useState, useRef } from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Wrap, SwiperSlideStyled, NavigationButton } from "./CardSwiper.style";
import "swiper/css";
import "swiper/css/navigation";

const CardSwiper = ({ children }) => {
  const swiperRef = useRef(null);
  const [slideProgress, setSlideProgress] = useState(0);

  const SlideChange = (swiper) => {
    setSlideProgress(swiper.progress);
  };

  return (
    <Wrap>
      <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={5}
        slidesPerGroup={4}
        spaceBetween={22}
        speed={800}
        ref={swiperRef}
        onSlideChange={SlideChange}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
      >
        {children?.map((child) => (
          <SwiperSlideStyled key={child.props.id}>{child}</SwiperSlideStyled>
        ))}
      </Swiper>
      <NavigationButton
        prev
        onClick={() => swiperRef.current.swiper.slidePrev()}
        disabled={slideProgress === 0}
      >
        <GrPrevious />
      </NavigationButton>
      <NavigationButton
        next
        onClick={() => swiperRef.current.swiper.slideNext()}
        disabled={slideProgress === 1}
      >
        <GrNext />
      </NavigationButton>
    </Wrap>
  );
};

export default CardSwiper;
