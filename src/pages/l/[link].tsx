import { GetServerSideProps } from 'next';

import { getLink } from '@/lib/notion';

const Link = ({}) => {
    return <p>Should Not come here</p>;
};

export const getServerSideProps: GetServerSideProps = async ({ params, res }) => {
    const link = await getLink(params.link as string);
    if (link) {
        return {
            notFound: true,
            redirect: link,
        };
    } else {
        return {
            notFound: true,
        };
    }
};

export default Link;
