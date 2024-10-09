import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Number of items per page
const itemsPerPage = 3;

function Table() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDocumentStatus, setSelectedDocumentStatus] = useState("All");
  const [selectedTransactionStatus, setSelectedTransactionStatus] =
    useState("All");

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Filter the data based on the selected dropdown options
  const filteredData = data.filter((item) => {
    const documentMatches =
      selectedDocumentStatus === "All" ||
      item.document === selectedDocumentStatus;
    const transactionMatches =
      selectedTransactionStatus === "All" ||
      item.status === selectedTransactionStatus;
    return documentMatches && transactionMatches;
  });

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.propertyhive.com.ng/api/v1/transactions/",
        );
        const formattedData = response.data.map((item) => ({
          buyer: item.buyer, // Adjust this based on your API response structure
          property: item.property, // Adjust this based on your API response structure
          date: item.date, // Adjust this based on your API response structure
          amount: item.amount, // Adjust this based on your API response structure
          document: item.documentStatus, // Adjust this based on your API response structure
          status: item.transactionStatus, // Adjust this based on your API response structure
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleDocumentStatusChange = (event) => {
    setSelectedDocumentStatus(event.target.value);
    setCurrentPage(1); // Reset to page 1 when filters change
  };

  const handleTransactionStatusChange = (event) => {
    setSelectedTransactionStatus(event.target.value);
    setCurrentPage(1); // Reset to page 1 when filters change
  };

  return (
    <>
      {/* Select Groups */}
      <div className="ml-8 mt-10 flex items-center space-x-8">
        <div className="flex flex-col">
          <label
            htmlFor="document-status"
            className="mb-2 text-sm font-semibold text-gray-900"
          >
            Document Status
          </label>
          <select
            id="document-status"
            onChange={handleDocumentStatusChange}
            className="block rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-950 dark:placeholder-gray-400"
          >
            <option value="All">All</option>
            <option value="pending">Pending</option>
            <option value="sent">Sent</option>
            <option value="verified">Verified</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="transaction-status"
            className="mb-2 text-sm font-semibold text-gray-900"
          >
            Transaction Status
          </label>
          <select
            id="transaction-status"
            onChange={handleTransactionStatusChange}
            className="block rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-950 dark:placeholder-gray-400"
          >
            <option value="All">All</option>
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
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mt-6 overflow-x-auto rounded-lg border shadow-sm">
          <table className="w-full table-auto text-left text-sm">
            <thead className="border-b bg-gray-50 font-light text-gray-600">
              <tr className="divide-x bg-[#203F41] text-white">
                <th className="px-6 py-3">S/N</th>
                <th className="px-6 py-3">Buyer</th>
                <th className="px-6 py-3">Property</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Amount(₦)</th>
                <th className="px-6 py-3">
                  <span className="inline-flex items-center">
                    Document
                    <IoAlertCircleOutline className="ml-2" />
                  </span>
                </th>
                <th className="px-6 py-3">Txn Status</th>
              </tr>
            </thead>
            <tbody className="divide-y text-gray-600">
              {currentItems.length > 0 ? (
                currentItems.map((item, idx) => (
                  <tr key={idx} className="divide-x">
                    <td className="flex items-center gap-x-6 whitespace-nowrap px-6 py-4">
                      <span>{(currentPage - 1) * itemsPerPage + idx + 1}</span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="inline-flex items-center">
                        <span className="ml-1">{item.buyer}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.property}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">{item.date}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {item.amount}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-[#E29400]">
                      • {item.document}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-blue-500">
                      {item.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mx-auto mb-8 mt-6 max-w-screen-xl px-4 text-gray-600 md:px-8">
          <div className="hidden justify-between text-sm md:flex">
            <div className="mt-3 font-semibold">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center gap-32" aria-label="Pagination">
              <ul className="flex items-center gap-1">
                {/* Update pagination items as needed */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (item) => (
                    <li key={item}>
                      <button
                        onClick={() => setCurrentPage(item)}
                        aria-current={currentPage === item ? "page" : undefined}
                        className={`rounded-lg px-3 py-2 duration-150 hover:bg-[#389294] hover:text-white ${
                          currentPage === item
                            ? "border border-[#389294] font-medium text-[#389294]"
                            : "text-gray-600"
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ),
                )}
              </ul>
              <div className="flex gap-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`rounded-lg border border-[#389294] px-4 py-2 font-medium text-[#389294] hover:bg-[#389294] hover:text-white ${
                    currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  <IoIosArrowBack className="mr-2 inline-flex" />
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`rounded-lg border border-[#389294] px-4 py-2 font-medium text-[#389294] hover:bg-[#389294] hover:text-white ${
                    currentPage === totalPages
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                >
                  Next
                  <IoIosArrowForward className="ml-2 inline-flex" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
