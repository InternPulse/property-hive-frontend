import React from 'react'
import { FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function WithdrawCards() {
  return (
    <div>
        <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl ml-[50px] font-semibold">
                Setup Withdrawal PIN
              </CardTitle>
              <Button variant="ghost">
              <IoClose className="h-4 w-4 text-muted-foreground" />
              </Button>
            </CardHeader>
            <CardDescription className="flex justify-center">
                For Security Purposes, need to <br/> setup a withdrawal PIN to verify <br/> all withdrawals
            </CardDescription>
            <CardContent className="grid gap-4">
                {/* Your card content goes here */}
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-[#389294] hover:bg-[#389294]">Proceed</Button>
            </CardFooter>
        </Card>
        {/* withdraw cards */}
        <Card className="w-full max-w-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl ml-[120px] font-semibold">
                Withdraw
              </CardTitle>
              <Button variant="ghost">
              <IoClose className="h-4 w-4 text-muted-foreground" />
              </Button>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex flex-col">
                <label
                  htmlFor="countries"
                  className="mb-2 text-sm font-medium text-gray-900"
                >
                  Bank
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block p-2.5 dark:border-gray-950 dark:placeholder-gray-400"
                >
                  <option selected>Select Bank</option>
                  <option value="alat">ALAT by WEMA</option>
                  <option value="access">Access bank</option>
                  <option value="bowen">Bowen MFB</option>
                  <option value="citi">CitiBank</option>
                  <option value="guaranty">Guaranty Trust Bank</option>
                </select>
              </div>
              <div className="flex flex-col">
                <span className="text-black text-sm mb-1">Account Number</span>
                <Input
                  type="text"
                  placeholder="Enter Account Number"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-black text-sm mb-1">Amount</span>
                <Input
                  type="number"
                  placeholder="Enter Amount"
                />
              </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-[#389294] hover:bg-[#389294]">Withdraw</Button>
            </CardFooter>
        </Card>
        {/* withdrawal success */}
        <Card className="w-full max-w-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-semibold flex flex-col items-center text-gray-500">
              <div className="border rounded-full text-6xl mb-2" style={{ backgroundColor: "#5FC92E" }}>
                <span className="text-white">
                  <MdCheck />
                </span>
              </div>
              Withdrawal Successful
            </CardTitle>
          </CardHeader>
          <CardDescription className="text-center text-3xl font-semibold text-black">
            ₦1,000,000
          </CardDescription>
          <CardContent className="p-6 text-sm">
            <Separator className="my-2" />
                  <ul className="grid gap-3">
                    <li className="flex items-center justify-between">
                      <span className="text-base">
                        Ref Number
                      </span>
                      <span>000085752257</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-base">
                        Payment Time
                      </span>
                      <span>25-02-2023, 13:22:16</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-base">
                        Account Name
                      </span>
                      <span>John James</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-base">
                        Payment Number
                      </span>
                      <span>1234567890</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-base">
                        Bank
                      </span>
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
  )
}

export default WithdrawCards