import { Typography } from '@/components/ui/typography'
import * as Slider from '@radix-ui/react-slider'

import s from './DoubleSlider.module.scss'
import {ComponentPropsWithoutRef, useState} from "react";

export type DoubleSliderProps = ComponentPropsWithoutRef<typeof Slider.Root>
export const DoubleSlider = (props: DoubleSliderProps) => {
    const { defaultValue=[1,15], ...rest} = props
    const [currentValue, setCurrentValue] = useState(defaultValue)
    console.log(currentValue)

    return (
        <div className={s.container}>
            {/*<Typography as={'span'} className={s.value} variant={'body1'}>*/}
            {/*    {defaultValue[0]}*/}
            {/*</Typography>*/}
            <input className={s.value} placeholder={currentValue[0].toString()} />
            <Slider.Root
                className={s.slider}
                defaultValue={defaultValue}
                onValueChange={setCurrentValue}
                {...rest}
            >
                <Slider.Track className={s.sliderTrack}>
                    <Slider.Range className={s.sliderRange} />
                </Slider.Track>
                <Slider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
                <Slider.Thumb aria-label={'Volume'} className={s.sliderThumb} />
            </Slider.Root>
            <input className={s.value} placeholder={currentValue[1].toString()} />
            {/*<Typography as={'span'} className={s.value} variant={'body1'}>*/}
            {/*    {defaultValue[1]}*/}
            {/*</Typography>{' '}*/}
        </div>
    )
}
