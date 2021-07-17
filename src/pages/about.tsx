import { Heading } from '@/components/Heading';
import Layout from '@/components/Layout';

const AboutPage = () => (
    <Layout title="Bhavik Chavda | About">
        <Heading icon="smiley" />

        <h2 className="font-bold text-3xl mb-2">About Me</h2>
        <p>
            I'm Bhavik Chavda. I'm currently working as Software Developer in{' '}
            <a href="">LaNet Team Software Solutions</a>. I code in Javascript, Typescript, NodeJS
            and ReactJS while keeping Web Performance, Accessibility and SEO in mind. While not
            coding i like to read books and create posts on various topics. You can browse posts{' '}
            <a href="">here</a>.
        </p>

        <h2 className="font-bold text-3xl mt-6 mb-2">Skills</h2>
        <ul className="list-disc list-inside">
            <li>Node JS, Apollo GraphQL, Prisma</li>
            <li>React/Preact, Redux, GatsBy, NextJS</li>
            <li>GraphQL, REST, SocketIo, PWA</li>
            <li>Git, Webpack/Rollup/Gulp, Yarn/NPM</li>
            <li>SCSS / CSS, Tailwind, Bootstrap, Styled Components</li>
        </ul>

        <h2 className="font-bold text-3xl mt-6 mb-2">Education</h2>
        <div>
            <p className="text-lg font-medium">Master of Science in Information Technology</p>
            <p className="text-base">
                from <a href="">J.P.Dawer Insitute of Communication Technology 🔗</a>
            </p>
        </div>

        <h2 className="font-bold text-3xl mt-6 mb-2">Hobbies</h2>
        <ul className="list-disc list-inside">
            <li>Reading Books</li>
            <li>Create Posts</li>
            <li>Excercise</li>
        </ul>
    </Layout>
);

export default AboutPage;
