// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ApikeysAPI from './apikeys';
import {
  ApikeyCreateParams,
  ApikeyCreateResponse,
  ApikeyDeleteParams,
  ApikeyListParams,
  ApikeyListResponse,
  ApikeyRetrieveParams,
  ApikeyRetrieveResponse,
  ApikeyUpdateParams,
  ApikeyUpdateResponse,
  Apikeys,
} from './apikeys';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Projects extends APIResource {
  apikeys: ApikeysAPI.Apikeys = new ApikeysAPI.Apikeys(this._client);

  /**
   * Returns data about your project.
   *
   * > 🚧 ReadMe's API v2 is currently in beta. This API and its documentation are a
   * > work in progress. While we don't expect any major breaking changes, you may
   * > encounter occasional issues as we work toward a stable release. Make sure to
   * > [check out our API migration guide](https://docs.readme.com/main/reference/api-migration-guide),
   * > and [feel free to reach out](mailto:support@readme.io) if you have any
   * > questions or feedback!
   */
  retrieve(options?: RequestOptions): APIPromise<ProjectRetrieveResponse> {
    return this._client.get('/projects/me', options);
  }
}

export interface ProjectRetrieveResponse {
  data: ProjectRetrieveResponse.Data;
}

export namespace ProjectRetrieveResponse {
  export interface Data {
    /**
     * The unique, immutable, identifier for the project.
     */
    id: string;

    api_designer: Data.APIDesigner;

    appearance: Data.Appearance;

    /**
     * The canonical base URL for your project defaults to your project's base URL, but
     * you can override the canonical base URL with this field.
     */
    canonical_url: string | null;

    custom_login: Data.CustomLogin;

    default_version: Data.DefaultVersion;

    /**
     * The description of your project. This is used in the page meta description and
     * is seen by search engines and sites like Facebook.
     */
    description: string | null;

    features: Data.Features;

    git: Data.Git;

    health_check: Data.HealthCheck;

    /**
     * The URL for your company's main website. We'll link to it in various places so
     * people can "Go Home".
     */
    homepage_url: string | null;

    integrations: Data.Integrations;

    /**
     * The name of the project.
     */
    name: string;

    onboarding_completed: Data.OnboardingCompleted;

    pages: Data.Pages;

    /**
     * Does the project have a parent project (enterprise)? If so, this resolves to the
     * parent's subdomain.
     */
    parent: string | null;

    permissions: Data.Permissions;

    plan: Data.Plan;

    privacy: Data.Privacy;

    /**
     * A collection of page redirects that ReadMe will permanently redirect users to
     * when attempting to render a 404. Check out our
     * [redirect docs](https://docs.readme.com/main/docs/error-pages#section-redirects)
     * for more information on how they are handled.
     */
    redirects: Array<Data.Redirect>;

    refactored: Data.Refactored;

    /**
     * Contains options to configure interactive sections on your API Reference pages.
     */
    reference: Data.Reference;

    seo: Data.Seo;

    /**
     * The subdomain of your project.
     */
    subdomain: string;

    /**
     * A URI to the project resource.
     */
    uri: string;

    /**
     * Allow indexing by robots.
     */
    allow_crawlers?: 'enabled' | 'disabled';

    /**
     * List of glossary terms in your project that can be used within your
     * documentation.
     */
    glossary?: Array<Data.Glossary>;

    /**
     * Expose an `llms.txt` file to help AI assistants understand your documentation
     * structure.
     */
    llms_txt?: 'enabled' | 'disabled';

    /**
     * Expose a `sitemap.xml` directory on your project.
     */
    sitemap?: 'enabled' | 'disabled';

    /**
     * Allow users to suggest edits to your documentation.
     */
    suggested_edits?: 'enabled' | 'disabled';

    variable_defaults?: Array<Data.VariableDefault>;

    webhooks?: Array<Data.Webhook>;
  }

  export namespace Data {
    export interface APIDesigner {
      /**
       * API Designer is enabled for this project.
       */
      allow_editing?: 'enabled' | 'disabled';
    }

    export interface Appearance {
      ai: Appearance.AI;

      brand: Appearance.Brand;

      changelog: Appearance.Changelog;

      custom_code: Appearance.CustomCode;

      footer: Appearance.Footer;

      header: Appearance.Header;

      logo: Appearance.Logo;

      markdown: Appearance.Markdown;

      navigation: Appearance.Navigation;

      /**
       * What should we call the next steps section of your guides? Defaults to "What's
       * Next".
       */
      whats_next_label: string | null;

      /**
       * Should your guides show a table of contents?
       */
      table_of_contents?: 'enabled' | 'disabled';
    }

    export namespace Appearance {
      export interface AI {
        options: AI.Options;

        /**
         * Should your pages show a share with AI dropdown?
         */
        dropdown?: 'enabled' | 'disabled';
      }

      export namespace AI {
        export interface Options {
          /**
           * Enable ChatGPT in the AI dropdown.
           */
          chatgpt?: 'enabled' | 'disabled';

          /**
           * Enable Claude in the AI dropdown.
           */
          claude?: 'enabled' | 'disabled';

          /**
           * Enable "Copy to Clipboard" within in the AI dropdown.
           */
          clipboard?: 'enabled' | 'disabled';

          /**
           * Enable Copilot in the AI dropdown.
           */
          copilot?: 'enabled' | 'disabled';

          /**
           * Enable Perplexity in the AI dropdown.
           */
          perplexity?: 'enabled' | 'disabled';

          /**
           * Enable "View as Markdown" in the AI dropdown.
           */
          view_as_markdown?: 'enabled' | 'disabled';
        }
      }

      export interface Brand {
        link_color: string | null;

        primary_color: string | null;

        theme?: 'system' | 'light' | 'dark';
      }

      export interface Changelog {
        layout?: 'collapsed' | 'continuous';

        /**
         * Should the changelog author be shown?
         */
        show_author?: boolean;

        /**
         * Should the exact date of the changelog entry be shown, or should it be relative?
         */
        show_exact_date?: boolean;
      }

      export interface CustomCode {
        /**
         * A chunk of custom CSS that you can use to override default CSS that we provide.
         */
        css: string | null;

        html: CustomCode.HTML;

        /**
         * A chunk of custom JS that you can use to override or add new behaviors to your
         * documentation. Please note that we do not do any validation on the code that
         * goes in here so you have the potential to negatively impact your users with
         * broken code.
         */
        js: string | null;
      }

      export namespace CustomCode {
        export interface HTML {
          /**
           * A block of custom HTML that will be added to your `<head>` tag. Good for things
           * like `<meta>` tags or loading external CSS.
           */
          header: string | null;

          /**
           * A block of custom HTML that will appear in a `<footer>` element on all of your
           * pages
           */
          home_footer: string | null;

          /**
           * A block of custom HTML that will be added before the closing `</body>` tag of
           * your pages.
           */
          page_footer: string | null;
        }
      }

      export interface Footer {
        readme_logo?: 'hide' | 'show';
      }

      export interface Header {
        gradient_color: string | null;

        overlay: Header.Overlay;

        /**
         * The styling setting of the subnav links. This value is only used if
         * `appearance.header.type` is `line`.
         */
        link_style?: 'buttons' | 'tabs';

        type?: 'solid' | 'gradient' | 'line' | 'overlay';
      }

      export namespace Header {
        export interface Overlay {
          image: Overlay.Image;

          /**
           * The header fill type. This is only used if `appearance.header.overlay.type` is
           * `custom`.
           */
          fill?: 'auto' | 'tile' | 'tile-x' | 'tile-y' | 'cover' | 'contain';

          /**
           * The positioning of the header. This is only used if
           * `appearance.header.overlay.type` is `custom`.
           */
          position?:
            | 'top-left'
            | 'top-center'
            | 'top-right'
            | 'center-left'
            | 'center-center'
            | 'center-right'
            | 'bottom-left'
            | 'bottom-center'
            | 'bottom-right';

          /**
           * The header overlay type. This value is only used if `appearance.header.type` is
           * `overlay`.
           */
          type?: 'triangles' | 'blueprint' | 'grain' | 'map' | 'circuits' | 'custom';
        }

        export namespace Overlay {
          export interface Image {
            /**
             * The primary color contained within your image.
             */
            color: string | null;

            /**
             * The pixel height of the image. This is not present for SVGs.
             */
            height: number | null;

            links: Image.Links;

            name: string | null;

            /**
             * A URI to the `getImages` endpoint for this image. If the is a legacy image then
             * this `uri` will be `null`. And if you wish to delete this image then you should
             * set this to `null`.
             */
            uri: string | null;

            url: string | null;

            /**
             * The pixel width of the image. This is not present for SVGs.
             */
            width: number | null;
          }

          export namespace Image {
            export interface Links {
              /**
               * If your image was resized upon upload this will be a URL to the original file.
               */
              original_url: string | null;
            }
          }
        }
      }

      export interface Logo {
        dark_mode: Logo.DarkMode;

        favicon: Logo.Favicon;

        main: Logo.Main;

        size?: 'default' | 'large';
      }

      export namespace Logo {
        export interface DarkMode {
          /**
           * The primary color contained within your image.
           */
          color: string | null;

          /**
           * The pixel height of the image. This is not present for SVGs.
           */
          height: number | null;

          links: DarkMode.Links;

          name: string | null;

          /**
           * A URI to the `getImages` endpoint for this image. If the is a legacy image then
           * this `uri` will be `null`. And if you wish to delete this image then you should
           * set this to `null`.
           */
          uri: string | null;

          url: string | null;

          /**
           * The pixel width of the image. This is not present for SVGs.
           */
          width: number | null;
        }

        export namespace DarkMode {
          export interface Links {
            /**
             * If your image was resized upon upload this will be a URL to the original file.
             */
            original_url: string | null;
          }
        }

        export interface Favicon {
          /**
           * The primary color contained within your image.
           */
          color: string | null;

          /**
           * The pixel height of the image. This is not present for SVGs.
           */
          height: number | null;

          links: Favicon.Links;

          name: string | null;

          /**
           * A URI to the `getImages` endpoint for this image. If the is a legacy image then
           * this `uri` will be `null`. And if you wish to delete this image then you should
           * set this to `null`.
           */
          uri: string | null;

          url: string | null;

          /**
           * The pixel width of the image. This is not present for SVGs.
           */
          width: number | null;
        }

        export namespace Favicon {
          export interface Links {
            /**
             * If your image was resized upon upload this will be a URL to the original file.
             */
            original_url: string | null;
          }
        }

        export interface Main {
          /**
           * The primary color contained within your image.
           */
          color: string | null;

          /**
           * The pixel height of the image. This is not present for SVGs.
           */
          height: number | null;

          links: Main.Links;

          name: string | null;

          /**
           * A URI to the `getImages` endpoint for this image. If the is a legacy image then
           * this `uri` will be `null`. And if you wish to delete this image then you should
           * set this to `null`.
           */
          uri: string | null;

          url: string | null;

          /**
           * The pixel width of the image. This is not present for SVGs.
           */
          width: number | null;
        }

        export namespace Main {
          export interface Links {
            /**
             * If your image was resized upon upload this will be a URL to the original file.
             */
            original_url: string | null;
          }
        }
      }

      export interface Markdown {
        callouts: Markdown.Callouts;
      }

      export namespace Markdown {
        export interface Callouts {
          /**
           * Handles the types of icons that are shown in Markdown callouts.
           */
          icon_font?: 'emojis' | 'fontawesome';
        }
      }

      export interface Navigation {
        /**
         * The navigation settings for the left side of your projects navigation bar.
         */
        left: Array<Navigation.Left>;

        links: Navigation.Links;

        /**
         * The navigation settings for the right side of your projects navigation bar.
         */
        right: Array<Navigation.Right>;

        /**
         * The navigation settings for your projects subnavigation bar.
         */
        sub_nav: Array<Navigation.SubNav>;

        /**
         * The page that users will first see when they access your documentation hub.
         */
        first_page?: 'documentation' | 'reference' | 'landing_page';

        /**
         * Where users will be directed to when they click on your logo in the navigation
         * bar.
         */
        logo_link?: 'landing_page' | 'homepage';

        /**
         * Should the links in your project navigation bar include icons?
         */
        page_icons?: 'enabled' | 'disabled';

        subheader_layout?: 'links' | 'dropdown';

        /**
         * Should your current documentation version be shown in the navigation bar?
         */
        version?: 'enabled' | 'disabled';
      }

      export namespace Navigation {
        export interface Left {
          custom_page: string | null;

          title: string | null;

          type:
            | 'home'
            | 'guides'
            | 'discussions'
            | 'changelog'
            | 'search_box'
            | 'link_url'
            | 'custom_page'
            | 'user_controls'
            | 'reference'
            | 'recipes';

          url: string | null;
        }

        export interface Links {
          changelog: Links.Changelog;

          discussions: Links.Discussions;

          graphql: Links.Graphql;

          guides: Links.Guides;

          home: Links.Home;

          recipes: Links.Recipes;

          reference: Links.Reference;
        }

        export namespace Links {
          export interface Changelog {
            alias: string | null;

            label: 'Changelog';

            visibility?: 'enabled' | 'disabled';
          }

          export interface Discussions {
            alias: string | null;

            label: 'Discussions';

            visibility?: 'enabled' | 'disabled';
          }

          export interface Graphql {
            label: 'GraphQL';

            visibility?: 'enabled' | 'disabled' | null;
          }

          export interface Guides {
            alias: string | null;

            label: 'Guides';

            visibility?: 'enabled' | 'disabled';
          }

          export interface Home {
            label: 'Home';

            visibility?: 'enabled' | 'disabled';
          }

          export interface Recipes {
            alias: string | null;

            label: 'Recipes';

            visibility?: 'enabled' | 'disabled';
          }

          export interface Reference {
            alias: string | null;

            label: 'API Reference';

            visibility?: 'enabled' | 'disabled';
          }
        }

        export interface Right {
          custom_page: string | null;

          title: string | null;

          type:
            | 'home'
            | 'guides'
            | 'discussions'
            | 'changelog'
            | 'search_box'
            | 'link_url'
            | 'custom_page'
            | 'user_controls'
            | 'reference'
            | 'recipes';

          url: string | null;
        }

        export interface SubNav {
          custom_page: string | null;

          title: string | null;

          type:
            | 'home'
            | 'guides'
            | 'discussions'
            | 'changelog'
            | 'search_box'
            | 'link_url'
            | 'custom_page'
            | 'user_controls'
            | 'reference'
            | 'recipes';

          url: string | null;
        }
      }
    }

    export interface CustomLogin {
      jwt_secret: string;

      login_url: string | null;

      logout_url: string | null;
    }

    export interface DefaultVersion {
      /**
       * The version of your project that users are directed to by default.
       */
      name: string;
    }

    export interface Features {
      /**
       * If this project supports MDX.
       */
      mdx?: 'enabled' | 'disabled';
    }

    export interface Git {
      connection: Git.Connection;
    }

    export namespace Git {
      export interface Connection {
        organization: Connection.Organization | null;

        repository: Connection.Repository | null;

        /**
         * Indicates if the project has a bi-directional sync connection set up. Below is
         * the meaning of each possible value:
         *
         * - `active` - the project has an external repository connected and the connection
         *   to the repository is active.
         * - `inactive` - the project has an external repository connected but the
         *   connection to the repository is inactive.
         * - `none` - the project is not connected to an external repository.
         */
        status?: 'active' | 'inactive' | 'none';
      }

      export namespace Connection {
        export interface Organization {
          /**
           * The name of the organization the linked repository is a part of (e.g.,
           * `owner-org`).
           */
          name: string;

          /**
           * The type of provider for the organization.
           */
          provider_type: 'github' | 'github_enterprise_server';
        }

        export interface Repository {
          /**
           * The full name of the repository (e.g., `owner-org/repo-with-content`).
           */
          full_name: string;

          /**
           * The name of the repository (e.g., `repo-with-content`).
           */
          name: string;

          /**
           * The type of provider for the repository.
           */
          provider_type: 'github' | 'github_enterprise_server';

          /**
           * The URL of the repository (e.g.,
           * `https://github.com/owner-org/repo-with-content`).
           */
          url: string;
        }
      }
    }

    export interface HealthCheck {
      settings: HealthCheck.Settings;

      /**
       * The type of provider you wish to use for for managing your APIs health: manually
       * or through
       * [Atlassian Statuspage](https://www.atlassian.com/software/statuspage).
       */
      provider?: 'manual' | 'statuspage' | 'none';
    }

    export namespace HealthCheck {
      export interface Settings {
        manual: Settings.Manual;

        statuspage: Settings.Statuspage;
      }

      export namespace Settings {
        export interface Manual {
          /**
           * The URL that we will show to your users when your API is down. This is only used
           * when `health_check.provider` is set to `manual`.
           */
          url: string | null;

          /**
           * If you are manually managing your APIs health this is a status boolean
           * indicating if your API is up or down.
           */
          status?: 'up' | 'down';
        }

        export interface Statuspage {
          /**
           * If managing your APIs health through
           * [Statuspage](https://www.atlassian.com/software/statuspage) this is your
           * Statuspage ID.
           */
          id: string | null;
        }
      }
    }

    export interface Integrations {
      aws: Integrations.Aws;

      bing: Integrations.Bing;

      google: Integrations.Google;

      heap: Integrations.Heap;

      intercom: Integrations.Intercom;

      koala: Integrations.Koala;

      localize: Integrations.Localize;

      /**
       * https://docs.readme.com/main/docs/recaptcha
       */
      recaptcha: Integrations.Recaptcha;

      segment: Integrations.Segment;

      typekit: Integrations.Typekit;

      zendesk: Integrations.Zendesk;
    }

    export namespace Integrations {
      export interface Aws {
        readme_webhook_login: Aws.ReadmeWebhookLogin;
      }

      export namespace Aws {
        export interface ReadmeWebhookLogin {
          external_id: string | null;

          region:
            | 'af-south-1'
            | 'ap-east-1'
            | 'ap-northeast-1'
            | 'ap-northeast-2'
            | 'ap-northeast-3'
            | 'ap-south-1'
            | 'ap-south-2'
            | 'ap-southeast-1'
            | 'ap-southeast-2'
            | 'ap-southeast-3'
            | 'ap-southeast-4'
            | 'ap-southeast-5'
            | 'ca-central-1'
            | 'ca-west-1'
            | 'cn-north-1'
            | 'cn-northwest-1'
            | 'eu-central-1'
            | 'eu-central-2'
            | 'eu-north-1'
            | 'eu-south-1'
            | 'eu-south-2'
            | 'eu-west-1'
            | 'eu-west-2'
            | 'eu-west-3'
            | 'il-central-1'
            | 'me-central-1'
            | 'me-south-1'
            | 'sa-east-1'
            | 'us-east-1'
            | 'us-east-2'
            | 'us-west-1'
            | 'us-west-2'
            | null;

          role_arn: string | null;

          usage_plan_id: string | null;
        }
      }

      export interface Bing {
        verify: string | null;
      }

      export interface Google {
        /**
         * Your Google Analytics ID. If it starts with UA-, we'll use Universal Analytics
         * otherwise Google Analytics 4.
         */
        analytics: string | null;

        site_verification: string | null;
      }

      export interface Heap {
        id: string | null;
      }

      export interface Intercom {
        app_id: string | null;

        secure_mode: Intercom.SecureMode;
      }

      export namespace Intercom {
        export interface SecureMode {
          /**
           * By supplying a secure mode key you will opt into
           * [Intercoms Identity Verification](https://docs.intercom.io/configuring-intercom/enable-secure-mode)
           * system.
           */
          key: string | null;

          /**
           * Should ReadMe only identify users by their email addresses? This integrates
           * better with your existing Intercom but is possibly less secure.
           */
          email_only?: boolean;
        }
      }

      export interface Koala {
        key: string | null;
      }

      export interface Localize {
        key: string | null;
      }

      /**
       * https://docs.readme.com/main/docs/recaptcha
       */
      export interface Recaptcha {
        secret_key: string | null;

        site_key: string | null;
      }

      export interface Segment {
        /**
         * If you are proxying [Segment](https://segment.com/) requests through a custom
         * domain this is that domain. More information about this configuration can be
         * found
         * [here](https://docs.readme.com/main/docs/segment#using-a-custom-domain-with-segment).
         */
        domain: string | null;

        key: string | null;
      }

      export interface Typekit {
        key: string | null;
      }

      export interface Zendesk {
        subdomain: string | null;
      }
    }

    export interface OnboardingCompleted {
      api?: boolean;

      appearance?: boolean;

      documentation?: boolean;

      domain?: boolean;

      jwt?: boolean;

      logs?: boolean;

      metricsSDK?: boolean;
    }

    export interface Pages {
      /**
       * The page you wish to be served to your users when they encounter a 404. This can
       * either map to the `uri` of a Custom Page on your project or be set to `null`. If
       * `null` then the default ReadMe 404 page will be served. The version within the
       * `uri` must be mapped to your stable version.
       */
      not_found: string | null;
    }

    export interface Permissions {
      appearance: Permissions.Appearance;
    }

    export namespace Permissions {
      export interface Appearance {
        custom_code: Appearance.CustomCode;

        /**
         * If this project is allowed to private label their Hub and remove all ReadMe
         * branding.
         */
        private_label?: 'enabled' | 'disabled';
      }

      export namespace Appearance {
        export interface CustomCode {
          /**
           * If this project is allowed to utilize custom CSS.
           */
          css?: 'enabled' | 'disabled';

          /**
           * If this project is allowed to utilize custom HTML.
           */
          html?: 'enabled' | 'disabled';

          /**
           * If this project is allowed to utilize custom JS.
           */
          js?: 'enabled' | 'disabled';
        }
      }
    }

    export interface Plan {
      grace_period: Plan.GracePeriod;

      trial: Plan.Trial;

      type?:
        | 'business'
        | 'business2018'
        | 'business-annual-2024'
        | 'enterprise'
        | 'free'
        | 'freelaunch'
        | 'opensource'
        | 'startup'
        | 'startup2018'
        | 'startup-annual-2024';
    }

    export namespace Plan {
      export interface GracePeriod {
        enabled?: boolean;

        end_date?: string | null;
      }

      export interface Trial {
        /**
         * The end date for your two week trial.
         */
        end_date: string;

        expired?: boolean;
      }
    }

    export interface Privacy {
      /**
       * The project's password for when `privacy.view` is `password`. This field can be
       * set, but it will not be returned by the API.
       */
      password: string | null;

      /**
       * The visibility your OpenAPI definitions on your project's `/openapi` page.
       */
      openapi?: 'public' | 'admin';

      /**
       * - `public` - Site is available to the public.
       * - `admin` - Site is only available to users that have project permissions.
       * - `password` - Site is gated behind a password authentication system.
       * - `custom_login` - Users who view your site will be forwarded to a URL of your
       *   choice, having them login there and be forwarded back to your ReadMe site.
       */
      view?: 'public' | 'admin' | 'password' | 'custom_login';
    }

    export interface Redirect {
      from: string;

      to: string;
    }

    export interface Refactored {
      /**
       * Indicates if the project has been migrated from Dash to Superhub.
       */
      migrated?: 'failed' | 'processing' | 'successful' | 'unknown';

      /**
       * Indicates if the project has our new Unified UI experience.
       */
      status?: 'enabled' | 'disabled';
    }

    /**
     * Contains options to configure interactive sections on your API Reference pages.
     */
    export interface Reference {
      /**
       * Enable SDK-generated request code snippets.
       */
      api_sdk_snippets?: 'enabled' | 'disabled';

      /**
       * When `always_use`, any `default` values defined in your API definition are used
       * to populate your request data in the API Explorer, even if the parameter is not
       * marked as `required`.
       */
      defaults?: 'always_use' | 'use_only_if_required';

      /**
       * When `enabled`, allows editing the request body with a JSON editor.
       */
      json_editor?: 'enabled' | 'disabled';

      /**
       * When `enabled`, enable the new OAuth Flows experience in the API Reference
       * section.
       */
      oauth_flows?: 'enabled' | 'disabled';

      /**
       * When `enabled`, request history for API endpoints are shown.
       */
      request_history?: 'enabled' | 'disabled';

      /**
       * When `expanded`, response examples will be expanded by default if a 200 level
       * response exists.
       */
      response_examples?: 'expanded' | 'collapsed';

      /**
       * When `expanded`, response schemas will be expanded by default if a 200 level
       * response schema exists.
       */
      response_schemas?: 'expanded' | 'collapsed';
    }

    export interface Seo {
      /**
       * Overwrite pages' <title> tag with their custom metadata title (if present).
       */
      overwrite_title_tag?: 'enabled' | 'disabled';
    }

    export interface Glossary {
      /**
       * Glossary definition is revealed to users when they mouse over the glossary term.
       */
      definition: string;

      /**
       * Glossary term is what gets displayed in your documentation when embedded.
       */
      term: string;
    }

    export interface VariableDefault {
      /**
       * Variable Identifier
       */
      id: string;

      /**
       * The key name of the variable.
       */
      name: string;

      /**
       * The default value of the variable.
       */
      default?: string;

      /**
       * If variable `source` is `security`, include the OpenAPI security auth scheme.
       */
      scheme?: string;

      /**
       * The variables source. This can come from a user input or from syncing an OpenAPI
       * definition.
       */
      source?: 'server' | 'security' | 'custom' | '';

      /**
       * If variable `source` is `security`, include the OpenAPI security auth type.
       */
      type?: 'http' | 'apiKey' | 'openIdConnect' | 'oauth2' | '';
    }

    export interface Webhook {
      url: string;

      action?: 'login';

      timeout?: number;
    }
  }
}

Projects.Apikeys = Apikeys;

export declare namespace Projects {
  export { type ProjectRetrieveResponse as ProjectRetrieveResponse };

  export {
    Apikeys as Apikeys,
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
