import React from "react";

interface InputProps {
    label?: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    isRequired?: boolean
}
const InputType: React.FC<InputProps> = ({
    label,
    type='text',
    placeholder,
    value,
    onChange,
    error,
    isRequired = false

}) => {
    return (
        <input />
    )
}

export default InputType;