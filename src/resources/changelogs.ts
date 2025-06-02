// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Changelogs extends APIResource {
  /**
   * Create a new changelog entry in your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  create(body: ChangelogCreateParams, options?: RequestOptions): APIPromise<ChangelogCreateResponse> {
    return this._client.post('/changelogs', { body, ...options });
  }

  /**
   * Get a changelog entry from your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  retrieve(identifier: string, options?: RequestOptions): APIPromise<ChangelogRetrieveResponse> {
    return this._client.get(path`/changelogs/${identifier}`, options);
  }

  /**
   * Update an existing changelog entry in your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  update(
    identifier: string,
    body: ChangelogUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChangelogUpdateResponse> {
    return this._client.patch(path`/changelogs/${identifier}`, { body, ...options });
  }

  /**
   * Get all changelog entries from your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  list(
    query: ChangelogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ChangelogListResponse> {
    return this._client.get('/changelogs', { query, ...options });
  }

  /**
   * Delete a changelog entry from your ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  delete(identifier: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/changelogs/${identifier}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ChangelogCreateResponse {
  data: ChangelogCreateResponse.Data;
}

export namespace ChangelogCreateResponse {
  export interface Data {
    author: Data.Author;

    content: Data.Content;

    /**
     * An ISO 8601 formatted date for when the changelog was created.
     */
    created_at: string;

    links: Data.Links;

    metadata: Data.Metadata;

    privacy: Data.Privacy;

    slug: string;

    title: string;

    /**
     * An ISO 8601 formatted date for when the changelog was updated.
     */
    updated_at: string;

    uri: string;

    /**
     * The type of changelog that this is.
     */
    type?: 'none' | 'added' | 'fixed' | 'improved' | 'deprecated' | 'removed';
  }

  export namespace Data {
    export interface Author {
      /**
       * User ID of the changelog author.
       */
      id: string | null;

      /**
       * Full name of the user who created the changelog.
       */
      name: string | null;
    }

    export interface Content {
      body: string | null;
    }

    export interface Links {
      /**
       * A URI to the project that this changelog belongs to.
       */
      project: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your changelog metadata.
       */
      keywords: string | null;

      title: string | null;
    }

    export namespace Metadata {
      export interface Image {
        /**
         * A URI to the `getImages` endpoint for this image. If the is a legacy image then
         * this `uri` will be `null`. And if you wish to delete this image then you should
         * set this to `null`.
         */
        uri: string | null;

        url: string | null;
      }
    }

    export interface Privacy {
      /**
       * The visibility of this changelog.
       */
      view?: 'public' | 'anyone_with_link';
    }
  }
}

export interface ChangelogRetrieveResponse {
  data: ChangelogRetrieveResponse.Data;
}

export namespace ChangelogRetrieveResponse {
  export interface Data {
    author: Data.Author;

    content: Data.Content;

    /**
     * An ISO 8601 formatted date for when the changelog was created.
     */
    created_at: string;

    links: Data.Links;

    metadata: Data.Metadata;

    privacy: Data.Privacy;

    slug: string;

    title: string;

    /**
     * An ISO 8601 formatted date for when the changelog was updated.
     */
    updated_at: string;

    uri: string;

    /**
     * The type of changelog that this is.
     */
    type?: 'none' | 'added' | 'fixed' | 'improved' | 'deprecated' | 'removed';
  }

  export namespace Data {
    export interface Author {
      /**
       * User ID of the changelog author.
       */
      id: string | null;

      /**
       * Full name of the user who created the changelog.
       */
      name: string | null;
    }

    export interface Content {
      body: string | null;
    }

    export interface Links {
      /**
       * A URI to the project that this changelog belongs to.
       */
      project: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your changelog metadata.
       */
      keywords: string | null;

      title: string | null;
    }

    export namespace Metadata {
      export interface Image {
        /**
         * A URI to the `getImages` endpoint for this image. If the is a legacy image then
         * this `uri` will be `null`. And if you wish to delete this image then you should
         * set this to `null`.
         */
        uri: string | null;

        url: string | null;
      }
    }

    export interface Privacy {
      /**
       * The visibility of this changelog.
       */
      view?: 'public' | 'anyone_with_link';
    }
  }
}

export interface ChangelogUpdateResponse {
  data: ChangelogUpdateResponse.Data;
}

export namespace ChangelogUpdateResponse {
  export interface Data {
    author: Data.Author;

    content: Data.Content;

    /**
     * An ISO 8601 formatted date for when the changelog was created.
     */
    created_at: string;

    links: Data.Links;

    metadata: Data.Metadata;

    privacy: Data.Privacy;

    slug: string;

    title: string;

    /**
     * An ISO 8601 formatted date for when the changelog was updated.
     */
    updated_at: string;

    uri: string;

    /**
     * The type of changelog that this is.
     */
    type?: 'none' | 'added' | 'fixed' | 'improved' | 'deprecated' | 'removed';
  }

  export namespace Data {
    export interface Author {
      /**
       * User ID of the changelog author.
       */
      id: string | null;

      /**
       * Full name of the user who created the changelog.
       */
      name: string | null;
    }

    export interface Content {
      body: string | null;
    }

    export interface Links {
      /**
       * A URI to the project that this changelog belongs to.
       */
      project: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your changelog metadata.
       */
      keywords: string | null;

      title: string | null;
    }

    export namespace Metadata {
      export interface Image {
        /**
         * A URI to the `getImages` endpoint for this image. If the is a legacy image then
         * this `uri` will be `null`. And if you wish to delete this image then you should
         * set this to `null`.
         */
        uri: string | null;

        url: string | null;
      }
    }

    export interface Privacy {
      /**
       * The visibility of this changelog.
       */
      view?: 'public' | 'anyone_with_link';
    }
  }
}

export interface ChangelogListResponse {
  data: Array<ChangelogListResponse.Data>;

  page: number;

  paging: ChangelogListResponse.Paging;

  per_page: number;

  total: number;
}

export namespace ChangelogListResponse {
  export interface Data {
    author: Data.Author;

    content: Data.Content;

    /**
     * An ISO 8601 formatted date for when the changelog was created.
     */
    created_at: string;

    links: Data.Links;

    metadata: Data.Metadata;

    privacy: Data.Privacy;

    slug: string;

    title: string;

    /**
     * An ISO 8601 formatted date for when the changelog was updated.
     */
    updated_at: string;

    uri: string;

    /**
     * The type of changelog that this is.
     */
    type?: 'none' | 'added' | 'fixed' | 'improved' | 'deprecated' | 'removed';
  }

  export namespace Data {
    export interface Author {
      /**
       * User ID of the changelog author.
       */
      id: string | null;

      /**
       * Full name of the user who created the changelog.
       */
      name: string | null;
    }

    export interface Content {
      body: string | null;
    }

    export interface Links {
      /**
       * A URI to the project that this changelog belongs to.
       */
      project: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your changelog metadata.
       */
      keywords: string | null;

      title: string | null;
    }

    export namespace Metadata {
      export interface Image {
        /**
         * A URI to the `getImages` endpoint for this image. If the is a legacy image then
         * this `uri` will be `null`. And if you wish to delete this image then you should
         * set this to `null`.
         */
        uri: string | null;

        url: string | null;
      }
    }

    export interface Privacy {
      /**
       * The visibility of this changelog.
       */
      view?: 'public' | 'anyone_with_link';
    }
  }

  export interface Paging {
    first: string | null;

    last: string | null;

    next: string | null;

    previous: string | null;
  }
}

export interface ChangelogCreateParams {
  title: string;

  author?: ChangelogCreateParams.Author;

  content?: ChangelogCreateParams.Content;

  /**
   * An ISO 8601 formatted date for when the changelog was created.
   */
  created_at?: string;

  metadata?: ChangelogCreateParams.Metadata;

  privacy?: ChangelogCreateParams.Privacy;

  slug?: string;

  /**
   * The type of changelog that this is.
   */
  type?: 'none' | 'added' | 'fixed' | 'improved' | 'deprecated' | 'removed';
}

export namespace ChangelogCreateParams {
  export interface Author {
    id?: string | null;
  }

  export interface Content {
    body?: string | null;
  }

  export interface Metadata {
    description?: string | null;

    image?: Metadata.Image;

    keywords?: string | null;

    title?: string | null;
  }

  export namespace Metadata {
    export interface Image {
      uri?: string | null;

      url?: string | null;
    }
  }

  export interface Privacy {
    /**
     * The visibility of this changelog.
     */
    view?: 'public' | 'anyone_with_link';
  }
}

export interface ChangelogUpdateParams {
  author?: ChangelogUpdateParams.Author;

  content?: ChangelogUpdateParams.Content;

  /**
   * An ISO 8601 formatted date for when the changelog was created.
   */
  created_at?: string;

  metadata?: ChangelogUpdateParams.Metadata;

  privacy?: ChangelogUpdateParams.Privacy;

  slug?: string;

  title?: string;

  /**
   * The type of changelog that this is.
   */
  type?: 'none' | 'added' | 'fixed' | 'improved' | 'deprecated' | 'removed';
}

export namespace ChangelogUpdateParams {
  export interface Author {
    id?: string | null;

    name?: string | null;
  }

  export interface Content {
    body?: string | null;
  }

  export interface Metadata {
    description?: string | null;

    image?: Metadata.Image;

    keywords?: string | null;

    title?: string | null;
  }

  export namespace Metadata {
    export interface Image {
      uri?: string | null;

      url?: string | null;
    }
  }

  export interface Privacy {
    /**
     * The visibility of this changelog.
     */
    view?: 'public' | 'anyone_with_link';
  }
}

export interface ChangelogListParams {
  /**
   * Used to specify further pages (starts at 1).
   */
  page?: number;

  /**
   * Number of items to include in pagination (up to 100, defaults to 10).
   */
  per_page?: number;

  /**
   * The visibility setting (`privacy.view`) for the changelog entries you wish to
   * retrieve. Defaults to `all`.
   */
  visibility?: 'public' | 'anyone_with_link' | 'all';
}

export declare namespace Changelogs {
  export {
    type ChangelogCreateResponse as ChangelogCreateResponse,
    type ChangelogRetrieveResponse as ChangelogRetrieveResponse,
    type ChangelogUpdateResponse as ChangelogUpdateResponse,
    type ChangelogListResponse as ChangelogListResponse,
    type ChangelogCreateParams as ChangelogCreateParams,
    type ChangelogUpdateParams as ChangelogUpdateParams,
    type ChangelogListParams as ChangelogListParams,
  };
}
