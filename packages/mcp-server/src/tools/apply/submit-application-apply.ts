// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'readme-v2-mcp/filtering';
import { Metadata, asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ReadmeV2 from 'testtesttest';

export const metadata: Metadata = {
  resource: 'apply',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/apply',
  operationId: 'applyToReadMe',
};

export const tool: Tool = {
  name: 'submit_application_apply',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint will let you apply to a job at ReadMe programatically, without having to go through our UI!\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    careers: {\n      type: 'string'\n    },\n    keyvalues: {\n      type: 'string'\n    },\n    message: {\n      type: 'string'\n    },\n    poem: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    'questions?': {\n      type: 'string'\n    }\n  },\n  required: [    'careers',\n    'keyvalues',\n    'message',\n    'poem',\n    'questions?'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      job: {
        type: 'string',
        description: "The job you're looking to apply for (https://readme.com/careers).",
      },
      name: {
        type: 'string',
        description: 'Your full name',
      },
      coverLetter: {
        type: 'string',
        description: 'What should we know about you?',
      },
      dont_really_apply: {
        type: 'boolean',
        description: 'If you set this to true, we will not actually apply you to the job.',
      },
      email: {
        type: 'string',
        description: 'A valid email we can reach you at.',
      },
      github: {
        type: 'string',
        description: 'Or Bitbucket, GitLab or anywhere else your code is hosted!',
      },
      linkedin: {
        type: 'string',
        description: 'What have you been up to the past few years?',
      },
      pronouns: {
        type: 'string',
        description: 'Learn more at https://lgbtlifecenter.org/pronouns/',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.apply.submitApplication(body)));
};

export default { metadata, tool, handler };
