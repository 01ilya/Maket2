import React, { Component } from 'react'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Proxy from './assets/Proxy';

interface SuccessItems {
    text1: string;
    text2: string;
    text3: string;
}

export default class BlogSlider extends Component {
    render() {
        const Success: SuccessItems[] = [{ text1: '22 June 2020', text2: 'Sed ut perspiciatis unde omnis at vero blanditils', text3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...' }, { text1: '22 June 2020', text2: 'Sed ut perspiciatis unde omnis at vero blanditils', text3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...' }, { text1: '22 June 2020', text2: 'Sed ut perspiciatis unde omnis at vero blanditils', text3: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti...' }];
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
                {Success.map(({ text1, text2, text3 }) => {
                    return (
                        <div className='flex pt-8 px-9 pb-12 flex-col items-start gap-5 bg-white rounded-md'>
                            <div className='text-grey'>{text1}</div>
                            <div className='sm:w-64 sm:gap-8'>
                                <h4>{text2}</h4>
                                <div className='text-grey pt-5'>{text3} </div>
                                <Proxy />
                            </div>
                        </div>
                    )
                })}
            </Slider >
        )
    }
}
