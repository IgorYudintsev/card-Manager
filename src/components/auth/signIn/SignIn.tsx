import {useForm} from 'react-hook-form'
import {Button} from '../../ui/button'
import {zodResolver} from '@hookform/resolvers/zod'
import {FormValues, signInSchema} from "@/components/auth/signIn/utils";
import {ControlledCheckbox} from "@/components/ui/controlled/controlled-checkbox/ControlledCheckbox";
import {ControlledTextfield} from "@/components/ui/controlled/controlled-textfield/ControlledTextfield";
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import s from './SignIn.module.scss'


// export type FormValues = {
//     email: string
//     password: string
//     rememberMe: boolean
// }

export const SignIn = () => {
    const {
        // register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<FormValues>({
        defaultValues: { rememberMe: false, email: '', password: '' },
        resolver: zodResolver(signInSchema),
    })

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography className={s.signInLabel} variant={'large'}>
                    Sign In
                </Typography>
                <ControlledTextfield
                    className={s.emailField}
                    control={control}
                    errorMessage={errors.email?.message}
                    label={'email'}
                    name={'email'}
                />
                <ControlledTextfield
                    className={s.passwordField}
                    control={control}
                    errorMessage={errors.password?.message}
                    label={'password'}
                    name={'password'}
                    variant={'password'}
                />
                <ControlledCheckbox
                    className={s.rememberMe}
                    label={'remember me'}
                    control={control}
                    name={'rememberMe'}
                />
                <Typography className={s.forgotPassword} variant={'body2'}>
                    Forgot Password?
                </Typography>
                <Button fullWidth>Sign In</Button>
            </form>
            <Typography className={s.formQuestion} variant={'body2'}>
                Don&apos;t have an account?
            </Typography>
            <Button className={s.submitButton} variant={'link'}>
                Sign Up
            </Button>
        </Card>
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