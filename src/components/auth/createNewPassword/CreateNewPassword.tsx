import {Card} from "@/components/ui/card";
import {useForm} from "react-hook-form";
import {Typography} from "@/components/ui/typography";
import {CreateNewPasswordFormValues, createNewPasswordSchema} from "@/components/auth/createNewPassword/utils";
import {zodResolver} from "@hookform/resolvers/zod";
import {ControlledTextfield} from "@/components/ui/controlled/controlled-textfield/ControlledTextfield";
import {Button} from "@/components/ui/button";
import s from './CreateNewPassword.module.scss'

export const CreateNewPassword = () => {
    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<CreateNewPasswordFormValues>({
        defaultValues: { password: '' },
        resolver: zodResolver(createNewPasswordSchema),
    })

    const onSubmit = (data: CreateNewPasswordFormValues) => {
        console.log(data)
    }
    return (
        <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography className={s.createPasswordLabel} variant={'large'}>
                    Create new password
                </Typography>
                <ControlledTextfield
                    className={s.passwordField}
                    control={control}
                    errorMessage={errors.password?.message}
                    label={'Password'}
                    name={'password'}
                    placeholder={'Password'}
                    variant={'password'}
                />
                <Typography as={'p'} className={s.createPassword} variant={'body2'}>
                    Create new password and we will send you further instructions to email
                </Typography>
                <Button className={s.button} fullWidth>
                    Create New Password
                </Button>
            </form>
        </Card>
    );
};