import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
    link: string;
    title: string;
    className: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ link, title, className }) => {
    return (
        <Link href={link}>
            <a className={className}>{title}</a>
        </Link>
    );
};
