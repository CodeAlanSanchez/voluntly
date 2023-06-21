import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
                                          className = '',
                                          disabled,
                                          children,
                                          ...props
                                      }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            { ...props }
            className={
                `items-center px-4 bg-violet-500 py-2 border border-transparent font-semibold text-center text-xs text-white uppercase tracking-widest hover:bg-violet-700 focus:bg-violet-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={ disabled }
        >
            { children }
        </button>
    );
}
