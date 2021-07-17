import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

type Props = {
    children?: ReactNode;
    title?: string;
    className?: string;
};

const Layout = ({ children, title = 'This is the default title', className = '' }: Props) => (
    <div className="container max-w-2xl mx-auto bg-gray-500 px-2">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header className="flex flex-row justify-between items-center py-2">
            <nav className="flex flex-row space-x-2 items-center">
                <Image src="/the-avatar.jpeg" height={50} width={50} className="rounded-full" />
                <Link href="/">
                    <a>Projects</a>
                </Link>
                <Link href="/about">
                    <a>Posts</a>
                </Link>
                <Link href="/users">
                    <a>About</a>
                </Link>
            </nav>
            <input type="radio" name="dark" />
        </header>
        <main className={className}>{children}</main>
        <footer>
            <hr />
            <span>Bhavik Chavda</span>
        </footer>
    </div>
);

export default Layout;
