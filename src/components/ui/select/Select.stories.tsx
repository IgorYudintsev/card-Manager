import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '@/components/ui/select'
import { SelectItem } from '@/components/ui/select/selectItem/SelectItem'

const meta = {
    argTypes: {
        disabled: {
            control: { type: 'radio' },
            options: [true, false],
        },

        variant: {
            control: { type: 'radio' },
            options: ['primary', 'pagination'],
        },
    },
    component: Select,
    tags: ['autodocs'],
    title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectPrimary: Story = {
    args: { defaultValue: '1' },
    render: () => {
        return (
            <Select defaultValue={'1'}>
            <SelectItem value={'1'}>1</SelectItem>
                <SelectItem value={'2'}>2</SelectItem>
            </Select>
    )
    },
}

export const SelectWithValues: Story = {
    args: {},
    render: () => (
        <Select defaultValue={'1'}>
        <SelectItem value={'1'}>1</SelectItem>
            <SelectItem value={'2'}>2</SelectItem>
    <SelectItem value={'3'}>3</SelectItem>
    <SelectItem value={'4'}>4</SelectItem>
    <SelectItem value={'5'}>5</SelectItem>
    </Select>
),
}

export const SelectActive: Story = {
    args: {},
    render: () => (
        <Select defaultOpen defaultValue={'1'}>
    <SelectItem value={'1'}>1</SelectItem>
        <SelectItem value={'2'}>2</SelectItem>
    <SelectItem value={'3'}>3</SelectItem>
    <SelectItem value={'4'}>4</SelectItem>
    <SelectItem value={'5'}>5</SelectItem>
    </Select>
),
}

export const SelectDisabled: Story = {
    args: {},
    render: () => (
        <Select defaultValue={'1'} disabled>
<SelectItem value={'1'}>1</SelectItem>
    <SelectItem value={'2'}>2</SelectItem>
    <SelectItem value={'3'}>3</SelectItem>
    <SelectItem value={'4'}>4</SelectItem>
    <SelectItem value={'5'}>5</SelectItem>
    </Select>
),
}

export const SelectPagination: Story = {
    args: {},
    render: () => (
        <Select defaultValue={'1'} variant={'pagination'}>
    <SelectItem value={'1'}>1</SelectItem>
        <SelectItem value={'2'}>2</SelectItem>
    <SelectItem value={'3'}>3</SelectItem>
    <SelectItem value={'4'}>4</SelectItem>
    <SelectItem value={'5'}>5</SelectItem>
    </Select>
),
}

export const SelectPaginationActive: Story = {
    args: {},
    render: () => (
        <Select defaultOpen defaultValue={'1'} variant={'pagination'}>
    <SelectItem value={'1'}>1</SelectItem>
        <SelectItem value={'2'}>2</SelectItem>
    <SelectItem value={'3'}>3</SelectItem>
    <SelectItem value={'4'}>4</SelectItem>
    <SelectItem value={'5'}>5</SelectItem>
    </Select>
),
}

export const SelectPaginationDisabled: Story = {
    args: {},
    render: () => (
        <Select defaultValue={'1'} disabled variant={'pagination'}>
    <SelectItem value={'1'}>1</SelectItem>
        <SelectItem value={'2'}>2</SelectItem>
    <SelectItem value={'3'}>3</SelectItem>
    <SelectItem value={'4'}>4</SelectItem>
    <SelectItem value={'5'}>5</SelectItem>
    </Select>
),
}


//-----------------------------------------------------------------------
// import type { Meta, StoryObj } from '@storybook/react'
// import {Select} from "@/components/ui/select/Select";
//
//
// const meta = {
//     argTypes: {
//         defaultOpen: {
//             control: { type: 'radio' },
//             options: [true, false],
//         },
//         disabled: {
//             control: { type: 'radio' },
//             options: [true, false],
//         },
//     },
//     component: Select,
//     tags: ['autodocs'],
//     title: 'Components/Select',
// } satisfies Meta<typeof Select>
//
// const optionsForStory = ['Ananas', 'Bananas', 'Anan', 'Banan']
//
// export default meta
// type Story = StoryObj<typeof meta>
//
// export const SelectDefault: Story = {
//     args: {
//         label: 'Select Default',
//         options: optionsForStory,
//     },
// }
//
// export const SelectActive: Story = {
//     args: {
//         defaultOpen: true,
//         label: 'Select Active',
//         options: optionsForStory,
//     },
// }
//
// export const SelectDisabled: Story = {
//     args: {
//         disabled: true,
//         label: 'Select Disabled',
//         options: optionsForStory,
//     },
// }




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

