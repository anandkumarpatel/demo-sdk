// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ReadmeV2 from 'readme-v2';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'perform_search',
  description:
    "Searches the ReadMe project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
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
    },
  },
};

export const handler = (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.search.perform(body);
};

export default { metadata, tool, handler };
