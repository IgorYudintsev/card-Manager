import { Check } from '@/assets/icons/Check'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './CheckBox.module.scss'

export type CheckboxProps = {
    checked?: boolean
    className?: string
    disabled?: boolean
    text?: string
}

export const CheckBox = (props: CheckboxProps) => {
    const { checked = true, className, disabled = false, text, ...rest } = props

    return (
        <div className={`${s.Container} ${className}`} {...rest}>
            <CheckboxRadix.Root
                className={s.CheckboxRoot}
                defaultChecked={checked}
                disabled={disabled}
                id={'c1'}
            >
                <CheckboxRadix.Indicator className={s.CheckboxIndicator}>
                    <Check />
                </CheckboxRadix.Indicator>
            </CheckboxRadix.Root>
            {text && (
                <Typography
                    as={'label'}
                    className={`${s.Typography} ${disabled ? s.Disabled : ''}`}
                    htmlFor={'c1'}
                    variant={'body2'}
                >
                    {text}
                </Typography>
            )}
        </div>
    )
}
