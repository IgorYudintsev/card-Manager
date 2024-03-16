import {ComponentPropsWithoutRef, ElementType, ReactNode} from "react";
import s from "./Typography.module.scss";

type Props<T extends ElementType='p'> = {
    variant: | 'body1'
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
    children: ReactNode
    as?:T
    href?:string
}& ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType= 'p'>(props: Props<T>) => {
    const {
        as: Component = 'p',
        variant,
        className,
        ...rest}=props
    return (
        <Component
            className={`
            ${s[variant]}
            ${className}
            `}
            {...rest}
        />
    );
};

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