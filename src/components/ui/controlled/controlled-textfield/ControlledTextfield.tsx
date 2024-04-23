import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {Textfield, TextFieldProps} from "@/components/ui/textfield";


type Props<T extends FieldValues> = UseControllerProps<T> &
    Omit<TextFieldProps, 'checked' | 'onValueChange'>
export const ControlledTextfield = <T extends FieldValues>({control, name, label, errorMessage,variant, ...rest}: Props<T>) => {
    const {
        field: {onChange},
    } = useController({
        name,
        control,
       // defaultValue: false,
    })
    return (
        <Textfield onChange={onChange}
                   name={name}
                   label={label}
                   errorMessage={errorMessage}
                   variant={variant}
                   {...rest}
        />
    );
};

//---------------------------------------------------------------------------------------

// import {useController, UseControllerProps} from "react-hook-form";
// import {FormValues} from "../../../auth/signIn/utils";
// import {Textfield, TextFieldProps} from "@/components/ui/textfield";
//
//
// type Props = UseControllerProps<FormValues> &
//     Omit<TextFieldProps, 'checked' | 'onValueChange'>
// export const ControlledTextfield = ({control, name, label, errorMessage,variant, ...rest}: Props) => {
//     const {
//         field: {onChange},
//     } = useController({
//         name,
//         control,
//         defaultValue: false,
//     })
//     return (
//         <Textfield onChange={onChange}
//                    name={name}
//                    label={label}
//                    errorMessage={errorMessage}
//                    variant={variant}
//                    {...rest}
//         />
//     );
// };