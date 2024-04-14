import {ComponentPropsWithoutRef, ElementRef, forwardRef} from 'react'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'
import s from './RadioGroup.module.scss'
import clsx from "clsx";

type Props = {
    className?: string
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>



export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, Props>(
    (props, ref) => {

        const classNames = {
            radioGroupRoot: clsx(s.radioGroupRoot),
            radioButtonBlock: clsx(s.radioButtonBlock),
            // radioGroupItem: clsx(s.radioGroupItem),
            // radioGroupIndicator: clsx(s.radioGroupIndicator),
            // label: clsx(s.label),
        }
        return (
            <form className={s.formGroup}>
                <RadioGroupRadix.Root className={classNames.radioGroupRoot} {...props}>
                    <div className={classNames.radioButtonBlock} ref={ref}>
                        {props.children}
                    </div>
                </RadioGroupRadix.Root>
            </form>
        )
    }
)



//--------------------------------------------------------------------------------------------------------------

// export const RadioGroup = ({options = [], ...props}: Props) => {
//     const classNames = {
//         radioGroupRoot: clsx(s.radioGroupRoot),
//         radioGroupItem: clsx(s.radioGroupItem),
//         radioGroupIndicator: clsx(s.radioGroupIndicator),
//         label: clsx(s.label),
//     }
//
//     return (
//         <form>
//             <RadixRadioGroup.Root className={classNames.radioGroupRoot} {...props} defaultValue={options[0]}>
//                 {options.map((option, index) => (
//                     <div className={s.radioButtonBlock} key={option + index}>
//                         <RadixRadioGroup.Item
//                             className={classNames.radioGroupItem}
//                             id={'radio-' + index}
//                             value={option}
//                         >
//                             <RadixRadioGroup.Indicator className={classNames.radioGroupIndicator}/>
//                         </RadixRadioGroup.Item>
//                         <label className={classNames.label} htmlFor={'radio-' + index}>
//                             {option}
//                         </label>
//                     </div>
//                 ))}
//             </RadixRadioGroup.Root>
//         </form>
//     )
// }


// //------------------------------------------------------------------------------
//
// import * as RadioGroupRadix from '@radix-ui/react-radio-group';
// import { Root } from '@radix-ui/react-radio-group';
// import s from './RadioGroup.module.scss';
// import {ComponentPropsWithoutRef} from "react";
//
//
//
// type Props = {
//     className?: string
//     disabled?: boolean
//     options: string[]
// } & ComponentPropsWithoutRef<typeof RadioGroup.Root>
//
//
// export const RadioGroup = () => (
//     <form>
//         <RadioGroupRadix.Root className={s.RadioGroupRoot} defaultValue="default" aria-label="View density">
//             <div style={{display: 'flex', alignItems: 'center'}}>
//                 <RadioGroupRadix.Item className={s.RadioGroupItem} value="default" id="r1">
//                     <RadioGroupRadix.Indicator className={s.RadioGroupIndicator}/>
//                 </RadioGroupRadix.Item>
//                 <label className={s.Label} htmlFor="r1">
//                     Default
//                 </label>
//             </div>
//             <div style={{display: 'flex', alignItems: 'center'}}>
//                 <RadioGroupRadix.Item className={s.RadioGroupItem} value="comfortable" id="r2">
//                     <RadioGroupRadix.Indicator className={s.RadioGroupIndicator}/>
//                 </RadioGroupRadix.Item>
//                 <label className={s.Label} htmlFor="r2">
//                     Comfortable
//                 </label>
//             </div>
//             <div style={{display: 'flex', alignItems: 'center'}}>
//                 <RadioGroupRadix.Item className={s.RadioGroupItem} value="compact" id="r3">
//                     <RadioGroupRadix.Indicator className={s.RadioGroupIndicator}/>
//                 </RadioGroupRadix.Item>
//                 <label className={s.Label} htmlFor="r3">
//                     Compact
//                 </label>
//             </div>
//         </RadioGroupRadix.Root>
//     </form>
// );
//
