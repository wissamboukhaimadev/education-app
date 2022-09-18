import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, List, ListItem } from '@hope-ui/solid';
import type { Component } from 'solid-js';
import { navigationItems } from '../../utils/navigation';
import { Link } from '@solidjs/router'

interface drawerNavBarProps {
    isOpen: () => boolean
    onClose: () => void

}

const DrawerNavBar: Component<drawerNavBarProps> = (props) => {
    const { isOpen, onClose } = props
    console.log(isOpen())
    return (
        <Drawer
            opened={isOpen()}
            placement="left"
            onClose={onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader></DrawerHeader>

                <DrawerBody>
                    <List>
                        {navigationItems.map(item => (
                            <Link href={item.location} onClick={onClose}>
                                <ListItem class='py-2 hover:text-purple-400 cursor-pointer'>
                                    {item.itemname}
                                </ListItem>
                            </Link>
                        ))}
                        <Link href='/register' onClick={onClose}>
                            <ListItem class='py-2 hover:text-purple-400 cursor-pointer'>
                                Create an Account
                            </ListItem>
                        </Link>
                    </List>
                </DrawerBody>


            </DrawerContent>
        </Drawer>
    )
}

export default DrawerNavBar;