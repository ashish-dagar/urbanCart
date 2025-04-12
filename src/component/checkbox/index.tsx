import React from "react";
import * as styles from './checkbox.module.scss';

interface CheckboxProps {
    id: string;
    label: string;
    checked: boolean;
    defaultChecked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    required?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
    id,
    label,
    checked,
    defaultChecked,
    onChange,
    className,
    required,
    disabled,
    indeterminate
}) => {
    const ref = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (indeterminate && ref.current) {
            ref.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);
    
    return (
        <div className={styles.checkboxContainer}>
            <input
                type="checkbox"
                id={id}
                ref={ref}
                checked={checked}
                defaultChecked={defaultChecked}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className={`${styles.checkbox} ${disabled && styles.disabled}`}
            />
            {label && <label htmlFor={id} className={`${styles.label} ${disabled && styles.labelDisabled}`}>{label}</label>}
        </div>
    )
}

export default Checkbox;
