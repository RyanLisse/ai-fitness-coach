import * as z from "zod"

export const userThreadSchema = z.object({
  id: z.string(),
  userId: z.string(),
  threadId: z.string(),
  createdAt: z.date(),
})
