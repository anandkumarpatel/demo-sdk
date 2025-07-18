// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'readme-v2-mcp/filtering';
import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/search',
  operationId: 'search',
};

export const tool: Tool = {
  name: 'perform_search',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearches the ReadMe project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          api: {\n            type: 'object',\n            properties: {\n              method: {\n                type: 'string'\n              }\n            },\n            required: [              'method'\n            ]\n          },\n          excerpt: {\n            type: 'string'\n          },\n          highlights: {\n            type: 'array',\n            items: {\n              type: 'object',\n              properties: {\n                path: {\n                  type: 'string',\n                  enum: [                    'title',\n                    'excerpt',\n                    'searchContents'\n                  ]\n                },\n                score: {\n                  type: 'number'\n                },\n                texts: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      type: {\n                        type: 'string',\n                        enum: [                          'hit',\n                          'text'\n                        ]\n                      },\n                      value: {\n                        type: 'string'\n                      }\n                    },\n                    required: [                      'type',\n                      'value'\n                    ]\n                  }\n                }\n              },\n              required: [                'path',\n                'score',\n                'texts'\n              ]\n            }\n          },\n          project: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string'\n              },\n              subdomain: {\n                type: 'string'\n              }\n            },\n            required: [              'name',\n              'subdomain'\n            ]\n          },\n          section: {\n            type: 'string',\n            enum: [              'guides',\n              'reference',\n              'recipes',\n              'custom_pages',\n              'discuss',\n              'changelog'\n            ]\n          },\n          slug: {\n            type: 'string'\n          },\n          title: {\n            type: 'string'\n          },\n          uri: {\n            type: 'string'\n          },\n          url: {\n            type: 'object',\n            properties: {\n              full: {\n                type: 'string',\n                description: 'The full URL of the page.'\n              },\n              relative: {\n                type: 'string',\n                description: 'The relative URL of the page without the version or base URL.'\n              }\n            },\n            required: [              'full',\n              'relative'\n            ]\n          },\n          version: {\n            type: 'string',\n            description: 'The semver version number this search is scoped to.'\n          }\n        },\n        required: [          'api',\n          'excerpt',\n          'highlights',\n          'project',\n          'section',\n          'slug',\n          'title',\n          'uri',\n          'url',\n          'version'\n        ]\n      }\n    },\n    total: {\n      type: 'number'\n    }\n  },\n  required: [    'data',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'The plain text search query used to search across the project.',
      },
      projects: {
        type: 'array',
        description: 'Limit search to only these projects in an Enterprise group.',
        items: {
          type: 'string',
        },
      },
      section: {
        type: 'string',
        description: 'The section to search within.',
        enum: ['guides', 'reference', 'recipes', 'custom_pages', 'discuss', 'changelog'],
      },
      version: {
        type: 'string',
        description:
          'The version to search within. For enterprise, this only applies to the current project.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['query'],
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.search.perform(body)));
};

export default { metadata, tool, handler };
