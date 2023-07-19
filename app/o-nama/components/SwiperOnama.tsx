"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../public/css/swiper.css";
import Godisnjica from "./Godisnjica";
import Korporativni from "./Korporativni";
import Punoletstvo from "./Punoletstvo";
import Rodjenje from "./Rodjenje";
export default function SwiperOnama() {
  return (
    <div id="swiperONama">
      <Swiper
        className="swiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide
          className="swiperSlide
        "
        >
          <Punoletstvo />
        </SwiperSlide>
        <SwiperSlide
          className="swiperSlide
        "
        >
          <Godisnjica />
        </SwiperSlide>{" "}
        <SwiperSlide
          className="swiperSlide
        "
        >
          <Rodjenje />
        </SwiperSlide>{" "}
        <SwiperSlide
          className="swiperSlide
        "
        >
          <Korporativni />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
