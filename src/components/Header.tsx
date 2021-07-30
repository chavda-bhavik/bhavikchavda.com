import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Backdrop } from './Backdrop';
import { Icon } from './Icon';
import { NavLink } from './NavLink';
import Avatar from '../assets/the-avatar.jpeg';
import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';

export const menuItems = [
    {
        title: 'Home',
        link: '/',
        exact: true,
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

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const router = useRouter();
    let selected;
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex flex-row py-2 px-2">
            <Link href="/">
                <a>
                    <Image
                        src={Avatar}
                        height={55}
                        width={55}
                        priority={true}
                        placeholder="blur"
                        className="rounded-full cursor-pointer"
                    />
                </a>
            </Link>

            {/* Other then mobile */}
            <div className="hidden sm:flex w-full flex-row justify-between items-center pl-2">
                <div className="flex-row space-x-2 lg:space-x-3 flex">
                    {menuItems.map((menu) => {
                        selected = menu.exact
                            ? router.asPath === menu.link
                            : router.asPath.startsWith(menu.link);
                        return (
                            <NavLink
                                className={classNames(
                                    'hover:text-classy-dark font-medium text-lg transition-colors',
                                    {
                                        'text-classy-medium': !selected,
                                        'text-classy-dark': selected,
                                    }
                                )}
                                link={menu.link}
                                title={menu.title}
                                key={menu.title}
                            />
                        );
                    })}
                </div>
                <input type="radio" name="dark" />
            </div>

            {/* For mobile */}
            <div className="flex sm:hidden w-full flex-row justify-between items-center pl-2">
                <span className="font-medium text-xl text-classy-dark">bhavikchavda.com</span>
                <button onClick={() => setToggleMenu(true)}>
                    <Icon icon="toggler" size="md" />
                </button>
                <Backdrop
                    show={toggleMenu}
                    onClose={() => setToggleMenu(false)}
                    className="bg-gray-50"
                >
                    <div className="flex flex-col items-center w-full h-full my-auto">
                        {menuItems.map((menu) => {
                            selected = menu.exact
                                ? router.asPath === menu.link
                                : router.asPath.startsWith(menu.link);
                            return (
                                <NavLink
                                    className={classNames(
                                        'hover:text-classy-dark font-medium text-xl transition-colors my-5',
                                        {
                                            'text-classy-medium': !selected,
                                            'text-classy-dark': selected,
                                        }
                                    )}
                                    link={menu.link}
                                    title={menu.title}
                                    key={menu.title}
                                />
                            );
                        })}
                    </div>
                </Backdrop>
            </div>
        </header>
    );
};
