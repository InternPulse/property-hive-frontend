import { useEffect, useState } from "react";
import axios from "axios";
import { DollarSign, Paperclip, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Details() {
  const [transactionData, setTransactionData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axios.get(
          "https://api.propertyhive.com.ng/api/v1/transactions/1/",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4NTAyMzQ4LCJpYXQiOjE3Mjg0OTUxNDgsImp0aSI6IjFmYmE0ZWVlNWFlNDQ2MzJiZDFjNGMxYThiYmNjZmZmIiwidXNlcl9pZCI6NX0.rHQpbeuvBsrrONhYu0hgEdj4iHRgls0MrwcPeBfVcoY`,
            },
          }
        );
        console.log("Transaction Data:", response.data); // Debugging line
        setTransactionData(response.data); // Adjust this if needed based on response structure
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setError("You are not authorized to view this data. Please check your token or permissions.");
        } else {
          setError(error.response?.statusText || error.message);
        }
        console.error("Error fetching transaction:", error.response || error);
      }
    };

    fetchTransaction();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div className="flex items-center">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className="ml-2">
                <CardTitle className="text-md font-semibold">
                  John James
                </CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-green-500 mr-1" />
                  08040951697
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent></CardContent>
        </Card>

        <div className="grid gap-2 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="md:col-span-2 xl:col-span-3">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="mt-6 shadow-sm border rounded-lg overflow-x-auto">
                  <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-light border-b">
                      <tr className="divide-x bg-[#203F41] text-white">
                        <th className="py-3 px-6">S/N</th>
                        <th className="py-3 px-6">Amount(₦)</th>
                        <th className="py-3 px-6">Date</th>
                        <th className="py-3 px-6">Document</th>
                        <th className="py-3 px-6">Status</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                      {error ? (
                        <tr className="divide-x">
                          <td colSpan={5} className="px-6 py-4 text-red-500 text-center">
                            Error fetching data: {error}
                          </td>
                        </tr>
                      ) : !transactionData ? (
                        <tr className="divide-x">
                          <td colSpan={5} className="px-6 py-4 text-gray-500 text-center">
                            No transactions available
                          </td>
                        </tr>
                      ) : (
                        <tr className="divide-x">
                          <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                            <span>1</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="inline-flex items-center text-black font-semibold">
                              {transactionData.total_amount}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {/* Format the created_at date and time */}
                            {new Date(transactionData.created_at).toLocaleString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: 'numeric',
                              minute: 'numeric',
                              second: 'numeric',
                              hour12: true,
                            })}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-[#E29400]">
                          • {transactionData.document ? (
                              <span>{transactionData.document}</span>
                            ) : (
                              <span>Pending</span>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-blue-500">
                            {transactionData.status}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="leading-7 [&:not(:first-child)]:mt-6 font-semibold text-[#4B5353] flex items-center justify-center">
                John James has completed payment, kindly proceed to <br />{" "}
                send the necessary documents, the funds will be locked <br />{" "}
                until verification has been done by the buyer.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="ml-9 text-lg text-[#255A5D]">
                Full Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <img
                src="/src/assets/frame01.jpg"
                alt="Payment Illustration"
                className="w-28 rounded-lg ml-10 h-auto"
              />
              <p className="text-sm ml-3 text-muted-foreground">
                Luxury Duplex, Banana Island, Lekki, Lagos state
              </p>
              <h1 className="font-semibold ml-10 text-[#255A5D]">
                ₦200,000,000
              </h1>
              <Button variant="ghost" className="w-full text-[#389294]">
                View Full details
              </Button>
              <p className="text-md ml-9 text-muted-foreground">
                Documents sent
              </p>
            </CardContent>
          </Card>

          <div>
            <Button className="w-[748px] bg-[#389294]">
              Send Document{" "}
              <span className="ml-3 font-extralight">
                <Paperclip />
              </span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
