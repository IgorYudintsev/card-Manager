import { z } from 'zod'

export type CreateNewPasswordFormValues = z.infer<typeof createNewPasswordSchema>

export const createNewPasswordSchema = z.object({
    password: z.string().min(3),
})
