import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './Typography.module.scss'
import clsx from "clsx";

export type TypographyProps<T extends ElementType = 'p'> = {
    as?: T
    className?: string
    variant:
        | 'body1'
        | 'body2'
        | 'caption'
        | 'error'
        | 'h1'
        | 'h2'
        | 'h3'
        | 'large'
        | 'link1'
        | 'link2'
        | 'overline'
        | 'subtitle1'
        | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'div'>(
    props: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>
) => {
    const { as: Component = 'div', className, variant = 'body1', ...rest } = props

    const classNames = {
             root: clsx(s.typography,s[variant],className),

    }

    return <Component className={classNames.root} {...rest} />
}





//----------------------------------------------------------------------------
// import {ComponentPropsWithoutRef, ReactNode} from "react";
// import s from "./Typography.module.scss";
//
// type Props = {
//     variant: | 'body1'
//         | 'body2'
//         | 'caption'
//         | 'error'
//         | 'h1'
//         | 'h2'
//         | 'h3'
//         | 'large'
//         | 'link1'
//         | 'link2'
//         | 'overline'
//         | 'subtitle1'
//         | 'subtitle2'
//     children: ReactNode
//     as?:any
//     href?:string
// }& ComponentPropsWithoutRef<'span'>
//
// export const Typography = ({variant,className,...rest}: Props) => {
//     return (
//         <span
//             className={`
//             ${s[variant]}
//             ${className}
//             `}
//             {...rest}
//         />
//     );
// };