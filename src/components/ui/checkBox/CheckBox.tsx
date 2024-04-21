import {Check} from '@/assets'
import {Typography} from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import s from './CheckBox.module.scss'
import clsx from "clsx";
import {forwardRef} from "react";

export type CheckboxProps = {
    onCheckedChange?: (value: boolean) => void
    checked: boolean
    className?: string
    disabled?: boolean
    label?: string
}

export const CheckBox = forwardRef<HTMLInputElement, CheckboxProps>((props) => {
    const {checked = true, onCheckedChange, className, disabled = false, label, ...rest} = props
    const classNames = {
        wrapper: clsx(s.Container, className),
        root: clsx(s.CheckboxRoot),
        indicator: clsx(s.CheckboxIndicator),
        typography: clsx(s.Typography, disabled ? s.Disabled : ''),
    }

    return (
        <div className={classNames.wrapper} {...rest}>
            <CheckboxRadix.Root
                className={classNames.root}
                checked={checked}
                onCheckedChange={onCheckedChange}
                disabled={disabled}
                id={'c1'}
            >
                <CheckboxRadix.Indicator className={classNames.indicator}>
                    <Check/>
                </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
            {label && (
                <Typography
                    as={'label'}
                    className={classNames.typography}
                    htmlFor={'c1'}
                    variant={'body2'}
                >
                    {label}
                </Typography>
            )}
        </div>
    )
})
