// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'readme-v2-mcp/filtering';
import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'branches.categories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/branches/{branch}/categories',
  operationId: 'createCategory',
};

export const tool: Tool = {
  name: 'create_branches_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a category in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/category_create_response',\n  $defs: {\n    category_create_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            links: {\n              type: 'object',\n              properties: {\n                project: {\n                  type: 'string',\n                  description: 'A URI to the project that this category belongs to.'\n                }\n              },\n              required: [                'project'\n              ]\n            },\n            title: {\n              type: 'string',\n              description: 'The category\\'s name.'\n            },\n            uri: {\n              type: 'string',\n              description: 'A URI to the category resource.'\n            },\n            section: {\n              type: 'string',\n              description: 'The section of your documentation where the category resides.',\n              enum: [                'guide',\n                'reference'\n              ]\n            }\n          },\n          required: [            'links',\n            'title',\n            'uri'\n          ]\n        }\n      },\n      required: [        'data'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      branch: {
        type: 'string',
      },
      title: {
        type: 'string',
        description: "The category's name.",
      },
      section: {
        type: 'string',
        description: 'The section of your documentation where the category resides.',
        enum: ['guide', 'reference'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['branch', 'title'],
  },
  annotations: {},
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { branch, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.branches.categories.create(branch, body)),
  );
};

export default { metadata, tool, handler };
