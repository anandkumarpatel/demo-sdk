# FindPetsByStatusRequest

## Example Usage

```typescript
import { FindPetsByStatusRequest } from "readmedeo/models/operations";

let value: FindPetsByStatusRequest = {
  status: [
    "available",
  ],
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `status`                                                 | [operations.Status](../../models/operations/status.md)[] | :heavy_check_mark:                                       | Status values that need to be considered for filter      |