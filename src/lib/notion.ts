import { Client } from '@notionhq/client';
import { PostType, ProjectType } from '@/interfaces';
import * as Helper from './notion_helper';

const PostsDBId = process.env.NOTION_POSTS_DBID;
const ProjectsDBId = process.env.NOTION_PROJECTS_DBID;
const AuthID = process.env.NOTION_AUTH_KEY;

const notion = new Client({
    auth: AuthID,
});

export async function getPosts() {
    try {
        let { results } = await notion.databases.query({
            database_id: PostsDBId,
            filter: {
                and: [
                    {
                        property: 'Status',
                        select: {
                            equals: 'Published',
                        },
                    },
                ],
            },
            sorts: [
                {
                    property: 'PublishDate',
                    direction: 'descending',
                },
            ],
        });
        let posts: PostType[] = results.map(({ id, properties }) => {
            return {
                id,
                description: Helper.asRichText(properties.Description),
                fileUrl: Helper.asUrl(properties.File),
                heading: Helper.asRichText(properties.Heading),
                publishDate: Helper.asDate(properties.PublishDate),
                tags: Helper.asMultiSelect(properties.Tags).multi_select.map((tag) => ({
                    color: tag.color,
                    name: tag.name,
                })),
            } as PostType;
        });
        return posts;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getProjects() {
    try {
        let { results } = await notion.databases.query({
            database_id: ProjectsDBId,
            sorts: [
                {
                    property: 'Date',
                    direction: 'descending',
                },
            ],
        });
        let projects = results.map(({ properties, id }) => {
            return {
                id,
                date: Helper.asDate(properties.Date),
                description: Helper.asRichText(properties.Description),
                githubURL: Helper.asUrl(properties.GithubURL),
                heading: Helper.asRichText(properties.Heading),
                isLive: Helper.asCheckbox(properties.IsLive),
                tags: Helper.asMultiSelect(properties.Tags).multi_select.map((tag) => ({
                    color: tag.color,
                    name: tag.name,
                })),
            } as ProjectType;
        });
        return projects;
    } catch (error) {
        console.log(error);
        return [];
    }
}
