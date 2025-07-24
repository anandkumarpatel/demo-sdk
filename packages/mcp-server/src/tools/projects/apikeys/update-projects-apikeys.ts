// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'readme-v2-mcp/filtering';
import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an API key on your ReadMe project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        token: {\n          type: 'string'\n        },\n        created_at: {\n          type: 'string',\n          description: 'An ISO 8601 formatted date for when the API key was created.',\n          format: 'date-time'\n        },\n        label: {\n          type: 'string'\n        },\n        last_accessed_on: {\n          type: 'string',\n          description: 'An ISO 8601 formatted date for when the API key was last accessed.',\n          format: 'date-time'\n        },\n        uri: {\n          type: 'string'\n        }\n      },\n      required: [        'token',\n        'created_at',\n        'label',\n        'last_accessed_on',\n        'uri'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['subdomain', 'api_key_id', 'label'],
  },
  annotations: {},
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { api_key_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.projects.apikeys.update(api_key_id, body)));
};

export default { metadata, tool, handler };
