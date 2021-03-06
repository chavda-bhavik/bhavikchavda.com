import React from 'react';
import * as classes from './style.module.css';

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
    return (
        <div className={classes.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
