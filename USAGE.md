<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->