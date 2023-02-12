import React, { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const ML4 = () => {
    useEffect(() => {
        const ml4 = {};
        ml4.opacityIn = [0, 1];
        ml4.scaleIn = [0.2, 1];
        ml4.scaleOut = 3;
        ml4.durationIn = 800;
        ml4.durationOut = 600;
        ml4.delay = 500;

        anime.timeline({ loop: true })
            .add({
                targets: '.ml4 .letters-1',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
            }).add({
                targets: '.ml4 .letters-1',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
            }).add({
                targets: '.ml4 .letters-2',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
            }).add({
                targets: '.ml4 .letters-2',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
            }).add({
                targets: '.ml4 .letters-3',
                opacity: ml4.opacityIn,
                scale: ml4.scaleIn,
                duration: ml4.durationIn
            }).add({
                targets: '.ml4 .letters-3',
                opacity: 0,
                scale: ml4.scaleOut,
                duration: ml4.durationOut,
                easing: "easeInExpo",
                delay: ml4.delay
            }).add({
                targets: '.ml4',
                opacity: 0,
                duration: 500,
                delay: 500
            });
    }, []);

    return (
        <h1 className="ml4">
            <span className="letters letters-1 font-bold text-4xl text-white font-['Poppins']">Login </span>
            <span className="letters letters-2 font-bold text-4xl text-white font-['Poppins']">& Get</span>
            <span className="letters letters-3 font-bold text-4xl text-white font-['Poppins']"> Started</span>
        </h1>
    );
}

export default ML4;
