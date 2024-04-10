import { HTMLAttributes } from 'react'

type SvgWithColor = {
    className?: string
    onClick: () => void
} & HTMLAttributes<SVGElement>

export const ArrowForward = ({ className, onClick }: SvgWithColor) => {
    return (
        <svg
            className={className}
            fill={'none'}
            height={'24'}
            onClick={onClick}
            viewBox={'0 0 24 24'}
            width={'24'}
            xmlns={'http://www.w3.org/2000/svg'}
        >
            <g clipPath={'url(#clip0_5661_1849)'}>
                <path
                    className={className}
                    d={
                        'M10 19C9.76635 19.0005 9.53991 18.9191 9.36 18.77C9.25874 18.6861 9.17504 18.583 9.11369 18.4666C9.05233 18.3503 9.01454 18.223 9.00246 18.092C8.99039 17.961 9.00427 17.8289 9.04331 17.7033C9.08236 17.5777 9.1458 17.4611 9.23 17.36L13.71 12L9.39 6.63C9.30693 6.52771 9.2449 6.41002 9.20747 6.28368C9.17004 6.15734 9.15794 6.02485 9.17188 5.89382C9.18582 5.76279 9.22552 5.63581 9.28869 5.52017C9.35187 5.40454 9.43727 5.30252 9.54 5.22C9.64346 5.12897 9.76463 5.0603 9.89589 5.01831C10.0272 4.97632 10.1657 4.96192 10.3028 4.976C10.4399 4.99009 10.5726 5.03236 10.6925 5.10016C10.8125 5.16796 10.9172 5.25983 11 5.37L15.83 11.37C15.9771 11.5489 16.0575 11.7734 16.0575 12.005C16.0575 12.2366 15.9771 12.4611 15.83 12.64L10.83 18.64C10.7297 18.761 10.6022 18.8567 10.458 18.9192C10.3138 18.9818 10.1569 19.0095 10 19Z'
                    }
                    fill={'black'}
                />
            </g>
            <defs>
                <clipPath id={'clip0_5661_1849'}>
                    <rect fill={'white'} height={'24'} width={'24'} />
                </clipPath>
            </defs>
        </svg>
    )
}
