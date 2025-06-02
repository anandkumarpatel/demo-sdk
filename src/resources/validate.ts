// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';

export class Validate extends APIResource {
  /**
   * Validates an API definition for uploading to your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  api(
    body: ValidateAPIParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ValidateAPIResponse> {
    return this._client.post(
      '/validate/api',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface ValidateAPIResponse {
  /**
   * The API schema.
   */
  schema: Record<string, unknown>;
}

export interface ValidateAPIParams {
  /**
   * The API definition.
   */
  schema?: unknown;

  /**
   * The source that the API definition is being uploaded through.
   */
  upload_source?: unknown;

  /**
   * The URL where the API definition is hosted.
   */
  url?: unknown;
}

export declare namespace Validate {
  export { type ValidateAPIResponse as ValidateAPIResponse, type ValidateAPIParams as ValidateAPIParams };
}
