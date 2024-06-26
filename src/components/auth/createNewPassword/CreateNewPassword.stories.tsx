import type { Meta, StoryObj } from '@storybook/react'
import {CreateNewPassword} from "@/components/auth/createNewPassword/CreateNewPassword";
import {userEvent, within} from "@storybook/test";

const meta = {
    title: 'Auth/CreateNewPassword',
    component: CreateNewPassword,
    tags: ['autodocs'],
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const CreatePasswordInteractiveStory: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        const passwordElement = canvas.getByPlaceholderText('Password')

        // The delay option sets the amount of milliseconds between characters being typed
        await userEvent.type(passwordElement, 'randomstring', {
            delay: 100,
        })
        const buttonElement = canvas.getByText('Create New Password')

        await userEvent.click(buttonElement, {
            delay: 200,
        })
    },
}