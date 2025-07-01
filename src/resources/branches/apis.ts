// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class APIs extends APIResource {
  /**
   * Create an API definition in the API Reference section of your ReadMe project.
   *
   * > 📘 This route is only available to projects that are using
   * > [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  create(
    branch: string,
    body: APICreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<APICreateResponse> {
    return this._client.post(
      path`/branches/${branch}/apis`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get an API definition from your ReadMe project.
   *
   * > 📘 This route is only available to projects that are using
   * > [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  retrieve(
    filename: string,
    params: APIRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<APIRetrieveResponse> {
    const { branch } = params;
    return this._client.get(path`/branches/${branch}/apis/${filename}`, options);
  }

  /**
   * Updates an API definition in the API Reference section of your ReadMe project.
   *
   * > 📘 This route is only available to projects that are using
   * > [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  update(filename: string, params: APIUpdateParams, options?: RequestOptions): APIPromise<APIUpdateResponse> {
    const { branch, ...body } = params;
    return this._client.put(
      path`/branches/${branch}/apis/${filename}`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get all API definitions from your ReadMe project.
   *
   * > 📘 This route is only available to projects that are using
   * > [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  list(branch: string, options?: RequestOptions): APIPromise<APIListResponse> {
    return this._client.get(path`/branches/${branch}/apis`, options);
  }

  /**
   * Delete an API definition from the API Reference section of your ReadMe project.
   *
   * > 📘 This route is only available to projects that are using
   * > [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  delete(filename: string, params: APIDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { branch } = params;
    return this._client.delete(path`/branches/${branch}/apis/${filename}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface APICreateResponse {
  data: APICreateResponse.Data;
}

export namespace APICreateResponse {
  export interface Data {
    upload: Data.Upload;

    /**
     * A URI to the API definition resource.
     */
    uri: string;
  }

  export namespace Data {
    export interface Upload {
      /**
       * The status of the API definition upload.
       */
      status: 'pending' | 'failed' | 'done' | 'pending_update' | 'failed_update';
    }
  }
}

export interface APIRetrieveResponse {
  data: APIRetrieveResponse.Data;
}

export namespace APIRetrieveResponse {
  export interface Data {
    /**
     * An ISO 8601 formatted date for when the API definition was created.
     */
    created_at: string;

    /**
     * This is the unique identifier, its filename, for the API definition.
     */
    filename: string;

    /**
     * The API schema.
     */
    schema: { [key: string]: unknown };

    /**
     * The sources by which this API definition was ingested.
     */
    source: Data.Source;

    /**
     * The type of API definition. This will be `unknown` if the API definition has
     * either not yet been processed or failed with validation errors.
     */
    type: 'openapi' | 'postman' | 'swagger' | 'unknown';

    /**
     * An ISO 8601 formatted date for when the API definition was last updated.
     */
    updated_at: string;

    upload: Data.Upload;

    /**
     * A URI to the API definition resource.
     */
    uri: string;
  }

  export namespace Data {
    /**
     * The sources by which this API definition was ingested.
     */
    export interface Source {
      current:
        | 'api'
        | 'apidesigner'
        | 'apieditor'
        | 'bidi'
        | 'form'
        | 'postman'
        | 'rdme'
        | 'rdme_github'
        | 'url';

      original:
        | 'api'
        | 'apidesigner'
        | 'apieditor'
        | 'bidi'
        | 'form'
        | 'postman'
        | 'rdme'
        | 'rdme_github'
        | 'url';
    }

    export interface Upload {
      /**
       * The reason for the upload failure if it failed.
       */
      reason: string | null;

      /**
       * The status of the API definition upload.
       */
      status: 'pending' | 'failed' | 'done' | 'pending_update' | 'failed_update';

      /**
       * Any fixable warnings that may exist within the API definition if the upload was
       * ingested without errors.
       */
      warnings: string | null;
    }
  }
}

export interface APIUpdateResponse {
  data: APIUpdateResponse.Data;
}

export namespace APIUpdateResponse {
  export interface Data {
    upload: Data.Upload;

    /**
     * A URI to the API definition resource.
     */
    uri: string;
  }

  export namespace Data {
    export interface Upload {
      /**
       * The status of the API definition upload.
       */
      status: 'pending' | 'failed' | 'done' | 'pending_update' | 'failed_update';
    }
  }
}

export interface APIListResponse {
  data: Array<APIListResponse.Data>;

  total: number;
}

export namespace APIListResponse {
  export interface Data {
    /**
     * An ISO 8601 formatted date for when the API definition was created.
     */
    created_at: string;

    /**
     * This is the unique identifier, its filename, for the API definition.
     */
    filename: string;

    /**
     * The sources by which this API definition was ingested.
     */
    source: Data.Source;

    /**
     * The type of API definition. This will be `unknown` if the API definition has
     * either not yet been processed or failed with validation errors.
     */
    type: 'openapi' | 'postman' | 'swagger' | 'unknown';

    /**
     * An ISO 8601 formatted date for when the API definition was last updated.
     */
    updated_at: string;

    upload: Data.Upload;

    /**
     * A URI to the API definition resource.
     */
    uri: string;
  }

  export namespace Data {
    /**
     * The sources by which this API definition was ingested.
     */
    export interface Source {
      current:
        | 'api'
        | 'apidesigner'
        | 'apieditor'
        | 'bidi'
        | 'form'
        | 'postman'
        | 'rdme'
        | 'rdme_github'
        | 'url';

      original:
        | 'api'
        | 'apidesigner'
        | 'apieditor'
        | 'bidi'
        | 'form'
        | 'postman'
        | 'rdme'
        | 'rdme_github'
        | 'url';
    }

    export interface Upload {
      /**
       * The reason for the upload failure if it failed.
       */
      reason: string | null;

      /**
       * The status of the API definition upload.
       */
      status: 'pending' | 'failed' | 'done' | 'pending_update' | 'failed_update';

      /**
       * Any fixable warnings that may exist within the API definition if the upload was
       * ingested without errors.
       */
      warnings: string | null;
    }
  }
}

export interface APICreateParams {
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

export interface APIRetrieveParams {
  /**
   * Project version number, `stable` for your project's stable version, or a valid
   * branch name.
   */
  branch: string;
}

export interface APIUpdateParams {
  /**
   * Path param: Project version number, `stable` for your project's stable version,
   * or a valid branch name.
   */
  branch: string;

  /**
   * Body param: The API definition.
   */
  schema?: unknown;

  /**
   * Body param: The source that the API definition is being uploaded through.
   */
  upload_source?: unknown;

  /**
   * Body param: The URL where the API definition is hosted.
   */
  url?: unknown;
}

export interface APIDeleteParams {
  /**
   * Project version number, `stable` for your project's stable version, or a valid
   * branch name.
   */
  branch: string;
}

export declare namespace APIs {
  export {
    type APICreateResponse as APICreateResponse,
    type APIRetrieveResponse as APIRetrieveResponse,
    type APIUpdateResponse as APIUpdateResponse,
    type APIListResponse as APIListResponse,
    type APICreateParams as APICreateParams,
    type APIRetrieveParams as APIRetrieveParams,
    type APIUpdateParams as APIUpdateParams,
    type APIDeleteParams as APIDeleteParams,
  };
}
