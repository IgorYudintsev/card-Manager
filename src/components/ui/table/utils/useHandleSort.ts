import { useState } from 'react'

import { Sort } from '@/components/ui/table/Table.stories'

export const useHandleSort = (options: Option[]) => {
    const [sort, setSort] = useState<Sort>(null)

    const sortedData = [...options]

    if (!sort?.key) {
        // Возвращаем объект даже когда не осуществляем сортировку
        return { setSort, sort, sortedData }; // <---- Изменено здесь
    }

    sortedData.sort((a, b) => {
        const valueA = a[sort.key]
        const valueB = b[sort.key]

        if (sort.direction === 'asc') {
            if (valueA === undefined || valueB === undefined) {
                return 0;
            }

            return typeof valueB === 'string'
                ? String(valueA).localeCompare(valueB)
                : Number(valueA) - Number(valueB);
        }

        if (valueA === undefined || valueB === undefined) {
            return 0;
        }

        return typeof valueA === 'string'
            ? String(valueB).localeCompare(valueA)
            : Number(valueB) - Number(valueA);
    });

    return { setSort, sort, sortedData }; // Уже возвращает объект
}

type Option = {
    [key: string]: number | string | undefined
    cardsCount: number
    createdBy: string
    image?: string
    title: string
    updated: string
}
