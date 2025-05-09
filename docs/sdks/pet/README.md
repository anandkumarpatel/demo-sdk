# Pet
(*pet*)

## Overview

Everything about your Pets

Find out more
<http://swagger.io>

### Available Operations

* [addPet](#addpet) - Add a new pet to the store
* [addPetRaw](#addpetraw) - Add a new pet to the store
* [updatePet](#updatepet) - Update an existing pet
* [updatePetRaw](#updatepetraw) - Update an existing pet
* [findPetsByStatus](#findpetsbystatus) - Finds Pets by status
* [~~findPetsByTags~~](#findpetsbytags) - Finds Pets by tags :warning: **Deprecated**
* [getPetById](#getpetbyid) - Find pet by ID
* [updatePetWithForm](#updatepetwithform) - Updates a pet in the store with form data
* [deletePet](#deletepet) - Deletes a pet
* [uploadFile](#uploadfile) - uploads an image

## addPet

Add a new pet to the store

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.pet.addPet({
    name: "doggie",
    photoUrls: [
      "<value>",
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { petAddPet } from "readmedeo/funcs/petAddPet.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petAddPet(readmedeo, {
    name: "doggie",
    photoUrls: [
      "<value>",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PetInput](../../models/components/petinput.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## addPetRaw

Add a new pet to the store

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.pet.addPetRaw(bytesToStream(new TextEncoder().encode("0xc58Cd683A3")));


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { petAddPetRaw } from "readmedeo/funcs/petAddPetRaw.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petAddPetRaw(readmedeo, bytesToStream(new TextEncoder().encode("0x1A025d8ca9")));

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/pet.md)                                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updatePet

Update an existing pet

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.pet.updatePet({
    name: "doggie",
    photoUrls: [
      "<value>",
      "<value>",
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { petUpdatePet } from "readmedeo/funcs/petUpdatePet.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petUpdatePet(readmedeo, {
    name: "doggie",
    photoUrls: [
      "<value>",
      "<value>",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.PetInput](../../models/components/petinput.md)                                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updatePetRaw

Update an existing pet

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.pet.updatePetRaw(bytesToStream(new TextEncoder().encode("0x6C7D6C5f13")));


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { petUpdatePetRaw } from "readmedeo/funcs/petUpdatePetRaw.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petUpdatePetRaw(readmedeo, bytesToStream(new TextEncoder().encode("0xbA39b01AD7")));

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [ReadableStream<Uint8Array>](../../models/pet.md)                                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## findPetsByStatus

Multiple status values can be provided with comma separated strings

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await readmedeo.pet.findPetsByStatus({
    status: [
      "available",
      "available",
      "available",
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { petFindPetsByStatus } from "readmedeo/funcs/petFindPetsByStatus.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petFindPetsByStatus(readmedeo, {
    status: [
      "available",
      "available",
      "available",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FindPetsByStatusRequest](../../models/operations/findpetsbystatusrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.FindPetsByStatusResponse](../../models/operations/findpetsbystatusresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## ~~findPetsByTags~~

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await readmedeo.pet.findPetsByTags({
    tags: [
      "<value>",
    ],
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { petFindPetsByTags } from "readmedeo/funcs/petFindPetsByTags.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petFindPetsByTags(readmedeo, {
    tags: [
      "<value>",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.FindPetsByTagsRequest](../../models/operations/findpetsbytagsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.FindPetsByTagsResponse](../../models/operations/findpetsbytagsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getPetById

Returns a single pet

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo();

async function run() {
  const result = await readmedeo.pet.getPetById({
    apiKey: process.env["READMEDEO_API_KEY"] ?? "",
  }, {
    petId: 504151,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { petGetPetById } from "readmedeo/funcs/petGetPetById.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore();

async function run() {
  const res = await petGetPetById(readmedeo, {
    apiKey: process.env["READMEDEO_API_KEY"] ?? "",
  }, {
    petId: 504151,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPetByIdRequest](../../models/operations/getpetbyidrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.GetPetByIdSecurity](../../models/operations/getpetbyidsecurity.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPetByIdResponse](../../models/operations/getpetbyidresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updatePetWithForm

Updates a pet in the store with form data

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.pet.updatePetWithForm({
    petId: 303241,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { petUpdatePetWithForm } from "readmedeo/funcs/petUpdatePetWithForm.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petUpdatePetWithForm(readmedeo, {
    petId: 303241,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePetWithFormRequest](../../models/operations/updatepetwithformrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deletePet

Deletes a pet

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.pet.deletePet({
    petId: 441876,
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { petDeletePet } from "readmedeo/funcs/petDeletePet.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petDeletePet(readmedeo, {
    petId: 441876,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePetRequest](../../models/operations/deletepetrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## uploadFile

uploads an image

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await readmedeo.pet.uploadFile({
    petId: 565380,
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { petUploadFile } from "readmedeo/funcs/petUploadFile.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await petUploadFile(readmedeo, {
    petId: 565380,
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UploadFileRequest](../../models/operations/uploadfilerequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApiResponse](../../models/components/apiresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |