import {EyeOffOutline} from '@/assets'
import {EyeOutline} from '@/assets'
import {SearchOutline} from '@/assets'
import {Typography} from '@/components/ui/typography'
import {useState} from "react";
import s from "./Textfield.module.scss";
import clsx from "clsx";

export type TextFieldProps = {
    className?: string
    disabled?: boolean
    error?: boolean
    variant?: 'password' | 'search' | 'text'
}

export const Textfield = (props: TextFieldProps) => {
    const {className, disabled = false, error = false, variant = 'text'} = props
    const [passwordVisibility, setPasswordVisibility] = useState(false)
    const searchVariant = variant === 'search'
    //const passwordVariant = variant === 'password'
    const changePasswordVision = () => {
        setPasswordVisibility(!passwordVisibility)
    }
    const placeholderValidator = () => {
        if (searchVariant) {
            return 'Input search'
        } else if (error) {
            return 'Error'
        } else {
            return 'Input'
        }
    }

    const classNames = {
        container: clsx(s.textField_container),
        typography: clsx(s.textField_label, disabled && s.textField_label_disabled),
        inputVariant: clsx(s[variant]),
        input: clsx(s.textField, error && s.textField_error, className),
        eyeOffOutline: clsx(s.passwordEyeIcon, disabled && s.passwordEyeIcon_disabled),
        eyeOutline: clsx(s.passwordEyeIcon, disabled && s.passwordEyeIcon_disabled),
        searchOutline: clsx(s.searchIcon, error && s.searchIcon_error),
        errorMessage: clsx(s.errorMessage),
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
            <div className={classNames.inputVariant}>
                <input
                    className={classNames.input}
                    disabled={disabled}
                    name={'textField'}
                    placeholder={placeholderValidator()}
                    type={passwordVisibility ? 'text' : variant}
                />
                {variant === 'password' &&
                    <div>
                        {passwordVisibility
                            ? (
                                <EyeOffOutline
                                    className={classNames.eyeOffOutline}
                                    onClick={changePasswordVision}
                                />
                            ) : (
                                <EyeOutline
                                    className={classNames.eyeOutline}
                                    onClick={changePasswordVision}
                                />
                            )}
                    </div>
                }
                <div>
                    {searchVariant && (
                        <SearchOutline
                            className={classNames.searchOutline}
                        />
                    )}
                </div>
            </div>
            {error && (
                <Typography className={classNames.errorMessage} variant={'error'}>Error!</Typography>
            )}
        </div>


    )
}

