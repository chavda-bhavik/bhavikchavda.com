import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

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
            rel="noopener noreferrer"
            className={className}
            title={title}
            aria-label={ariaLabel}
        >
            {children}
        </a>
    );
    let internalLink = (
        <Link
            to={link}
            title={title}
            aria-label={ariaLabel}
            className={classNames('link', className)}
        >
            {children}
        </Link>
    );
    return type === 'internal' ? internalLink : externalLink;
};
