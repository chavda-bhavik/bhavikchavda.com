import React from 'react';

import { SEO } from '@/components/SEO';
import { Blob } from '@/components/Highlight';
import { Layout } from '@/components/Layout';

const NotFoundPage = () => {
    return (
        <Layout path="/404">
            <SEO title="404: Page Not Foud" />
            <div className="flex justify-center">
                <div className="absolute">
                    <Blob />
                </div>
                <h1 className="mx-auto mt-16 text-6xl font-bold text-center md:mt-20 lg:mt-24 text-back-primary">
                    404
                </h1>
            </div>
            <p className="mt-24 text-2xl font-medium text-center lg:mt-36 text-fore-secondary">
                Page not found. The page you're looking for does not exist.
            </p>
        </Layout>
    );
};

export default NotFoundPage;
