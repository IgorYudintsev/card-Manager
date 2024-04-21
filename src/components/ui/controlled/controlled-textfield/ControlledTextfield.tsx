import {useController, UseControllerProps} from "react-hook-form";
import {FormValues} from "@/components/auth/login-form/utils";
import {Textfield, TextFieldProps} from "@/components/ui/textfield";


type Props = UseControllerProps<FormValues> &
    Omit<TextFieldProps, 'checked' | 'onValueChange'>
export const ControlledTextfield = ({control, name, label, errorMessage,variant}: Props) => {
    const {
        field: {onChange},
    } = useController({
        name,
        control,
        defaultValue: false,
    })
    return (
        <Textfield onChange={onChange}
                   name={name}
                   label={label}
                   errorMessage={errorMessage}
                   variant={variant}
        />
    );
};