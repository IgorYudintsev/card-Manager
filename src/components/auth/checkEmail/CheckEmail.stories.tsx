import type {Meta, StoryObj} from '@storybook/react'
import {CheckEmail} from "@/components/auth/checkEmail/CheckEmail";

const meta = {
    title: 'Auth/CheckEmail',
    component: CheckEmail,
    tags: ['autodocs'],
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: { email: 'dollarselephant@gmail.com' }
}