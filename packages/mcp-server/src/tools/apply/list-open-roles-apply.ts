// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'readme-v2-mcp/filtering';
import { asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'apply',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/apply',
  operationId: 'getOpenRoles',
};

export const tool: Tool = {
  name: 'list_open_roles_apply',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns all the roles we're hiring for at ReadMe!\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          department: {\n            type: 'string',\n            description: 'The internal organization you\\'ll be working in.'\n          },\n          description: {\n            type: 'string',\n            description: 'The description for this open position. This content is formatted as HTML.'\n          },\n          location: {\n            type: 'string',\n            description: 'Where this position is located at.'\n          },\n          pullquote: {\n            type: 'string',\n            description: 'A short pullquote for the open position.'\n          },\n          slug: {\n            type: 'string'\n          },\n          title: {\n            type: 'string'\n          },\n          url: {\n            type: 'string',\n            description: 'The place where you can apply for the position!'\n          }\n        },\n        required: [          'department',\n          'description',\n          'location',\n          'pullquote',\n          'slug',\n          'title',\n          'url'\n        ]\n      }\n    },\n    total: {\n      type: 'number'\n    }\n  },\n  required: [    'data',\n    'total'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  return asTextContentResult(await maybeFilter(args, await client.apply.listOpenRoles()));
};

export default { metadata, tool, handler };
