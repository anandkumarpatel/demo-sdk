// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'branches.custom_pages',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/branches/{branch}/custom_pages',
  operationId: 'createCustomPage',
};

export const tool: Tool = {
  name: 'create_branches_custom_pages',
  description:
    "Create a custom page in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {
      branch: {
        type: 'string',
      },
      title: {
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
        required: [],
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
              url: {
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
      privacy: {
        type: 'object',
        properties: {
          view: {
            type: 'string',
            description: 'The visibility of this custom page.',
            enum: ['public', 'anyone_with_link'],
          },
        },
        required: [],
      },
      slug: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  return client.branches.customPages.create(branch, body);
};

export default { metadata, tool, handler };
