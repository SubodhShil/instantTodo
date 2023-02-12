import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const ML5 = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        anime.timeline({ loop: true })
            .add({
                targets: titleRef.current.querySelectorAll('.line'),
                opacity: [0.5, 1],
                scaleX: [0, 1],
                easing: "easeInOutExpo",
                duration: 700
            }).add({
                targets: titleRef.current.querySelectorAll('.line'),
                duration: 600,
                easing: "easeOutExpo",
                translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
            }).add({
                targets: titleRef.current.querySelector('.ampersand'),
                opacity: [0, 1],
                scaleY: [0.5, 1],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
            }).add({
                targets: titleRef.current.querySelector('.letters-left'),
                opacity: [0, 1],
                translateX: ["0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=300'
            }).add({
                targets: titleRef.current.querySelector('.letters-right'),
                opacity: [0, 1],
                translateX: ["-0.5em", 0],
                easing: "easeOutExpo",
                duration: 600,
                offset: '-=600'
            }).add({
                targets: titleRef.current,
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            });
    }, []);

    return (
        <h1 className="ml5" ref={titleRef}>
            <span className="text-wrapper">
                <span className="line line1"></span>
                <h1 className="text-center letters letters-left text-4xl font-extrabold font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600 mb-2">  Sign In </h1>
                <h1 className="text-center letters ampersand text-4xl font-extrabold font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600 mb-2">&amp; </h1>
                <h1 className="text-center letters letters-right text-4xl font-extrabold font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-br from-orange-400 to-red-600"> Make It Happen</h1>
                <span className="line line2 text-3xl text-white"></span>
            </span>
        </h1>
    );
};

export default ML5;
