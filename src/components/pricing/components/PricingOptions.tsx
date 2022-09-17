import { Box, Button, Heading, Text } from '@hope-ui/solid';
import type { Component } from 'solid-js';

const PricingOptions: Component = () => {
    return (
        <div >
            <Box class='bg-gray-800 py-10  shadow-lg shadow-gray-700 rounded-2xl hover:scale-110 transition-all'>
                <Heading size='3xl' class='text-center'> Starter </Heading>
                <Heading size='5xl' class='text-center py-10'> 19$  <span class='text-xl' >/mo</span> </Heading>
                <div class='flex justify-center '> <Button colorScheme='warning'>Subscribe & Start Learning</Button></div>
            </Box>
        </div>
    )
}

export default PricingOptions;