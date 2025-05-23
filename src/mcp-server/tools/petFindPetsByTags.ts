/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { petFindPetsByTags } from "../../funcs/petFindPetsByTags.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.FindPetsByTagsRequest$inboundSchema,
};

export const tool$petFindPetsByTags: ToolDefinition<typeof args> = {
  name: "pet-find-pets-by-tags",
  description: `Finds Pets by tags

Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await petFindPetsByTags(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
