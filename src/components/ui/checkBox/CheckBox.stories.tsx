import type { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from '@/components/ui/checkBox/CheckBox'

const meta = {
    argTypes: {},
    component: CheckBox,
    tags: ['autodocs'],
    title: 'Components/CheckBox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const CheckBoxUnchecked: Story = {
    args: {
        checked: false,
        disabled: false,
    },
}

export const CheckBoxChecked: Story = {
    args: {
        checked: true,
        disabled: false,
    },
}

export const WithLabel: Story = {
    args: {
        checked: false,
        disabled: false,
        text: 'Accept terms and conditions.',
    },
}

export const WithLabelChecked: Story = {
    args: {
        checked: true,
        disabled: false,
        text: 'Accept terms and conditions.',
    },
}
