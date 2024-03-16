import type { Meta, StoryObj } from '@storybook/react'
import { Typography} from './'

const meta = {
    title: 'Components/Typography',
    component: Typography,
    tags: ['autodocs'],
    // argTypes: {
    //     variant: {
    //         options: ['primary', 'secondary'],
    //         control: { type: 'radio' },
    //     },
    // },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>


export const Heading1: Story = {
    args: {
        variant: 'h1',
        children: 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH',
          },
}
export const Heading2: Story = {
    args: {
        variant: 'h2',
        children: 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH',
    },
}
export const Heading3: Story = {
    args: {
        variant: 'h3',
        children: 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH',
    },
}
export const Large: Story = {
    args: {
        variant: 'large',
        children: 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH',
    },
}
export const Subtitle1: Story = {
    args: {
        variant: 'subtitle1',
        children: 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH',
    },
}
export const Subtitle2: Story = {
    args: {
        variant: 'subtitle2',
        children: 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH',
    },
}
export const Body1: Story = {
    args: {
        variant: 'body1',
        children: 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH',
    },
}
export const Body2: Story = {
    args: {
        variant: 'body2',
        children: 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH',
    },
}
export const Overline: Story = {
    args: {
        variant: 'overline',
        children: 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH',
    },
}
export const Error: Story = {
    args: {
        variant: 'error',
        children: 'Carosserie Test Zürich Stauffacherstrasse 318004 Zürich, ZH, CH',
    },
}
export const Link1: Story = {
    args: {
        variant: 'link1',
        children: 'Link 1',
        as: 'a',
        href:'https://google.com'
    },
}
export const Link2: Story = {
    args: {
        variant: 'link2',
        children: 'Link 2',
        as: 'a',
        href:'https://google.com'
    },
}