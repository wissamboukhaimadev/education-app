import type { Component } from 'solid-js';
import { Button, Heading, IconButton, createDisclosure } from '@hope-ui/solid'
import { navigationItems } from '../../utils/navigation';
import { For } from 'solid-js'

import { AiOutlineMenu } from 'solid-icons/ai'
import './NavBar.css'
import DrawerNavBar from './DrawerNavBar';
import InternalNavigations from './InternalNavigations';

import { useNavigate, Link } from '@solidjs/router'

const NavBar: Component = () => {

    const { isOpen, onClose, onOpen } = createDisclosure()
    const navigate = useNavigate()

    return (
        <nav class='flex justify-between py-10 px-10 shadow-lg'  >
            <div>
                <Link href='/'><Heading>Logo</Heading></Link>
            </div>
            <div class='res_right'>
                <For each={navigationItems}>
                    {(item => <InternalNavigations paths={item} />)}
                </For>

            </div>
            <div class='res_right'>
                <Link href='/login'><span class='pr-5 font-semibold cursor-pointer'>Sign In</span></Link>
                <Button onClick={() => navigate('/register')}>Create Free Account</Button>
            </div>
            <div class='icon_menu hidden'>
                <IconButton onClick={onOpen} variant="ghost" aria-label="Search" icon={<AiOutlineMenu size={30} />}></IconButton>
                <DrawerNavBar isOpen={isOpen} onClose={onClose} />
            </div>



        </nav>
    )
}

export default NavBar;