import React, { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

type Props = {
    children?: ReactNode;
};

export const Layout = ({ children }: Props) => (
    <>
        <div className="container max-w-4xl mx-auto">
            <Header />
            <main className="px-2">{children}</main>
        </div>
        <Footer />
    </>
);
