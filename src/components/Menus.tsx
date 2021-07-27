import React from 'react';
import Link from 'next/link';

export const menuItems = [
    {
        title: 'Home',
        link: '/',
    },
    {
        title: 'Projects',
        link: '/projects',
    },
    {
        title: 'Writings',
        link: '/writings',
    },
    {
        title: 'About',
        link: '/about',
    },
];

export interface MenusProps {
    className?: string;
}

export const Menus: React.FC<MenusProps> = ({ className }) => {
    return (
        <>
            {menuItems.map((menu, index) => (
                <Link href={menu.link} key={index}>
                    <a className={className}>{menu.title}</a>
                </Link>
            ))}
        </>
    );
};
