import React from 'react';
import * as styles from './input.module.scss';

interface InputProps {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // React.ChangeEvent<HTMLInputElement>
    type?: string;
    placeholder?: string;
}

const Input: React.FC<InputProps> = ({
    label,
    value,
    onChange,
    type = 'text',
    placeholder
}) => {

    return (
        <div className={styles.inputWrapper}>
            
            <input  className={styles.inputField} type={type} value={value} onChange={onChange} 
            // placeholder={placeholder} 
            />
            <label  className={styles.label}>{label}</label>
        </div>
    )
};

export default Input;