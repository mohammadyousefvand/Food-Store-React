import React from "react";
import TitleSection from "../TitleSection/TitleSection";
import Card from "./Card/Card";
import "./Product.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

export default function Product() {
  return (
    <main className="section-two" id="product">
      <TitleSection title="محبوب ترین غذاها" />
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 5000 }}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          450: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="cards swiper">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <Card image="images/product-1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Card image="images/product-5.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Card image="images/product-4.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Card image="images/product-6.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Card image="images/product-3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <Card image="images/product-2.png" />
            </SwiperSlide>
          </div>
        </div>
      </Swiper>
    </main>
  );
}
