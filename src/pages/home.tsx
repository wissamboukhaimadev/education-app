import type { Component } from 'solid-js';
import { HomeComponent, RoadMapComponent, StoryComponent } from '../components/Home';
import NavBar from '../helper/global-components/NavBar';

const Home: Component = () => {
    return (
        <div >
            <NavBar />
            <HomeComponent />
            <RoadMapComponent />
            <StoryComponent />
        </div>
    )
}

export default Home;