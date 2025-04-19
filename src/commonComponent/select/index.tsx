import React from "react";
import * as styles from "./select.module.scss";

interface SelectProps {
    label: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    placeholder?: string;
}

const Select: React.FC<SelectProps> = ({ label, value, onChange, options, placeholder }) => {
    return (
        <div className={styles.selectWrapper}>
            <label className={styles.selectLabel}>{label}</label>
            <select className={styles.select} value={value} onChange={onChange}>
                {placeholder && <option value="" disabled>{placeholder}</option>}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select;