// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'branches.reference',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/branches/{branch}/reference',
  operationId: 'createReference',
};

export const tool: Tool = {
  name: 'create_branches_reference',
  description:
    "Create a page in the API Reference section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
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
      api: {
        type: 'object',
        properties: {
          method: {
            type: 'string',
            description: 'The endpoint HTTP method.',
            enum: ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace'],
          },
          path: {
            type: 'string',
            description: 'The endpoint path.',
          },
          schema: {
            type: 'object',
          },
          source: {
            type: 'string',
            enum: [
              'api',
              'apidesigner',
              'apieditor',
              'bidi',
              'form',
              'postman',
              'rdme',
              'rdme_github',
              'url',
            ],
          },
          stats: {
            type: 'object',
            description: 'OpenAPI features that are utilized within this API operation.',
            properties: {
              additional_properties: {
                type: 'boolean',
                description:
                  'This API operation uses `additionalProperties` for handling extra schema properties.',
              },
              callbacks: {
                type: 'boolean',
                description: 'This API operation has `callbacks` documented.',
              },
              circular_references: {
                type: 'boolean',
                description: 'This API operation contains `$ref` schema pointers that resolve to itself.',
              },
              common_parameters: {
                type: 'boolean',
                description: 'This API operation utilizes common parameters set at the path level.',
              },
              discriminators: {
                type: 'boolean',
                description:
                  'This API operation utilizes `discriminator` for discriminating between different parts in a polymorphic schema.',
              },
              links: {
                type: 'boolean',
                description: 'This API operation has `links` documented.',
              },
              polymorphism: {
                type: 'boolean',
                description: 'This API operation contains polymorphic schemas.',
              },
              references: {
                type: 'boolean',
                description:
                  'This API operation, after being dereferenced, has `x-readme-ref-name` entries defining what the original `$ref` schema pointers were named.',
              },
              server_variables: {
                type: 'boolean',
                description:
                  'This API operation has composable variables configured for its server definition.',
              },
              style: {
                type: 'boolean',
                description: 'This API operation has parameters that have specific `style` serializations.',
              },
              webhooks: {
                type: 'boolean',
                description: 'This API definition has `webhooks` documented.',
              },
              xml: {
                type: 'boolean',
                description: 'This API operation has parameters or schemas that serialize to XML.',
              },
            },
          },
          uri: {
            type: 'string',
          },
        },
      },
      api_config: {
        type: 'string',
        enum: ['authentication', 'getting-started', 'my-requests'],
      },
      connections: {
        type: 'object',
        properties: {
          recipes: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                uri: {
                  type: 'string',
                  description:
                    'URI of the recipe that this API reference is connected to. The recipe and API reference must exist within the same version.',
                },
              },
            },
          },
        },
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
          },
        },
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
          },
          keywords: {
            type: 'string',
          },
          title: {
            type: 'string',
          },
        },
      },
      parent: {
        type: 'object',
        properties: {
          uri: {
            type: 'string',
          },
        },
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
    required: ['branch', 'category', 'title'],
  },
  annotations: {},
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  return asTextContentResult(await client.branches.reference.create(branch, body));
};

export default { metadata, tool, handler };
