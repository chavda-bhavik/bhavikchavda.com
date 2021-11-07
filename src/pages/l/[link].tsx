import { GetServerSideProps } from 'next';

import { getLink } from '@/lib/notion';

const Link = ({}) => {
    return <p>Should Not come here</p>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        const link = await getLink(params.link as string);
        return {
            redirect: {
                destination: link,
                permanent: true,
            },
        };
    } catch (error) {
        return {
            notFound: true,
        };
    }
};

export default Link;
