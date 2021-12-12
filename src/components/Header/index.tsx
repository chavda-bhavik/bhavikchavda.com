import React, { useState } from 'react';
import classNames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';

import { Backdrop } from '@/components/Backdrop';
import { Icon } from '@/components/Icon';
import { NavLink } from '@/components/NavLink';
import { MenuItems } from '@/config/constants';

interface HeaderProps {
    path?: string;
}

export const Header: React.FC<HeaderProps> = ({ path = '/' }) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex flex-row py-4 px-2">
            <NavLink link="/" type="internal" className="flex items-center">
                <StaticImage
                    src="../../images/header-avatar.jpg"
                    height={45}
                    width={45}
                    alt="Bhavik Chavda"
                    placeholder="blurred"
                    layout="fixed"
                    className="rounded-full cursor-pointer my-auto h-11 w-11"
                />
            </NavLink>

            {/* Other then mobile */}
            <div className="hidden sm:flex w-full flex-row items-center pl-2">
                <div className="flex-row space-x-2 lg:space-x-3 flex">
                    {MenuItems.map((menu) => {
                        return (
                            <NavLink
                                className={classNames(
                                    'hover:no-underline font-medium text-lg transition-colors my-1 border-b-4 text-classy-dark hover:border-classy-dark',
                                    {
                                        'border-classy-dark': path === menu.link,
                                        'border-transparent': path !== menu.link,
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
                <button onClick={() => setToggleMenu(true)} aria-label="open menu">
                    <Icon icon="toggler" size="md" />
                </button>
                <Backdrop
                    show={toggleMenu}
                    onClose={() => setToggleMenu(false)}
                    className="bg-gray-50"
                >
                    <div className="flex flex-col items-center w-full h-full my-auto">
                        {MenuItems.map((menu) => {
                            return (
                                <NavLink
                                    className={classNames(
                                        'font-medium text-xl transition-colors my-5 border-b-4 text-classy-dark hover:border-classy-dark',
                                        {
                                            'border-classy-dark': path === menu.link,
                                            'border-transparent': path !== menu.link,
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
