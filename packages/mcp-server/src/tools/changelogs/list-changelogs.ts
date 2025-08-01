// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'readme-v2-mcp/filtering';
import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'changelogs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/changelogs',
  operationId: 'getChangelogs',
};

export const tool: Tool = {
  name: 'list_changelogs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all changelog entries from your ReadMe project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          author: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'User ID of the changelog author.'\n              },\n              name: {\n                type: 'string',\n                description: 'Full name of the user who created the changelog.'\n              }\n            },\n            required: [              'id',\n              'name'\n            ]\n          },\n          content: {\n            type: 'object',\n            properties: {\n              body: {\n                type: 'string'\n              }\n            },\n            required: [              'body'\n            ]\n          },\n          created_at: {\n            type: 'string',\n            description: 'An ISO 8601 formatted date for when the changelog was created.',\n            format: 'date-time'\n          },\n          links: {\n            type: 'object',\n            properties: {\n              project: {\n                type: 'string',\n                description: 'A URI to the project that this changelog belongs to.'\n              }\n            },\n            required: [              'project'\n            ]\n          },\n          metadata: {\n            type: 'object',\n            properties: {\n              description: {\n                type: 'string'\n              },\n              image: {\n                type: 'object',\n                properties: {\n                  uri: {\n                    type: 'string',\n                    description: 'A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.'\n                  },\n                  url: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'uri',\n                  'url'\n                ]\n              },\n              keywords: {\n                type: 'string',\n                description: 'A comma-separated list of keywords to place into your changelog metadata.'\n              },\n              title: {\n                type: 'string'\n              }\n            },\n            required: [              'description',\n              'image',\n              'keywords',\n              'title'\n            ]\n          },\n          privacy: {\n            type: 'object',\n            properties: {\n              view: {\n                type: 'string',\n                description: 'The visibility of this changelog.',\n                enum: [                  'public',\n                  'anyone_with_link'\n                ]\n              }\n            }\n          },\n          slug: {\n            type: 'string'\n          },\n          title: {\n            type: 'string'\n          },\n          updated_at: {\n            type: 'string',\n            description: 'An ISO 8601 formatted date for when the changelog was updated.',\n            format: 'date-time'\n          },\n          uri: {\n            type: 'string'\n          },\n          type: {\n            type: 'string',\n            description: 'The type of changelog that this is.',\n            enum: [              'none',\n              'added',\n              'fixed',\n              'improved',\n              'deprecated',\n              'removed'\n            ]\n          }\n        },\n        required: [          'author',\n          'content',\n          'created_at',\n          'links',\n          'metadata',\n          'privacy',\n          'slug',\n          'title',\n          'updated_at',\n          'uri'\n        ]\n      }\n    },\n    page: {\n      type: 'number'\n    },\n    paging: {\n      type: 'object',\n      properties: {\n        first: {\n          type: 'string'\n        },\n        last: {\n          type: 'string'\n        },\n        next: {\n          type: 'string'\n        },\n        previous: {\n          type: 'string'\n        }\n      },\n      required: [        'first',\n        'last',\n        'next',\n        'previous'\n      ]\n    },\n    per_page: {\n      type: 'number'\n    },\n    total: {\n      type: 'number'\n    }\n  },\n  required: [    'data',\n    'page',\n    'paging',\n    'per_page',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'number',
        description: 'Used to specify further pages (starts at 1).',
      },
      per_page: {
        type: 'number',
        description: 'Number of items to include in pagination (up to 100, defaults to 10).',
      },
      visibility: {
        type: 'string',
        description:
          'The visibility setting (`privacy.view`) for the changelog entries you wish to retrieve. Defaults to `all`.',
        enum: ['public', 'anyone_with_link', 'all'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.changelogs.list(body)));
};

export default { metadata, tool, handler };
