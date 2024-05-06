import type { Meta, StoryObj } from '@storybook/react'
import {ForgotPassword} from "@/components/auth/forgotPassword/ForgotPassword";
import {userEvent, within} from "@storybook/test";

const meta = {
    title: 'Auth/ForgotPass',
    component: ForgotPassword,
    tags: ['autodocs'],
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const ForgotPasswordInteractive: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        const emailElement = canvas.getByPlaceholderText('Email')

        // The delay option sets the amount of milliseconds between characters being typed
        await userEvent.type(emailElement, 'randomstring@mail.ru', {
            delay: 100,
        })
        const buttonElement = canvas.getByText('Send Instructions')

        await userEvent.click(buttonElement, {
            delay: 200,
        })
    },
}

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