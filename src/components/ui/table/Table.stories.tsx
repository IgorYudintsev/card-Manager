import type { Meta, StoryObj } from '@storybook/react'
import {Table, TableBody, TableDataCell, TableHead, TableHeadCell, TableRow} from "@/components/ui/table/Table";
import defaultAvatar from '@/assets/image/defaultAvatar.png'
import {PlayIcon} from "@radix-ui/react-icons";
import {Delete, Edit} from "@/assets";
import {useHandleSort} from "@/components/ui/table/utils/useHandleSort";
import {TableHeader} from "@/components/ui/table/tableHeader/TableHeader";

const meta = {
    argTypes: {},
    component: Table,
    tags: ['autodocs'],
    title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const TableDefault: Story = {
    args: {},
    render: args => {
        const options = [
            {
                cardsNumber: 1,
                createdBy: '01',
                lastUpdated: '2023-01-31T12:45:00.000Z',
                name: 'Cities',
            },
            {
                cardsNumber: 1,
                createdBy: '01',
                lastUpdated: '2023-01-31T12:45:00.000Z',
                name: 'Cars',
            },
            {
                cardsNumber: 1,
                createdBy: '01',
                image: defaultAvatar,
                lastUpdated: '2023-01-31T12:45:00.000Z',
                name: 'Books',
            },
        ]




        const sortHandler = useHandleSort(options)
        const { setSort, sort, sortedData } = sortHandler

        return (
            <Table {...args}>
                <TableHeader columns={columns} onClick={sortHandler} onSort={setSort} sort={sort} />
                {/*<TableHead>*/}
                {/*    <TableRow>*/}
                {/*        <TableHeadCell>Name</TableHeadCell>*/}
                {/*        <TableHeadCell>Cards</TableHeadCell>*/}
                {/*        <TableHeadCell>Last Updated</TableHeadCell>*/}
                {/*        <TableHeadCell>Created By</TableHeadCell>*/}
                {/*        <TableHeadCell></TableHeadCell>*/}
                {/*    </TableRow>*/}
                {/*</TableHead>*/}
                <TableBody>
                    {options.map(t => {
                        return (
                            <TableRow key={t.lastUpdated}>
                                <TableDataCell>
                  <span>
                    {t.image && (
                        <img alt={'image'} src={t.image} style={{ height: '35px', width: '35px' }} />
                    )}
                      {t.name}
                  </span>
                                </TableDataCell>
                                <TableDataCell>{t.cardsNumber}</TableDataCell>
                                <TableDataCell>{t.lastUpdated}</TableDataCell>
                                <TableDataCell>{t.createdBy}</TableDataCell>
                                <TableDataCell>
                                    <PlayIcon />
                                    <Edit />
                                    <Delete />
                                </TableDataCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        )
    },
}

export type Sort = {
    direction: 'asc' | 'desc'
    key: string
} | null

export type Column = {
    key: string
    sortable?: boolean
    title: string
}
