import { ArrowBackward } from '@/assets/icons/ArrowBack'
import { ArrowForward } from '@/assets/icons/ArrowForward'
import { Dots } from '@/assets/icons/Dots'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

import s from './Pagination.module.scss'
import {useState} from "react";

type Props = {
    pageSize: number
    siblings: number
    totalElements: number
}

export const Pagination = (props: Props) => {
    const [currentPage, setCurrentPage] = useState(6)
    const { pageSize, totalElements } = props
    const totalCount = Math.ceil(totalElements / pageSize)
    const startIndex = 1
    const endIndex = totalCount
    const onBackward = () => {
        setCurrentPage(currentPage - 1)
    }

    const onForward = () => {
        setCurrentPage(currentPage + 1)
    }
    // @ts-ignore
    return (
        <div className={s.paginationWrapper}>

            <Typography className={s.selectWrapper} variant={'body2'}>
                Показать
                <Select
                    className={s.paginationSelect}
                    classNameItem={s.paginationSelectItem}
                    options={['10', '20', '30', '100']}
                />
                на странице
            </Typography>
        </div>
    );
};