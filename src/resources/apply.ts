// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Apply extends APIResource {
  /**
   * Returns all the roles we're hiring for at ReadMe!
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  listOpenRoles(options?: RequestOptions): APIPromise<ApplyListOpenRolesResponse> {
    return this._client.get('/apply', options);
  }

  /**
   * This endpoint will let you apply to a job at ReadMe programatically, without
   * having to go through our UI!
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  submitApplication(
    body: ApplySubmitApplicationParams,
    options?: RequestOptions,
  ): APIPromise<ApplySubmitApplicationResponse> {
    return this._client.post('/apply', { body, ...options });
  }
}

export interface ApplyListOpenRolesResponse {
  data: Array<ApplyListOpenRolesResponse.Data>;

  total: number;
}

export namespace ApplyListOpenRolesResponse {
  export interface Data {
    /**
     * The internal organization you'll be working in.
     */
    department: string;

    /**
     * The description for this open position. This content is formatted as HTML.
     */
    description: string;

    /**
     * Where this position is located at.
     */
    location: string;

    /**
     * A short pullquote for the open position.
     */
    pullquote: string;

    slug: string;

    title: string;

    /**
     * The place where you can apply for the position!
     */
    url: string;
  }
}

export interface ApplySubmitApplicationResponse {
  careers: string;

  keyvalues: string;

  message: string;

  poem: Array<string>;

  'questions?': string;
}

export interface ApplySubmitApplicationParams {
  /**
   * The job you're looking to apply for (https://readme.com/careers).
   */
  job: string;

  /**
   * Your full name
   */
  name: string;

  /**
   * What should we know about you?
   */
  coverLetter?: string;

  /**
   * If you set this to true, we will not actually apply you to the job.
   */
  dont_really_apply?: boolean;

  /**
   * A valid email we can reach you at.
   */
  email?: string;

  /**
   * Or Bitbucket, GitLab or anywhere else your code is hosted!
   */
  github?: string;

  /**
   * What have you been up to the past few years?
   */
  linkedin?: string;

  /**
   * Learn more at https://lgbtlifecenter.org/pronouns/
   */
  pronouns?: string;
}

export declare namespace Apply {
  export {
    type ApplyListOpenRolesResponse as ApplyListOpenRolesResponse,
    type ApplySubmitApplicationResponse as ApplySubmitApplicationResponse,
    type ApplySubmitApplicationParams as ApplySubmitApplicationParams,
  };
}
