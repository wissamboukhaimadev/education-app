import { Button, Heading } from '@hope-ui/solid';
import type { Component } from 'solid-js';
import './Home.css'

const Home: Component = () => {
    return (
        <div class='flex justify-around items-center Home__Banner'>
            <div class='right__side'>
                <Heading class='py-5 toggle__center' size='3xl'>Learn New Skill Today</Heading>
                <Heading size='3xl' class='py-2 toggle__center'>Build projects, practice and learn  </Heading>
                <Heading size='3xl' class='toggle__center'>to code from scratch </Heading>

                <div class='toggle__center'><Button class='mt-5' size='lg' colorScheme='accent'>Get Started </Button></div>
            </div>
            <div class='left__side bg-green-400 items-center mt-10' />
        </div>
    )
}

export default Home;