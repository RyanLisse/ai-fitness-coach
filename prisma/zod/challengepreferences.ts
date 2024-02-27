import * as z from "zod"

export const challengePreferencesSchema = z.object({
  id: z.string(),
  userId: z.string(),
  challengeId: z.string(),
  sendNotifications: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
