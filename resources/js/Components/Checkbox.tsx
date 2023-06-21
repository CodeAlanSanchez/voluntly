import { InputHTMLAttributes } from 'react';

export default function Checkbox({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            { ...props }
            type="checkbox"
            className={
                'border-gray-300 text-violet-500 focus:ring-violet-500 transition ' +
                className
            }
        />
    );
}
