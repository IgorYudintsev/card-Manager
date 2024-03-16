import {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";
import s from './Button.module.scss'
import clsx from 'clsx'

type Props<T extends ElementType='button'> = {
    as?: T
    children: ReactNode
    variant?:'primary'| 'secondary'| 'tertiary'| 'link'
    fullWidth?: boolean
    className?: string
} & ComponentPropsWithoutRef<T>


export const Button = <T extends ElementType= 'button'>(props:Props<T>) => {
    const{
        as: Component = 'button',
        className,
        fullWidth,
        variant = 'primary',
        ...rest
    }=props

    const classNames = {
        root: clsx( s.button,s[variant], fullWidth ? s.fullWidth : '', className),
    }

    return (
        <Component
            className={classNames.root}
            {...rest}
        />
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
