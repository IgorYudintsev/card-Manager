import type { Meta, StoryObj } from '@storybook/react'
import {Select} from "@/components/ui/select/Select";


const meta = {
    argTypes: {
        defaultOpen: {
            control: { type: 'radio' },
            options: [true, false],
        },
        disabled: {
            control: { type: 'radio' },
            options: [true, false],
        },
    },
    component: Select,
    tags: ['autodocs'],
    title: 'Components/Select',
} satisfies Meta<typeof Select>

const optionsForStory = ['Ananas', 'Bananas', 'Anan', 'Banan']

export default meta
type Story = StoryObj<typeof meta>

export const SelectDefault: Story = {
    args: {
        label: 'Select Default',
        options: optionsForStory,
    },
}

export const SelectActive: Story = {
    args: {
        defaultOpen: true,
        label: 'Select Active',
        options: optionsForStory,
    },
}

export const SelectDisabled: Story = {
    args: {
        disabled: true,
        label: 'Select Disabled',
        options: optionsForStory,
    },
}




//----------------------------------------------------------
// import type { Meta, StoryObj } from '@storybook/react'
//
// import {Select} from "@/components/ui/select/Select";
//
// const meta = {
//     argTypes: {},
//     component: Select,
//     tags: ['autodocs'],
//     title: 'Components/Select',
// } satisfies Meta<typeof Select>
//
// export default meta
// type Story = StoryObj<typeof meta>
//
// export const SelectDefault: Story = {
//
// }

