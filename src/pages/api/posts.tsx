import { getPosts } from '@/lib/notion';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function getPostsAPI(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (!req.query.start_cursor) throw new Error('start_cursor is required');
        let start_cursor = req.query.start_cursor as string;
        const postsData = await getPosts(6, start_cursor);
        res.status(200).json(postsData);
    } catch (error) {
        res.status(500).send(error.message || 'Some error occurred while fetching posts');
    }
}
