import { Client } from '@notionhq/client';
import { ArticleType, PostsReturnType, PostType, ProjectType } from '@/interfaces';
import { QueryDatabaseParameters } from '@notionhq/client/build/src/api-endpoints';

const PostsDBId = process.env.NOTION_POSTS_DBID;
const ProjectsDBId = process.env.NOTION_PROJECTS_DBID;
const ArticlesDBId = process.env.NOTION_ARTICLES_DBID;
const AuthID = process.env.NOTION_AUTH_KEY;
const LinksID = process.env.NOTION_LINKS_DBID;

const notion = new Client({
    auth: AuthID,
});

export async function getPosts(limit?: number, start_cursor?: string): Promise<PostsReturnType> {
    try {
        let queryParams: QueryDatabaseParameters = {
            database_id: PostsDBId!,
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
                description:
                    properties.Description.type === 'rich_text'
                        ? properties.Description.rich_text[0].plain_text
                        : '',
                fileUrl: properties.File.type === 'url' ? properties.File.url : '',
                heading:
                    properties.Heading.type === 'rich_text'
                        ? properties.Heading.rich_text[0].plain_text
                        : '',
                publishDate:
                    properties.PublishDate.type === 'date' ? properties.PublishDate.date : '',
                tags:
                    properties.Tags.type === 'multi_select'
                        ? properties.Tags.multi_select.map((tag) => ({
                              color: tag.color,
                              name: tag.name,
                          }))
                        : [],
                imageUrl: properties.ImageURL.type === 'url' ? properties.ImageURL.url : '',
                category:
                    properties.Category.type === 'select' ? properties.Category.select.name : '',
            } as PostType;
        });
        return {
            posts,
            has_more,
            next_cursor,
        };
    } catch (error) {
        console.log(error);
        return {
            posts: [],
            has_more: false,
            next_cursor: null,
        };
    }
}

export async function getProjects(limit?: number) {
    try {
        let queryParams: QueryDatabaseParameters = {
            database_id: ProjectsDBId!,
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
                date: properties.Date.type === 'date' ? properties.Date.date : '',
                description:
                    properties.Description.type === 'rich_text'
                        ? properties.Description.rich_text[0].plain_text
                        : '',
                githubURL: properties.GithubURL.type === 'url' ? properties.GithubURL.url : '',
                heading:
                    properties.Heading.type === 'rich_text'
                        ? properties.Heading.rich_text[0].plain_text
                        : '',
                redirectURL:
                    properties.RedirectURL.type === 'url' ? properties.RedirectURL.url : '',
                tags:
                    properties.Tags.type === 'multi_select'
                        ? properties.Tags.multi_select.map((tag) => ({
                              color: tag.color,
                              name: tag.name,
                          }))
                        : [],
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
        let queryParams: QueryDatabaseParameters = {
            database_id: ArticlesDBId!,
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
                date: properties.Date.type === 'date' ? properties.Date.date.start : '',
                description:
                    properties.Description.type === 'rich_text'
                        ? properties.Description.rich_text[0].plain_text
                        : '',
                blogURL: properties.BlogURL.type === 'url' ? properties.BlogURL.url : '',
                heading:
                    properties.Heading.type === 'rich_text'
                        ? properties.Heading.rich_text[0].plain_text
                        : '',
                imageURL: properties.ImageURL.type === 'url' ? properties.ImageURL.url : '',
                tags:
                    properties.Tags.type === 'multi_select'
                        ? properties.Tags.multi_select.map((tag) => ({
                              color: tag.color,
                              name: tag.name,
                          }))
                        : [],
            } as ArticleType;
        });
        return articles;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export async function getLink(slug: string) {
    try {
        let queryParams: QueryDatabaseParameters = {
            database_id: LinksID!,
            filter: {
                and: [
                    {
                        property: 'Slug',
                        text: {
                            equals: slug,
                        },
                    },
                ],
            },
        };
        let { results } = await notion.databases.query(queryParams);
        if (!results[0]) throw new Error('Link not found');
        else {
            let obj = results[0].properties.Url;
            return obj.type === 'url' ? obj.url : '';
        }
    } catch (error) {
        throw new Error(error.message);
    }
}
