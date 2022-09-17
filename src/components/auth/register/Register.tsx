import { Box, Button, Center, Heading, Input, Text, Textarea } from '@hope-ui/solid';
import { Component } from 'solid-js';

const Register: Component = () => {
    return (
        <div class="py-10">
            <Heading size="3xl" class="text-center">
                Create s <span class="text-blue-400">Free Account</span>{' '}
            </Heading>
            <main class="flex justify-center py-20">
                <div >
                    <div class="flex">
                        <Box bg="tomato" class="mx-5 px-10 flex justify-center items-center cursor-pointer" height="50px">Google</Box>
                        <Box bg="tomato" class="mx-5 px-10 flex justify-center items-center cursor-pointer" height="50px">Facebook</Box>
                        {/* <Box bg="tomato" class="mx-10 px-20 flex justify-center items-center" height="80px">Github</Box> */}
                    </div>
                    <div class='pt-10'>
                        <div class="py-8  px-5 bg-gray-900">
                            <form action="#" class="space-y-8">
                                <div>
                                    <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <Input class='rounded-lg' id="Name" type="text" placeholder='Name' />
                                </div>
                                <div>
                                    <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                                    <Input id="Username" type="text" placeholder='Username' />
                                    <Text class='pt-5' size='sm'>Once set, username cannot be changed</Text>
                                </div>
                                <div>
                                    <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                    <Input id="Email" type="email" placeholder='Email' />
                                </div>
                                <div>
                                    <label for="Password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                    <Input id="Password" type="password" placeholder='Password' />
                                </div>

                                <div class='flex justify-center'><Button colorScheme='accent'>Submit Details</Button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Register;