// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ReadmeV2 from 'readme-v2';

export const metadata: Metadata = {
  resource: 'branches.apis',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/branches/{branch}/apis',
  operationId: 'getAPIs',
};

export const tool: Tool = {
  name: 'list_branches_apis',
  description:
    "Get all API definitions from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {
      branch: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  return client.branches.apis.list(branch);
};

export default { metadata, tool, handler };
