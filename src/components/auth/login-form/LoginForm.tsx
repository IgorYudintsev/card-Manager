import {useController, useForm} from 'react-hook-form'
import { Button } from '../../ui/button'
import { Textfield } from '../../ui/textfield'
import {CheckBox} from "@/components/ui/checkBox";
import { zodResolver } from '@hookform/resolvers/zod'
import {FormValues, loginSchema} from "@/components/auth/login-form/utils";


// type FormValues = {
//     email: string
//     password: string
//     rememberMe: boolean
// }

export const LoginForm = () => {
    const { register,
        handleSubmit,
        control ,
        formState: { errors },
    } = useForm<FormValues>({
            resolver: zodResolver(loginSchema),
    })

    const {
        field: { value, onChange },
    } = useController({
        name: 'rememberMe',
        control,
        defaultValue: false,
    })

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Textfield   {...register('email')}
                         label={'email'}
                         errorMessage={errors.email?.message}
            />
            <Textfield   {...register('password')}
                         label={'password'}
                         errorMessage={errors.password?.message}
            />
            <CheckBox onCheckedChange={onChange} checked={value} label={'remember me'} />
            <Button type="submit">Submit</Button>
        </form>
    )
}