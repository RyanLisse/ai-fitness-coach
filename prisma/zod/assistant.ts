import * as z from "zod"

export const assistantSchema = z.object({
  id: z.string(),
  assistantId: z.string(),
})
