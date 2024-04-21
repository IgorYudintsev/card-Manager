import {Button} from '@/components/ui/button'
import {Select} from '@/components/ui/select'
import {Typography} from '@/components/ui/typography'
import {Meta, StoryObj} from '@storybook/react'
import {Modal} from "@/components/ui/modal/Modal";
import {Textfield} from "@/components/ui/textfield";
import {CheckBox} from "@/components/ui/checkBox";
import {SelectItem} from "@/components/ui/select/selectItem/SelectItem";

const meta = {
    argTypes: {},
    component: Modal,
    title: 'Components/Modal',
} satisfies Meta<typeof Modal>

type Story = StoryObj<typeof meta>

export default meta

export const ModalWithTitle: Story = {
    args: {
        onOpenChange: (open: boolean) => {
            console.log('Modal is open', open)
        },
        open: true,
        title: 'Modal demo',
    },
}

export const ModalWithContentText: Story = {
    args: {
        children: (
            <Typography variant={'body1'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniamdsa
            </Typography>
        ),
        onOpenChange: (open: boolean) => {
            console.log('Modal is open', open)
        },
        open: true,
    },
}

export const ModalWithContentTextOverflow: Story = {
    args: {
        children: (
            <Typography variant={'body1'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniamdsa lorem*100Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniamdsa lorem*100Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniamdsa lorem*100Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
                lorem*100Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa lorem*100Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniamdsa lorem*100Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniamdsa lorem*100Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniamdsa lorem*100Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa
                lorem*100Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa lorem*100Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniamdsa lorem*100Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniamdsa lorem*100 labore et dolore magna aliqua. Ut enim ad minim
                veniamdsa lorem*100
            </Typography>
        ),
        onOpenChange: (open: boolean) => {
            console.log('Modal is open', open)
        },
        open: true,
    },
}

export const ModalWithContentWithChildrens: Story = {
    args: {
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                <Select
                    // value={'Select'}
                >
                    <SelectItem value={'value1'}>value1</SelectItem>
                    <SelectItem value={'value2'}>value2</SelectItem>
                    <SelectItem value={'value3'}>value3</SelectItem>

                </Select>
                <Textfield></Textfield>
                <CheckBox checked={false} label={'Check me'} />
                <CheckBox checked />
                <div
                    style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between' }}
                >
                    <Button variant={'primary'}>Click me if you want</Button>
                    <Button variant={'secondary'}>Dont touch me!</Button>
                </div>
            </div>
        ),
        onOpenChange: (open: boolean) => {
            console.log('Modal is open', open)
        },
        open: true,
    },
}

export const ModalWithFullContent: Story = {
    args: {
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
                <Select
                    // value={'Select'}
                >
                    <SelectItem value={'value1'}>value1</SelectItem>
                    <SelectItem value={'value2'}>value2</SelectItem>
                    <SelectItem value={'value3'}>value3</SelectItem>

                </Select>
                <Textfield />
                <CheckBox checked={false} label={'Check me'} />
                <CheckBox checked />
                <div
                    style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between' }}
                >
                    <Button variant={'primary'}>Click me if you want</Button>
                    <Button variant={'secondary'}>Dont touch me!</Button>
                </div>
            </div>
        ),
        onOpenChange: (open: boolean) => {
            console.log('Modal is open', open)
        },
        open: true,
        title: 'Modal demo',
    },
}
