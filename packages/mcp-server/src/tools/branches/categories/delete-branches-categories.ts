// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'branches.categories',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/branches/{branch}/categories/{section}/{title}',
  operationId: 'deleteCategory',
};

export const tool: Tool = {
  name: 'delete_branches_categories',
  description:
    "Delete a category from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {
      branch: {
        type: 'string',
      },
      section: {
        type: 'string',
        enum: ['guides', 'reference'],
      },
      title: {
        type: 'string',
      },
    },
    required: ['branch', 'section', 'title'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { title, ...body } = args as any;
  const response = await client.branches.categories.delete(title, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
