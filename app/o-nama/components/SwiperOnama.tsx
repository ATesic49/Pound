// @ts-nocheck
"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../public/css/swiper.css";
import Godisnjica from "./Godisnjica";
import Korporativni from "./Korporativni";
import Punoletstvo from "./Punoletstvo";
import Rodjenje from "./Rodjenje";
import "swiper/css/pagination";
import Teen from "./Teen";
export default function SwiperOnama() {
  return (
    <div id="swiperONama">
      <Swiper
        className="swiper"
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        rewind
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
        <SwiperSlide
          className="swiperSlide
        "
        >
          <Teen />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
