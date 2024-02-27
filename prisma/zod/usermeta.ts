import * as z from "zod"

export const userMetaSchema = z.object({
  id: z.string(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  endpoint: z.string(),
  p256dh: z.string(),
  auth: z.string(),
})
