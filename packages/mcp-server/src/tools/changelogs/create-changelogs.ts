// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ReadmeV2 from 'readme-v2';

export const metadata: Metadata = {
  resource: 'changelogs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/changelogs',
  operationId: 'createChangelog',
};

export const tool: Tool = {
  name: 'create_changelogs',
  description:
    "Create a new changelog entry in your ReadMe project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
      },
      author: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
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
        },
        required: [],
      },
      created_at: {
        type: 'string',
        description: 'An ISO 8601 formatted date for when the changelog was created.',
        format: 'date-time',
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
            description: 'The visibility of this changelog.',
            enum: ['public', 'anyone_with_link'],
          },
        },
        required: [],
      },
      slug: {
        type: 'string',
      },
      type: {
        type: 'string',
        description: 'The type of changelog that this is.',
        enum: ['none', 'added', 'fixed', 'improved', 'deprecated', 'removed'],
      },
    },
  },
};

export const handler = (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.changelogs.create(body);
};

export default { metadata, tool, handler };
