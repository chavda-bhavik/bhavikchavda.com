import { Client } from '@notionhq/client';
import { ArticleType, PostsReturnType, PostType, ProjectType } from '@/interfaces';
import * as Helper from './notion_helper';
import { DatabasesQueryParameters } from '@notionhq/client/build/src/api-endpoints';

const PostsDBId = process.env.NOTION_POSTS_DBID;
const ProjectsDBId = process.env.NOTION_PROJECTS_DBID;
const ArticlesDBId = process.env.NOTION_ARTICLES_DBID;
const AuthID = process.env.NOTION_AUTH_KEY;

const notion = new Client({
    auth: AuthID,
});

export async function getPosts(limit?: number, start_cursor?: string): Promise<PostsReturnType> {
    try {
        let queryParams: DatabasesQueryParameters = {
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
        };
        if (limit) queryParams.page_size = limit;
        if (start_cursor) queryParams.start_cursor = start_cursor;
        let { results, has_more, next_cursor } = await notion.databases.query(queryParams);
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
                linkedInURL: Helper.asUrl(properties.LinkedInURL),
                imageUrl: Helper.asUrl(properties.ImageURL),
                category: Helper.asSelect(properties.Category).select.name
            } as PostType;
        });
        return {
            posts,
            has_more,
            next_cursor
        };
    } catch (error) {
        return {
            posts: [],
            has_more: false
        };
    }
}

export async function getProjects(limit?: number) {
    try {
        let queryParams: DatabasesQueryParameters = {
            database_id: ProjectsDBId,
            sorts: [
                {
                    property: 'Date',
                    direction: 'descending',
                },
            ],
        };
        if (limit) queryParams.page_size = limit;
        let { results } = await notion.databases.query(queryParams);
        let projects = results.map(({ properties, id }) => {
            return {
                id,
                date: Helper.asDate(properties.Date),
                description: Helper.asRichText(properties.Description),
                githubURL: Helper.asUrl(properties.GithubURL),
                heading: Helper.asRichText(properties.Heading),
                isLive: Helper.asCheckbox(properties.IsLive),
                liveURL: Helper.asUrl(properties.LiveURL),
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

export async function getArticles(limit?: number) {
    try {
        let queryParams: DatabasesQueryParameters = {
            database_id: ArticlesDBId,
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
                    property: 'Date',
                    direction: 'descending',
                },
            ],
        };
        if (limit) queryParams.page_size = limit;
        let { results } = await notion.databases.query(queryParams);
        let articles = results.map(({ properties, id }) => {
            return {
                id,
                date: Helper.asDate(properties.Date),
                description: Helper.asRichText(properties.Description),
                blogURL: Helper.asUrl(properties.BlogURL),
                heading: Helper.asRichText(properties.Heading),
                imageURL: Helper.asUrl(properties.ImageURL),
                tags: Helper.asMultiSelect(properties.Tags).multi_select.map((tag) => ({
                    color: tag.color,
                    name: tag.name,
                })),
            } as ArticleType;
        });
        return articles;
    } catch (error) {
        console.log(error);
        return [];
    }
}
