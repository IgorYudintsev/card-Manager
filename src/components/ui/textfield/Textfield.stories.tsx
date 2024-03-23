import type { Meta, StoryObj } from '@storybook/react'
import {Textfield} from '@/components/ui/textfield/Textfield'

const meta = {
    argTypes: {
        disabled: {
            control: { type: 'radio' },
            options: [true, false],
        },
        error: {
            control: { type: 'radio' },
            options: [true, false],
        },
        variant: {
            control: { type: 'radio' },
            options: ['password', 'text', 'search'],
        },
    },
    component: Textfield,
    tags: ['autodocs'],
    title: 'Components/TextField',
} satisfies Meta<typeof Textfield>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryInput: Story = {
    args: {
        //placeholder: 'Primary input',
        variant: 'text',
    },
}
export const PrimaryError: Story = {
    args: {
        error: true,
        //placeholder: 'Primary Error ',
        variant: 'text',
    },
}
export const PrimaryDisabled: Story = {
    args: {
        disabled: true,
       // placeholder: 'Primary Disabled',
        variant: 'text',
    },
}
export const PasswordInput: Story = {
    args: {
       // placeholder: 'Password Input',
        variant: 'password',
    },
}
export const PasswordError: Story = {
    args: {
        error: true,
       // placeholder: 'Password Error',
        variant: 'password',
    },
}
export const PasswordDisabled: Story = {
    args: {
        disabled: true,
       // placeholder: 'Password Disabled',
        variant: 'password',
      },
}
export const SearchInput: Story = {
    args: {
       // placeholder: 'Search Input',
        variant: 'search',
    },
}
export const SearchError: Story = {
    args: {
        error: true,
       // placeholder: 'Search Error',
        variant: 'search',
    },
}
export const SearchDisabled: Story = {
    args: {
        disabled: true,
        //placeholder: 'Search Disabled',
        variant: 'search',
    },
}