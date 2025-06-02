// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ReadmeV2 from 'testtesttest';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import retrieve_projects from './projects/retrieve-projects';
import create_projects_apikeys from './projects/apikeys/create-projects-apikeys';
import retrieve_projects_apikeys from './projects/apikeys/retrieve-projects-apikeys';
import update_projects_apikeys from './projects/apikeys/update-projects-apikeys';
import list_projects_apikeys from './projects/apikeys/list-projects-apikeys';
import delete_projects_apikeys from './projects/apikeys/delete-projects-apikeys';
import create_branches_apis from './branches/apis/create-branches-apis';
import retrieve_branches_apis from './branches/apis/retrieve-branches-apis';
import update_branches_apis from './branches/apis/update-branches-apis';
import list_branches_apis from './branches/apis/list-branches-apis';
import delete_branches_apis from './branches/apis/delete-branches-apis';
import create_branches_categories from './branches/categories/create-branches-categories';
import update_branches_categories from './branches/categories/update-branches-categories';
import delete_branches_categories from './branches/categories/delete-branches-categories';
import create_branches_custom_pages from './branches/custom-pages/create-branches-custom-pages';
import retrieve_branches_custom_pages from './branches/custom-pages/retrieve-branches-custom-pages';
import update_branches_custom_pages from './branches/custom-pages/update-branches-custom-pages';
import list_branches_custom_pages from './branches/custom-pages/list-branches-custom-pages';
import delete_branches_custom_pages from './branches/custom-pages/delete-branches-custom-pages';
import create_branches_guides from './branches/guides/create-branches-guides';
import retrieve_branches_guides from './branches/guides/retrieve-branches-guides';
import update_branches_guides from './branches/guides/update-branches-guides';
import delete_branches_guides from './branches/guides/delete-branches-guides';
import create_branches_reference from './branches/reference/create-branches-reference';
import retrieve_branches_reference from './branches/reference/retrieve-branches-reference';
import update_branches_reference from './branches/reference/update-branches-reference';
import delete_branches_reference from './branches/reference/delete-branches-reference';
import list_open_roles_apply from './apply/list-open-roles-apply';
import submit_application_apply from './apply/submit-application-apply';
import create_changelogs from './changelogs/create-changelogs';
import retrieve_changelogs from './changelogs/retrieve-changelogs';
import update_changelogs from './changelogs/update-changelogs';
import list_changelogs from './changelogs/list-changelogs';
import delete_changelogs from './changelogs/delete-changelogs';
import list_outbound_ips from './outbound-ips/list-outbound-ips';
import perform_search from './search/perform-search';
import api_validate from './validate/api-validate';

export type HandlerFunction = (client: ReadmeV2, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];

  httpMethod?: string;
  httpPath?: string;
  operationId?: string;
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(retrieve_projects);
addEndpoint(create_projects_apikeys);
addEndpoint(retrieve_projects_apikeys);
addEndpoint(update_projects_apikeys);
addEndpoint(list_projects_apikeys);
addEndpoint(delete_projects_apikeys);
addEndpoint(create_branches_apis);
addEndpoint(retrieve_branches_apis);
addEndpoint(update_branches_apis);
addEndpoint(list_branches_apis);
addEndpoint(delete_branches_apis);
addEndpoint(create_branches_categories);
addEndpoint(update_branches_categories);
addEndpoint(delete_branches_categories);
addEndpoint(create_branches_custom_pages);
addEndpoint(retrieve_branches_custom_pages);
addEndpoint(update_branches_custom_pages);
addEndpoint(list_branches_custom_pages);
addEndpoint(delete_branches_custom_pages);
addEndpoint(create_branches_guides);
addEndpoint(retrieve_branches_guides);
addEndpoint(update_branches_guides);
addEndpoint(delete_branches_guides);
addEndpoint(create_branches_reference);
addEndpoint(retrieve_branches_reference);
addEndpoint(update_branches_reference);
addEndpoint(delete_branches_reference);
addEndpoint(list_open_roles_apply);
addEndpoint(submit_application_apply);
addEndpoint(create_changelogs);
addEndpoint(retrieve_changelogs);
addEndpoint(update_changelogs);
addEndpoint(list_changelogs);
addEndpoint(delete_changelogs);
addEndpoint(list_outbound_ips);
addEndpoint(perform_search);
addEndpoint(api_validate);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
