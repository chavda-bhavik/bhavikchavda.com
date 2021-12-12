import React, { useEffect } from 'react';
import { Icon } from '../Icon';

interface BackdropProps {
    onClose: () => void;
    show: boolean;
    className?: string;
    iconClassName?: string;
}

export const Backdrop: React.FC<BackdropProps> = ({
    show,
    onClose,
    children,
    className,
    iconClassName,
}) => {
    useEffect(() => {
        toggleBodyOverflowHidden(show);
    }, [show]);

    const toggleBodyOverflowHidden = (add: boolean) => {
        let body = document.getElementsByTagName('body')[0];
        if (add) {
            body.classList.add('overflow-hidden');
        } else {
            body.classList.remove('overflow-hidden');
        }
    };

    return (
        <div
            className={`fixed pin h-full z-10 inset-0 overflow-hidden ${show ? '' : 'hidden'}`}
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className={`min-h-screen h-full flex justify-center items-center`}>
                <button
                    className="z-30 absolute top-4 right-4 rounded-full bg-slate-500"
                    onClick={onClose}
                >
                    <Icon
                        icon={'close'}
                        size="md"
                        className={iconClassName ? iconClassName : 'text-white'}
                    />
                </button>
                <div
                    className={`fixed inset-0 transition-opacity ${className}`}
                    aria-hidden={show}
                    onClick={onClose}
                />
                <span
                    className="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <div className="transform transition-all z-20 w-auto">{children}</div>
            </div>
        </div>
    );
};
