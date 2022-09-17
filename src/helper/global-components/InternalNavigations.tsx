import { Menu, MenuContent, MenuItem, MenuTrigger, Text } from '@hope-ui/solid';
import { Link } from '@solidjs/router';
import type { Component } from 'solid-js';
import { For } from 'solid-js'
import { navigationItemsInterface } from '../../utils/navigation';

import { AiOutlineArrowDown } from 'solid-icons/ai'
interface InternalProps {
    paths: navigationItemsInterface
}

const InternalNavigations: Component<InternalProps> = (props) => {
    const { paths } = props
    if (paths.dropdown) {
        return (
            <Menu>
                {({ opened }) => (
                    <>
                        <MenuTrigger>
                            <Text> {paths.itemname}</Text>
                            <AiOutlineArrowDown size={17} color="#ffffff" />
                        </MenuTrigger>
                        <MenuContent>
                            <For each={paths.dropdownItem}>
                                {(path => <MenuItem class='py-2'>
                                    <Link href={path.link}>{path.pathname}</Link>

                                </MenuItem>)}
                            </For>
                        </MenuContent>
                    </>
                )}
            </Menu>
        )
    }
    return (
        <>
            <Link href={paths.location} class='px-2 transition-all duration-200 hover:text-purple-300'> {paths.itemname} </Link>

        </>
    )
}

export default InternalNavigations;