# User
(*user*)

## Overview

Operations about user

Find out more about our store
<http://swagger.io>

### Available Operations

* [createUser](#createuser) - Create user
* [createUsersWithArrayInput](#createuserswitharrayinput) - Creates list of users with given input array
* [createUsersWithListInput](#createuserswithlistinput) - Creates list of users with given input array
* [loginUser](#loginuser) - Logs user into the system
* [logoutUser](#logoutuser) - Logs out current logged in user session
* [getUserByName](#getuserbyname) - Get user by user name
* [updateUser](#updateuser) - Updated user
* [deleteUser](#deleteuser) - Delete user

## createUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.user.createUser({});


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { userCreateUser } from "readmedeo/funcs/userCreateUser.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await userCreateUser(readmedeo, {});

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
| `request`                                                                                                                                                                      | [components.User](../../models/components/user.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createUsersWithArrayInput

Creates list of users with given input array

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.user.createUsersWithArrayInput([
    {},
    {},
    {},
  ]);


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { userCreateUsersWithArrayInput } from "readmedeo/funcs/userCreateUsersWithArrayInput.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await userCreateUsersWithArrayInput(readmedeo, [
    {},
    {},
    {},
  ]);

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
| `request`                                                                                                                                                                      | [components.User[]](../../models/.md)                                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## createUsersWithListInput

Creates list of users with given input array

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.user.createUsersWithListInput([]);


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { userCreateUsersWithListInput } from "readmedeo/funcs/userCreateUsersWithListInput.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await userCreateUsersWithListInput(readmedeo, []);

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
| `request`                                                                                                                                                                      | [components.User[]](../../models/.md)                                                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## loginUser

Logs user into the system

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await readmedeo.user.loginUser({
    username: "Oswaldo70",
    password: "BQU6LC8CTz121J3",
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
import { userLoginUser } from "readmedeo/funcs/userLoginUser.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await userLoginUser(readmedeo, {
    username: "Oswaldo70",
    password: "BQU6LC8CTz121J3",
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
| `request`                                                                                                                                                                      | [operations.LoginUserRequest](../../models/operations/loginuserrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.LoginUserResponse](../../models/operations/loginuserresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## logoutUser

Logs out current logged in user session

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.user.logoutUser();


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { userLogoutUser } from "readmedeo/funcs/userLogoutUser.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await userLogoutUser(readmedeo);

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
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getUserByName

Get user by user name

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const result = await readmedeo.user.getUserByName({
    username: "Zachery_Lubowitz15",
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
import { userGetUserByName } from "readmedeo/funcs/userGetUserByName.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await userGetUserByName(readmedeo, {
    username: "Zachery_Lubowitz15",
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
| `request`                                                                                                                                                                      | [operations.GetUserByNameRequest](../../models/operations/getuserbynamerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetUserByNameResponse](../../models/operations/getuserbynameresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## updateUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.user.updateUser({
    username: "Dandre_Hand41",
    user: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { userUpdateUser } from "readmedeo/funcs/userUpdateUser.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await userUpdateUser(readmedeo, {
    username: "Dandre_Hand41",
    user: {},
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
| `request`                                                                                                                                                                      | [operations.UpdateUserRequest](../../models/operations/updateuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## deleteUser

This can only be done by the logged in user.

### Example Usage

```typescript
import { Readmedeo } from "readmedeo";

const readmedeo = new Readmedeo({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  await readmedeo.user.deleteUser({
    username: "Demetris_Schmitt",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ReadmedeoCore } from "readmedeo/core.js";
import { userDeleteUser } from "readmedeo/funcs/userDeleteUser.js";

// Use `ReadmedeoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const readmedeo = new ReadmedeoCore({
  petstoreAuth: process.env["READMEDEO_PETSTORE_AUTH"] ?? "",
});

async function run() {
  const res = await userDeleteUser(readmedeo, {
    username: "Demetris_Schmitt",
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
| `request`                                                                                                                                                                      | [operations.DeleteUserRequest](../../models/operations/deleteuserrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |