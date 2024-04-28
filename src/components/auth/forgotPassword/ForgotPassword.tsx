import {useForm} from "react-hook-form";
import {FormValues} from "@/components/auth/signIn/utils";
import {zodResolver} from "@hookform/resolvers/zod";
import {forgotPasswordSchema} from "@/components/auth/forgotPassword/utils";
import {Card} from "@/components/ui/card";
import {Typography} from "@/components/ui/typography";
import s from "@/components/auth/forgotPassword/ForgotPassword.module.scss";
import {ControlledTextfield} from "@/components/ui/controlled/controlled-textfield/ControlledTextfield";
import {Button} from "@/components/ui/button";

export const ForgotPassword = () => {
    const {
        // register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<FormValues>({
        defaultValues: { rememberMe: false, email: '', password: '' },
        resolver: zodResolver(forgotPasswordSchema),
    })

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }
    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography className={s.signInLabel} variant={'large'}>
                    Forgot your password?
                </Typography>
                <ControlledTextfield
                    className={s.emailField}
                    control={control}
                    errorMessage={errors.email?.message}
                    label={'email'}
                    name={'email'}
                />
                <Typography as={'p'} className={s.enterEmail} variant={'body2'}>
                    Enter your email address and we will send you further instructions
                </Typography>
                <Button fullWidth>Send Instructions</Button>
            </form>
            <Typography className={s.formQuestion} variant={'body2'}>
                Did you remember your password?
            </Typography>
            <Button className={s.submitButton} variant={'link'}>
                Try logging in
            </Button>
        </Card>
    );
};