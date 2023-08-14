import React, { Component } from 'react'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class FindSlider extends Component {
    render() {
        const settings = {
            arrows: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        };
        return (
            <div className='px-7'>
                <Slider {...settings}>

                    <div><img src="./images/hed1.svg" className='sm:w-full sm:h-full' /></div>
                    <div> <img src="./images/hed2.svg" className='sm:w-full sm:h-full ' /></div>
                    <div><img src="./images/hed3.svg" className='sm:w-full sm:h-full ' /></div>
                    <div><img src="./images/hed4.svg" className='sm:w-full sm:h-full ' /></div>
                    <div><img src="./images/hed1.svg" className='sm:w-full sm:h-full' /></div>
                    <div><img src="./images/hed5.svg" className='sm:w-full sm:h-full' /></div>
                    <div><img src="./images/hed6.svg" className='sm:w-full sm:h-full' /></div>

                </Slider >
            </div >

        )
    }
}
