import React from 'react';

import { links } from '@/config/constants';
import { Heading } from '@/components/Heading';
import { SEO } from '@/components/SEO';
import { NavLink } from '@/components/NavLink';
import { Layout } from '@/components/Layout';

const AboutPage = () => (
    <Layout path="/about">
        <SEO title="About" description="About Bhavik Chavda" />

        <Heading icon="smiley" className="mt-7 mb-5" />

        <h2 className="about-title">About Me</h2>
        <ul className="list-disc list-inside">
            <li>
                I&apos;m currently working as Software Developer in{' '}
                <NavLink
                    className="link"
                    link={links.lanetTeam}
                    type="external"
                    title="LaNet Team Software Solutions"
                >
                    LaNet Team Software Solutions
                </NavLink>
                .
            </li>
            <li>
                I develop web-applications in Javascript, Typescript, NodeJS and ReactJS while
                keeping Web Performance, Accessibility and SEO in mind.
            </li>
            <li>In my spare time I like to read books and learn new things.</li>
            <li>
                I also create posts on things I learn and found interesting. You can check on{' '}
                <NavLink type="internal" link="/content" title="Content">
                    Content
                </NavLink>{' '}
                section.
            </li>
        </ul>

        <h2 className="about-title">Skills</h2>
        <ul className="list-disc list-inside">
            <li>Node JS, Apollo GraphQL, Prisma</li>
            <li>React/Preact, Redux, GatsBy, NextJS</li>
            <li>GraphQL, REST, SocketIo, PWA</li>
            <li>Git, Webpack, Yarn/NPM</li>
            <li>SCSS / CSS, Tailwind, Bootstrap, Styled Components</li>
        </ul>

        <h2 className="about-title">Education</h2>
        <div>
            <p className="text-lg font-medium">Master of Science in Information Technology</p>
            <p className="text-base">
                from{' '}
                <NavLink
                    className="link"
                    link={links.jpdawer}
                    type="external"
                    title="J.P.Dawer Insitute of Communication Technology"
                >
                    J.P.Dawer Insitute of Communication Technology
                </NavLink>
            </p>
        </div>

        <h2 className="about-title">Hobbies</h2>
        <ul className="list-disc list-inside">
            <li>Reading Books</li>
            <li>Content Creation</li>
            <li>Cooking (sometimes)</li>
        </ul>
    </Layout>
);

export default AboutPage;
