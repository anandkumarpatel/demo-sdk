// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class OutboundIPs extends APIResource {
  /**
   * Get all of ReadMe's IP addresses used for outbound webhook requests and the "Try
   * It!" button on the API Explorer.
   *
   * Although ReadMe's outbound IP addresses may change, the IPs in this API response
   * will be valid for at least 7 days. If you configure your API or webhooks to
   * limit access based on these IPs, you should refresh the IP list from this
   * endpoint weekly.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  list(options?: RequestOptions): APIPromise<OutboundIPListResponse> {
    return this._client.get('/outbound_ips', options);
  }
}

/**
 * List of current IP addresses used for webhook and "Try It!" proxy requests.
 */
export interface OutboundIPListResponse {
  data: Array<OutboundIPListResponse.Data>;
}

export namespace OutboundIPListResponse {
  export interface Data {
    /**
     * The IP address.
     */
    ip_address: string;
  }
}

export declare namespace OutboundIPs {
  export { type OutboundIPListResponse as OutboundIPListResponse };
}
