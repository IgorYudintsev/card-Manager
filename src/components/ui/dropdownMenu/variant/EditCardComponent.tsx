import {Delete} from '@/assets'
import {Edit} from '@/assets'
import {Play} from '@/assets'
import {Typography} from '@/components/ui/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import s from './../DropdownMenu.module.scss'
import clsx from "clsx";

export const EditCardComponent = () => {
    const classNames = {
        dropdownMenuItem: clsx(s.DropdownMenuItem),
        dropdownMenuSeparator: clsx(s.DropdownMenuSeparator),

    }
    return (
        <>
            <DropdownMenuRadix.Item className={classNames.dropdownMenuItem}>
                <Play/>
                <Typography variant={'caption'}>Learn</Typography>
            </DropdownMenuRadix.Item>
            <DropdownMenuRadix.Separator className={classNames.dropdownMenuSeparator}/>
            <DropdownMenuRadix.Item className={classNames.dropdownMenuItem}>
                <Edit/>
                <Typography variant={'caption'}>Edit</Typography>
            </DropdownMenuRadix.Item>
            <DropdownMenuRadix.Separator className={classNames.dropdownMenuSeparator}/>
            <DropdownMenuRadix.Item className={classNames.dropdownMenuItem}>
                <Delete/>
                <Typography variant={'caption'}>Delete</Typography>
            </DropdownMenuRadix.Item>
        </>
    )
}
