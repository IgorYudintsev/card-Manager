import defaultAvatar from '@/assets/image/defaultAvatar.png'
import { Button } from '@/components/ui/button'
import { EditCardComponent } from '@/components/ui/dropdownMenu/variant/EditCardComponent'
import { EditProfileComponent } from '@/components/ui/dropdownMenu/variant/EditProfileComponent'
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import s from './DropdownMenu.module.scss'
import clsx from "clsx";


type DropdownMenuProps = {
    defaultOpen?: boolean
    disabled?: boolean
    flag?: 'editCard' | 'editProfile'
    userEmail?: string
    userName?: string
}

export const DropdownMenu = (props: DropdownMenuProps) => {
    const {
        defaultOpen = false,
        disabled,
        flag = 'editProfile',
        userEmail = 'j&johnson@gmail.com',
        userName = 'Ivan',
        ...rest
    } = props

    const classNames = {
        iconButton: clsx(s.IconButton),
        userAvatar: clsx(s.UserAvatar),
        dropdownMenuContent: clsx(s.DropdownMenuContent,flag === 'editProfile' ? s.fullWidth : ''),
        arrow:clsx(s.arrow),
    }

    return (
        <DropdownMenuRadix.Root defaultOpen>
            <DropdownMenuRadix.Trigger asChild>
                <button aria-label={'Customise options'} className={classNames.iconButton}>
                    {flag === 'editProfile' ? (
                        <img alt={'userPhoto'} className={classNames.userAvatar} src={defaultAvatar} />
                    ) : (
                        <Button variant={'link'} />
                    )}
                </button>
            </DropdownMenuRadix.Trigger>

            <DropdownMenuRadix.Portal>
                <DropdownMenuRadix.Content
                    align={'end'}
                    className={classNames.dropdownMenuContent}
                    sideOffset={5}
                    {...rest}
                >
                    {flag === 'editCard' ? (
                        <EditCardComponent />
                    ) : (
                        <EditProfileComponent
                            userAvatar={defaultAvatar}
                            userEmail={userEmail}
                            userName={userName}
                        />
                    )}

                    <DropdownMenuRadix.Arrow asChild>
                        <div className={classNames.arrow} />
                    </DropdownMenuRadix.Arrow>
                </DropdownMenuRadix.Content>
            </DropdownMenuRadix.Portal>
        </DropdownMenuRadix.Root>
    )
}




//-----------------------------------------------------------------------------------------
// import React from 'react';
// import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';
//
// import {
//     HamburgerMenuIcon,
//     DotFilledIcon,
//     CheckIcon,
//     ChevronRightIcon,
// } from '@radix-ui/react-icons';
// import s from './DropdownMenu.module.scss';
//
// export const DropdownMenu = () => {
//     const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
//     const [urlsChecked, setUrlsChecked] = React.useState(false);
//     const [person, setPerson] = React.useState('pedro');
//
//     return (
//         <DropdownMenuRadix.Root>
//             <DropdownMenuRadix.Trigger asChild>
//                 <button className={s.IconButton} aria-label="Customise options">
//                     <HamburgerMenuIcon/>
//                 </button>
//             </DropdownMenuRadix.Trigger>
//
//             <DropdownMenuRadix.Portal>
//                 <DropdownMenuRadix.Content className={s.DropdownMenuContent} sideOffset={5}>
//                     <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
//                         New Tab <div className={s.RightSlot}>⌘+T</div>
//                     </DropdownMenuRadix.Item>
//                     <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
//                         New Window <div className={s.RightSlot}>⌘+N</div>
//                     </DropdownMenuRadix.Item>
//                     <DropdownMenuRadix.Item className={s.DropdownMenuItem} disabled>
//                         New Private Window <div className={s.RightSlot}>⇧+⌘+N</div>
//                     </DropdownMenuRadix.Item>
//                     <DropdownMenuRadix.Sub>
//                         <DropdownMenuRadix.SubTrigger className={s.DropdownMenuSubTrigger}>
//                             More Tools
//                             <div className={s.RightSlot}>
//                                 <ChevronRightIcon/>
//                             </div>
//                         </DropdownMenuRadix.SubTrigger>
//                         <DropdownMenuRadix.Portal>
//                             <DropdownMenuRadix.SubContent
//                                 className={s.DropdownMenuSubContent}
//                                 sideOffset={2}
//                                 alignOffset={-5}
//                             >
//                                 <DropdownMenuRadix.Item className={s.DropdownMenuItem}>
//                                     Save Page As… <div className={s.RightSlot}>⌘+S</div>
//                                 </DropdownMenuRadix.Item>
//                                 <DropdownMenuRadix.Item className={s.DropdownMenuItem}>Create
//                                     Shortcut…</DropdownMenuRadix.Item>
//                                 <DropdownMenuRadix.Item className={s.DropdownMenuItem}>Name
//                                     Window…</DropdownMenuRadix.Item>
//                                 <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator}/>
//                                 <DropdownMenuRadix.Item className={s.DropdownMenuItem}>Developer
//                                     Tools</DropdownMenuRadix.Item>
//                             </DropdownMenuRadix.SubContent>
//                         </DropdownMenuRadix.Portal>
//                     </DropdownMenuRadix.Sub>
//
//                     <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator}/>
//
//                     <DropdownMenuRadix.CheckboxItem
//                         className={s.DropdownMenuCheckboxItem}
//                         checked={bookmarksChecked}
//                         onCheckedChange={setBookmarksChecked}
//                     >
//                         <DropdownMenuRadix.ItemIndicator className={s.DropdownMenuItemIndicator}>
//                             <CheckIcon/>
//                         </DropdownMenuRadix.ItemIndicator>
//                         Show Bookmarks <div className={s.RightSlot}>⌘+B</div>
//                     </DropdownMenuRadix.CheckboxItem>
//                     <DropdownMenuRadix.CheckboxItem
//                         className={s.DropdownMenuCheckboxItem}
//                         checked={urlsChecked}
//                         onCheckedChange={setUrlsChecked}
//                     >
//                         <DropdownMenuRadix.ItemIndicator className={s.DropdownMenuItemIndicator}>
//                             <CheckIcon/>
//                         </DropdownMenuRadix.ItemIndicator>
//                         Show Full URLs
//                     </DropdownMenuRadix.CheckboxItem>
//
//                     <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator}/>
//
//                     <DropdownMenuRadix.Label className={s.DropdownMenuLabel}>People</DropdownMenuRadix.Label>
//                     <DropdownMenuRadix.RadioGroup value={person} onValueChange={setPerson}>
//                         <DropdownMenuRadix.RadioItem className={s.DropdownMenuRadioItem} value="pedro">
//                             <DropdownMenuRadix.ItemIndicator className={s.DropdownMenuItemIndicator}>
//                                 <DotFilledIcon/>
//                             </DropdownMenuRadix.ItemIndicator>
//                             Pedro Duarte
//                         </DropdownMenuRadix.RadioItem>
//                         <DropdownMenuRadix.RadioItem className={s.DropdownMenuRadioItem} value="colm">
//                             <DropdownMenuRadix.ItemIndicator className={s.DropdownMenuItemIndicator}>
//                                 <DotFilledIcon/>
//                             </DropdownMenuRadix.ItemIndicator>
//                             Colm Tuite
//                         </DropdownMenuRadix.RadioItem>
//                     </DropdownMenuRadix.RadioGroup>
//
//                     <DropdownMenuRadix.Arrow className={s.DropdownMenuArrow}/>
//                 </DropdownMenuRadix.Content>
//             </DropdownMenuRadix.Portal>
//         </DropdownMenuRadix.Root>
//     );
// };
