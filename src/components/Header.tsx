import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Backdrop } from './Backdrop';
import { Icon } from './Icon';
import { Menus } from './Menus';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header className="flex flex-row py-2 px-2">
            <Link href="/">
                <a>
                    <Image
                        src="/the-avatar.jpeg"
                        height={60}
                        width={60}
                        className="rounded-full cursor-pointer"
                    />
                </a>
            </Link>

            {/* Other then mobile */}
            <div className="hidden sm:flex w-full flex-row justify-between items-center pl-2">
                <div className="flex-row space-x-2 flex">
                    <Menus className="hover:text-classy-dark font-medium text-lg text-classy-dark hover:underline" />
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
                        <Menus className="text-xl text-classy-dark my-5" />
                        {/* <Icon icon="sun" className="my-5" /> */}
                    </div>
                </Backdrop>
            </div>
        </header>
    );
};
