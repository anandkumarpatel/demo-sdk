// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'changelogs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/changelogs/{identifier}',
  operationId: 'deleteChangelog',
};

export const tool: Tool = {
  name: 'delete_changelogs',
  description:
    "Delete a changelog entry from your ReadMe project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {
      identifier: {
        type: 'string',
        description: 'A unique identifier for the resource.',
      },
    },
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { identifier, ...body } = args as any;
  await client.changelogs.delete(identifier);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
