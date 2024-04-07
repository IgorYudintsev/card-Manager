import {Typography} from '@/components/ui/typography'
import * as TabsRadix from '@radix-ui/react-tabs'

import s from './TabSwitcher.module.scss'
import clsx from "clsx";

type TabType = {
    className?: string
    disabled?: boolean
    title?: string
    value?: string
}

export type TabsProps = {
    tabs: TabType[]
}

export const TabSwitcher = (props: TabsProps) => {
    const {tabs} = props
    const classNames = {
        root: clsx(s.TabsRoot),
        tabsList: clsx(s.TabsList),
        tabsTrigger:clsx(s.TabsTrigger),
        tabsTitle:clsx(s.TabsTitl),
    }

    return (
        <TabsRadix.Root className={classNames.root} defaultValue={tabs[0]?.value ? 'tab1' : 'tab2'}>
            <TabsRadix.List aria-label={'Manage your account'} className={classNames.tabsList}>
                {tabs.map((tab, index) => {
                    return (
                        <TabsRadix.Trigger
                            className={classNames.tabsTrigger}
                            disabled={tab.disabled}
                            key={index}
                            value={`tab${index + 1}`}
                        >
                            <Typography className={classNames.tabsTitle} variant={'body1'}>
                                {tab.title}
                            </Typography>
                        </TabsRadix.Trigger>
                    )
                })}
            </TabsRadix.List>
        </TabsRadix.Root>
    )
}


//-------------------------------------------------
// import * as Tabs from '@radix-ui/react-tabs';
// import s from './TabSwitcher.module.scss'
//
// export const TabSwitcher = () => (
//     <Tabs.Root className={s.TabsRoot} defaultValue="tab1">
//         <Tabs.List className={s.TabsList} aria-label="Manage your account">
//             <Tabs.Trigger className={s.TabsTrigger} value="tab1">
//                 Account
//             </Tabs.Trigger>
//             <Tabs.Trigger className={s.TabsTrigger} value="tab2">
//                 Password
//             </Tabs.Trigger>
//         </Tabs.List>
//         <Tabs.Content className={s.TabsContent} value="tab1">
//             <p className={s.Text}>Make changes to your account here. Click save when you're done.</p>
//             <fieldset className={s.Fieldset}>
//                 <label className={s.Label} htmlFor="name">
//                     Name
//                 </label>
//                 <input className={s.Input} id="name" defaultValue="Pedro Duarte" />
//             </fieldset>
//             <fieldset className={s.Fieldset}>
//                 <label className={s.Label} htmlFor="username">
//                     Username
//                 </label>
//                 <input className={s.Input} id="username" defaultValue="@peduarte" />
//             </fieldset>
//             <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
//                 <button className={s.Button +" "+ s.green}>Save changes</button>
//             </div>
//         </Tabs.Content>
//         <Tabs.Content className={s.TabsContent} value="tab2">
//             <p className={s.Text}>Change your password here. After saving, you'll be logged out.</p>
//             <fieldset className={s.Fieldset}>
//                 <label className={s.Label} htmlFor="currentPassword">
//                     Current password
//                 </label>
//                 <input className={s.Input} id="currentPassword" type="password" />
//             </fieldset>
//             <fieldset className={s.Fieldset}>
//                 <label className={s.Label} htmlFor="newPassword">
//                     New password
//                 </label>
//                 <input className={s.Input} id="newPassword" type="password" />
//             </fieldset>
//             <fieldset className={s.Fieldset}>
//                 <label className={s.Label} htmlFor="confirmPassword">
//                     Confirm password
//                 </label>
//                 <input className={s.Input} id="confirmPassword" type="password" />
//             </fieldset>
//             <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
//                 <button className={s.Button +" "+ s.green}>Change password</button>
//             </div>
//         </Tabs.Content>
//     </Tabs.Root>
// );

