import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';

import Avatar from '../assets/the-avatar.jpeg';
import { Backdrop } from './Backdrop';
import { Icon } from './Icon';
import { NavLink } from './NavLink';
import { MenuItems } from '@/config/constants';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const router = useRouter();
    let selected;
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        setToggleMenu(false);
    }, [router.asPath]);

    return (
        <header className="flex flex-row py-4 px-2">
            <NavLink link="/" type="internal" className="flex items-center">
                <Image
                    src={Avatar}
                    height={45}
                    width={45}
                    priority={true}
                    placeholder="blur"
                    className="rounded-full cursor-pointer my-auto"
                />
            </NavLink>

            {/* Other then mobile */}
            <div className="hidden sm:flex w-full flex-row items-center pl-2">
                <div className="flex-row space-x-2 lg:space-x-3 flex">
                    {MenuItems.map((menu) => {
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
                                type="internal"
                                link={menu.link}
                                title={menu.title}
                                key={menu.title}
                            >
                                {menu.title}
                            </NavLink>
                        );
                    })}
                </div>
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
                        {MenuItems.map((menu) => {
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
                                >
                                    {menu.title}
                                </NavLink>
                            );
                        })}
                    </div>
                </Backdrop>
            </div>
        </header>
    );
};
