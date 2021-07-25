import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { Footer } from './Footer';

type Props = {
    children?: ReactNode;
    title?: string;
    className?: string;
};

const Layout = ({ children, title = 'Bhavik Chavda', className = '' }: Props) => (
    <>
        <div className="container max-w-3xl mx-auto px-2">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header className="flex flex-row justify-between items-center py-2">
                <nav className="flex flex-row space-x-2 items-center">
                    <Link href="/">
                        <a>
                            <Image
                                src="/the-avatar.jpeg"
                                height={50}
                                width={50}
                                className="rounded-full cursor-pointer"
                            />
                        </a>
                    </Link>
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>
                    <Link href="/writings">
                        <a>Writings</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </nav>
                <input type="radio" name="dark" />
            </header>
            <main className={className}>{children}</main>
        </div>
        <Footer />
    </>
);

export default Layout;
