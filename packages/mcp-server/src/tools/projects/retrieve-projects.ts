// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'projects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/projects/me',
  operationId: 'getProject',
};

export const tool: Tool = {
  name: 'retrieve_projects',
  description:
    "Returns data about your project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.projects.retrieve());
};

export default { metadata, tool, handler };
