// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Searches the ReadMe project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  perform(query: SearchPerformParams, options?: RequestOptions): APIPromise<SearchPerformResponse> {
    return this._client.get('/search', { query, ...options });
  }
}

export interface SearchPerformResponse {
  data: Array<SearchPerformResponse.Data>;

  total: number;
}

export namespace SearchPerformResponse {
  export interface Data {
    api: Data.API;

    excerpt: string;

    highlights: Array<Data.Highlight>;

    project: Data.Project;

    section: 'guides' | 'reference' | 'recipes' | 'custom_pages' | 'discuss' | 'changelog';

    slug: string;

    title: string;

    uri: string;

    url: Data.URL;

    /**
     * The semver version number this search is scoped to.
     */
    version: string | null;
  }

  export namespace Data {
    export interface API {
      method: string | null;
    }

    export interface Highlight {
      path: 'title' | 'excerpt' | 'searchContents';

      score: number;

      texts: Array<Highlight.Text>;
    }

    export namespace Highlight {
      export interface Text {
        type: 'hit' | 'text';

        value: string;
      }
    }

    export interface Project {
      name: string;

      subdomain: string;
    }

    export interface URL {
      /**
       * The full URL of the page.
       */
      full: string;

      /**
       * The relative URL of the page without the version or base URL.
       */
      relative: string;
    }
  }
}

export interface SearchPerformParams {
  /**
   * The plain text search query used to search across the project.
   */
  query: string;

  /**
   * Limit search to only these projects in an Enterprise group.
   */
  projects?: Array<string>;

  /**
   * The section to search within.
   */
  section?: 'guides' | 'reference' | 'recipes' | 'custom_pages' | 'discuss' | 'changelog';

  /**
   * The version to search within. For enterprise, this only applies to the current
   * project.
   */
  version?: string;
}

export declare namespace Search {
  export {
    type SearchPerformResponse as SearchPerformResponse,
    type SearchPerformParams as SearchPerformParams,
  };
}
