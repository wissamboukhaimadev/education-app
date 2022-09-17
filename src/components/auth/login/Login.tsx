import { Box, Button, Checkbox, Divider, Heading, Input, Text } from '@hope-ui/solid';
import type { Component } from 'solid-js';
import { Link } from '@solidjs/router';

const Login: Component = () => {
    return (
        <div class="py-10">
            <Heading size="3xl" class="text-center">
                Sign in to <span class="text-blue-400">Company Name</span>{' '}
            </Heading>
            <main class="flex justify-center py-10">
                <div >

                    <div class='py-10 bg-gray-900'>
                        <div class="py-8  px-5 ">
                            <form action="#" class="space-y-8">


                                <div>
                                    <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address / Username</label>
                                    <Input id="Email" type="email" />
                                </div>
                                <div>
                                    <label for="Password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                                    <Input id="Password" type="password" />
                                </div>

                                <div class='remenber__me flex justify-between'>
                                    <div class='flex'>
                                        <Checkbox />
                                        <Text size='sm'>Remember me</Text>
                                    </div>
                                    <Link href='/password-reset'><Text size='sm' class='text-purple-500 '>Forgot your password?</Text></Link>
                                </div>

                                <div class='flex justify-center'><Button colorScheme='accent'>Sign in</Button></div>
                            </form>
                        </div>
                        <Divider thickness="3px" />
                        <div class="flex pt-10">
                            <Box bg="tomato" class="mx-5 px-10 flex justify-center items-center cursor-pointer" height="50px">Google</Box>
                            <Box bg="tomato" class="mx-5 px-10 flex justify-center items-center cursor-pointer" height="50px">Facebook</Box>
                            {/* <Box bg="tomato" class="mx-10 px-20 flex justify-center items-center" height="80px">Github</Box> */}
                        </div>

                        <footer class='pt-5 '>
                            <Heading class='text-center'>Don't have an account? <span class='text-purple-600'>Create one</span> </Heading>
                        </footer>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Login;