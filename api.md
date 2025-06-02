# Projects

Types:

- <code><a href="./src/resources/projects/projects.ts">ProjectRetrieveResponse</a></code>

Methods:

- <code title="get /projects/me">client.projects.<a href="./src/resources/projects/projects.ts">retrieve</a>() -> ProjectRetrieveResponse</code>

## Apikeys

Types:

- <code><a href="./src/resources/projects/apikeys.ts">ApikeyCreateResponse</a></code>
- <code><a href="./src/resources/projects/apikeys.ts">ApikeyRetrieveResponse</a></code>
- <code><a href="./src/resources/projects/apikeys.ts">ApikeyUpdateResponse</a></code>
- <code><a href="./src/resources/projects/apikeys.ts">ApikeyListResponse</a></code>

Methods:

- <code title="post /projects/{subdomain}/apikeys">client.projects.apikeys.<a href="./src/resources/projects/apikeys.ts">create</a>(subdomain, { ...params }) -> ApikeyCreateResponse</code>
- <code title="get /projects/{subdomain}/apikeys/{api_key_id}">client.projects.apikeys.<a href="./src/resources/projects/apikeys.ts">retrieve</a>(apiKeyID, { ...params }) -> ApikeyRetrieveResponse</code>
- <code title="patch /projects/{subdomain}/apikeys/{api_key_id}">client.projects.apikeys.<a href="./src/resources/projects/apikeys.ts">update</a>(apiKeyID, { ...params }) -> ApikeyUpdateResponse</code>
- <code title="get /projects/{subdomain}/apikeys">client.projects.apikeys.<a href="./src/resources/projects/apikeys.ts">list</a>(subdomain, { ...params }) -> ApikeyListResponse</code>
- <code title="delete /projects/{subdomain}/apikeys/{api_key_id}">client.projects.apikeys.<a href="./src/resources/projects/apikeys.ts">delete</a>(apiKeyID, { ...params }) -> void</code>

# Branches

## APIs

Types:

- <code><a href="./src/resources/branches/apis.ts">APICreateResponse</a></code>
- <code><a href="./src/resources/branches/apis.ts">APIRetrieveResponse</a></code>
- <code><a href="./src/resources/branches/apis.ts">APIUpdateResponse</a></code>
- <code><a href="./src/resources/branches/apis.ts">APIListResponse</a></code>

Methods:

- <code title="post /branches/{branch}/apis">client.branches.apis.<a href="./src/resources/branches/apis.ts">create</a>(branch, { ...params }) -> APICreateResponse</code>
- <code title="get /branches/{branch}/apis/{filename}">client.branches.apis.<a href="./src/resources/branches/apis.ts">retrieve</a>(filename, { ...params }) -> APIRetrieveResponse</code>
- <code title="put /branches/{branch}/apis/{filename}">client.branches.apis.<a href="./src/resources/branches/apis.ts">update</a>(filename, { ...params }) -> APIUpdateResponse</code>
- <code title="get /branches/{branch}/apis">client.branches.apis.<a href="./src/resources/branches/apis.ts">list</a>(branch) -> APIListResponse</code>
- <code title="delete /branches/{branch}/apis/{filename}">client.branches.apis.<a href="./src/resources/branches/apis.ts">delete</a>(filename, { ...params }) -> void</code>

## Categories

Types:

- <code><a href="./src/resources/branches/categories.ts">CategoryCreateResponse</a></code>
- <code><a href="./src/resources/branches/categories.ts">CategoryUpdateResponse</a></code>

Methods:

- <code title="post /branches/{branch}/categories">client.branches.categories.<a href="./src/resources/branches/categories.ts">create</a>(branch, { ...params }) -> CategoryCreateResponse</code>
- <code title="patch /branches/{branch}/categories/{section}/{title}">client.branches.categories.<a href="./src/resources/branches/categories.ts">update</a>(pathTitle, { ...params }) -> CategoryUpdateResponse</code>
- <code title="delete /branches/{branch}/categories/{section}/{title}">client.branches.categories.<a href="./src/resources/branches/categories.ts">delete</a>(title, { ...params }) -> void</code>

## CustomPages

Types:

- <code><a href="./src/resources/branches/custom-pages.ts">CustomPageCreateResponse</a></code>
- <code><a href="./src/resources/branches/custom-pages.ts">CustomPageRetrieveResponse</a></code>
- <code><a href="./src/resources/branches/custom-pages.ts">CustomPageUpdateResponse</a></code>
- <code><a href="./src/resources/branches/custom-pages.ts">CustomPageListResponse</a></code>

Methods:

- <code title="post /branches/{branch}/custom_pages">client.branches.customPages.<a href="./src/resources/branches/custom-pages.ts">create</a>(branch, { ...params }) -> CustomPageCreateResponse</code>
- <code title="get /branches/{branch}/custom_pages/{slug}">client.branches.customPages.<a href="./src/resources/branches/custom-pages.ts">retrieve</a>(slug, { ...params }) -> CustomPageRetrieveResponse</code>
- <code title="patch /branches/{branch}/custom_pages/{slug}">client.branches.customPages.<a href="./src/resources/branches/custom-pages.ts">update</a>(pathSlug, { ...params }) -> CustomPageUpdateResponse</code>
- <code title="get /branches/{branch}/custom_pages">client.branches.customPages.<a href="./src/resources/branches/custom-pages.ts">list</a>(branch) -> CustomPageListResponse</code>
- <code title="delete /branches/{branch}/custom_pages/{slug}">client.branches.customPages.<a href="./src/resources/branches/custom-pages.ts">delete</a>(slug, { ...params }) -> void</code>

## Guides

Types:

- <code><a href="./src/resources/branches/guides.ts">GuideCreateResponse</a></code>
- <code><a href="./src/resources/branches/guides.ts">GuideRetrieveResponse</a></code>
- <code><a href="./src/resources/branches/guides.ts">GuideUpdateResponse</a></code>

Methods:

- <code title="post /branches/{branch}/guides">client.branches.guides.<a href="./src/resources/branches/guides.ts">create</a>(branch, { ...params }) -> GuideCreateResponse</code>
- <code title="get /branches/{branch}/guides/{slug}">client.branches.guides.<a href="./src/resources/branches/guides.ts">retrieve</a>(slug, { ...params }) -> GuideRetrieveResponse</code>
- <code title="patch /branches/{branch}/guides/{slug}">client.branches.guides.<a href="./src/resources/branches/guides.ts">update</a>(pathSlug, { ...params }) -> GuideUpdateResponse</code>
- <code title="delete /branches/{branch}/guides/{slug}">client.branches.guides.<a href="./src/resources/branches/guides.ts">delete</a>(slug, { ...params }) -> void</code>

## Reference

Types:

- <code><a href="./src/resources/branches/reference.ts">ReferenceCreateResponse</a></code>
- <code><a href="./src/resources/branches/reference.ts">ReferenceRetrieveResponse</a></code>
- <code><a href="./src/resources/branches/reference.ts">ReferenceUpdateResponse</a></code>

Methods:

- <code title="post /branches/{branch}/reference">client.branches.reference.<a href="./src/resources/branches/reference.ts">create</a>(branch, { ...params }) -> ReferenceCreateResponse</code>
- <code title="get /branches/{branch}/reference/{slug}">client.branches.reference.<a href="./src/resources/branches/reference.ts">retrieve</a>(slug, { ...params }) -> ReferenceRetrieveResponse</code>
- <code title="patch /branches/{branch}/reference/{slug}">client.branches.reference.<a href="./src/resources/branches/reference.ts">update</a>(pathSlug, { ...params }) -> ReferenceUpdateResponse</code>
- <code title="delete /branches/{branch}/reference/{slug}">client.branches.reference.<a href="./src/resources/branches/reference.ts">delete</a>(slug, { ...params }) -> void</code>

# Apply

Types:

- <code><a href="./src/resources/apply.ts">ApplyListOpenRolesResponse</a></code>
- <code><a href="./src/resources/apply.ts">ApplySubmitApplicationResponse</a></code>

Methods:

- <code title="get /apply">client.apply.<a href="./src/resources/apply.ts">listOpenRoles</a>() -> ApplyListOpenRolesResponse</code>
- <code title="post /apply">client.apply.<a href="./src/resources/apply.ts">submitApplication</a>({ ...params }) -> ApplySubmitApplicationResponse</code>

# Changelogs

Types:

- <code><a href="./src/resources/changelogs.ts">ChangelogCreateResponse</a></code>
- <code><a href="./src/resources/changelogs.ts">ChangelogRetrieveResponse</a></code>
- <code><a href="./src/resources/changelogs.ts">ChangelogUpdateResponse</a></code>
- <code><a href="./src/resources/changelogs.ts">ChangelogListResponse</a></code>

Methods:

- <code title="post /changelogs">client.changelogs.<a href="./src/resources/changelogs.ts">create</a>({ ...params }) -> ChangelogCreateResponse</code>
- <code title="get /changelogs/{identifier}">client.changelogs.<a href="./src/resources/changelogs.ts">retrieve</a>(identifier) -> ChangelogRetrieveResponse</code>
- <code title="patch /changelogs/{identifier}">client.changelogs.<a href="./src/resources/changelogs.ts">update</a>(identifier, { ...params }) -> ChangelogUpdateResponse</code>
- <code title="get /changelogs">client.changelogs.<a href="./src/resources/changelogs.ts">list</a>({ ...params }) -> ChangelogListResponse</code>
- <code title="delete /changelogs/{identifier}">client.changelogs.<a href="./src/resources/changelogs.ts">delete</a>(identifier) -> void</code>

# OutboundIPs

Types:

- <code><a href="./src/resources/outbound-ips.ts">OutboundIPListResponse</a></code>

Methods:

- <code title="get /outbound_ips">client.outboundIPs.<a href="./src/resources/outbound-ips.ts">list</a>() -> OutboundIPListResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchPerformResponse</a></code>

Methods:

- <code title="get /search">client.search.<a href="./src/resources/search.ts">perform</a>({ ...params }) -> SearchPerformResponse</code>

# Validate

Types:

- <code><a href="./src/resources/validate.ts">ValidateAPIResponse</a></code>

Methods:

- <code title="post /validate/api">client.validate.<a href="./src/resources/validate.ts">api</a>({ ...params }) -> ValidateAPIResponse</code>
