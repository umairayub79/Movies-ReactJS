import React from 'react'
import {GrNext, GrPrevious} from 'react-icons/gr'

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
        <div className="container ms-auto flex flex-wrap justify-center items-center space-x-2 p-5">
           
            
            <button onClick={() => gotoPage(pager.currentPage - 1)} className={pager.currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none'}>
                <GrPrevious/>
            </button>
            
            <div className="flex items-center justify-center">
              <div className="inline-flex" role="toolbar">
              {pager.pages.map((page,index) =>
                 <button key={index} type="button"  className={pager.currentPage === page ? 'active py-1.5 px-3 mx-1 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none' : 'page-link relative block py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none'} onClick={() => gotoPage(page)}>{page}</button>
                 )}
               </div>
            </div>
            
            <button onClick={() => (pager.currentPage < pager.totalPages) && gotoPage(pager.currentPage + 1)} className={pager.currentPage === pager.totalPages ? 'cursor-not-allowed' : 'cursor-pointer py-1.5 px-3 rounded border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-300 focus:shadow-none'}>
                <GrNext/>
            </button>
            
            
        </div>
    )
}

export default Pagination