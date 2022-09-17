import type { Component } from 'solid-js';
import { HomeComponent, RoadMapComponent, StoryComponent } from '../components/Home';

const Home: Component = () => {
    return (
        <div >

            <HomeComponent />
            <RoadMapComponent />
            <StoryComponent />
        </div>
    )
}

export default Home;