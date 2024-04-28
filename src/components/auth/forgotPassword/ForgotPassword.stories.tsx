import type { Meta, StoryObj } from '@storybook/react'
import {ForgotPassword} from "@/components/auth/forgotPassword/ForgotPassword";

const meta = {
    title: 'Auth/ForgotPass',
    component: ForgotPassword,
    tags: ['autodocs'],
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}