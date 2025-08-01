// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'readme-v2-mcp/filtering';
import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'branches.custom_pages',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/branches/{branch}/custom_pages/{slug}',
  operationId: 'updateCustomPage',
};

export const tool: Tool = {
  name: 'update_branches_custom_pages',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an existing custom page in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        appearance: {\n          type: 'object',\n          properties: {\n            fullscreen: {\n              type: 'boolean',\n              description: 'Whether a html custom page is fullscreen or not.'\n            }\n          }\n        },\n        content: {\n          type: 'object',\n          properties: {\n            body: {\n              type: 'string'\n            },\n            type: {\n              type: 'string',\n              description: 'The type of content contained in this custom page.',\n              enum: [                'markdown',\n                'html'\n              ]\n            }\n          },\n          required: [            'body'\n          ]\n        },\n        links: {\n          type: 'object',\n          properties: {\n            project: {\n              type: 'string',\n              description: 'A URI to the project resource.'\n            }\n          },\n          required: [            'project'\n          ]\n        },\n        metadata: {\n          type: 'object',\n          properties: {\n            description: {\n              type: 'string'\n            },\n            image: {\n              type: 'object',\n              properties: {\n                uri: {\n                  type: 'string',\n                  description: 'A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.'\n                },\n                url: {\n                  type: 'string'\n                }\n              },\n              required: [                'uri',\n                'url'\n              ]\n            },\n            keywords: {\n              type: 'string',\n              description: 'A comma-separated list of keywords to place into your custom page metadata.'\n            },\n            title: {\n              type: 'string'\n            }\n          },\n          required: [            'description',\n            'image',\n            'keywords',\n            'title'\n          ]\n        },\n        privacy: {\n          type: 'object',\n          properties: {\n            view: {\n              type: 'string',\n              description: 'The visibility of this custom page.',\n              enum: [                'public',\n                'anyone_with_link'\n              ]\n            }\n          }\n        },\n        renderable: {\n          type: 'object',\n          properties: {\n            error: {\n              type: 'string',\n              description: 'The rendering error.'\n            },\n            message: {\n              type: 'string',\n              description: 'Additional details about the rendering error.'\n            },\n            status: {\n              type: 'boolean',\n              description: 'A flag for if the resource is renderable or not.'\n            }\n          }\n        },\n        slug: {\n          type: 'string'\n        },\n        title: {\n          type: 'string'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'An ISO 8601 formatted date for when the custom page was updated.',\n          format: 'date-time'\n        },\n        uri: {\n          type: 'string'\n        }\n      },\n      required: [        'appearance',\n        'content',\n        'links',\n        'metadata',\n        'privacy',\n        'renderable',\n        'slug',\n        'title',\n        'updated_at',\n        'uri'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      branch: {
        type: 'string',
      },
      path_slug: {
        type: 'string',
      },
      appearance: {
        type: 'object',
        properties: {
          fullscreen: {
            type: 'boolean',
            description: 'Whether a html custom page is fullscreen or not.',
          },
        },
      },
      content: {
        type: 'object',
        properties: {
          body: {
            type: 'string',
          },
          type: {
            type: 'string',
            description: 'The type of content contained in this custom page.',
            enum: ['markdown', 'html'],
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
              url: {
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
      privacy: {
        type: 'object',
        properties: {
          view: {
            type: 'string',
            description: 'The visibility of this custom page.',
            enum: ['public', 'anyone_with_link'],
          },
        },
      },
      body_slug: {
        type: 'string',
      },
      title: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['branch', 'path_slug'],
  },
  annotations: {},
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { slug, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.branches.customPages.update(slug, body)),
  );
};

export default { metadata, tool, handler };
