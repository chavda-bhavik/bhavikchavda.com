import React, { ReactNode } from 'react';
import classnames from 'classnames';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
    children?: ReactNode;
    className?: string;
};

const Layout = ({ children, className = '' }: Props) => (
    <>
        <div className="container max-w-3xl mx-auto">
            {/* <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head> */}
            <Header />
            <main className={classnames('px-2', className)}>{children}</main>
        </div>
        <Footer />
    </>
);

export default Layout;
