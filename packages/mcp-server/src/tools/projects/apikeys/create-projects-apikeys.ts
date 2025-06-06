// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'projects.apikeys',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/projects/{subdomain}/apikeys',
  operationId: 'createAPIKey',
};

export const tool: Tool = {
  name: 'create_projects_apikeys',
  description:
    "Create an API key for your ReadMe project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {
      subdomain: {
        type: 'string',
      },
      label: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { subdomain, ...body } = args as any;
  return asTextContentResult(await client.projects.apikeys.create(subdomain, body));
};

export default { metadata, tool, handler };
