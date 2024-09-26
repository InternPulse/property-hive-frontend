import React, { useState } from "react";
import { Badge } from "../../components/ui/badge"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Button } from "../../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card"
import { MdCheck } from "react-icons/md";
import { Separator } from "../../components/ui/separator"
import logo from '../../assets/icons/Group 1000002785.png'

const tableItems = [
  {
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    receipt: "View",
    status: "successful",
  },
  {
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    receipt: "View",
    status: "successful",
},
{
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    receipt: "View",
    status: "successful",
},
{
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    receipt: "View",
    status: "successful",
},
{
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    receipt:"View",
    status: "successful",
},
{
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    receipt: "View",
    status: "successful",
  },
  {
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    receipt: "View",
    status: "successful",
},
{
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    receipt: "View",
    status: "successful",
},
{
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    receipt: "View",
    status: "successful",
},
{
    date: "Sept 12, 08:55pm",
    amount: "30,000,000",
    receipt:"View",
    status: "successful",
},
];

// Number of items per page
const itemsPerPage = 6;

function Withdraw() {
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

  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleReceiptClick = (item) => {
    setSelectedItem(item);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedItem(null);
  };

  return (
    <>
      {/* Table */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-light border-b">
              <tr className="divide-x bg-[#203F41] text-white">
                <th className="py-3 px-6">S/N</th>
                <th className="py-3 px-6">Amount(₦)</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6">Receipt</th>
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
                      <span className="ml-1">{item.amount}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="outline" className="text-[#5FC92E]">{item.status}</Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <Button
                      variant="link"
                      className="text-[#389294]"
                      onClick={() => handleReceiptClick(item)}
                    >
                      {item.receipt}
                    </Button>
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

      {popupVisible && selectedItem && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleClosePopup}></div>
            <div className="relative p-6 bg-white rounded-lg  max-w-md">
              <Card className="w-full max-w-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold flex flex-col items-center text-gray-500">
                    <div
                      className="border rounded-full text-6xl mb-2"
                      style={{ backgroundColor: "#5FC92E" }}
                    >
                      <span className="text-white">
                        <MdCheck />
                      </span>
                    </div>
                    Withdrawal Successful
                  </CardTitle>
                </CardHeader>
                <CardDescription className="text-center text-3xl font-semibold text-black">
                  ₦{selectedItem.amount}
                </CardDescription>
                <CardContent className="p-6 text-sm">
                  <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-base">Ref Number</span>
                      <span>000085752257</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-base">Payment Time</span>
                      <span>{selectedItem.date}</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-base">Account Name</span>
                      <span>John James</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-base">Payment Number</span>
                      <span>1234567890</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-base">Bank</span>
                      <span>Guaranty Bank PLC</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-center">
                  <Button
                    variant="outline"
                    className="w-full gap-1.5 text-sm border-[#389294]"
                  >
                    <span className="text-[#389294]">Download Receipt</span>
                  </Button>
                  <div className="mt-6">
                    <img src={logo} alt="logo" />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
    </>
  );
}

export default Withdraw;
