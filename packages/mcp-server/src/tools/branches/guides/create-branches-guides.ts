// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'branches.guides',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/branches/{branch}/guides',
  operationId: 'createGuide',
};

export const tool: Tool = {
  name: 'create_branches_guides',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a page in the Guides section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {
      branch: {
        type: 'string',
      },
      category: {
        type: 'object',
        properties: {
          uri: {
            type: 'string',
            description: 'A URI to the category resource.',
          },
        },
        required: ['uri'],
      },
      title: {
        type: 'string',
      },
      allow_crawlers: {
        type: 'string',
        description: 'Allow indexing by robots.',
        enum: ['enabled', 'disabled'],
      },
      content: {
        type: 'object',
        properties: {
          body: {
            type: 'string',
          },
          excerpt: {
            type: 'string',
          },
          link: {
            type: 'object',
            description:
              'Information about where this page should redirect to; only available when `type` is `link`.',
            properties: {
              new_tab: {
                type: 'boolean',
              },
              url: {
                type: 'string',
              },
            },
            required: [],
          },
          next: {
            type: 'object',
            properties: {
              description: {
                type: 'string',
              },
              pages: {
                type: 'array',
                items: {
                  anyOf: [
                    {
                      type: 'object',
                      properties: {
                        slug: {
                          type: 'string',
                        },
                        title: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['basic', 'endpoint'],
                        },
                      },
                      required: ['slug', 'title', 'type'],
                    },
                    {
                      type: 'object',
                      properties: {
                        title: {
                          type: 'string',
                        },
                        type: {
                          type: 'string',
                          enum: ['link'],
                        },
                        url: {
                          type: 'string',
                        },
                      },
                      required: ['title', 'type', 'url'],
                    },
                  ],
                },
              },
            },
            required: [],
          },
        },
        required: [],
      },
      metadata: {
        type: 'object',
        properties: {
          description: {
            type: 'string',
          },
          image: {
            type: 'object',
            properties: {
              uri: {
                type: 'string',
              },
            },
            required: [],
          },
          keywords: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
        },
        required: [],
      },
      parent: {
        type: 'object',
        properties: {
          uri: {
            type: 'string',
          },
        },
        required: [],
      },
      position: {
        type: 'number',
      },
      privacy: {
        type: 'object',
        properties: {
          view: {
            type: 'string',
            enum: ['public', 'anyone_with_link'],
          },
        },
        required: [],
      },
      slug: {
        type: 'string',
        description: 'The accessible URL slug for the page.',
      },
      state: {
        type: 'string',
        enum: ['current', 'deprecated'],
      },
      type: {
        type: 'string',
        enum: ['api_config', 'basic', 'endpoint', 'link', 'webhook'],
      },
    },
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  return asTextContentResult(await client.branches.guides.create(branch, body));
};

export default { metadata, tool, handler };
