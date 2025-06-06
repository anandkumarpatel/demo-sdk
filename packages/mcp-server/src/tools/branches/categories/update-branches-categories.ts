// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'branches.categories',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/branches/{branch}/categories/{section}/{title}',
  operationId: 'updateCategory',
};

export const tool: Tool = {
  name: 'update_branches_categories',
  description:
    "Update an existing category in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {
      branch: {
        type: 'string',
      },
      section: {
        type: 'string',
        description: 'The section of your documentation where the category resides.',
        enum: ['guide', 'reference'],
      },
      title: {
        type: 'string',
        description: "The category's name.",
      },
      position: {
        type: 'number',
        description: "The position of the category in your project's sidebar.",
      },
    },
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { title, ...body } = args as any;
  return asTextContentResult(await client.branches.categories.update(title, body));
};

export default { metadata, tool, handler };
