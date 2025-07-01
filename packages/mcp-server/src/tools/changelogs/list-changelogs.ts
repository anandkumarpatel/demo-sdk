// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
    "Get all changelog entries from your ReadMe project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
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
    },
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.changelogs.list(body));
};

export default { metadata, tool, handler };
