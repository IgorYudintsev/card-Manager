import type { Meta, StoryObj } from '@storybook/react'
import {Pagination} from "@/components/ui/pagination/Pagination";

const meta = {
    argTypes: {},
    component: Pagination,
    tags: ['autodocs'],
    title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationPrimary: Story = {
    args: { siblingCount: 1, totalCount: 250 },
}

export const PaginationWithMoreSiblings: Story = {
    args: { siblingCount: 3, totalCount: 250 },
}
