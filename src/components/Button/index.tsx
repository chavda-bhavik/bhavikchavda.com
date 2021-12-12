import React from 'react';
import classNames from 'classnames';
import { Icon } from '@/components/Icon';

interface ButtonProps {
    disabled?: boolean;
    loading?: boolean;
    variant?: 'primary';
    className?: string;
    onClick?: () => void;
    ariaLabel: string;
}

export const Button: React.FC<ButtonProps> = ({
    disabled,
    loading,
    variant,
    children,
    className,
    onClick,
    ariaLabel,
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
            aria-label={ariaLabel}
        >
            {loading && <Icon icon="loader" className="mr-1 text-white" size="sm" />}
            {children}
        </button>
    );
};
