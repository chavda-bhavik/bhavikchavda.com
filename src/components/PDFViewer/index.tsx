import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import classNames from 'classnames';

import { Icon } from '../Icon';
import { Loader } from '../Loader';

interface PDFViewerProps {
    pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = React.memo(
    ({ pdfUrl }) => {
        const [currentPage, setCurrentPage] = useState(null);
        const [numPages, setNumPages] = useState(null);
        // pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

        function onDocumentLoadSuccess({ numPages }) {
            setNumPages(numPages);
            setCurrentPage(1);
        }
        const onNextSlide = () => {
            if (currentPage === numPages) return;
            else setCurrentPage(currentPage + 1);
        };
        const onPreviousSlide = () => {
            if (currentPage === 1) return;
            else setCurrentPage(currentPage - 1);
        };

        if (!pdfUrl) return null;

        return (
            <div className="flex flex-row p-1 max-w-xl bg-gray-200 rounded-md">
                <button onClick={onPreviousSlide} className="z-10" aria-label="Previous Page">
                    <Icon
                        icon="chevronCircleLeftF"
                        className={classNames('rounded-full', {
                            'text-gray-400 cursor-not-allowed': currentPage === 1,
                        })}
                    />
                </button>

                <Document
                    file={pdfUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={(err) => console.log(err)}
                    loading={<Loader />}
                >
                    {currentPage && (
                        <Page
                            pageNumber={currentPage}
                            className="border-2 border-classy-dark rounded z-0"
                            loading={<Loader />}
                        />
                    )}
                </Document>
                <button
                    onClick={onNextSlide}
                    disabled={currentPage === numPages}
                    className="z-10"
                    aria-label="next-page"
                >
                    <Icon
                        icon="chevronCircleRightF"
                        className={classNames('rounded-full', {
                            'text-gray-400 cursor-not-allowed': currentPage === numPages,
                        })}
                    />
                </button>
            </div>
        );
    },
    (prevProps, nextProps) => prevProps.pdfUrl === nextProps.pdfUrl
);

PDFViewer.displayName = 'PDFViewer';

export default PDFViewer;
