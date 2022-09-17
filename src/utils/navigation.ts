export interface navigationItemsInterface {
    itemname: string
    location: string
    internal?: boolean
    dropdown?: boolean
    dropdownItem?: DropDownItems[]
}

interface DropDownItems {
    link: string
    pathname: string
}
export const navigationItems: navigationItemsInterface[] = [
    {
        itemname: 'Learning Paths',
        location: '/',
        dropdown: true,
        dropdownItem: [
            {
                link: '/paths/frontend',
                pathname: 'Frontend learning path '
            },
            {
                link: '/paths/backend',
                pathname: 'Backend learning path '
            },
            {
                link: '/paths/fullstack',
                pathname: 'FullStack learning path '
            },
            {
                link: '/paths/mobile',
                pathname: 'Mobile learning path '
            },
        ]
    },
    {
        itemname: 'Pricing',
        location: '/pricing',
    },
    {
        itemname: 'Contact Us',
        location: '/contact',
    },
]