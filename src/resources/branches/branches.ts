// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIsAPI from './apis';
import {
  APICreateParams,
  APICreateResponse,
  APIDeleteParams,
  APIListResponse,
  APIRetrieveParams,
  APIRetrieveResponse,
  APIUpdateParams,
  APIUpdateResponse,
  APIs,
} from './apis';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryCreateParams,
  CategoryCreateResponse,
  CategoryDeleteParams,
  CategoryUpdateParams,
  CategoryUpdateResponse,
} from './categories';
import * as CustomPagesAPI from './custom-pages';
import {
  CustomPageCreateParams,
  CustomPageCreateResponse,
  CustomPageDeleteParams,
  CustomPageListResponse,
  CustomPageRetrieveParams,
  CustomPageRetrieveResponse,
  CustomPageUpdateParams,
  CustomPageUpdateResponse,
  CustomPages,
} from './custom-pages';
import * as GuidesAPI from './guides';
import {
  GuideCreateParams,
  GuideCreateResponse,
  GuideDeleteParams,
  GuideRetrieveParams,
  GuideRetrieveResponse,
  GuideUpdateParams,
  GuideUpdateResponse,
  Guides,
} from './guides';
import * as ReferenceAPI from './reference';
import {
  Reference,
  ReferenceCreateParams,
  ReferenceCreateResponse,
  ReferenceDeleteParams,
  ReferenceRetrieveParams,
  ReferenceRetrieveResponse,
  ReferenceUpdateParams,
  ReferenceUpdateResponse,
} from './reference';

export class Branches extends APIResource {
  apis: APIsAPI.APIs = new APIsAPI.APIs(this._client);
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  customPages: CustomPagesAPI.CustomPages = new CustomPagesAPI.CustomPages(this._client);
  guides: GuidesAPI.Guides = new GuidesAPI.Guides(this._client);
  reference: ReferenceAPI.Reference = new ReferenceAPI.Reference(this._client);
}

Branches.APIs = APIs;
Branches.Categories = Categories;
Branches.CustomPages = CustomPages;
Branches.Guides = Guides;
Branches.Reference = Reference;

export declare namespace Branches {
  export {
    APIs as APIs,
    type APICreateResponse as APICreateResponse,
    type APIRetrieveResponse as APIRetrieveResponse,
    type APIUpdateResponse as APIUpdateResponse,
    type APIListResponse as APIListResponse,
    type APICreateParams as APICreateParams,
    type APIRetrieveParams as APIRetrieveParams,
    type APIUpdateParams as APIUpdateParams,
    type APIDeleteParams as APIDeleteParams,
  };

  export {
    Categories as Categories,
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryUpdateResponse as CategoryUpdateResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
    type CategoryDeleteParams as CategoryDeleteParams,
  };

  export {
    CustomPages as CustomPages,
    type CustomPageCreateResponse as CustomPageCreateResponse,
    type CustomPageRetrieveResponse as CustomPageRetrieveResponse,
    type CustomPageUpdateResponse as CustomPageUpdateResponse,
    type CustomPageListResponse as CustomPageListResponse,
    type CustomPageCreateParams as CustomPageCreateParams,
    type CustomPageRetrieveParams as CustomPageRetrieveParams,
    type CustomPageUpdateParams as CustomPageUpdateParams,
    type CustomPageDeleteParams as CustomPageDeleteParams,
  };

  export {
    Guides as Guides,
    type GuideCreateResponse as GuideCreateResponse,
    type GuideRetrieveResponse as GuideRetrieveResponse,
    type GuideUpdateResponse as GuideUpdateResponse,
    type GuideCreateParams as GuideCreateParams,
    type GuideRetrieveParams as GuideRetrieveParams,
    type GuideUpdateParams as GuideUpdateParams,
    type GuideDeleteParams as GuideDeleteParams,
  };

  export {
    Reference as Reference,
    type ReferenceCreateResponse as ReferenceCreateResponse,
    type ReferenceRetrieveResponse as ReferenceRetrieveResponse,
    type ReferenceUpdateResponse as ReferenceUpdateResponse,
    type ReferenceCreateParams as ReferenceCreateParams,
    type ReferenceRetrieveParams as ReferenceRetrieveParams,
    type ReferenceUpdateParams as ReferenceUpdateParams,
    type ReferenceDeleteParams as ReferenceDeleteParams,
  };
}
