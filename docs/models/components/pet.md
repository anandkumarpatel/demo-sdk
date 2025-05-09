# Pet

## Example Usage

```typescript
import { Pet } from "readmedeo/models/components";

let value: Pet = {
  name: "doggie",
  photoUrls: [
    "<value>",
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `category`                                                   | [components.Category](../../models/components/category.md)   | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | doggie                                                       |
| `photoUrls`                                                  | *string*[]                                                   | :heavy_check_mark:                                           | N/A                                                          |                                                              |
| `tags`                                                       | [components.Tag](../../models/components/tag.md)[]           | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `status`                                                     | [components.PetStatus](../../models/components/petstatus.md) | :heavy_minus_sign:                                           | pet status in the store                                      |                                                              |