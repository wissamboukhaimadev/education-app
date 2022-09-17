import type { Component } from 'solid-js';
import "solid-slider/slider.css";
import { For } from 'solid-js'
import { Slider, createSlider, SliderProvider, SliderButton } from "solid-slider";

import autoplay from "solid-slider/plugins/autoplay";
import RoadMapSlides from './RoadMapSlides';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'solid-icons/ai'

const RoadMapSlider: Component = () => {
    return (
        <div class='py-10'>
            <SliderProvider>
                <Slider options={{ loop: true, mode: 'snap' }} plugins={[autoplay(2000, { pauseOnDrag: false })]}>
                    <For each={Array(5).fill("")}>
                        {(_, __) => <RoadMapSlides />}
                    </For>
                </Slider>
                {/* <div class='flex justify-evenly pt-5'>
                    <SliderButton prev> <AiOutlineArrowLeft size={40} color="#ffffff" /></SliderButton>
                    <SliderButton next><AiOutlineArrowRight size={40} color="#ffffff" /></SliderButton>
                </div> */}
            </SliderProvider>
        </div>

    )
}

export default RoadMapSlider;