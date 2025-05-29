// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ReadmeV2 from 'readme-v2';

export const metadata: Metadata = {
  resource: 'projects.apikeys',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/projects/{subdomain}/apikeys/{api_key_id}',
  operationId: 'updateAPIKey',
};

export const tool: Tool = {
  name: 'update_projects_apikeys',
  description:
    "Update an API key on your ReadMe project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {
      subdomain: {
        type: 'string',
      },
      api_key_id: {
        type: 'string',
      },
      label: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { api_key_id, ...body } = args as any;
  return client.projects.apikeys.update(api_key_id, body);
};

export default { metadata, tool, handler };
