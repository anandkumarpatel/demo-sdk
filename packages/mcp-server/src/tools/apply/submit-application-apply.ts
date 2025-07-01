// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'readme-v2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
    "This endpoint will let you apply to a job at ReadMe programatically, without having to go through our UI!\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
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
    },
  },
};

export const handler = async (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.apply.submitApplication(body));
};

export default { metadata, tool, handler };
