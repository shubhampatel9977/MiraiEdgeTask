import React from 'react';
import Icons from '../assets/Icons';

const ServiceUnavailable: React.FC = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-center p-5">
                <Icons.warningIcon className="text-yellow-500 text-7xl mb-5 animate-pulse" />
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
                    503 Service Unavailable
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                    The web server is returning an unexpected temporary error.
                </p>
            </div>
        </>
    )
};

export default ServiceUnavailable;
