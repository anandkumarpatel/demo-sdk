// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Guides extends APIResource {
  /**
   * Create a page in the Guides section of your ReadMe project.
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
  create(branch: string, body: GuideCreateParams, options?: RequestOptions): APIPromise<GuideCreateResponse> {
    return this._client.post(path`/branches/${branch}/guides`, { body, ...options });
  }

  /**
   * Get a page from the Guides section of your ReadMe project.
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
    params: GuideRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GuideRetrieveResponse> {
    const { branch } = params;
    return this._client.get(path`/branches/${branch}/guides/${slug}`, options);
  }

  /**
   * Updates an existing page in the Guides section of your ReadMe project.
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
    params: GuideUpdateParams,
    options?: RequestOptions,
  ): APIPromise<GuideUpdateResponse> {
    const { branch, ...body } = params;
    return this._client.patch(path`/branches/${branch}/guides/${pathSlug}`, { body, ...options });
  }

  /**
   * Delete a page from the Guides section of your ReadMe project.
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
  delete(slug: string, params: GuideDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { branch } = params;
    return this._client.delete(path`/branches/${branch}/guides/${slug}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface GuideCreateResponse {
  data: GuideCreateResponse.Data;
}

export namespace GuideCreateResponse {
  export interface Data {
    category: Data.Category;

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
    export interface Category {
      /**
       * A URI to the category resource.
       */
      uri: string;
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

export interface GuideRetrieveResponse {
  data: GuideRetrieveResponse.Data;
}

export namespace GuideRetrieveResponse {
  export interface Data {
    category: Data.Category;

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
    export interface Category {
      /**
       * A URI to the category resource.
       */
      uri: string;
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

export interface GuideUpdateResponse {
  data: GuideUpdateResponse.Data;
}

export namespace GuideUpdateResponse {
  export interface Data {
    category: Data.Category;

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
    export interface Category {
      /**
       * A URI to the category resource.
       */
      uri: string;
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

export interface GuideCreateParams {
  category: GuideCreateParams.Category;

  title: string;

  /**
   * Allow indexing by robots.
   */
  allow_crawlers?: 'enabled' | 'disabled';

  content?: GuideCreateParams.Content;

  metadata?: GuideCreateParams.Metadata;

  parent?: GuideCreateParams.Parent;

  position?: number;

  privacy?: GuideCreateParams.Privacy;

  /**
   * The accessible URL slug for the page.
   */
  slug?: string;

  state?: 'current' | 'deprecated';

  type?: 'api_config' | 'basic' | 'endpoint' | 'link' | 'webhook';
}

export namespace GuideCreateParams {
  export interface Category {
    /**
     * A URI to the category resource.
     */
    uri: string;
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

export interface GuideRetrieveParams {
  /**
   * Project version number, `stable` for your project's stable version, or a valid
   * branch name.
   */
  branch: string;
}

export interface GuideUpdateParams {
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
   * Body param:
   */
  category?: GuideUpdateParams.Category;

  /**
   * Body param:
   */
  content?: GuideUpdateParams.Content;

  /**
   * Body param:
   */
  metadata?: GuideUpdateParams.Metadata;

  /**
   * Body param:
   */
  parent?: GuideUpdateParams.Parent;

  /**
   * Body param:
   */
  position?: number;

  /**
   * Body param:
   */
  privacy?: GuideUpdateParams.Privacy;

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

export namespace GuideUpdateParams {
  export interface Category {
    /**
     * A URI to the category resource.
     */
    uri?: string;
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

export interface GuideDeleteParams {
  /**
   * Project version number, `stable` for your project's stable version, or a valid
   * branch name.
   */
  branch: string;
}

export declare namespace Guides {
  export {
    type GuideCreateResponse as GuideCreateResponse,
    type GuideRetrieveResponse as GuideRetrieveResponse,
    type GuideUpdateResponse as GuideUpdateResponse,
    type GuideCreateParams as GuideCreateParams,
    type GuideRetrieveParams as GuideRetrieveParams,
    type GuideUpdateParams as GuideUpdateParams,
    type GuideDeleteParams as GuideDeleteParams,
  };
}
