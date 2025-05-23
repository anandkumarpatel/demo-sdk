// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CustomPages extends APIResource {
  /**
   * Create a custom page in your ReadMe project.
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
    body: CustomPageCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomPageCreateResponse> {
    return this._client.post(path`/branches/${branch}/custom_pages`, { body, ...options });
  }

  /**
   * Get a custom page from your ReadMe project.
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
    slug: string,
    params: CustomPageRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CustomPageRetrieveResponse> {
    const { branch } = params;
    return this._client.get(path`/branches/${branch}/custom_pages/${slug}`, options);
  }

  /**
   * Update an existing custom page in your ReadMe project.
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
  update(
    pathSlug: string,
    params: CustomPageUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CustomPageUpdateResponse> {
    const { branch, ...body } = params;
    return this._client.patch(path`/branches/${branch}/custom_pages/${pathSlug}`, { body, ...options });
  }

  /**
   * Get all custom pages from your ReadMe project.
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
  list(branch: string, options?: RequestOptions): APIPromise<CustomPageListResponse> {
    return this._client.get(path`/branches/${branch}/custom_pages`, options);
  }

  /**
   * Delete a custom page from your ReadMe project.
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
  delete(slug: string, params: CustomPageDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { branch } = params;
    return this._client.delete(path`/branches/${branch}/custom_pages/${slug}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CustomPageCreateResponse {
  data: CustomPageCreateResponse.Data;
}

export namespace CustomPageCreateResponse {
  export interface Data {
    appearance: Data.Appearance;

    content: Data.Content;

    links: Data.Links;

    metadata: Data.Metadata;

    privacy: Data.Privacy;

    renderable: Data.Renderable;

    slug: string;

    title: string | null;

    /**
     * An ISO 8601 formatted date for when the custom page was updated.
     */
    updated_at: string | null;

    uri: string;
  }

  export namespace Data {
    export interface Appearance {
      /**
       * Whether a html custom page is fullscreen or not.
       */
      fullscreen?: boolean;
    }

    export interface Content {
      body: string | null;

      /**
       * The type of content contained in this custom page.
       */
      type?: 'markdown' | 'html';
    }

    export interface Links {
      /**
       * A URI to the project resource.
       */
      project: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your custom page metadata.
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
       * The visibility of this custom page.
       */
      view?: 'public' | 'anyone_with_link';
    }

    export interface Renderable {
      /**
       * The rendering error.
       */
      error?: string | null;

      /**
       * Additional details about the rendering error.
       */
      message?: string | null;

      /**
       * A flag for if the resource is renderable or not.
       */
      status?: boolean;
    }
  }
}

export interface CustomPageRetrieveResponse {
  data: CustomPageRetrieveResponse.Data;
}

export namespace CustomPageRetrieveResponse {
  export interface Data {
    appearance: Data.Appearance;

    content: Data.Content;

    links: Data.Links;

    metadata: Data.Metadata;

    privacy: Data.Privacy;

    renderable: Data.Renderable;

    slug: string;

    title: string | null;

    /**
     * An ISO 8601 formatted date for when the custom page was updated.
     */
    updated_at: string | null;

    uri: string;
  }

  export namespace Data {
    export interface Appearance {
      /**
       * Whether a html custom page is fullscreen or not.
       */
      fullscreen?: boolean;
    }

    export interface Content {
      body: string | null;

      /**
       * The type of content contained in this custom page.
       */
      type?: 'markdown' | 'html';
    }

    export interface Links {
      /**
       * A URI to the project resource.
       */
      project: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your custom page metadata.
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
       * The visibility of this custom page.
       */
      view?: 'public' | 'anyone_with_link';
    }

    export interface Renderable {
      /**
       * The rendering error.
       */
      error?: string | null;

      /**
       * Additional details about the rendering error.
       */
      message?: string | null;

      /**
       * A flag for if the resource is renderable or not.
       */
      status?: boolean;
    }
  }
}

export interface CustomPageUpdateResponse {
  data: CustomPageUpdateResponse.Data;
}

export namespace CustomPageUpdateResponse {
  export interface Data {
    appearance: Data.Appearance;

    content: Data.Content;

    links: Data.Links;

    metadata: Data.Metadata;

    privacy: Data.Privacy;

    renderable: Data.Renderable;

    slug: string;

    title: string | null;

    /**
     * An ISO 8601 formatted date for when the custom page was updated.
     */
    updated_at: string | null;

    uri: string;
  }

  export namespace Data {
    export interface Appearance {
      /**
       * Whether a html custom page is fullscreen or not.
       */
      fullscreen?: boolean;
    }

    export interface Content {
      body: string | null;

      /**
       * The type of content contained in this custom page.
       */
      type?: 'markdown' | 'html';
    }

    export interface Links {
      /**
       * A URI to the project resource.
       */
      project: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your custom page metadata.
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
       * The visibility of this custom page.
       */
      view?: 'public' | 'anyone_with_link';
    }

    export interface Renderable {
      /**
       * The rendering error.
       */
      error?: string | null;

      /**
       * Additional details about the rendering error.
       */
      message?: string | null;

      /**
       * A flag for if the resource is renderable or not.
       */
      status?: boolean;
    }
  }
}

export interface CustomPageListResponse {
  data: Array<CustomPageListResponse.Data>;

  total: number;
}

export namespace CustomPageListResponse {
  export interface Data {
    appearance: Data.Appearance;

    content: Data.Content;

    links: Data.Links;

    metadata: Data.Metadata;

    privacy: Data.Privacy;

    renderable: Data.Renderable;

    slug: string;

    title: string | null;

    /**
     * An ISO 8601 formatted date for when the custom page was updated.
     */
    updated_at: string | null;

    uri: string;
  }

  export namespace Data {
    export interface Appearance {
      /**
       * Whether a html custom page is fullscreen or not.
       */
      fullscreen?: boolean;
    }

    export interface Content {
      body: string | null;

      /**
       * The type of content contained in this custom page.
       */
      type?: 'markdown' | 'html';
    }

    export interface Links {
      /**
       * A URI to the project resource.
       */
      project: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your custom page metadata.
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
       * The visibility of this custom page.
       */
      view?: 'public' | 'anyone_with_link';
    }

    export interface Renderable {
      /**
       * The rendering error.
       */
      error?: string | null;

      /**
       * Additional details about the rendering error.
       */
      message?: string | null;

      /**
       * A flag for if the resource is renderable or not.
       */
      status?: boolean;
    }
  }
}

export interface CustomPageCreateParams {
  title: string | null;

  appearance?: CustomPageCreateParams.Appearance;

  content?: CustomPageCreateParams.Content;

  metadata?: CustomPageCreateParams.Metadata;

  privacy?: CustomPageCreateParams.Privacy;

  slug?: string;
}

export namespace CustomPageCreateParams {
  export interface Appearance {
    /**
     * Whether a html custom page is fullscreen or not.
     */
    fullscreen?: boolean;
  }

  export interface Content {
    body?: string | null;

    /**
     * The type of content contained in this custom page.
     */
    type?: 'markdown' | 'html';
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
     * The visibility of this custom page.
     */
    view?: 'public' | 'anyone_with_link';
  }
}

export interface CustomPageRetrieveParams {
  /**
   * Project version number, `stable` for your project's stable version, or a valid
   * branch name.
   */
  branch: string;
}

export interface CustomPageUpdateParams {
  /**
   * Path param: Project version number, `stable` for your project's stable version,
   * or a valid branch name.
   */
  branch: string;

  /**
   * Body param:
   */
  appearance?: CustomPageUpdateParams.Appearance;

  /**
   * Body param:
   */
  content?: CustomPageUpdateParams.Content;

  /**
   * Body param:
   */
  metadata?: CustomPageUpdateParams.Metadata;

  /**
   * Body param:
   */
  privacy?: CustomPageUpdateParams.Privacy;

  /**
   * Body param:
   */
  body_slug?: string;

  /**
   * Body param:
   */
  title?: string | null;
}

export namespace CustomPageUpdateParams {
  export interface Appearance {
    /**
     * Whether a html custom page is fullscreen or not.
     */
    fullscreen?: boolean;
  }

  export interface Content {
    body?: string | null;

    /**
     * The type of content contained in this custom page.
     */
    type?: 'markdown' | 'html';
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
     * The visibility of this custom page.
     */
    view?: 'public' | 'anyone_with_link';
  }
}

export interface CustomPageDeleteParams {
  /**
   * Project version number, `stable` for your project's stable version, or a valid
   * branch name.
   */
  branch: string;
}

export declare namespace CustomPages {
  export {
    type CustomPageCreateResponse as CustomPageCreateResponse,
    type CustomPageRetrieveResponse as CustomPageRetrieveResponse,
    type CustomPageUpdateResponse as CustomPageUpdateResponse,
    type CustomPageListResponse as CustomPageListResponse,
    type CustomPageCreateParams as CustomPageCreateParams,
    type CustomPageRetrieveParams as CustomPageRetrieveParams,
    type CustomPageUpdateParams as CustomPageUpdateParams,
    type CustomPageDeleteParams as CustomPageDeleteParams,
  };
}
