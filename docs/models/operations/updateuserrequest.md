# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "readmedeo/models/operations";

let value: UpdateUserRequest = {
  username: "Dortha_Hoeger59",
  user: {},
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `username`                                         | *string*                                           | :heavy_check_mark:                                 | name that need to be updated                       |
| `user`                                             | [components.User](../../models/components/user.md) | :heavy_check_mark:                                 | Updated user object                                |