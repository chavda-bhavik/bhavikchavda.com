import classNames from 'classnames';
import React from 'react';
import { Icon } from '../Icon';

interface ButtonProps {
    disabled?: boolean;
    loading?: boolean;
    variant?: 'primary';
    className?: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
    disabled,
    loading,
    variant = 'primary',
    children,
    className,
    onClick,
}) => {
    return (
        <button
            disabled={disabled || loading}
            className={classNames(
                'btn',
                {
                    'btn-primary': variant === 'primary',
                    'cursor-not-allowed': loading || disabled,
                },
                className
            )}
            onClick={onClick}
        >
            {loading && <Icon icon="loader" className="mr-1 text-white" size="sm" />}
            {children}
        </button>
    );
};
