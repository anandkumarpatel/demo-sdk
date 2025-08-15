// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'readme-v2-mcp/filtering';
import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'branches.apis',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/branches/{branch}/apis',
  operationId: 'createAPI',
};

export const tool: Tool = {
  name: 'create_branches_apis',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an API definition in the API Reference section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        upload: {\n          type: 'object',\n          properties: {\n            status: {\n              type: 'string',\n              description: 'The status of the API definition upload.',\n              enum: [                'pending',\n                'failed',\n                'done',\n                'pending_update',\n                'failed_update'\n              ]\n            }\n          },\n          required: [            'status'\n          ]\n        },\n        uri: {\n          type: 'string',\n          description: 'A URI to the API definition resource.'\n        }\n      },\n      required: [        'upload',\n        'uri'\n      ]\n    }\n  },\n  required: [    'data'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      branch: {
        type: 'string',
      },
      schema: {
        type: 'object',
        description: 'The API definition.',
        additionalProperties: true,
      },
      upload_source: {
        type: 'object',
        description: 'The source that the API definition is being uploaded through.',
        additionalProperties: true,
      },
      url: {
        type: 'object',
        description: 'The URL where the API definition is hosted.',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['branch'],
  },
  annotations: {},
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { branch, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.branches.apis.create(branch, body)));
};

export default { metadata, tool, handler };
