import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

interface HighlightProps {}

export const Blob = () => {
    return (
        <div aria-hidden="true">
            <div className="relative h-48 blob md:h-56 lg:h-64">
                <svg
                    className="h-full fill-current text-classy-dark animate-blob-spin"
                    viewBox="0 0 278 279"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M137.896 0.127761C167.59 -0.638578 198.383 1.62824 222.877 18.4301C247.738 35.4836 263.129 63.014 271.706 91.9151C280.118 120.258 280.513 150.661 270.364 178.43C260.457 205.538 239.342 225.92 216.353 243.372C192.903 261.174 167.336 278.631 137.896 278.994C108.28 279.358 81.0666 263.928 58.0226 245.322C35.8955 227.455 20.5343 203.415 11.0775 176.594C1.41508 149.191 -4.23875 119.749 3.91245 91.8587C12.2111 63.4638 31.6331 39.4483 56.0438 22.7357C79.9856 6.34414 108.89 0.876363 137.896 0.127761Z" />
                </svg>
            </div>
        </div>
    );
};

export const Highlight: React.FC<HighlightProps> = ({}) => {
    return (
        <div className="flex flex-col-reverse md:flex-row h-full items-center my-32 justify-between space-y-reverse space-y-4 md:space-y-0">
            <h1 className="font-medium text-2xl md:text-2xl lg:text-3xl w-11/12 md:w-7/12">
                Hey, I&apos;m Bhavik. Passionate full stack developer with experience in JavaScript,
                React, Redux, Node.js, Express, and GraphQL.
            </h1>
            <div className="relative">
                <Blob />
                <div className="absolute top-0 flex items-center justify-center w-full h-full">
                    <div className="w-32 h-32 overflow-hidden rounded-full md:h-40 md:w-40 lg:h-48 lg:w-48">
                        <StaticImage
                            src="../../images/the-avatar.jpeg"
                            alt="Bhavik"
                            className="object-cover w-full h-full"
                            width={256}
                            height={256}
                            placeholder="blurred"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
