import React from 'react';

import { Icon } from './Icon';
import { NavLink } from './NavLink';
import { links, MenuItems } from '@/config/constants';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <div className="bg-classy-base border-t-2 border-classy-dark pt-16 mt-16">
            <div className="container px-4 mx-auto">
                <h1 className="text-3xl font-semibold text-center">Hii</h1>
                <p className="text-sm md:text-base text-center mt-2">
                    Do you have any suggestions or feedbacks? Feel free to contact me.
                </p>
                <p className="text-sm md:text-base text-center mt-1">
                    you can find me on{' '}
                    <NavLink
                        type="external"
                        className="link"
                        link={links.linkedIn}
                        title="LinkedIn"
                    >
                        LinkedIn
                    </NavLink>
                    ,{' '}
                    <NavLink type="external" className="link" link={links.github} title="Github">
                        Github
                    </NavLink>
                    , and{' '}
                    <NavLink type="external" className="link" link={links.twitter} title="Twitter">
                        Twitter
                    </NavLink>
                    .
                </p>
                <div className="flex items-center justify-center mt-4">
                    <NavLink
                        title="mail bhavikvchavda@gmail.com"
                        link={links.mailto}
                        type="external"
                        className="btn btn-primary py-2 px-5 sm:px-10 md:px-20"
                    >
                        <span className="text-2xl font-semibold">Say Hello 👋</span>
                    </NavLink>
                </div>
            </div>
            <footer className="relative w-full h-56">
                <div className="container h-full px-5 pt-24 pb-12 m-auto max-w-3xl">
                    <nav className="float-right space-x-3 mb-5 justify-center md:justify-end hidden md:flex flex-row">
                        {MenuItems.map((item, i) => (
                            <NavLink
                                key={i}
                                type="internal"
                                link={item.link}
                                className="link text-classy-dark uppercase font-medium"
                                title={item.title}
                            >
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="container flex flex-col-reverse md:flex-row space-y-5 space-y-reverse md:space-y-0 justify-between">
                        <span
                            className="text-xs self-center flex-grow-0 tracking-wider"
                            aria-label="Copyright"
                        >
                            © 2020 - 2021 Bhavik Chavda. All Rights Reserved.
                        </span>
                        <div className="flex flex-row space-x-2 justify-center md:justify-end">
                            <NavLink
                                type="external"
                                link={links.mailto}
                                ariaLabel="Email bhavikvchavda@gmail.com"
                                title="email"
                            >
                                <Icon
                                    icon="inbox"
                                    className="h-6 w-6 transition-transform hover-lift-up ease-in-out hover:text-classy-medium"
                                />
                            </NavLink>
                            <NavLink
                                type="external"
                                link={links.github}
                                ariaLabel="View Github Profile"
                                title="Github"
                            >
                                <Icon
                                    icon="github"
                                    className="w-6 h-6 transition-transform hover-lift-up ease-in-out hover:text-classy-gray"
                                />
                            </NavLink>
                            <NavLink
                                type="external"
                                link={links.twitter}
                                ariaLabel="View Twitter Profile"
                                title="Twitter"
                            >
                                <Icon
                                    icon="twitter"
                                    className="w-6 h-6 transition-transform hover-lift-up ease-in-out hover:text-classy-gray"
                                />
                            </NavLink>
                            <NavLink
                                link={links.linkedIn}
                                ariaLabel="View LinkedIn Profile"
                                title="LinkedIn"
                            >
                                <Icon
                                    icon="linkedInCircle"
                                    className="w-6 h-6 transition-transform hover-lift-up ease-in-out hover:text-classy-gray"
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
