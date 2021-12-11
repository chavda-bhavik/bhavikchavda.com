import React from 'react';
import { Heading } from '@/components/Heading';
import SEO from '@/components/SEO';
import { NavLink } from '@/components/NavLink';
import { links } from '@/config/constants';
import { Layout } from '@/components/Layout';

const AboutPage = () => (
    <Layout>
        <SEO title="About" description="About Bhavik Chavda" />

        <Heading icon="smiley" className="mt-7 mb-5" />

        <h2 className="about-title">About Me</h2>
        <p>
            I&apos;m Bhavik Chavda. I&apos;m currently working as Software Developer in{' '}
            <NavLink
                className="link"
                link={links.lanetTeam}
                type="external"
                title="LaNet Team Software Solutions"
            >
                LaNet Team Software Solutions
            </NavLink>
            . I code in Javascript, Typescript, NodeJS and ReactJS while keeping Web Performance,
            Accessibility and SEO in mind. While not coding i like to read books and create content
            on web development.
        </p>

        <h2 className="about-title">Skills</h2>
        <ul className="list-disc list-inside">
            <li>Node JS, Apollo GraphQL, Prisma</li>
            <li>React/Preact, Redux, GatsBy, NextJS</li>
            <li>GraphQL, REST, SocketIo, PWA</li>
            <li>Git, Webpack/Rollup/Gulp, Yarn/NPM</li>
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
            <li>Excercise</li>
        </ul>
    </Layout>
);

export default AboutPage;
