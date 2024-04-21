import {useForm} from 'react-hook-form'
import {Button} from '../../ui/button'
import {zodResolver} from '@hookform/resolvers/zod'
import {FormValues, loginSchema} from "@/components/auth/login-form/utils";
import {ControlledCheckbox} from "@/components/ui/controlled/controlled-checkbox/ControlledCheckbox";
import {ControlledTextfield} from "@/components/ui/controlled/controlled-textfield/ControlledTextfield";


// export type FormValues = {
//     email: string
//     password: string
//     rememberMe: boolean
// }

export const LoginForm = () => {
    const {
       // register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<FormValues>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledTextfield
                control={control}
                errorMessage={errors.email?.message}
                label={'email'}
                name={'email'}
            />
            <ControlledTextfield
                control={control}
                errorMessage={errors.password?.message}
                label={'password'}
                name={'password'}
                variant={'password'}
            />
            <ControlledCheckbox label={'remember me'} control={control} name={'rememberMe'}/>
            <Button type="submit">Log in</Button>
        </form>
    )
}

//---------------------------------------------------------------------
// import {useController, useForm} from 'react-hook-form'
// import { Button } from '../../ui/button'
// import { Textfield } from '../../ui/textfield'
// import {CheckBox} from "@/components/ui/checkBox";
// import { zodResolver } from '@hookform/resolvers/zod'
// import {FormValues, loginSchema} from "@/components/auth/login-form/utils";
//
//
// // type FormValues = {
// //     email: string
// //     password: string
// //     rememberMe: boolean
// // }
//
// export const LoginForm = () => {
//     const { register,
//         handleSubmit,
//         control ,
//         formState: { errors },
//     } = useForm<FormValues>({
//         resolver: zodResolver(loginSchema),
//     })
//
//     const {
//         field: { value, onChange },
//     } = useController({
//         name: 'rememberMe',
//         control,
//         defaultValue: false,
//     })
//
//     const onSubmit = (data: FormValues) => {
//         console.log(data)
//     }
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Textfield   {...register('email')}
//                          label={'email'}
//                          errorMessage={errors.email?.message}
//             />
//             <Textfield   {...register('password')}
//                          label={'password'}
//                          errorMessage={errors.password?.message}
//             />
//             <CheckBox onCheckedChange={onChange} checked={value} label={'remember me'} />
//             <Button type="submit">Submit</Button>
//         </form>
//     )
// }