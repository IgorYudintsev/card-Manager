import type {Meta, StoryObj} from '@storybook/react'
import {RadioGroup} from "@/components/ui/radioGroup/RadioGroup";

const meta = {
    argTypes: {},
    component: RadioGroup,
    tags: ['autodocs'],
    title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

const radioGroupOptions = ['Check1', 'Check2', 'Check3', 'Check4']

export const RadioDefault: Story = {
    args: {
        options: radioGroupOptions,
    },
}

export const RadioDisabled: Story = {
    args: {
        disabled: true,
        options: radioGroupOptions,
    },
}