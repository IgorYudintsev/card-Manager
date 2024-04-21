import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'
import {ArrowDown} from '@/assets'
import * as SelectRadix from '@radix-ui/react-select'
import s from './Select.module.scss'
import clsx from "clsx";
import {Typography} from "@/components/ui/typography";

type Props = {
    className?: string
    label?: string
    placeholder?: string
    variant?: 'pagination' | 'primary'
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, Props>(
    (props, refSelect) => {
        const {
            className,
            disabled = false,
            label,
            children,
            placeholder,
            variant = 'primary',
            ...restProps
        } = props

        //const [state, setState] = useState(false)

        console.log(refSelect)
        const classNames = {
            wrapper: clsx(s.selectWrapper),
            label: clsx(s.selectLabel, disabled && s.selectLabelDisabled),
            trigger: clsx(s.selectTrigger, s.variant === 'pagination' && s.paginationSelect, className),
            arrow: clsx(s.arrow),
            content: clsx(s.selectContent),
            viewport: clsx(s.selectViewport),
            group: clsx(s.selectGroup),
            selectItem: clsx(s.selectGroup)
        }

        // const [state, setState] = useState(false)

        return (
            <div className={classNames.wrapper}>
                {/*<div className={classNames.label}>{label}</div>*/}
                <Typography
                    className={classNames.label}
                    variant={'body2'}
                >
                    {label}
                </Typography>
                <SelectRadix.Root disabled={disabled}{...restProps}>
                    <SelectRadix.Trigger className={classNames.trigger}>
                        <SelectRadix.Value placeholder={placeholder}/>
                        <SelectRadix.Icon asChild>
                            <ArrowDown className={classNames.arrow}/>
                        </SelectRadix.Icon>
                    </SelectRadix.Trigger>
                    <SelectRadix.Portal>
                        <SelectRadix.Content
                            align={'start'}
                            className={classNames.content}
                            position={'popper'}
                            sticky={'partial'}
                            side={'bottom'}
                        >
                            <SelectRadix.Viewport className={classNames.viewport}>
                                <SelectRadix.Group className={classNames.group}>
                                    {children}
                                </SelectRadix.Group>
                            </SelectRadix.Viewport>
                        </SelectRadix.Content>
                    </SelectRadix.Portal>
                </SelectRadix.Root>
            </div>
        )
    }
)
//------------------------------------------------------------------
// import {ComponentPropsWithoutRef, ElementRef, forwardRef, useState} from 'react'
// import {ArrowDown} from '@/assets'
// import {ArrowUp} from '@/assets'
// import * as SelectRadix from '@radix-ui/react-select'
// import s from './Select.module.scss'
// import {SelectItem} from "@/components/ui/select/selectItem/SelectItem";
// import clsx from "clsx";
// import {Typography} from "@/components/ui/typography";
//
// type Props = {
//     className?: string
//     classNameItem?: string
//     defaultOpen?: boolean
//     disabled?: boolean
//     label?: string
//     options: string[]
// } & ComponentPropsWithoutRef<typeof SelectRadix.Root>
//
// export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, Props>(
//     (props, refSelect) => {
//         const {className, classNameItem, disabled = false, label, options = [], ...restProps} = props
//
//         const [state, setState] = useState(false)
//
//         console.log(refSelect)
//         const classNames = {
//             wrapper: clsx(s.selectWrapper),
//             label: clsx(s.selectLabel, disabled && s.selectLabelDisabled),
//             trigger: clsx(s.selectTrigger),
//             arrow: clsx(s.arrow),
//             content: clsx(s.selectContent),
//             viewport: clsx(s.selectViewport),
//             group: clsx(s.selectGroup),
//             selectItem: clsx(s.selectGroup)
//         }
//
//         // const [state, setState] = useState(false)
//
//         return (
//             <div className={classNames.wrapper}>
//                 {/*<div className={classNames.label}>{label}</div>*/}
//                 <Typography
//                     className={classNames.label}
//                     variant={'body2'}
//                 >
//                     {label}
//                 </Typography>
//                 <SelectRadix.Root
//                     defaultValue={options[0]}
//                     disabled={disabled}
//                     onOpenChange={open => setState(open)}
//                     {...restProps}>
//                     <SelectRadix.Trigger className={classNames.trigger}>
//                         <SelectRadix.Value placeholder={options[0]}/>
//                         <SelectRadix.Icon asChild>
//                             {state ? <ArrowUp className={classNames.arrow}/> :
//                                 <ArrowDown className={classNames.arrow}/>}
//                         </SelectRadix.Icon>
//                     </SelectRadix.Trigger>
//                     <SelectRadix.Portal>
//                         <SelectRadix.Content
//                             align={'start'}
//                             className={classNames.content}
//                             position={'popper'}
//                             sticky={'partial'}
//                             side={'bottom'}
//                         >
//                             <SelectRadix.Viewport className={classNames.viewport}>
//                                 <SelectRadix.Group className={classNames.group}>
//                                     {options.map((el, index) => (
//                                         <SelectItem className={classNames.selectItem} key={index} value={el}/>
//                                     ))}
//                                 </SelectRadix.Group>
//                             </SelectRadix.Viewport>
//                         </SelectRadix.Content>
//                     </SelectRadix.Portal>
//                 </SelectRadix.Root>
//             </div>
//         )
//     }
// )
//------------------------------------------------------------------------
// import {ComponentPropsWithoutRef, useState} from 'react'
// import { ArrowDown } from '@/assets'
// import { ArrowUp } from '@/assets'
// import * as SelectRadix from '@radix-ui/react-select'
// import s from './Select.module.scss'
// import {SelectItem} from "@/components/ui/select/selectItem/SelectItem";
// import clsx from "clsx";
// import {Typography} from "@/components/ui/typography";
//
// type Props = {
//     className?: string
//     classNameItem?: string
//     defaultOpen?: boolean
//     disabled?: boolean
//     label?: string
//     options: string[]
// }& ComponentPropsWithoutRef<typeof SelectRadix.Root>
//
// export const Select = ({
//                            className,
//                            classNameItem,
//                            disabled = false,
//                            label,
//                            options = [],
//                            ...props
//                        }: Props) => {
//
//     const classNames = {
//         wrapper: clsx(s.selectWrapper),
//         label:clsx(s.selectLabel,disabled && s.selectLabelDisabled),
//         trigger:clsx(s.selectTrigger),
//         arrow:clsx(s.arrow),
//         content:clsx(s.selectContent),
//         viewport:clsx(s.selectViewport),
//         group:clsx(s.selectGroup),
//         selectItem:clsx(s.selectGroup)
//     }
//
//     const [state, setState] = useState(false)
//
//     return (
//         <div className={classNames.wrapper}>
//             {/*<div className={classNames.label}>{label}</div>*/}
//             <Typography
//                 className={classNames.label}
//                 variant={'body2'}
//             >
//                 {label}
//             </Typography>
//             <SelectRadix.Root
//                 defaultValue={options[0]}
//                 disabled={disabled}
//                 onOpenChange={open => setState(open)}
//                 {...props}>
//                 <SelectRadix.Trigger className={classNames.trigger}>
//                     <SelectRadix.Value placeholder={options[0]} />
//                     <SelectRadix.Icon asChild>
//                         {state ? <ArrowUp className={classNames.arrow} /> : <ArrowDown className={classNames.arrow} />}
//                     </SelectRadix.Icon>
//                 </SelectRadix.Trigger>
//                 <SelectRadix.Portal>
//                     <SelectRadix.Content
//                         align={'start'}
//                         className={classNames.content}
//                         position={'popper'}
//                         sticky={'partial'}
//                         side={'bottom'}
//                     >
//                         <SelectRadix.Viewport className={classNames.viewport}>
//                             <SelectRadix.Group className={classNames.group}>
//                                 {options.map((el, index) => (
//                                     <SelectItem className={classNames.selectItem} key={index} value={el} />
//                                 ))}
//                             </SelectRadix.Group>
//                         </SelectRadix.Viewport>
//                     </SelectRadix.Content>
//                 </SelectRadix.Portal>
//             </SelectRadix.Root>
//         </div>
//     )
// }


//------------------------------------------------------------------
// import React from 'react';
// import * as RadixSelect from '@radix-ui/react-select';
// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
// import s from './Select.module.scss';
//
//
// export const Select = () => (
//     <RadixSelect.Root>
//         <RadixSelect.Trigger className={s.SelectTrigger} aria-label="Food">
//             <RadixSelect.Value placeholder="Select a fruit…" />
//             <RadixSelect.Icon className={s.SelectIcon}>
//                 <ChevronDownIcon />
//             </RadixSelect.Icon>
//         </RadixSelect.Trigger>
//         <RadixSelect.Portal>
//             <RadixSelect.Content className={s.SelectContent}>
//                 <RadixSelect.ScrollUpButton className={s.SelectScrollButton}>
//                     <ChevronUpIcon />
//                 </RadixSelect.ScrollUpButton>
//                 <RadixSelect.Viewport className={s.SelectViewport}>
//                     <RadixSelect.Group>
//                         <RadixSelect.Label className={s.SelectLabel}>Fruits</RadixSelect.Label>
//                         <SelectItem value="apple">Apple</SelectItem>
//                         <SelectItem value="banana">Banana</SelectItem>
//                         <SelectItem value="blueberry">Blueberry</SelectItem>
//                         <SelectItem value="grapes">Grapes</SelectItem>
//                         <SelectItem value="pineapple">Pineapple</SelectItem>
//                     </RadixSelect.Group>
//
//                     <RadixSelect.Separator className={s.SelectSeparator} />
//
//                     <RadixSelect.Group>
//                         <RadixSelect.Label className={s.SelectLabel}>Vegetables</RadixSelect.Label>
//                         <SelectItem value="aubergine">Aubergine</SelectItem>
//                         <SelectItem value="broccoli">Broccoli</SelectItem>
//                         <SelectItem value="carrot" disabled>
//                             Carrot
//                         </SelectItem>
//                         <SelectItem value="courgette">Courgette</SelectItem>
//                         <SelectItem value="leek">Leek</SelectItem>
//                     </RadixSelect.Group>
//
//                     <RadixSelect.Separator className={s.SelectSeparator} />
//
//                     <RadixSelect.Group>
//                         <RadixSelect.Label className={s.SelectLabel}>Meat</RadixSelect.Label>
//                         <SelectItem value="beef">Beef</SelectItem>
//                         <SelectItem value="chicken">Chicken</SelectItem>
//                         <SelectItem value="lamb">Lamb</SelectItem>
//                         <SelectItem value="pork">Pork</SelectItem>
//                     </RadixSelect.Group>
//                 </RadixSelect.Viewport>
//                 <RadixSelect.ScrollDownButton className={s.SelectScrollButton}>
//                     <ChevronDownIcon />
//                 </RadixSelect.ScrollDownButton>
//             </RadixSelect.Content>
//         </RadixSelect.Portal>
//     </RadixSelect.Root>
// );
//
//
// type SelectItemProps = {
//     value: string;
//     children: React.ReactNode;
//     disabled?: boolean;
// }
//
// const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
//     return (
//         <RadixSelect.Item {...props} ref={ref}>
//             <RadixSelect.ItemText>{props.children}</RadixSelect.ItemText>
//             <RadixSelect.ItemIndicator>
//                 <CheckIcon />
//             </RadixSelect.ItemIndicator>
//         </RadixSelect.Item>
//     );
// });
//


//------------------------------------------------------------------
// import React from 'react';
// import * as RadixSelect from '@radix-ui/react-select';
// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
// import s from './Select.module.scss';
//
//
// export const Select = () => (
//     <RadixSelect.Root>
//         <RadixSelect.Trigger className={s.SelectTrigger} aria-label="Food">
//             <RadixSelect.Value placeholder="Select a fruit…" />
//             <RadixSelect.Icon className={s.SelectIcon}>
//                 <ChevronDownIcon />
//             </RadixSelect.Icon>
//         </RadixSelect.Trigger>
//         <RadixSelect.Portal>
//             <RadixSelect.Content className={s.SelectContent}>
//                 <RadixSelect.ScrollUpButton className={s.SelectScrollButton}>
//                     <ChevronUpIcon />
//                 </RadixSelect.ScrollUpButton>
//                 <RadixSelect.Viewport className={s.SelectViewport}>
//                     <RadixSelect.Group>
//                         <RadixSelect.Label className={s.SelectLabel}>Fruits</RadixSelect.Label>
//                         <SelectItem value="apple">Apple</SelectItem>
//                         <SelectItem value="banana">Banana</SelectItem>
//                         <SelectItem value="blueberry">Blueberry</SelectItem>
//                         <SelectItem value="grapes">Grapes</SelectItem>
//                         <SelectItem value="pineapple">Pineapple</SelectItem>
//                     </RadixSelect.Group>
//
//                     <RadixSelect.Separator className={s.SelectSeparator} />
//
//                     <RadixSelect.Group>
//                         <RadixSelect.Label className={s.SelectLabel}>Vegetables</RadixSelect.Label>
//                         <SelectItem value="aubergine">Aubergine</SelectItem>
//                         <SelectItem value="broccoli">Broccoli</SelectItem>
//                         <SelectItem value="carrot" disabled>
//                             Carrot
//                         </SelectItem>
//                         <SelectItem value="courgette">Courgette</SelectItem>
//                         <SelectItem value="leek">Leek</SelectItem>
//                     </RadixSelect.Group>
//
//                     <RadixSelect.Separator className={s.SelectSeparator} />
//
//                     <RadixSelect.Group>
//                         <RadixSelect.Label className={s.SelectLabel}>Meat</RadixSelect.Label>
//                         <SelectItem value="beef">Beef</SelectItem>
//                         <SelectItem value="chicken">Chicken</SelectItem>
//                         <SelectItem value="lamb">Lamb</SelectItem>
//                         <SelectItem value="pork">Pork</SelectItem>
//                     </RadixSelect.Group>
//                 </RadixSelect.Viewport>
//                 <RadixSelect.ScrollDownButton className={s.SelectScrollButton}>
//                     <ChevronDownIcon />
//                 </RadixSelect.ScrollDownButton>
//             </RadixSelect.Content>
//         </RadixSelect.Portal>
//     </RadixSelect.Root>
// );
//
//
// type SelectItemProps = {
//     value: string;
//     children: React.ReactNode;
//     disabled?: boolean;
// }
//
// const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>((props, ref) => {
//     return (
//         <RadixSelect.Item {...props} ref={ref}>
//             <RadixSelect.ItemText>{props.children}</RadixSelect.ItemText>
//             <RadixSelect.ItemIndicator>
//                 <CheckIcon />
//             </RadixSelect.ItemIndicator>
//         </RadixSelect.Item>
//     );
// });
//
