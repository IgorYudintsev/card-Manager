import {EyeOutline} from '@/assets/icons/EyeOutline'
import {EyeOffOutline} from '@/assets/icons/EyeOffOutline'
import {SearchOutline} from '@/assets/icons/SearchOutline'
import {Typography} from '@/components/ui/typography/Typography'
import s from './Textfield.module.scss'
import clsx from "clsx";

export type Props = {
    className?: string
    disabled?: boolean
    error?: boolean
    variant?: 'password' | 'search' | 'text'
    placeholder:string
}
export const Textfield = (props: Props) => {
    const {className, disabled = false, error = false, variant = 'text', ...rest} = props

    const searchVariant = variant === 'search'
    const passwordVariant = variant === 'password'

    const classNames = {
        container: clsx(s.textField_container),
        typography: clsx(s.textField_label,disabled && s.textField_label_disabled),
    }

    return (
        <div className={classNames.container}>
            {!searchVariant && (
                <Typography
                    className={classNames.typography}
                    variant={'body2'}
                >
                    Input
                </Typography>
            )}
        </div>
    );
};