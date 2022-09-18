import { Avatar, createDisclosure, Heading, IconButton } from '@hope-ui/solid';
import { useNavigate } from '@solidjs/router';
import { AiOutlineMenu } from 'solid-icons/ai';
import type { Component } from 'solid-js';
import { For } from 'solid-js'
import InternalNavigations from '../../../helper/global-components/InternalNavigations';
import { navigationItems } from '../../../utils/navigation';

//icons
import { IoNotificationsOutline } from 'solid-icons/io'
import DashbordDrawer from './DashbordDrawer';
import { BiSolidTrophy } from 'solid-icons/bi'

const NavigationBar: Component = () => {
    const navigate = useNavigate()
    const { isOpen, onClose, onOpen } = createDisclosure()
    return (
        <nav class='flex justify-between py-10 px-10 shadow-lg'  >
            <div class='flex'>
                <IconButton onClick={onOpen} class='-translate-y-1' variant='ghost' aria-label='Menu' icon={<AiOutlineMenu size={30} color="#ffffff" />}></IconButton>
                <DashbordDrawer isOpen={isOpen} onClose={onClose} />
                <Heading class='px-5' >Logo</Heading>
            </div>
            <div class='res_right'>
                <For each={navigationItems}>
                    {(item => <InternalNavigations paths={item} />)}
                </For>
            </div>
            <div class='red_right flex'>
                <IconButton variant='ghost' aria-label='Achievements' icon={<BiSolidTrophy size={30} color="#ffffff" />}></IconButton>
                <IconButton class='mx-3' variant='ghost' aria-label="Notifications" icon={<IoNotificationsOutline size={30} color="#ffffff" />}></IconButton>
                <IconButton variant='ghost' aria-label='Avatar' icon={<Avatar />}></IconButton>
            </div>




        </nav>
    )
}

export default NavigationBar;