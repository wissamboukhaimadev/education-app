import { Box, Button, Divider, Grid, GridItem, Heading, List, ListItem, Progress, ProgressIndicator, SimpleGrid, Text } from '@hope-ui/solid';
import type { Component } from 'solid-js';

//icons
import { BsDiscord } from 'solid-icons/bs'
import { BsCalendarDateFill } from 'solid-icons/bs'
import { AiFillClockCircle } from 'solid-icons/ai'

import dummyCourseImage from '../../../assets/image.jfif'

import './style/DashboardHome.css'


const DashboardHome: Component = () => {
    return (
        <div class='py-10 px-10'>
            <Heading class='text-center pb-10' size='3xl'>Welecome User</Heading>
            <SimpleGrid columns={{ "@initial": 1, "@md": 2 }} gap="40px">
                <GridItem rowSpan={2} class='bg-gray-900'>
                    <div class='py-10 px-10'>
                        <Heading class='pb-5'>Upcoming Events</Heading>
                        <Divider thickness='3px' />
                        <div class='flex mt-2 p-5 hover:bg-purple-600 cursor-pointer transition-all'>
                            <div class='bg-purple-800 w-16 h-16 flex justify-center items-center'>
                                <BsDiscord class=' text-white' size={40} color="#ffffff" />
                            </div>
                            <div class='pl-10'>
                                <Heading>Tech Quiz</Heading>
                                <div class='flex py-2'>
                                    <BsCalendarDateFill size={24} color="#ffffff" />
                                    <Heading class='pl-3'>Date</Heading>
                                </div>
                                <div class='flex'>
                                    <AiFillClockCircle size={24} color="#ffffff" />
                                    <Heading class='pl-3'>Time</Heading>
                                </div>
                            </div>
                        </div>
                        <div class='flex mt-2 p-5 hover:bg-purple-600 cursor-pointer transition-all'>
                            <div class='bg-purple-800 w-16 h-16 flex justify-center items-center'>
                                <BsDiscord class=' text-white' size={40} color="#ffffff" />
                            </div>
                            <div class='pl-10'>
                                <Heading>Tech Quiz</Heading>
                                <div class='flex py-2'>
                                    <BsCalendarDateFill size={24} color="#ffffff" />
                                    <Heading class='pl-3'>Date</Heading>
                                </div>
                                <div class='flex'>
                                    <AiFillClockCircle size={24} color="#ffffff" />
                                    <Heading class='pl-3'>Time</Heading>
                                </div>
                            </div>
                        </div>
                    </div>
                </GridItem>
                <GridItem class='px-10 py-10 bg-gray-900'>
                    <div class='pb-10'>
                        <Heading size='2xl'>Are You a Student</Heading>
                        <Heading size='2xl' class='text-purple-500'>Save 50% on Pro Subscription.</Heading>
                    </div>
                    <Divider thickness='3px' />
                    <div class='pt-5'>
                        <Button variant='ghost' colorScheme='accent'> Claim Your Student Discount </Button>
                    </div>
                </GridItem>
                <GridItem class='bg-gray-900 py-10 px-10'>
                    <div class='flex justify-center'>
                        <Button variant='subtle' colorScheme='warning'>
                            <Heading class='text-center'>
                                Go Visit Our Discord Server
                            </Heading>
                        </Button>
                    </div>
                </GridItem>
                <GridItem class='py-10 px-10 bg-gray-900'>
                    <Heading size='2xl'>Progress</Heading>
                    <div class='py-5'>
                        <Heading class='pb-5'>Your XP . Level</Heading>
                        <Progress trackColor="$info3" value={64}>
                            <ProgressIndicator color="$info9" striped animated />
                        </Progress>
                    </div>
                    <Button colorScheme='danger'>View LeaderBoard</Button>
                </GridItem>
                <GridItem class='bg-gray-900 py-10 px-10'>
                    <div class='flex justify-between respons_fex_prob'>
                        <Heading class='respons_fex_prob_pad' size='2xl'>Your Latest Course</Heading>
                        <Button colorScheme='accent'>Resume Course</Button>
                    </div>
                    <div class='py-10'>

                        <div class='flex justify-between respons_fex_prob'>
                            <img src={dummyCourseImage} class='h-32 rounded-lg mr-5' />
                            <div class='grow'>

                                <Heading class='py-5'>Course Title</Heading>
                                <Progress trackColor="$info3" value={64}>
                                    <ProgressIndicator color="$info9" striped animated />
                                </Progress>
                                <Text class='pt-5 text-green-400'> 64% Completed </Text>

                            </div>
                        </div>

                    </div>
                </GridItem>
            </SimpleGrid>
        </div>
    )
}

export default DashboardHome;









{/* <div class='py-10 px-10'>
                            <Heading class='pb-5'>Upcoming Events</Heading>
                            <Divider thickness='3px' />
                            <div class='flex mt-2 p-5 hover:bg-purple-600 cursor-pointer transition-all'>
                                <div class='bg-purple-800 w-16 h-16 flex justify-center items-center'>
                                    <BsDiscord class=' text-white' size={40} color="#ffffff" />
                                </div>
                                <div class='pl-5'>
                                    <Heading>Tech Quiz</Heading>
                                    <div class='flex py-2'>
                                        <BsCalendarDateFill size={24} color="#ffffff" />
                                        <Heading class='pl-3'>Date</Heading>
                                    </div>
                                    <div class='flex'>
                                        <AiFillClockCircle size={24} color="#ffffff" />
                                        <Heading class='pl-3'>Time</Heading>
                                    </div>
                                </div>
                            </div>
                            <div class='flex mt-2 p-5 hover:bg-purple-600 cursor-pointer transition-all'>
                                <div class='bg-purple-800 w-16 h-16 flex justify-center items-center'>
                                    <BsDiscord class=' text-white' size={40} color="#ffffff" />
                                </div>
                                <div class='pl-5'>
                                    <Heading>Tech Quiz</Heading>
                                    <div class='flex py-2'>
                                        <BsCalendarDateFill size={24} color="#ffffff" />
                                        <Heading class='pl-3'>Date</Heading>
                                    </div>
                                    <div class='flex'>
                                        <AiFillClockCircle size={24} color="#ffffff" />
                                        <Heading class='pl-3'>Time</Heading>
                                    </div>
                                </div>
                            </div>
                        </div> */}