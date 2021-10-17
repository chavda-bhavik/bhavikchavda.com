import React from 'react';
import { ArticleType } from '@/interfaces';
import { Icon } from '@/components/Icon';
import { NavLink } from '@/components/NavLink';

interface ArticleProps {
    article: ArticleType;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
    return (
        <NavLink
            link={article.blogURL}
            className="block card"
            type="external"
            title={`Read '${article.heading}'`}
        >
            <h3 className="card-heading">{article.heading}</h3>
            <h4 className="card-description">{article.description}</h4>
            <span className="group-hover:text-classy-medium link group-hover:underline">
                Read More <Icon icon="externalLink" className="inline-block h-4 w-4" />
            </span>
        </NavLink>
    );
};
// <div className="lg:w-1/3">
//     <div className="h-full bg-opacity-40 p-5 pt-10 pb-16 rounded-lg overflow-hidden text-center relative border-2 border-transparent transition-colors duration-200 cursor-pointer bg-classy-base hover:border-classy-dark shadow-md hover:shadow-xl duration-200">
//         <h2 className="tracking-widest text-xs title-font font-medium text-gray-700 mb-1">
//             CATEGORY
//         </h2>
//         <h1 className="text-xl sm:text-2xl font-medium mb-3 text-gray-900">
//             {article.heading}
//         </h1>
//         <p className="leading-relaxed mb-3 text-gray-800">{article.description}</p>
//         <a className="text-indigo-500 inline-flex items-center">
//             Learn More
//             <svg
//                 className="w-4 h-4 ml-2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             >
//                 <path d="M5 12h14"></path>
//                 <path d="M12 5l7 7-7 7"></path>
//             </svg>
//         </a>
//         <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
//             <span className="text-gray-500 inline-flex items-center leading-none text-sm">
//                 {article.date}
//             </span>
//         </div>
//     </div>
// </div>
// <div className="py-3 flex flex-wrap md:flex-nowrap rounded-md p-2 border-2 border-transparent transition-colors duration-200 cursor-pointer bg-classy-base hover:border-classy-dark group-hover:shadow-lg">
//     <div className="md:w-40 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
//         <span className="font-semibold title-font text-gray-700">CATEGORY</span>
//         <span className="mt-1 text-gray-500 text-sm">{article.date}</span>
//     </div>
//     <div className="md:flex-grow">
//         <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
//             {article.heading}
//         </h2>
//         <p className="leading-relaxed">{article.description}</p>
//         <a className="text-indigo-500 inline-flex items-center mt-4">
//             Learn More
//             <svg
//                 className="w-4 h-4 ml-2"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             >
//                 <path d="M5 12h14"></path>
//                 <path d="M12 5l7 7-7 7"></path>
//             </svg>
//         </a>
//     </div>
// </div>

// <NavLink
//     link={article.blogURL}
//     className="block card"
//     type="external"
//     title={`Read '${article.heading}'`}
// >
//     <h3 className="card-heading">{article.heading}</h3>
//     <h4 className="card-description">{article.description}</h4>
//     <span className="group-hover:text-classy-medium link group-hover:underline">
//         Read More <Icon icon="externalLink" className="inline-block h-4 w-4" />
//     </span>
// </NavLink>
