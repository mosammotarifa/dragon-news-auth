import Link from 'next/link';
import React from 'react';

const Notfound = () => {
    return (
       <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold text-gray-200 sm:text-9xl">
        404
      </h1>

      <h2 className="mt-3 text-2xl font-semibold text-gray-800">
        Page Not Available
      </h2>

      <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
        Sorry, the page you are looking for is not available
        or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-md bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
      >
        Back to Home
      </Link>
    </div>
    );
};

export default Notfound;