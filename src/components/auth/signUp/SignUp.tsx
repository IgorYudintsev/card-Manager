import {useForm} from 'react-hook-form'
import {Button} from '../../ui/button'
import {zodResolver} from '@hookform/resolvers/zod'
import {ControlledTextfield} from "@/components/ui/controlled/controlled-textfield/ControlledTextfield";
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import s from './SignUp.module.scss'
import {FormValuesSignUp, signUpSchema} from "@/components/auth/signUp/utils";

export const SignUp = () => {
    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<FormValuesSignUp>({
        defaultValues: { confirmPassword: '', email: '', password: '' },
        resolver: zodResolver(signUpSchema),
    })

    const onSubmit = (data: FormValuesSignUp) => {
        console.log(data)
    }

    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography className={s.signInLabel} variant={'large'}>
                    Sign Up
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
                <ControlledTextfield
                    className={s.passwordField}
                    control={control}
                    errorMessage={errors.confirmPassword?.message}
                    label={'confirmPassword'}
                    name={'confirmPassword'}
                    variant={'password'}
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
