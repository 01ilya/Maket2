import React, { Component } from 'react'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface AdvantagesItems {
    img: string;
    text1: string;
    text2: string;
}

export default class AdvantagesCarusel extends Component {
    render() {
        const OurAdvantages: AdvantagesItems[] = [{ img: './images/icon1.svg', text1: 'Machine learning', text2: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.' }, { img: './images/icon2.svg', text1: 'Embed analytics', text2: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.' }, { img: './images/icon3.svg', text1: 'Access control', text2: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.' }];
        const settings = {
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
            <Slider {...settings}>
                {OurAdvantages.map(({ text1, text2, img }) => {
                    return (
                        <div className='flex  px-9 py-12 flex-col items-start gap-8 bg-white rounded-md  sm:items-start'>
                            <img src={img}></img>
                            <div className='sm:flex sm:flex-col  sm:justify-center sm:items-start sm:w-64 sm:gap-8'>
                                <h4 className='text-black Headline_4_ExtraBold'>{text1}</h4>
                                <div className='Paragraph_2_Regular text-grey'>{text2}</div>
                            </div>
                        </div>
                    )
                })}
            </Slider >
        )
    }
}
