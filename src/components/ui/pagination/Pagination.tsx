import {ArrowBack} from '@/assets/icons/ArrowBack'
import { ArrowForward } from '@/assets/icons/ArrowForward'
import { Dots } from '@/assets/icons/Dots'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

import s from './Pagination.module.scss'
import {useState} from "react";
import {DOTS, usePagination} from "@/components/ui/pagination/hooks/usePagination";

type Props = {
    className?: string
    pageSize: number
    selectOptions: string[]
    siblingCount?: number
    totalCount: number
}

export const Pagination = (props: Props) => {
    const { className, pageSize, selectOptions, siblingCount, totalCount } = props
    const [currentPage, setCurrentPage] = useState(1)
    const paginationRange = usePagination({ currentPage, pageSize, siblingCount, totalCount })

    if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
        return null
    }
    const onNext = () => {
        setCurrentPage(currentPage + 1)
    }

    const onPrevious = () => {
        setCurrentPage(currentPage - 1)
    }
    const lastPage = paginationRange?.[paginationRange.length - 1]
    const firstPage = 1

    return (
        <ul className={`${s.pagination_container} ${className}`}>
            <ArrowBack
                className={`${s.arrow} ${currentPage === firstPage && s.disabled} `}
                onClick={onPrevious}
            />

            {paginationRange?.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return <Dots className={s.dots} key={index} />
                }

                return (
                    <li
                        className={`${s.pagination_item} ${pageNumber === currentPage && s.selected}`}
                        key={index}
                        onClick={() => setCurrentPage(Number(pageNumber))}
                    >
                        {pageNumber}
                    </li>
                )
            })}
            <ArrowForward
                className={`${s.arrow} ${currentPage === lastPage && s.disabled}`}
                onClick={onNext}
            />
            <Typography as={'div'} className={s.selectWrapper} variant={'body2'}>
                Показать
                <Select
                    className={s.paginationSelect}
                    classNameItem={s.paginationSelectItem}
                    options={selectOptions}
                />
                на странице
            </Typography>
        </ul>
    )
}

