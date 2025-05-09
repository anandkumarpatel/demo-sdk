test

<!-- Start Summary [summary] -->

## Summary

Swagger Petstore: This is a sample server Petstore server. You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). For this sample, you can use the api key `special-key` to test the authorization filters.

For more information about the API: [Find out more about Swagger](http://swagger.io)

<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->

## Table of Contents

<!-- $toc-max-depth=2 -->

- [SDK Installation](#sdk-installation)
- [Requirements](#requirements)
- [SDK Example Usage](#sdk-example-usage)
- [Authentication](#authentication)
- [Available Resources and Operations](#available-resources-and-operations)
- [Standalone functions](#standalone-functions)
- [File uploads](#file-uploads)
- [Retries](#retries)
- [Error Handling](#error-handling)
- [Server Selection](#server-selection)
- [Custom HTTP Client](#custom-http-client)
- [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->

## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.

### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Readmedeo": {
      "command": "npx",
      "args": ["-y", "--package", "readmedeo", "--", "mcp", "start", "--petstore-auth", "..."]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Readmedeo": {
      "command": "npx",
      "args": ["-y", "--package", "readmedeo", "--", "mcp", "start", "--petstore-auth", "..."]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.

```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": ["start"]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package readmedeo -- mcp start --help
```

<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->

## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).

<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->

## SDK Example Usage

### Example

```typescript
import { Readmedeo } from 'readmedeo'

const readmedeo = new Readmedeo({
  petstoreAuth: process.env['READMEDEO_PETSTORE_AUTH'] ?? '',
})

async function run() {
  await readmedeo.pet.addPet({
    name: 'doggie',
    photoUrls: ['<value>'],
  })
}

run()
```

<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->

## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name           | Type   | Scheme       | Environment Variable      |
| -------------- | ------ | ------------ | ------------------------- |
| `petstoreAuth` | oauth2 | OAuth2 token | `READMEDEO_PETSTORE_AUTH` |

To authenticate with the API the `petstoreAuth` parameter must be set when initializing the SDK client instance. For example:

```typescript
import { Readmedeo } from 'readmedeo'

const readmedeo = new Readmedeo({
  petstoreAuth: process.env['READMEDEO_PETSTORE_AUTH'] ?? '',
})

async function run() {
  await readmedeo.pet.addPet({
    name: 'doggie',
    photoUrls: ['<value>'],
  })
}

run()
```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:

```typescript
import { Readmedeo } from 'readmedeo'

const readmedeo = new Readmedeo()

async function run() {
  const result = await readmedeo.pet.getPetById(
    {
      apiKey: process.env['READMEDEO_API_KEY'] ?? '',
    },
    {
      petId: 504151,
    }
  )

  // Handle the result
  console.log(result)
}

run()
```

<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->

## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [pet](docs/sdks/pet/README.md)

- [addPet](docs/sdks/pet/README.md#addpet) - Add a new pet to the store
- [addPetRaw](docs/sdks/pet/README.md#addpetraw) - Add a new pet to the store
- [updatePet](docs/sdks/pet/README.md#updatepet) - Update an existing pet
- [updatePetRaw](docs/sdks/pet/README.md#updatepetraw) - Update an existing pet
- [findPetsByStatus](docs/sdks/pet/README.md#findpetsbystatus) - Finds Pets by status
- [~~findPetsByTags~~](docs/sdks/pet/README.md#findpetsbytags) - Finds Pets by tags :warning: **Deprecated**
- [getPetById](docs/sdks/pet/README.md#getpetbyid) - Find pet by ID
- [updatePetWithForm](docs/sdks/pet/README.md#updatepetwithform) - Updates a pet in the store with form data
- [deletePet](docs/sdks/pet/README.md#deletepet) - Deletes a pet
- [uploadFile](docs/sdks/pet/README.md#uploadfile) - uploads an image

### [store](docs/sdks/store/README.md)

- [getInventory](docs/sdks/store/README.md#getinventory) - Returns pet inventories by status
- [placeOrder](docs/sdks/store/README.md#placeorder) - Place an order for a pet
- [getOrderById](docs/sdks/store/README.md#getorderbyid) - Find purchase order by ID
- [deleteOrder](docs/sdks/store/README.md#deleteorder) - Delete purchase order by ID

### [user](docs/sdks/user/README.md)

- [createUser](docs/sdks/user/README.md#createuser) - Create user
- [createUsersWithArrayInput](docs/sdks/user/README.md#createuserswitharrayinput) - Creates list of users with given input array
- [createUsersWithListInput](docs/sdks/user/README.md#createuserswithlistinput) - Creates list of users with given input array
- [loginUser](docs/sdks/user/README.md#loginuser) - Logs user into the system
- [logoutUser](docs/sdks/user/README.md#logoutuser) - Logs out current logged in user session
- [getUserByName](docs/sdks/user/README.md#getuserbyname) - Get user by user name
- [updateUser](docs/sdks/user/README.md#updateuser) - Updated user
- [deleteUser](docs/sdks/user/README.md#deleteuser) - Delete user

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->

## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`petAddPet`](docs/sdks/pet/README.md#addpet) - Add a new pet to the store
- [`petAddPetRaw`](docs/sdks/pet/README.md#addpetraw) - Add a new pet to the store
- [`petDeletePet`](docs/sdks/pet/README.md#deletepet) - Deletes a pet
- [`petFindPetsByStatus`](docs/sdks/pet/README.md#findpetsbystatus) - Finds Pets by status
- [`petGetPetById`](docs/sdks/pet/README.md#getpetbyid) - Find pet by ID
- [`petUpdatePet`](docs/sdks/pet/README.md#updatepet) - Update an existing pet
- [`petUpdatePetRaw`](docs/sdks/pet/README.md#updatepetraw) - Update an existing pet
- [`petUpdatePetWithForm`](docs/sdks/pet/README.md#updatepetwithform) - Updates a pet in the store with form data
- [`petUploadFile`](docs/sdks/pet/README.md#uploadfile) - uploads an image
- [`storeDeleteOrder`](docs/sdks/store/README.md#deleteorder) - Delete purchase order by ID
- [`storeGetInventory`](docs/sdks/store/README.md#getinventory) - Returns pet inventories by status
- [`storeGetOrderById`](docs/sdks/store/README.md#getorderbyid) - Find purchase order by ID
- [`storePlaceOrder`](docs/sdks/store/README.md#placeorder) - Place an order for a pet
- [`userCreateUser`](docs/sdks/user/README.md#createuser) - Create user
- [`userCreateUsersWithArrayInput`](docs/sdks/user/README.md#createuserswitharrayinput) - Creates list of users with given input array
- [`userCreateUsersWithListInput`](docs/sdks/user/README.md#createuserswithlistinput) - Creates list of users with given input array
- [`userDeleteUser`](docs/sdks/user/README.md#deleteuser) - Delete user
- [`userGetUserByName`](docs/sdks/user/README.md#getuserbyname) - Get user by user name
- [`userLoginUser`](docs/sdks/user/README.md#loginuser) - Logs user into the system
- [`userLogoutUser`](docs/sdks/user/README.md#logoutuser) - Logs out current logged in user session
- [`userUpdateUser`](docs/sdks/user/README.md#updateuser) - Updated user
- ~~[`petFindPetsByTags`](docs/sdks/pet/README.md#findpetsbytags)~~ - Finds Pets by tags :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->

## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { Readmedeo } from 'readmedeo'

const readmedeo = new Readmedeo({
  petstoreAuth: process.env['READMEDEO_PETSTORE_AUTH'] ?? '',
})

async function run() {
  await readmedeo.pet.addPetRaw(bytesToStream(new TextEncoder().encode('0xc58Cd683A3')))
}

run()
```

<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->

## Retries

Some of the endpoints in this SDK support retries. If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API. However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:

```typescript
import { Readmedeo } from 'readmedeo'

const readmedeo = new Readmedeo({
  petstoreAuth: process.env['READMEDEO_PETSTORE_AUTH'] ?? '',
})

async function run() {
  await readmedeo.pet.addPet(
    {
      name: 'doggie',
      photoUrls: ['<value>'],
    },
    {
      retries: {
        strategy: 'backoff',
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    }
  )
}

run()
```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:

```typescript
import { Readmedeo } from 'readmedeo'

const readmedeo = new Readmedeo({
  retryConfig: {
    strategy: 'backoff',
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  petstoreAuth: process.env['READMEDEO_PETSTORE_AUTH'] ?? '',
})

async function run() {
  await readmedeo.pet.addPet({
    name: 'doggie',
    photoUrls: ['<value>'],
  })
}

run()
```

<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->

## Error Handling

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `APIError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.APIError | 4XX, 5XX    | \*/\*        |

```typescript
import { Readmedeo } from 'readmedeo'
import { SDKValidationError } from 'readmedeo/models/errors'

const readmedeo = new Readmedeo({
  petstoreAuth: process.env['READMEDEO_PETSTORE_AUTH'] ?? '',
})

async function run() {
  try {
    await readmedeo.pet.addPet({
      name: 'doggie',
      photoUrls: ['<value>'],
    })
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case err instanceof SDKValidationError:
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty())
          // Raw value may also be inspected
          console.error(err.rawValue)
          return
        }
        apierror.js
      // Server returned an error status code or an unknown content type
      case err instanceof APIError: {
        console.error(err.statusCode)
        console.error(err.rawResponse.body)
        return
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err
      }
    }
  }
}

run()
```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error     | Description                                          |
| --------------------- | ---------------------------------------------------- |
| RequestAbortedError   | HTTP request was aborted by the client               |
| RequestTimeoutError   | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError       | HTTP client was unable to make a request to a server |
| InvalidRequestError   | Any input used to create a request is invalid        |
| UnexpectedClientError | Unrecognised or unexpected error                     |

<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->

## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Readmedeo } from 'readmedeo'

const readmedeo = new Readmedeo({
  serverURL: 'http://petstore.swagger.io/v2',
  petstoreAuth: process.env['READMEDEO_PETSTORE_AUTH'] ?? '',
})

async function run() {
  await readmedeo.pet.addPet({
    name: 'doggie',
    photoUrls: ['<value>'],
  })
}

run()
```

<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->

## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Readmedeo } from 'readmedeo'
import { HTTPClient } from 'readmedeo/lib/http'

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request)
  },
})

httpClient.addHook('beforeRequest', (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000),
  })

  nextRequest.headers.set('x-custom-header', 'custom value')

  return nextRequest
})

httpClient.addHook('requestError', (error, request) => {
  console.group('Request Error')
  console.log('Reason:', `${error}`)
  console.log('Endpoint:', `${request.method} ${request.url}`)
  console.groupEnd()
})

const sdk = new Readmedeo({ httpClient })
```

<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->

## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Readmedeo } from 'readmedeo'

const sdk = new Readmedeo({ debugLogger: console })
```

You can also enable a default debug logger by setting an environment variable `READMEDEO_DEBUG` to true.

<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
