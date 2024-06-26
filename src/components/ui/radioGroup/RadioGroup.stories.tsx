import type {Meta, StoryObj} from '@storybook/react'
import {RadioGroup} from "@/components/ui/radioGroup/RadioGroup";
import {RadioItem} from "@/components/ui/radioGroup/RadioItem";


// import { RadioItem } from '@/components/ui/radio-group/radioItem'
// import { Meta, StoryObj } from '@storybook/react'
//
// import { RadioGroup } from './radioGroup'


const meta = {
    argTypes: {
        disabled: {
            control: { type: 'boolean' },
        },
    },
    component: RadioGroup,
    tags: ['autodocs'],
    title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

type Story = StoryObj<typeof meta>

export default meta


export const RadioPrimary: Story = ({ disabled, ...args }: { disabled: boolean }) => (
    <RadioGroup disabled={disabled} {...args}>
        <RadioItem value={'1'}>1</RadioItem>
        <RadioItem value={'2'}>2</RadioItem>
        <RadioItem value={'3'}>3</RadioItem>
        <RadioItem value={'4'}>4</RadioItem>
    </RadioGroup>
)

RadioPrimary.args = {
    disabled: true,
}

export const RadioDefault: Story = {
    args: {},
    render: () => (
        <RadioGroup defaultValue={'1'}>
            <RadioItem value={'1'}>1</RadioItem>
            <RadioItem value={'2'}>2</RadioItem>
            <RadioItem value={'3'}>3</RadioItem>
            <RadioItem value={'4'}>4</RadioItem>
        </RadioGroup>
    ),
}

export const RadioDisabled: Story = {
    args: {},
    render: () => (
        <RadioGroup defaultValue={'1'} disabled>
            <RadioItem value={'1'}>1</RadioItem>
            <RadioItem value={'2'}>2</RadioItem>
            <RadioItem value={'3'}>3</RadioItem>
            <RadioItem value={'4'}>4</RadioItem>
        </RadioGroup>
    ),
}