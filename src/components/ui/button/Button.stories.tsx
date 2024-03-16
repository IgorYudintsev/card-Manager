import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './'

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: { type: 'radio' },
        },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        disabled: false,
    },
}

export const PrimaryWithSVG: Story = {
    args: {
        variant: 'primary',
        children: <>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.66669 1.99996C2.8435 1.99996 3.01307 1.92972 3.13809 1.8047C3.26312 1.67967 3.33335 1.5101 3.33335 1.33329C3.33335 1.15648 3.26312 0.986912 3.13809 0.861888C3.01307 0.736864 2.8435 0.666626 2.66669 0.666626H1.33335C1.15654 0.666626 0.986974 0.736864 0.861949 0.861888C0.736925 0.986912 0.666687 1.15648 0.666687 1.33329V10.6666C0.666687 10.8434 0.736925 11.013 0.861949 11.138C0.986974 11.2631 1.15654 11.3333 1.33335 11.3333H2.66669C2.8435 11.3333 3.01307 11.2631 3.13809 11.138C3.26312 11.013 3.33335 10.8434 3.33335 10.6666C3.33335 10.4898 3.26312 10.3202 3.13809 10.1952C3.01307 10.0702 2.8435 9.99996 2.66669 9.99996H2.00002V1.99996H2.66669Z" fill="white"/>
            <path d="M11.88 5.61338L10 2.94672C9.89804 2.80299 9.74333 2.70548 9.56968 2.67549C9.39604 2.64551 9.21758 2.6855 9.07333 2.78672C9.00123 2.83724 8.93985 2.90154 8.89274 2.97592C8.84562 3.05029 8.8137 3.13326 8.79883 3.22004C8.78395 3.30681 8.78641 3.39568 8.80607 3.4815C8.82572 3.56732 8.86218 3.64839 8.91333 3.72005L10.06 5.33338H4.66667C4.48986 5.33338 4.32029 5.40362 4.19526 5.52864C4.07024 5.65367 4 5.82324 4 6.00005C4 6.17686 4.07024 6.34643 4.19526 6.47145C4.32029 6.59648 4.48986 6.66672 4.66667 6.66672H10L8.8 8.26672C8.74747 8.33675 8.70925 8.41645 8.68752 8.50126C8.6658 8.58607 8.66098 8.67433 8.67337 8.761C8.68575 8.84766 8.71508 8.93104 8.75968 9.00638C8.80429 9.08171 8.86329 9.14752 8.93333 9.20005C9.04873 9.2866 9.18909 9.33338 9.33333 9.33338C9.43683 9.33338 9.53891 9.30928 9.63148 9.263C9.72405 9.21671 9.80457 9.14951 9.86667 9.06672L11.8667 6.40005C11.952 6.28729 11.9994 6.15031 12.0018 6.00889C12.0041 5.86748 11.9615 5.72897 11.88 5.61338Z" fill="white"/>
        </svg>
            Primary Button PrimaryWithSVG
        </>,
        disabled: false,
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
        disabled: false,
    },
}

export const FullWidth: Story = {
    args: {
        variant: 'primary',
        children: 'Full Width Primary Button',
        disabled: false,
        fullWidth: true,
    },
}

export const AsLink: Story = {
    args: {
        variant: 'primary',
        children: 'Link that looks like a button',
        as: 'a',
        href:'https://google.com'
    },
}