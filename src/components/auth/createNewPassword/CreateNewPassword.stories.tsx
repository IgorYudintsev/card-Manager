import type { Meta, StoryObj } from '@storybook/react'
import {CreateNewPassword} from "@/components/auth/createNewPassword/CreateNewPassword";

const meta = {
    title: 'Auth/CreateNewPassword',
    component: CreateNewPassword,
    tags: ['autodocs'],
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}