import React from 'react';

import { Icon } from './Icon';

interface FooterProps {}

const NavItems = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'Projects',
        href: '/projects',
    },
    {
        title: 'Writings',
        href: '/writings',
    },
    {
        title: 'About',
        href: '/about',
    },
];

export const Footer: React.FC<FooterProps> = ({}) => {
    return (
        <div className="bg-classy-base border-t-2 border-classy-dark pt-16 mt-16">
            <div className="container px-4">
                <h1 className="text-3xl font-semibold text-center">Hii</h1>
                <p className="text-sm md:text-base text-center mt-2">
                    Do you have any suggestions or feedbacks? Feel free to email me.
                </p>
                <p className="text-sm md:text-base text-center mt-1">
                    you can find me on{' '}
                    <a href="" className="text-blue-500 link">
                        LinkedIn
                    </a>
                    ,{' '}
                    <a href="" className="text-blue-500 link">
                        Github
                    </a>
                    , and{' '}
                    <a href="" className="text-blue-500 link">
                        Twitter
                    </a>
                    .
                </p>
                <div className="flex items-center justify-center mt-4">
                    <a
                        className="py-2 px-5 sm:px-10 md:px-20 bg-classy-dark border-transparent border-2 hover:border-classy-dark hover:bg-classy-light hover:text-classy-dark text-white transition-all duration-[0.5s] rounded-md 
                     bg-left hover:bg-right cursor-pointer bg-200"
                    >
                        <span className="text-2xl font-semibold">Say Hello 👋</span>
                    </a>
                </div>
            </div>
            <footer className="relative w-full h-56">
                <div className="container h-full px-5 pt-24 pb-12 m-auto max-w-3xl">
                    <nav className="float-right space-x-3 mb-5 justify-center md:justify-end hidden md:flex flex-row">
                        {NavItems.map((item, i) => (
                            <a
                                key={i}
                                href={item.href}
                                className="link text-classy-dark uppercase font-medium"
                            >
                                {item.title}
                            </a>
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
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href="mailto:bhavikvchavda@gmail.com"
                                aria-label="Email bhavikvchavda@gmail.com"
                                title="Email"
                            >
                                <Icon
                                    icon="inbox"
                                    className="h-6 w-6 transition-transform hover-lift-up ease-in-out hover:text-classy-medium"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://github.com/chavda-bhavik"
                                aria-label="View Github Profile"
                                title="View Github Profile"
                            >
                                <Icon
                                    icon="github"
                                    className="w-6 h-6 transition-transform hover-lift-up ease-in-out hover:text-classy-gray"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://twitter.com/heybhavik"
                                aria-label="View Twitter Profile"
                                title="View Twitter Profile"
                            >
                                <Icon
                                    icon="twitter"
                                    className="w-6 h-6 transition-transform hover-lift-up ease-in-out hover:text-classy-gray"
                                />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer noopener"
                                href="https://linkedin.com/heybhavik"
                                aria-label="View LinkedIn Profile"
                                title="View LinkedIn Profile"
                            >
                                <Icon
                                    icon="linkedInCircle"
                                    className="w-6 h-6 transition-transform hover-lift-up ease-in-out hover:text-classy-gray"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};
