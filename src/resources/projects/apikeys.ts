// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Apikeys extends APIResource {
  /**
   * Create an API key for your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  create(
    subdomain: string,
    body: ApikeyCreateParams,
    options?: RequestOptions,
  ): APIPromise<ApikeyCreateResponse> {
    return this._client.post(path`/projects/${subdomain}/apikeys`, { body, ...options });
  }

  /**
   * Get an API key for your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  retrieve(
    apiKeyID: string,
    params: ApikeyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ApikeyRetrieveResponse> {
    const { subdomain } = params;
    return this._client.get(path`/projects/${subdomain}/apikeys/${apiKeyID}`, options);
  }

  /**
   * Update an API key on your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  update(
    apiKeyID: string,
    params: ApikeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ApikeyUpdateResponse> {
    const { subdomain, ...body } = params;
    return this._client.patch(path`/projects/${subdomain}/apikeys/${apiKeyID}`, { body, ...options });
  }

  /**
   * Get the API keys for your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  list(
    subdomain: string,
    query: ApikeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ApikeyListResponse> {
    return this._client.get(path`/projects/${subdomain}/apikeys`, { query, ...options });
  }

  /**
   * Delete an API key from your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  delete(apiKeyID: string, params: ApikeyDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { subdomain } = params;
    return this._client.delete(path`/projects/${subdomain}/apikeys/${apiKeyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ApikeyCreateResponse {
  data: ApikeyCreateResponse.Data;
}

export namespace ApikeyCreateResponse {
  export interface Data {
    token: string;

    /**
     * An ISO 8601 formatted date for when the API key was created.
     */
    created_at: string;

    label: string | null;

    /**
     * An ISO 8601 formatted date for when the API key was last accessed.
     */
    last_accessed_on: string | null;

    uri: string;
  }
}

export interface ApikeyRetrieveResponse {
  data: ApikeyRetrieveResponse.Data;
}

export namespace ApikeyRetrieveResponse {
  export interface Data {
    token: string;

    /**
     * An ISO 8601 formatted date for when the API key was created.
     */
    created_at: string;

    label: string | null;

    /**
     * An ISO 8601 formatted date for when the API key was last accessed.
     */
    last_accessed_on: string | null;

    uri: string;
  }
}

export interface ApikeyUpdateResponse {
  data: ApikeyUpdateResponse.Data;
}

export namespace ApikeyUpdateResponse {
  export interface Data {
    token: string;

    /**
     * An ISO 8601 formatted date for when the API key was created.
     */
    created_at: string;

    label: string | null;

    /**
     * An ISO 8601 formatted date for when the API key was last accessed.
     */
    last_accessed_on: string | null;

    uri: string;
  }
}

export interface ApikeyListResponse {
  data: Array<ApikeyListResponse.Data>;

  page: number;

  paging: ApikeyListResponse.Paging;

  per_page: number;

  total: number;
}

export namespace ApikeyListResponse {
  export interface Data {
    token: string;

    /**
     * An ISO 8601 formatted date for when the API key was created.
     */
    created_at: string;

    label: string | null;

    /**
     * An ISO 8601 formatted date for when the API key was last accessed.
     */
    last_accessed_on: string | null;

    uri: string;
  }

  export interface Paging {
    first: string | null;

    last: string | null;

    next: string | null;

    previous: string | null;
  }
}

export interface ApikeyCreateParams {
  label: string;
}

export interface ApikeyRetrieveParams {
  /**
   * The subdomain of your project.
   */
  subdomain: string;
}

export interface ApikeyUpdateParams {
  /**
   * Path param: The subdomain of your project.
   */
  subdomain: string;

  /**
   * Body param:
   */
  label: string;
}

export interface ApikeyListParams {
  /**
   * Used to specify further pages (starts at 1).
   */
  page?: number;

  /**
   * Number of items to include in pagination (up to 100, defaults to 10).
   */
  per_page?: number;
}

export interface ApikeyDeleteParams {
  /**
   * The subdomain of your project.
   */
  subdomain: string;
}

export declare namespace Apikeys {
  export {
    type ApikeyCreateResponse as ApikeyCreateResponse,
    type ApikeyRetrieveResponse as ApikeyRetrieveResponse,
    type ApikeyUpdateResponse as ApikeyUpdateResponse,
    type ApikeyListResponse as ApikeyListResponse,
    type ApikeyCreateParams as ApikeyCreateParams,
    type ApikeyRetrieveParams as ApikeyRetrieveParams,
    type ApikeyUpdateParams as ApikeyUpdateParams,
    type ApikeyListParams as ApikeyListParams,
    type ApikeyDeleteParams as ApikeyDeleteParams,
  };
}
