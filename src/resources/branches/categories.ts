// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Create a category in your ReadMe project.
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
    body: CategoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<CategoryCreateResponse> {
    return this._client.post(path`/branches/${branch}/categories`, { body, ...options });
  }

  /**
   * Update an existing category in your ReadMe project.
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
    pathTitle: string,
    params: CategoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CategoryUpdateResponse> {
    const { branch, path_section, ...body } = params;
    return this._client.patch(path`/branches/${branch}/categories/${path_section}/${pathTitle}`, {
      body,
      ...options,
    });
  }

  /**
   * Delete a category from your ReadMe project.
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
  delete(title: string, params: CategoryDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { branch, section } = params;
    return this._client.delete(path`/branches/${branch}/categories/${section}/${title}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface CategoryCreateResponse {
  data: CategoryCreateResponse.Data;
}

export namespace CategoryCreateResponse {
  export interface Data {
    links: Data.Links;

    /**
     * The category's name.
     */
    title: string;

    /**
     * A URI to the category resource.
     */
    uri: string;

    /**
     * The section of your documentation where the category resides.
     */
    section?: 'guide' | 'reference';
  }

  export namespace Data {
    export interface Links {
      /**
       * A URI to the project that this category belongs to.
       */
      project: string;
    }
  }
}

export interface CategoryUpdateResponse {
  data: CategoryUpdateResponse.Data;
}

export namespace CategoryUpdateResponse {
  export interface Data {
    links: Data.Links;

    /**
     * The category's name.
     */
    title: string;

    /**
     * A URI to the category resource.
     */
    uri: string;

    /**
     * The section of your documentation where the category resides.
     */
    section?: 'guide' | 'reference';
  }

  export namespace Data {
    export interface Links {
      /**
       * A URI to the project that this category belongs to.
       */
      project: string;
    }
  }
}

export interface CategoryCreateParams {
  /**
   * The category's name.
   */
  title: string;

  /**
   * The section of your documentation where the category resides.
   */
  section?: 'guide' | 'reference';
}

export interface CategoryUpdateParams {
  /**
   * Path param: Project version number, `stable` for your project's stable version,
   * or a valid branch name.
   */
  branch: string;

  /**
   * Path param: The section of your documentation where the category resides.
   */
  path_section: 'guides' | 'reference';

  /**
   * Body param: The position of the category in your project's sidebar.
   */
  position?: number;

  /**
   * Body param: The section of your documentation where the category resides.
   */
  body_section?: 'guide' | 'reference';

  /**
   * Body param: The category's name.
   */
  body_title?: string;
}

export interface CategoryDeleteParams {
  /**
   * Project version number, `stable` for your project's stable version, or a valid
   * branch name.
   */
  branch: string;

  /**
   * The section of your documentation where the category resides.
   */
  section: 'guides' | 'reference';
}

export declare namespace Categories {
  export {
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryUpdateResponse as CategoryUpdateResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryDeleteParams as CategoryDeleteParams,
  };
}
