import {CheckBox, CheckboxProps} from "@/components/ui/checkBox";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";


type Props<T extends FieldValues> = UseControllerProps<T> &
    Omit<CheckboxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = <T extends FieldValues>({control, name, label, ...rest}: Props<T>) => {
    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
    })
    return (
        <CheckBox
            onCheckedChange={onChange}
            checked={!!value}
            label={label}
            {...rest}
        />
    );
};

//------------------------------------------------------------------------------

// import {CheckBox, CheckboxProps} from "@/components/ui/checkBox";
// import {useController, UseControllerProps} from "react-hook-form";
// import {FormValues} from "../../../auth/signIn/utils";
//
//
// type Props = UseControllerProps<FormValues> &
//     Omit<CheckboxProps, 'checked' | 'onValueChange'>
//
// export const ControlledCheckbox = ({control,name,label, ...rest}: Props) => {
//     const {
//         field: {value, onChange},
//     } = useController({
//         name,
//         control,
//         defaultValue: false,
//     })
//     return (
//         <CheckBox
//             onCheckedChange={onChange}
//             checked={!!value}
//             label={label}
//             {...rest}
//         />
//     );
// }