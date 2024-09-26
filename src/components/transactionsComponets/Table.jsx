import React, { useState } from "react";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Dummy table data
const tableItems = [
  {
    buyer: "John James",
    property: "Luxury Estate, Lagos",
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    document: "pending",
    status: "full payment",
  },
  {
    buyer: "John James",
    property: "Luxyry Estate, Lagos",
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    document: "pending",
    status: "full payment",
},
{
    buyer: "John James",
    property: "Luxyry Estate, Lagos",
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    document: "pending",
    status: "full payment",
},
{
    buyer: "John James",
    property: "Luxyry Estate, Lagos",
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    document: "pending",
    status: "full payment",
},
{
    buyer: "John James",
    property: "Luxyry Estate, Lagos",
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    document: "pending",
    status: "full payment",
},
];

// Number of items per page
const itemsPerPage = 3;

function Table() {
  const [pages, setPages] = useState(["1", "2", "3", , "...", "8", "9", "10",])
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tableItems.length / itemsPerPage);
  const currentItems = tableItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      {/* Select Groups */}
      <div className="flex items-center space-x-8 ml-8 mt-10">
          <div className="flex flex-col">
            <label
              htmlFor="countries"
              className="mb-2 text-sm font-semibold text-gray-900"
            >
              Document Status
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block p-2.5 dark:border-gray-950 dark:placeholder-gray-400"
            >
              <option selected>All</option>
              <option value="pending">Pending</option>
              <option value="sent">Sent</option>
              <option value="verified">Verified</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="status"
              className="mb-2 text-sm font-semibold text-gray-900"
            >
              Transaction Status
            </label>
            <select
              id="status"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block p-2.5 dark:border-gray-950 dark:placeholder-gray-400"
            >
              <option selected>All</option>
              <option value="full">Full payment</option>
              <option value="partial">Paid 1/6</option>
              <option value="partial">Paid 2/6</option>
              <option value="partial">Paid 1/2</option>
              <option value="partial">Paid 4/6</option>
              <option value="partial">Paid 5/6</option>
            </select>
          </div>
        </div>

      {/* Table */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-light border-b">
              <tr className="divide-x bg-[#203F41] text-white">
                <th className="py-3 px-6">S/N</th>
                <th className="py-3 px-6">Buyer</th>
                <th className="py-3 px-6">Property</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Amount(₦)</th>
                <th className="py-3 px-6">
                  <span className="inline-flex items-center">
                    Document
                    <IoAlertCircleOutline className="ml-2" />
                  </span>
                </th>
                <th className="py-3 px-6">Txn Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {currentItems.map((item, idx) => (
                <tr key={idx} className="divide-x">
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                    <span>{(currentPage - 1) * itemsPerPage + idx + 1}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="inline-flex items-center">
                      <span className="ml-1">{item.buyer}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.property}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[#E29400]">• {item.document}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-blue-500">
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="max-w-screen-xl mx-auto mt-6 mb-8 px-4 text-gray-600 md:px-8">
          <div className="hidden justify-between text-sm md:flex">
            <div className="font-semibold mt-3">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center gap-32" aria-label="Pagination">
            <ul className="flex items-center gap-1">
                {pages.map((item, idx) => (
                    <li key={item}>
                    {item === "..." ? (
                        <div>{item}</div>
                    ) : (
                        <button
                        onClick={() => setCurrentPage(Number(item))}
                        aria-current={currentPage == item ? "page" : undefined}
                        className={`px-3 py-2 rounded-lg duration-150 hover:text-white hover:bg-[#389294] 
                            ${currentPage == item ? "border border-[#389294] text-[#389294] font-medium" : "text-gray-600"}`}
                        >                          
                        {item}
                        </button>
                    )}
                    </li>
                ))}
                </ul>
              <div className="flex gap-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 font-medium border border-[#389294] text-[#389294] hover:bg-[#389294] hover:text-white rounded-lg ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  <IoIosArrowBack className="mr-2 inline-flex" />
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 font-medium border border-[#389294] text-[#389294] hover:bg-[#389294] hover:text-white rounded-lg ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                  <IoIosArrowForward className="ml-2 inline-flex" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Pagination */}
          <div className="flex items-center justify-between text-sm text-gray-600 font-medium md:hidden">
            <div className="font-semi-bold">Page {currentPage} of {totalPages}</div>
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-lg duration-150 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
