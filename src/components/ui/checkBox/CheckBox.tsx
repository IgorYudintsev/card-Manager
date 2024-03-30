import { Check } from '@/assets/icons/Check'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import s from './CheckBox.module.scss'
import clsx from "clsx";

export type CheckboxProps = {
    checked?: boolean
    className?: string
    disabled?: boolean
    text?: string
}

export const CheckBox = (props: CheckboxProps) => {
    const { checked = true, className, disabled = false, text, ...rest } = props
    const classNames = {
        wrapper: clsx(s.Container, className),
        root: clsx(s.CheckboxRoot),
        indicator:clsx(s.CheckboxIndicator),
        typography:clsx(s.Typography,disabled ? s.Disabled : ''),
    }

    return (
        <div className={classNames.wrapper} {...rest}>
            <CheckboxRadix.Root
                className={classNames.root}
                defaultChecked={checked}
                disabled={disabled}
                id={'c1'}
            >
                <CheckboxRadix.Indicator className={classNames.indicator}>
                    <Check />
                </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
            {text && (
                <Typography
                    as={'label'}
                    className={classNames.typography}
                    htmlFor={'c1'}
                    variant={'body2'}
                >
                    {text}
                </Typography>
            )}
        </div>
    )
}
