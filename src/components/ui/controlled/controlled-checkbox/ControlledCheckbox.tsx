import {CheckBox, CheckboxProps} from "@/components/ui/checkBox";
import {useController, UseControllerProps} from "react-hook-form";
import {FormValues} from "@/components/auth/login-form/utils";


type Props = UseControllerProps<FormValues> &
    Omit<CheckboxProps, 'checked' | 'onValueChange'>

export const ControlledCheckbox = ({control,name,label}: Props) => {
    const {
        field: {value, onChange},
    } = useController({
        name,
        control,
        defaultValue: false,
    })
    return (
        <CheckBox onCheckedChange={onChange} checked={!!value} label={label}/>
    );
};