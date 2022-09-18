import { List, Divider, Drawer, DrawerBody, DrawerContent, DrawerFooter, Heading, ListIcon, ListItem, Text, DrawerOverlay, DrawerHeader } from '@hope-ui/solid';
import type { Component } from 'solid-js';
import { For } from 'solid-js'

//icons
import { BiSolidTrophy } from 'solid-icons/bi'
import { AiOutlineDashboard } from 'solid-icons/ai'

interface DashboardProps {
    isOpen: () => boolean
    onClose: () => void
}
const DashbordDrawer: Component<DashboardProps> = (props) => {

    const { isOpen, onClose } = props
    return (
        <>
            <Drawer
                opened={isOpen()}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader >
                        <Heading class='py-5 text-center'>Company Name</Heading>
                        <Divider thickness='3px' />

                    </DrawerHeader>
                    <DrawerBody>
                        <List>
                            <For each={Array(8).fill('')}>
                                {(_ => (
                                    <ListItem class='flex my-2 hover:bg-purple-400 hover:text-teal-900 transition-all cursor-pointer py-2 pl-3'>
                                        <ListIcon as={AiOutlineDashboard} class='text-2xl' />
                                        <Text>Dashboard</Text>
                                    </ListItem>
                                ))}
                            </For>
                        </List>
                    </DrawerBody>


                    <DrawerFooter class='flex flex-col'>
                        <Heading class='pb-5'>Give us Your Feedback</Heading>

                        <Divider thickness='3px' />
                        <List spacing="$3" class='flex justify-start pt-5'>
                            <ListItem class='flex'>
                                <ListIcon as={BiSolidTrophy} class='text-5xl' />
                                <div>
                                    <span class='text-xl'>Username</span>
                                    <Text class='text-center'>Level</Text>
                                </div>
                            </ListItem>

                        </List>
                    </DrawerFooter>

                </DrawerContent>
            </Drawer>
        </>
    )
}

export default DashbordDrawer;