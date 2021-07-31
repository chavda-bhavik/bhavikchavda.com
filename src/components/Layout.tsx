import React, { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
    children?: ReactNode;
};

export const Layout = ({ children }: Props) => (
    <>
        <div className="container max-w-3xl mx-auto">
            {/* <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head> */}
            <Header />
            <main className="px-2">{children}</main>
        </div>
        <Footer />
    </>
);
