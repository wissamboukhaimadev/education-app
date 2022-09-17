import { Button, Heading } from '@hope-ui/solid';
import type { Component } from 'solid-js';
import { RiMapRoadMapFill } from 'solid-icons/ri'
import TypingEffect from '../../../../library/TypingEffect';
import RoadMapSlider from './RoadMapSlider';

const RoadMap: Component = () => {

    const keywords = ['WEB DEV', 'MOBILE DEV', 'DESKTOP DEV', 'INFRASTRUCTURE ENGENERING', 'DEVOPS']
    return (
        <div class='py-12 px-10  min-h-screen'>
            <div class='flex justify-center pb-5 '><RiMapRoadMapFill size={40} color="#ffffff" class='hover:text-purple-500' /></div>
            <Heading size='2xl' class='text-center font-extrabold'>
                All Roadmaps For Learning Is Available For Free
            </Heading>
            <div class='flex justify-center'><TypingEffect speed={2000} texts={keywords} textname='Roadmaps For' /></div>
            <div class='rounded-full flex justify-center pt-5'><Button colorScheme="danger" size='lg' >Learn more</Button></div>


            <RoadMapSlider />
        </div>
    )
}

export default RoadMap;