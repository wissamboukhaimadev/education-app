import type { Component } from 'solid-js';
import { TbWorld } from 'solid-icons/tb'
import { Button, Heading, Text } from '@hope-ui/solid';

const Story: Component = () => {

    return (
        <div class='py-10 px-10 min-h-screen'>
            <TbWorld size={50} class='bg-purple-600 rounded-lg ' style={{ color: '#400D51' }} />
            <Heading class='py-5 text-purple-500' size='2xl'>Hi There</Heading>
            <Text size='xl' class='py-5'>To Learn Programing and get better at it. you need Practise and Practise and More Practise 😅</Text>
            <Text size='xl' class='py-5'>That Sounds Frustrating and overwhelming 😁 </Text>
            <Text size='xl' class='py-5'>But Here is the Trick. <span class='text-orange-300'>Learning with Friends And Making competitions to create projects and get better is fun and More Productive</span> </Text>
            <Text size='xl' class='py-5'>All Of That is now possible. </Text>
            <Text size='xl' class='py-5'>Now You can Chat with Your Friends Learn and Practise with Them </Text>
            <Button colorScheme='warning' size='lg'>Start New Job With Your Friends</Button>
        </div>
    )
}

export default Story;