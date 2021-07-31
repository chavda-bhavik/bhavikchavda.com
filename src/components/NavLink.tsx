import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
    link: string;
    title?: string;
    className?: string;
    ariaLabel?: string;
    type?: 'internal' | 'external';
}

export const NavLink: React.FC<NavLinkProps> = ({
    link,
    title,
    className,
    type = 'internal',
    children,
    ariaLabel,
}) => {
    let externalLink = (
        <a
            href={link}
            target="_blank"
            rel="noopener norefferer"
            className={className}
            title={title}
            aria-label={ariaLabel}
        >
            {children}
        </a>
    );
    let internalLink = (
        <Link href={link}>
            <a className={className} title={title} aria-label={ariaLabel}>
                {children}
            </a>
        </Link>
    );
    return type === 'internal' ? internalLink : externalLink;
};
