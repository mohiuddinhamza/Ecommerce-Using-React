import React, { useMemo } from 'react';

export default function Pagination({ page, handlePage, dynamicPage }) {
  const pages = useMemo(() => {
    const result = [];
    if (dynamicPage <= 5) {
      for (let i = 1; i <= dynamicPage; i++) {
        result.push(i);
      }
    } else {
      if (page <= 3) {
        result.push(1, 2, 3, '...', dynamicPage);
      } else if (page >= dynamicPage - 2) {
        result.push(1, '...', dynamicPage - 2, dynamicPage - 1, dynamicPage);
      } else {
        result.push(1, '...', page - 1, page, page + 1, '...', dynamicPage);
      }
    }
    return result;
  }, [page, dynamicPage]);

  return (
    
    <div className="mt-8 flex items-center gap-2  ">
      <button
        onClick={() => handlePage(page - 1)}
        disabled={page === 1}
        className={`p-2 rounded-md shadow-md ${
          page === 1 ? 'bg-gray-300 text-gray-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
      >
        Prev
      </button>

      {pages.map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === 'number' && handlePage(item)}
          className={`px-3 py-1 rounded-md ${
            item === page
              ? 'bg-amber-500 text-white font-bold cursor-pointer'
              : typeof item === 'number'
              ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer'
              : 'text-gray-500'
          }`}
        >
          {item}
        </span>
      ))}

      <button
        onClick={() => handlePage(page + 1)}
        disabled={page === dynamicPage}
        className={`p-2 rounded-md shadow-md ${
          page === dynamicPage ? 'bg-gray-300 text-gray-700' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
      >
        Next
      </button>
    </div>
  );
}
