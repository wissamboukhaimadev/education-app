import { Button, Heading } from '@hope-ui/solid';
import type { Component } from 'solid-js';
import NavBar from '../../helper/global-components/NavBar';

const NotFound: Component = () => {
    return (
        <>
            <NavBar />
            <div class='flex flex-col justify-center items-center min-h-screen'>
                <Heading size='4xl'>404 Not Found </Heading>
                <Heading class='py-5' size='3xl'>Try To Learn New Path Instead?</Heading>
                <Button class='py-5' size='lg' colorScheme='accent'>Become Full Stack Developer </Button>
            </div>
        </>
    )
}

export default NotFound;