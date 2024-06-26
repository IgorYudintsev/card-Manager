import { z } from 'zod'

export type ProfileFormValues = z.infer<typeof profileSchema>

export const profileSchema = z.object({
    nickname: z.string().min(3).max(30),
})

export type profileFileFormValues = z.infer<typeof fileSchema>

const MAX_FILE_SIZE = 5000000
// const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export const fileSchema = z
    .instanceof(File)
    .refine(
        file => file.size <= MAX_FILE_SIZE,
        `Max image size is 1MB. The file will not be uploaded.`
    )
    .refine(
        file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
        'Only .jpg, .jpeg, .png and .webp formats are supported. The file will not be uploaded.'
    )