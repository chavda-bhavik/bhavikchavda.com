import { Heading } from '@/components/Heading';
import Layout from '@/components/Layout';
import { SEO } from '@/components/seo';
import { NavLink } from '@/components/NavLink';
import { links } from '@/config/constants';

const AboutPage = () => (
    <Layout>
        <SEO title="About" description="About Bhavik Chavda" />

        <Heading icon="smiley" className="mt-7 mb-5" />

        <h2 className="about-title">About Me</h2>
        <p>
            I'm Bhavik Chavda. I'm currently working as Software Developer in{' '}
            <NavLink
                className="link"
                link={links.lanetTeam}
                type="external"
                title="LaNet Team Software Solutions"
            >
                LaNet Team Software Solutions
            </NavLink>
            . I code in Javascript, Typescript, NodeJS and ReactJS while keeping Web Performance,
            Accessibility and SEO in mind. While not coding i like to read books and create posts on
            various topics. You can browse my all posts on{' '}
            <NavLink className="link" link={links.linkedIn} type="external" title="LinkedIn">
                LinkedIn
            </NavLink>
            .
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
            <li>Create Posts</li>
            <li>Excercise</li>
        </ul>
    </Layout>
);

export default AboutPage;
