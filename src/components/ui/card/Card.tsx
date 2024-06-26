import {ReactNode} from 'react'
import s from './Card.module.scss'

type Props = {
    children: ReactNode
}

export const Card = ({ children }: Props) => {
    return (
        <div className={s.card}>
            <div className={s.cardItems}>{children}</div>
        </div>
    )
}