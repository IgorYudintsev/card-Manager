import {Card} from "@/components/ui/card/Card";
import {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        children: 'Card content',
    },

}