// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import ReadmeV2 from 'readme-v2';

export const metadata: Metadata = {
  resource: 'outbound_ips',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/outbound_ips',
  operationId: 'getOutboundIPs',
};

export const tool: Tool = {
  name: 'list_outbound_ips',
  description:
    "Get all of ReadMe's IP addresses used for outbound webhook requests and the \"Try It!\" button on the API Explorer.\n\nAlthough ReadMe's outbound IP addresses may change, the IPs in this API response will be valid for at least 7 days. If you configure your API or webhooks to limit access based on these IPs, you should refresh the IP list from this endpoint weekly.\n\n>🚧 ReadMe's API v2 is currently in beta.\n >This API and its documentation are a work in progress. While we don't expect any major breaking changes, you may encounter occasional issues as we work toward a stable release. Make sure to [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide), and [feel free to reach out](mailto:support@readme.io) if you have any questions or feedback!",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: ReadmeV2, args: Record<string, unknown> | undefined) => {
  return client.outboundIPs.list();
};

export default { metadata, tool, handler };
