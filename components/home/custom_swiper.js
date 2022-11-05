import React, { useRef, useEffect } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

export default function CustomSwiper({ props }) {
    const autoPlayPeriod = 10000;
    const swiper = useRef();
    const intervalRef = useRef(0);

    const nextSlide = () => {
        if (swiper.current !== null) {
            swiper.current.slideNext(500);
        }
    }
    const prevSlide = () => {
        if (swiper.current !== null) {
            swiper.current.slidePrev(500);
        }
    }

    useEffect(() => {
        swiper.current = document.querySelector(".swiper").swiper;
        intervalRef.current = setInterval(nextSlide, autoPlayPeriod);

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [])

    return (
        <div className="h-56 w-full flex relative">
            <Swiper
                spaceBetween={50}
                loop={true}
                slidesPerView={1}
                onSlideChange={() => {
                    console.log("Slide Changed!!")
                }}
                onSwiper={(swiper) => {
                    console.log("swiper")
                }}>
                {/* Slides Here */}
                {props.map(datum => (
                    <SwiperSlide className="flex flex-row justify-center" key={datum.title}>
                        <div className="w-[70%] h-full border-8 border-custom-1 px-3 py-1">
                            <div className="font-bold text-lg">
                                {datum.title}
                            </div>
                            <div className="text-right">
                                {datum.from}
                            </div>
                            <div className="pt-2">
                                {datum.content}
                            </div>
                        </div>
                    </SwiperSlide>

                ))}
            </Swiper>
            <div className="absolute left-0 h-full flex flex-col justify-center z-50">
                <button onClick={() => {
                    prevSlide();
                }}>Previous<br />Slide</button>
            </div>
            <div className="absolute right-0 h-full flex flex-col justify-center z-50">
                <button onClick={() => {
                    nextSlide();
                }}>Next<br />Slide</button>
            </div>
        </div>
    )
}

//export const CustomSlide = ({props})=>{
//    return(
//            <React.Fragment>
//
//            </React.Fragment>
//    )
//}