import type { Meta, StoryObj } from '@storybook/react'
import {Profile} from "@/components/auth/profile/Profile";

const meta = {
    title: 'Auth/Profile',
    component: Profile,
    tags: ['autodocs'],
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        email: 'dollarselephant@gmail.com',
        nickname: 'IgorY'
    }
}