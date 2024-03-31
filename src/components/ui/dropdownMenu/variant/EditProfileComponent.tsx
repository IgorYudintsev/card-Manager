import { SignOut } from '@/assets'
import { User } from '@/assets'
import { Typography } from '@/components/ui/typography'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import s from './../DropdownMenu.module.scss'
import clsx from "clsx";

type PropsType = {
    userAvatar: string
    userEmail: string
    userName: string
}
export const EditProfileComponent = (props: PropsType) => {

    const classNames = {
        userAvatar: clsx(s.UserAvatar),
        userEmail:clsx(s.userEmail),
        dropdownMenuSeparator:clsx(s.DropdownMenuSeparator),
        dropdownMenuItem:clsx(s.DropdownMenuItem),
    }

    return (
        <>
            <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
                <img alt={'user avatar'}  className={classNames.userAvatar} src={props.userAvatar} />
                <div>
                    <Typography variant={'subtitle2'}>{props.userName}</Typography>
                    <Typography className={classNames.userEmail} variant={'caption'}>{props.userEmail}</Typography>
                   </div>
            </DropdownMenuRadix.Item>
            <DropdownMenuRadix.Separator className={classNames.dropdownMenuSeparator} />
            <DropdownMenuRadix.Item className={classNames.dropdownMenuItem}>
                <User />
                <Typography variant={'caption'}>My Profile</Typography>
            </DropdownMenuRadix.Item>
            <DropdownMenuRadix.Separator className={classNames.dropdownMenuSeparator} />
            <DropdownMenuRadix.Item className={classNames.dropdownMenuItem}>
                <SignOut />
                <Typography variant={'caption'}>Sign Out</Typography>
            </DropdownMenuRadix.Item>
        </>
    )
}
