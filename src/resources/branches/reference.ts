// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Reference extends APIResource {
  /**
   * Create a page in the API Reference section of your ReadMe project.
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
    body: ReferenceCreateParams,
    options?: RequestOptions,
  ): APIPromise<ReferenceCreateResponse> {
    return this._client.post(path`/branches/${branch}/reference`, { body, ...options });
  }

  /**
   * Get a page from the API Reference section of your ReadMe project.
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
    params: ReferenceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ReferenceRetrieveResponse> {
    const { branch, ...query } = params;
    return this._client.get(path`/branches/${branch}/reference/${slug}`, { query, ...options });
  }

  /**
   * Updates an existing page in the API Reference section of your ReadMe project.
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
    params: ReferenceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ReferenceUpdateResponse> {
    const { branch, ...body } = params;
    return this._client.patch(path`/branches/${branch}/reference/${pathSlug}`, { body, ...options });
  }

  /**
   * Delete a page from the API Reference section of your ReadMe project.
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
  delete(slug: string, params: ReferenceDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { branch } = params;
    return this._client.delete(path`/branches/${branch}/reference/${slug}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ReferenceCreateResponse {
  data: ReferenceCreateResponse.Data;
}

export namespace ReferenceCreateResponse {
  export interface Data {
    /**
     * Information about the API that this reference page is attached to.
     */
    api: Data.API;

    api_config: 'authentication' | 'getting-started' | 'my-requests' | null;

    category: Data.Category;

    connections: Data.Connections;

    content: Data.Content;

    href: Data.Href;

    metadata: Data.Metadata;

    parent: Data.Parent;

    privacy: Data.Privacy;

    project: Data.Project;

    renderable: Data.Renderable;

    /**
     * The accessible URL slug for the page.
     */
    slug: string;

    title: string;

    /**
     * An ISO 8601 formatted date for when the page was updated.
     */
    updated_at: string;

    /**
     * A URI to the page resource.
     */
    uri: string;

    /**
     * Allow indexing by robots.
     */
    allow_crawlers?: 'enabled' | 'disabled';

    state?: 'current' | 'deprecated';

    type?: 'api_config' | 'basic' | 'endpoint' | 'link' | 'webhook';
  }

  export namespace Data {
    /**
     * Information about the API that this reference page is attached to.
     */
    export interface API {
      /**
       * The endpoint HTTP method.
       */
      method: 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace';

      /**
       * The endpoint path.
       */
      path: string;

      /**
       * The source by which this API definition was ingested.
       */
      source:
        | 'api'
        | 'apidesigner'
        | 'apieditor'
        | 'bidi'
        | 'form'
        | 'postman'
        | 'rdme'
        | 'rdme_github'
        | 'url'
        | null;

      /**
       * OpenAPI features that are utilized within this API operation.
       */
      stats: API.Stats;

      /**
       * A URI to the API resource.
       */
      uri: string | null;

      /**
       * The API schema for this reference endpoint. This schema may be a reduced (i.e.,
       * only contains the necessary information for this endpoint) and/or dereferenced
       * version of the full API definition, depending upon the query parameters used for
       * this request.
       */
      schema?: unknown;
    }

    export namespace API {
      /**
       * OpenAPI features that are utilized within this API operation.
       */
      export interface Stats {
        /**
         * This API operation, after being dereferenced, has `x-readme-ref-name` entries
         * defining what the original `$ref` schema pointers were named.
         */
        references: boolean;

        /**
         * This API operation uses `additionalProperties` for handling extra schema
         * properties.
         */
        additional_properties?: boolean;

        /**
         * This API operation has `callbacks` documented.
         */
        callbacks?: boolean;

        /**
         * This API operation contains `$ref` schema pointers that resolve to itself.
         */
        circular_references?: boolean;

        /**
         * This API operation utilizes common parameters set at the path level.
         */
        common_parameters?: boolean;

        /**
         * This API operation utilizes `discriminator` for discriminating between different
         * parts in a polymorphic schema.
         */
        discriminators?: boolean;

        /**
         * This API operation has `links` documented.
         */
        links?: boolean;

        /**
         * This API operation contains polymorphic schemas.
         */
        polymorphism?: boolean;

        /**
         * This API operation has composable variables configured for its server
         * definition.
         */
        server_variables?: boolean;

        /**
         * This API operation has parameters that have specific `style` serializations.
         */
        style?: boolean;

        /**
         * This API definition has `webhooks` documented.
         */
        webhooks?: boolean;

        /**
         * This API operation has parameters or schemas that serialize to XML.
         */
        xml?: boolean;
      }
    }

    export interface Category {
      /**
       * A URI to the category resource.
       */
      uri: string;
    }

    export interface Connections {
      /**
       * A collection of recipes that are displayed on this API reference.
       */
      recipes: Array<Connections.Recipe> | null;
    }

    export namespace Connections {
      export interface Recipe {
        /**
         * URI of the recipe that this API reference is connected to. The recipe and API
         * reference must exist within the same version.
         */
        uri: string;
      }
    }

    export interface Content {
      body: string | null;

      excerpt: string | null;

      /**
       * Information about where this page should redirect to; only available when `type`
       * is `link`.
       */
      link: Content.Link;

      next: Content.Next;
    }

    export namespace Content {
      /**
       * Information about where this page should redirect to; only available when `type`
       * is `link`.
       */
      export interface Link {
        /**
         * Should this URL be opened up in a new tab?
         */
        new_tab: boolean | null;

        url: string | null;
      }

      export interface Next {
        description: string | null;

        pages: Array<Next.UnionMember0 | Next.UnionMember1>;
      }

      export namespace Next {
        export interface UnionMember0 {
          slug: string;

          title: string | null;

          type: 'basic' | 'endpoint';
        }

        export interface UnionMember1 {
          title: string | null;

          type: 'link';

          url: string;
        }
      }
    }

    export interface Href {
      /**
       * A URL to this page in your ReadMe Dash.
       */
      dash: string;

      /**
       * A URL to this page on your ReadMe hub.
       */
      hub: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your page metadata.
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

    export interface Parent {
      /**
       * A URI to the parent page resource including the page ID or slug.
       */
      uri: string | null;
    }

    export interface Privacy {
      view?: 'public' | 'anyone_with_link';
    }

    export interface Project {
      /**
       * The name of the project.
       */
      name: string;

      /**
       * The subdomain of the project.
       */
      subdomain: string;

      /**
       * A URI to the project that this page belongs to.
       */
      uri: string;
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

export interface ReferenceRetrieveResponse {
  data: ReferenceRetrieveResponse.Data;
}

export namespace ReferenceRetrieveResponse {
  export interface Data {
    /**
     * Information about the API that this reference page is attached to.
     */
    api: Data.API;

    api_config: 'authentication' | 'getting-started' | 'my-requests' | null;

    category: Data.Category;

    connections: Data.Connections;

    content: Data.Content;

    href: Data.Href;

    metadata: Data.Metadata;

    parent: Data.Parent;

    privacy: Data.Privacy;

    project: Data.Project;

    renderable: Data.Renderable;

    /**
     * The accessible URL slug for the page.
     */
    slug: string;

    title: string;

    /**
     * An ISO 8601 formatted date for when the page was updated.
     */
    updated_at: string;

    /**
     * A URI to the page resource.
     */
    uri: string;

    /**
     * Allow indexing by robots.
     */
    allow_crawlers?: 'enabled' | 'disabled';

    state?: 'current' | 'deprecated';

    type?: 'api_config' | 'basic' | 'endpoint' | 'link' | 'webhook';
  }

  export namespace Data {
    /**
     * Information about the API that this reference page is attached to.
     */
    export interface API {
      /**
       * The endpoint HTTP method.
       */
      method: 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace';

      /**
       * The endpoint path.
       */
      path: string;

      /**
       * The source by which this API definition was ingested.
       */
      source:
        | 'api'
        | 'apidesigner'
        | 'apieditor'
        | 'bidi'
        | 'form'
        | 'postman'
        | 'rdme'
        | 'rdme_github'
        | 'url'
        | null;

      /**
       * OpenAPI features that are utilized within this API operation.
       */
      stats: API.Stats;

      /**
       * A URI to the API resource.
       */
      uri: string | null;

      /**
       * The API schema for this reference endpoint. This schema may be a reduced (i.e.,
       * only contains the necessary information for this endpoint) and/or dereferenced
       * version of the full API definition, depending upon the query parameters used for
       * this request.
       */
      schema?: unknown;
    }

    export namespace API {
      /**
       * OpenAPI features that are utilized within this API operation.
       */
      export interface Stats {
        /**
         * This API operation, after being dereferenced, has `x-readme-ref-name` entries
         * defining what the original `$ref` schema pointers were named.
         */
        references: boolean;

        /**
         * This API operation uses `additionalProperties` for handling extra schema
         * properties.
         */
        additional_properties?: boolean;

        /**
         * This API operation has `callbacks` documented.
         */
        callbacks?: boolean;

        /**
         * This API operation contains `$ref` schema pointers that resolve to itself.
         */
        circular_references?: boolean;

        /**
         * This API operation utilizes common parameters set at the path level.
         */
        common_parameters?: boolean;

        /**
         * This API operation utilizes `discriminator` for discriminating between different
         * parts in a polymorphic schema.
         */
        discriminators?: boolean;

        /**
         * This API operation has `links` documented.
         */
        links?: boolean;

        /**
         * This API operation contains polymorphic schemas.
         */
        polymorphism?: boolean;

        /**
         * This API operation has composable variables configured for its server
         * definition.
         */
        server_variables?: boolean;

        /**
         * This API operation has parameters that have specific `style` serializations.
         */
        style?: boolean;

        /**
         * This API definition has `webhooks` documented.
         */
        webhooks?: boolean;

        /**
         * This API operation has parameters or schemas that serialize to XML.
         */
        xml?: boolean;
      }
    }

    export interface Category {
      /**
       * A URI to the category resource.
       */
      uri: string;
    }

    export interface Connections {
      /**
       * A collection of recipes that are displayed on this API reference.
       */
      recipes: Array<Connections.Recipe> | null;
    }

    export namespace Connections {
      export interface Recipe {
        /**
         * URI of the recipe that this API reference is connected to. The recipe and API
         * reference must exist within the same version.
         */
        uri: string;
      }
    }

    export interface Content {
      body: string | null;

      excerpt: string | null;

      /**
       * Information about where this page should redirect to; only available when `type`
       * is `link`.
       */
      link: Content.Link;

      next: Content.Next;
    }

    export namespace Content {
      /**
       * Information about where this page should redirect to; only available when `type`
       * is `link`.
       */
      export interface Link {
        /**
         * Should this URL be opened up in a new tab?
         */
        new_tab: boolean | null;

        url: string | null;
      }

      export interface Next {
        description: string | null;

        pages: Array<Next.UnionMember0 | Next.UnionMember1>;
      }

      export namespace Next {
        export interface UnionMember0 {
          slug: string;

          title: string | null;

          type: 'basic' | 'endpoint';
        }

        export interface UnionMember1 {
          title: string | null;

          type: 'link';

          url: string;
        }
      }
    }

    export interface Href {
      /**
       * A URL to this page in your ReadMe Dash.
       */
      dash: string;

      /**
       * A URL to this page on your ReadMe hub.
       */
      hub: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your page metadata.
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

    export interface Parent {
      /**
       * A URI to the parent page resource including the page ID or slug.
       */
      uri: string | null;
    }

    export interface Privacy {
      view?: 'public' | 'anyone_with_link';
    }

    export interface Project {
      /**
       * The name of the project.
       */
      name: string;

      /**
       * The subdomain of the project.
       */
      subdomain: string;

      /**
       * A URI to the project that this page belongs to.
       */
      uri: string;
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

export interface ReferenceUpdateResponse {
  data: ReferenceUpdateResponse.Data;
}

export namespace ReferenceUpdateResponse {
  export interface Data {
    /**
     * Information about the API that this reference page is attached to.
     */
    api: Data.API;

    api_config: 'authentication' | 'getting-started' | 'my-requests' | null;

    category: Data.Category;

    connections: Data.Connections;

    content: Data.Content;

    href: Data.Href;

    metadata: Data.Metadata;

    parent: Data.Parent;

    privacy: Data.Privacy;

    project: Data.Project;

    renderable: Data.Renderable;

    /**
     * The accessible URL slug for the page.
     */
    slug: string;

    title: string;

    /**
     * An ISO 8601 formatted date for when the page was updated.
     */
    updated_at: string;

    /**
     * A URI to the page resource.
     */
    uri: string;

    /**
     * Allow indexing by robots.
     */
    allow_crawlers?: 'enabled' | 'disabled';

    state?: 'current' | 'deprecated';

    type?: 'api_config' | 'basic' | 'endpoint' | 'link' | 'webhook';
  }

  export namespace Data {
    /**
     * Information about the API that this reference page is attached to.
     */
    export interface API {
      /**
       * The endpoint HTTP method.
       */
      method: 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace';

      /**
       * The endpoint path.
       */
      path: string;

      /**
       * The source by which this API definition was ingested.
       */
      source:
        | 'api'
        | 'apidesigner'
        | 'apieditor'
        | 'bidi'
        | 'form'
        | 'postman'
        | 'rdme'
        | 'rdme_github'
        | 'url'
        | null;

      /**
       * OpenAPI features that are utilized within this API operation.
       */
      stats: API.Stats;

      /**
       * A URI to the API resource.
       */
      uri: string | null;

      /**
       * The API schema for this reference endpoint. This schema may be a reduced (i.e.,
       * only contains the necessary information for this endpoint) and/or dereferenced
       * version of the full API definition, depending upon the query parameters used for
       * this request.
       */
      schema?: unknown;
    }

    export namespace API {
      /**
       * OpenAPI features that are utilized within this API operation.
       */
      export interface Stats {
        /**
         * This API operation, after being dereferenced, has `x-readme-ref-name` entries
         * defining what the original `$ref` schema pointers were named.
         */
        references: boolean;

        /**
         * This API operation uses `additionalProperties` for handling extra schema
         * properties.
         */
        additional_properties?: boolean;

        /**
         * This API operation has `callbacks` documented.
         */
        callbacks?: boolean;

        /**
         * This API operation contains `$ref` schema pointers that resolve to itself.
         */
        circular_references?: boolean;

        /**
         * This API operation utilizes common parameters set at the path level.
         */
        common_parameters?: boolean;

        /**
         * This API operation utilizes `discriminator` for discriminating between different
         * parts in a polymorphic schema.
         */
        discriminators?: boolean;

        /**
         * This API operation has `links` documented.
         */
        links?: boolean;

        /**
         * This API operation contains polymorphic schemas.
         */
        polymorphism?: boolean;

        /**
         * This API operation has composable variables configured for its server
         * definition.
         */
        server_variables?: boolean;

        /**
         * This API operation has parameters that have specific `style` serializations.
         */
        style?: boolean;

        /**
         * This API definition has `webhooks` documented.
         */
        webhooks?: boolean;

        /**
         * This API operation has parameters or schemas that serialize to XML.
         */
        xml?: boolean;
      }
    }

    export interface Category {
      /**
       * A URI to the category resource.
       */
      uri: string;
    }

    export interface Connections {
      /**
       * A collection of recipes that are displayed on this API reference.
       */
      recipes: Array<Connections.Recipe> | null;
    }

    export namespace Connections {
      export interface Recipe {
        /**
         * URI of the recipe that this API reference is connected to. The recipe and API
         * reference must exist within the same version.
         */
        uri: string;
      }
    }

    export interface Content {
      body: string | null;

      excerpt: string | null;

      /**
       * Information about where this page should redirect to; only available when `type`
       * is `link`.
       */
      link: Content.Link;

      next: Content.Next;
    }

    export namespace Content {
      /**
       * Information about where this page should redirect to; only available when `type`
       * is `link`.
       */
      export interface Link {
        /**
         * Should this URL be opened up in a new tab?
         */
        new_tab: boolean | null;

        url: string | null;
      }

      export interface Next {
        description: string | null;

        pages: Array<Next.UnionMember0 | Next.UnionMember1>;
      }

      export namespace Next {
        export interface UnionMember0 {
          slug: string;

          title: string | null;

          type: 'basic' | 'endpoint';
        }

        export interface UnionMember1 {
          title: string | null;

          type: 'link';

          url: string;
        }
      }
    }

    export interface Href {
      /**
       * A URL to this page in your ReadMe Dash.
       */
      dash: string;

      /**
       * A URL to this page on your ReadMe hub.
       */
      hub: string;
    }

    export interface Metadata {
      description: string | null;

      image: Metadata.Image;

      /**
       * A comma-separated list of keywords to place into your page metadata.
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

    export interface Parent {
      /**
       * A URI to the parent page resource including the page ID or slug.
       */
      uri: string | null;
    }

    export interface Privacy {
      view?: 'public' | 'anyone_with_link';
    }

    export interface Project {
      /**
       * The name of the project.
       */
      name: string;

      /**
       * The subdomain of the project.
       */
      subdomain: string;

      /**
       * A URI to the project that this page belongs to.
       */
      uri: string;
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

export interface ReferenceCreateParams {
  category: ReferenceCreateParams.Category;

  title: string;

  /**
   * Allow indexing by robots.
   */
  allow_crawlers?: 'enabled' | 'disabled';

  api?: ReferenceCreateParams.API;

  api_config?: 'authentication' | 'getting-started' | 'my-requests' | null;

  connections?: ReferenceCreateParams.Connections;

  content?: ReferenceCreateParams.Content;

  metadata?: ReferenceCreateParams.Metadata;

  parent?: ReferenceCreateParams.Parent;

  position?: number;

  privacy?: ReferenceCreateParams.Privacy;

  /**
   * The accessible URL slug for the page.
   */
  slug?: string;

  state?: 'current' | 'deprecated';

  type?: 'api_config' | 'basic' | 'endpoint' | 'link' | 'webhook';
}

export namespace ReferenceCreateParams {
  export interface Category {
    /**
     * A URI to the category resource.
     */
    uri: string;
  }

  export interface API {
    /**
     * The endpoint HTTP method.
     */
    method?: 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace';

    /**
     * The endpoint path.
     */
    path?: string;

    schema?: unknown;

    source?:
      | 'api'
      | 'apidesigner'
      | 'apieditor'
      | 'bidi'
      | 'form'
      | 'postman'
      | 'rdme'
      | 'rdme_github'
      | 'url'
      | null;

    /**
     * OpenAPI features that are utilized within this API operation.
     */
    stats?: API.Stats;

    uri?: string | null;
  }

  export namespace API {
    /**
     * OpenAPI features that are utilized within this API operation.
     */
    export interface Stats {
      /**
       * This API operation uses `additionalProperties` for handling extra schema
       * properties.
       */
      additional_properties?: boolean;

      /**
       * This API operation has `callbacks` documented.
       */
      callbacks?: boolean;

      /**
       * This API operation contains `$ref` schema pointers that resolve to itself.
       */
      circular_references?: boolean;

      /**
       * This API operation utilizes common parameters set at the path level.
       */
      common_parameters?: boolean;

      /**
       * This API operation utilizes `discriminator` for discriminating between different
       * parts in a polymorphic schema.
       */
      discriminators?: boolean;

      /**
       * This API operation has `links` documented.
       */
      links?: boolean;

      /**
       * This API operation contains polymorphic schemas.
       */
      polymorphism?: boolean;

      /**
       * This API operation, after being dereferenced, has `x-readme-ref-name` entries
       * defining what the original `$ref` schema pointers were named.
       */
      references?: boolean;

      /**
       * This API operation has composable variables configured for its server
       * definition.
       */
      server_variables?: boolean;

      /**
       * This API operation has parameters that have specific `style` serializations.
       */
      style?: boolean;

      /**
       * This API definition has `webhooks` documented.
       */
      webhooks?: boolean;

      /**
       * This API operation has parameters or schemas that serialize to XML.
       */
      xml?: boolean;
    }
  }

  export interface Connections {
    recipes?: Array<Connections.Recipe> | null;
  }

  export namespace Connections {
    export interface Recipe {
      /**
       * URI of the recipe that this API reference is connected to. The recipe and API
       * reference must exist within the same version.
       */
      uri?: string;
    }
  }

  export interface Content {
    body?: string | null;

    excerpt?: string | null;

    /**
     * Information about where this page should redirect to; only available when `type`
     * is `link`.
     */
    link?: Content.Link;

    next?: Content.Next;
  }

  export namespace Content {
    /**
     * Information about where this page should redirect to; only available when `type`
     * is `link`.
     */
    export interface Link {
      new_tab?: boolean | null;

      url?: string | null;
    }

    export interface Next {
      description?: string | null;

      pages?: Array<Next.UnionMember0 | Next.UnionMember1>;
    }

    export namespace Next {
      export interface UnionMember0 {
        slug: string;

        title: string | null;

        type: 'basic' | 'endpoint';
      }

      export interface UnionMember1 {
        title: string | null;

        type: 'link';

        url: string;
      }
    }
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
    }
  }

  export interface Parent {
    uri?: string | null;
  }

  export interface Privacy {
    view?: 'public' | 'anyone_with_link';
  }
}

export interface ReferenceRetrieveParams {
  /**
   * Path param: Project version number, `stable` for your project's stable version,
   * or a valid branch name.
   */
  branch: string;

  /**
   * Query param: Whether or not to dereference the attached API definition. Defaults
   * to `false` if not specified (subject to change while API v2 is still in beta).
   */
  dereference?: 'true' | 'false';

  /**
   * Query param: Whether or not to reduce the attached API definition. Defaults to
   * `true` if not specified (subject to change while API v2 is still in beta).
   */
  reduce?: 'true' | 'false';
}

export interface ReferenceUpdateParams {
  /**
   * Path param: Project version number, `stable` for your project's stable version,
   * or a valid branch name.
   */
  branch: string;

  /**
   * Body param: Allow indexing by robots.
   */
  allow_crawlers?: 'enabled' | 'disabled';

  /**
   * Body param: Information about the API that this reference page is attached to.
   * If you wish to detach this page from an API definition, making it a stand page,
   * set `api.uri` to `null`.
   */
  api?: ReferenceUpdateParams.API;

  /**
   * Body param:
   */
  category?: ReferenceUpdateParams.Category;

  /**
   * Body param:
   */
  connections?: ReferenceUpdateParams.Connections;

  /**
   * Body param:
   */
  content?: ReferenceUpdateParams.Content;

  /**
   * Body param:
   */
  metadata?: ReferenceUpdateParams.Metadata;

  /**
   * Body param:
   */
  parent?: ReferenceUpdateParams.Parent;

  /**
   * Body param:
   */
  position?: number;

  /**
   * Body param:
   */
  privacy?: ReferenceUpdateParams.Privacy;

  /**
   * Body param: The accessible URL slug for the page.
   */
  body_slug?: string;

  /**
   * Body param:
   */
  state?: 'current' | 'deprecated';

  /**
   * Body param:
   */
  title?: string;

  /**
   * Body param:
   */
  type?: 'api_config' | 'basic' | 'endpoint' | 'link' | 'webhook';
}

export namespace ReferenceUpdateParams {
  /**
   * Information about the API that this reference page is attached to. If you wish
   * to detach this page from an API definition, making it a stand page, set
   * `api.uri` to `null`.
   */
  export interface API {
    /**
     * The endpoint HTTP method.
     */
    method?: 'get' | 'put' | 'post' | 'delete' | 'options' | 'head' | 'patch' | 'trace';

    /**
     * The endpoint path.
     */
    path?: string;

    schema?: unknown;

    source?:
      | 'api'
      | 'apidesigner'
      | 'apieditor'
      | 'bidi'
      | 'form'
      | 'postman'
      | 'rdme'
      | 'rdme_github'
      | 'url'
      | null;

    /**
     * OpenAPI features that are utilized within this API operation.
     */
    stats?: API.Stats;

    uri?: string | null;
  }

  export namespace API {
    /**
     * OpenAPI features that are utilized within this API operation.
     */
    export interface Stats {
      /**
       * This API operation uses `additionalProperties` for handling extra schema
       * properties.
       */
      additional_properties?: boolean;

      /**
       * This API operation has `callbacks` documented.
       */
      callbacks?: boolean;

      /**
       * This API operation contains `$ref` schema pointers that resolve to itself.
       */
      circular_references?: boolean;

      /**
       * This API operation utilizes common parameters set at the path level.
       */
      common_parameters?: boolean;

      /**
       * This API operation utilizes `discriminator` for discriminating between different
       * parts in a polymorphic schema.
       */
      discriminators?: boolean;

      /**
       * This API operation has `links` documented.
       */
      links?: boolean;

      /**
       * This API operation contains polymorphic schemas.
       */
      polymorphism?: boolean;

      /**
       * This API operation, after being dereferenced, has `x-readme-ref-name` entries
       * defining what the original `$ref` schema pointers were named.
       */
      references?: boolean;

      /**
       * This API operation has composable variables configured for its server
       * definition.
       */
      server_variables?: boolean;

      /**
       * This API operation has parameters that have specific `style` serializations.
       */
      style?: boolean;

      /**
       * This API definition has `webhooks` documented.
       */
      webhooks?: boolean;

      /**
       * This API operation has parameters or schemas that serialize to XML.
       */
      xml?: boolean;
    }
  }

  export interface Category {
    /**
     * A URI to the category resource.
     */
    uri?: string;
  }

  export interface Connections {
    recipes?: Array<Connections.Recipe> | null;
  }

  export namespace Connections {
    export interface Recipe {
      /**
       * URI of the recipe that this API reference is connected to. The recipe and API
       * reference must exist within the same version.
       */
      uri?: string;
    }
  }

  export interface Content {
    body?: string | null;

    excerpt?: string | null;

    /**
     * Information about where this page should redirect to; only available when `type`
     * is `link`.
     */
    link?: Content.Link;

    next?: Content.Next;
  }

  export namespace Content {
    /**
     * Information about where this page should redirect to; only available when `type`
     * is `link`.
     */
    export interface Link {
      new_tab?: boolean | null;

      url?: string | null;
    }

    export interface Next {
      description?: string | null;

      pages?: Array<Next.UnionMember0 | Next.UnionMember1>;
    }

    export namespace Next {
      export interface UnionMember0 {
        slug: string;

        title: string | null;

        type: 'basic' | 'endpoint';
      }

      export interface UnionMember1 {
        title: string | null;

        type: 'link';

        url: string;
      }
    }
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
    }
  }

  export interface Parent {
    uri?: string | null;
  }

  export interface Privacy {
    view?: 'public' | 'anyone_with_link';
  }
}

export interface ReferenceDeleteParams {
  /**
   * Project version number, `stable` for your project's stable version, or a valid
   * branch name.
   */
  branch: string;
}

export declare namespace Reference {
  export {
    type ReferenceCreateResponse as ReferenceCreateResponse,
    type ReferenceRetrieveResponse as ReferenceRetrieveResponse,
    type ReferenceUpdateResponse as ReferenceUpdateResponse,
    type ReferenceCreateParams as ReferenceCreateParams,
    type ReferenceRetrieveParams as ReferenceRetrieveParams,
    type ReferenceUpdateParams as ReferenceUpdateParams,
    type ReferenceDeleteParams as ReferenceDeleteParams,
  };
}
