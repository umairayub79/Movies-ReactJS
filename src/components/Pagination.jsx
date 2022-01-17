import React from 'react'

const Pagination = ({ total_items, currentPage, gotoPage }) => {

    const getPager = (totalItems, currentPage, pageSize) => {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 20;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
            }
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    var pager = getPager(total_items, currentPage, 20);

    if (!pager.pages || pager.pages.length <= 1) {
        // don't display pager if there is only 1 page
        return null;
    }

    return (
        <div className="flex justify-center space-x-2 m-2">
            {console.log("pagination")}
            <span onClick={() => gotoPage(1)} className={pager.currentPage === 1 ? 'cursor-not-allowed flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md' : 'cursor-pointer flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md'}>
                First
            </span>
            <span onClick={() => gotoPage(pager.currentPage - 1)} className={pager.currentPage === 1 ? 'cursor-not-allowed flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md' : 'cursor-pointer flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md'}>
                Previous
            </span>
            {pager.pages.map((page, index) =>
                <span key={index} className={pager.currentPage === page ? 'active cursor-pointer flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md' : 'cursor-pointer flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md'} onClick={() => gotoPage(page)}>{page}</span>
            )}
            <span onClick={() => gotoPage(pager.currentPage + 1)} className={pager.currentPage === pager.totalPages ? 'cursor-not-allowed flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md' : 'cursor-pointer flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md'}>
                Next
            </span>
            <span onClick={() => gotoPage(pager.totalPages)} className={pager.currentPage === pager.totalPages ? 'cursor-not-allowed flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md' : 'cursor-pointer flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md'}>
                Last
            </span>
        </div>
    )
}

export default Pagination
