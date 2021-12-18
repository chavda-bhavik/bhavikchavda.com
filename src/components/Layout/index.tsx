import React, { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

type Props = {
    children?: ReactNode;
    path?: string;
};

export const Layout = ({ children, path }: Props) => (
    <>
        <div className="container max-w-4xl mx-auto">
            <Header path={path} />
            <main className="px-2">{children}</main>
        </div>
        <Footer path={path} />
    </>
);
