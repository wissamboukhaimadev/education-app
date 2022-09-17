import { Badge, Box, Heading, Text } from '@hope-ui/solid';
import type { Component } from 'solid-js';
import { For } from 'solid-js'

import demo_image from '../../../../assets/image.jfif'

const RoadMapSlides: Component = () => {
    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
    }
    return (
        <div>
            <Box class='flex justify-around -rotate-6 m-10 hover:rotate-0 cursor-pointer transition-all'>
                <div class=' p-5 rounded-xl shadow-lg bg-gradient-to-r from-purple-600 to-teal-700 '>
                    <div class='flex justify-center '><Box as="img" src={demo_image} alt='wissam' /></div>
                    <Box p="$6" >
                        <Text class='text-center'>5h Interactive</Text>
                        <Box mt="$1" fontWeight="$semibold" as="h4" lineHeight="$tight" noOfLines={1}>
                            <Heading size='xl'>Learn React Fundamentals</Heading>
                        </Box>
                    </Box>
                </div>
            </Box>
        </div>
    )
}

export default RoadMapSlides;