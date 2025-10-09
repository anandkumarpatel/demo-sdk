// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'readme-v2-mcp/filtering';
import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'validate',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/validate/api',
  operationId: 'validateAPI',
};

export const tool: Tool = {
  name: 'api_validate',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nValidates an API definition for uploading to your ReadMe project.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/validate_api_response',\n  $defs: {\n    validate_api_response: {\n      type: 'object',\n      properties: {\n        schema: {\n          type: 'object',\n          description: 'The API schema.',\n          additionalProperties: true\n        }\n      },\n      required: [        'schema'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.validate.api(body)));
};

export default { metadata, tool, handler };
