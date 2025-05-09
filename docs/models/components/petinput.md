# PetInput

## Example Usage

```typescript
import { PetInput } from "readmedeo/models/components";

let value: PetInput = {
  name: "doggie",
  photoUrls: [
    "<value>",
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `category`                                                   | [components.Category](../../models/components/category.md)   | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | doggie                                                       |
| `photoUrls`                                                  | *string*[]                                                   | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `tags`                                                       | [components.Tag](../../models/components/tag.md)[]           | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `status`                                                     | [components.PetStatus](../../models/components/petstatus.md) | :heavy_minus_sign:                                           | pet status in the store                                      |                                                              |