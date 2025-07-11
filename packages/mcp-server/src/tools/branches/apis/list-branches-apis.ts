// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'readme-v2-mcp/filtering';
import { asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import ReadmeV2 from 'testtesttest';

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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet all API definitions from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          created_at: {\n            type: 'string',\n            description: 'An ISO 8601 formatted date for when the API definition was created.',\n            format: 'date-time'\n          },\n          filename: {\n            type: 'string',\n            description: 'This is the unique identifier, its filename, for the API definition.'\n          },\n          source: {\n            type: 'object',\n            description: 'The sources by which this API definition was ingested.',\n            properties: {\n              current: {\n                type: 'string',\n                enum: [                  'api',\n                  'apidesigner',\n                  'apieditor',\n                  'bidi',\n                  'form',\n                  'postman',\n                  'rdme',\n                  'rdme_github',\n                  'url'\n                ]\n              },\n              original: {\n                type: 'string',\n                enum: [                  'api',\n                  'apidesigner',\n                  'apieditor',\n                  'bidi',\n                  'form',\n                  'postman',\n                  'rdme',\n                  'rdme_github',\n                  'url'\n                ]\n              }\n            },\n            required: [              'current',\n              'original'\n            ]\n          },\n          type: {\n            type: 'string',\n            description: 'The type of API definition. This will be `unknown` if the API definition has either not yet been processed or failed with validation errors.',\n            enum: [              'openapi',\n              'postman',\n              'swagger',\n              'unknown'\n            ]\n          },\n          updated_at: {\n            type: 'string',\n            description: 'An ISO 8601 formatted date for when the API definition was last updated.',\n            format: 'date-time'\n          },\n          upload: {\n            type: 'object',\n            properties: {\n              reason: {\n                type: 'string',\n                description: 'The reason for the upload failure if it failed.'\n              },\n              status: {\n                type: 'string',\n                description: 'The status of the API definition upload.',\n                enum: [                  'pending',\n                  'failed',\n                  'done',\n                  'pending_update',\n                  'failed_update'\n                ]\n              },\n              warnings: {\n                type: 'string',\n                description: 'Any fixable warnings that may exist within the API definition if the upload was ingested without errors.'\n              }\n            },\n            required: [              'reason',\n              'status',\n              'warnings'\n            ]\n          },\n          uri: {\n            type: 'string',\n            description: 'A URI to the API definition resource.'\n          }\n        },\n        required: [          'created_at',\n          'filename',\n          'source',\n          'type',\n          'updated_at',\n          'upload',\n          'uri'\n        ]\n      }\n    },\n    total: {\n      type: 'number'\n    }\n  },\n  required: [    'data',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      branch: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { branch, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.branches.apis.list(branch)));
};

export default { metadata, tool, handler };
