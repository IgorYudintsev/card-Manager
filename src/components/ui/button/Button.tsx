import {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";
import s from './Button.module.scss'
import clsx from 'clsx'
import {Logout} from '@/assets'

type Props<T extends ElementType = 'button'> = {
    as?: T
    children?: ReactNode
    variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
    fullWidth?: boolean
    icon?: boolean
} & ComponentPropsWithoutRef<T>


export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
    const {
        as: Component = 'button',
        className,
        fullWidth,
        variant = 'primary',
        icon,
        ...rest
    } = props

    const classNames = {
        root: clsx(s.button, s[variant], fullWidth ? s.fullWidth : '', icon && s.wihIcon, className),
    }

    return (
        <div className={s.buttonWrapper}>
            {icon && <Logout className={s.logout}/>}
            <Component
                className={classNames.root}
                {...rest}
            />
        </div>
    )
}
//--------------------------------------------------------------
// import {ComponentPropsWithoutRef} from "react";
// import s from './Button.module.scss'
//
// type Props = {
//     variant?: 'primary' | 'secondary'
//     fullWidth?: boolean
// } & ComponentPropsWithoutRef<'button'>
//
//
// export const Button = ({className, fullWidth, variant = 'primary', ...rest}: Props) => {
//     return (
//         <button
//             className={`
//             ${s.button}
//             ${s[variant]}
//              ${fullWidth ? s.fullWidth : ''}
//              ${className}
//              `}
//             {...rest}
//         />
//     )
// }
