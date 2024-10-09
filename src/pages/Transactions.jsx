import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Cards from '../components/transactionsComponets/Cards';
import Table from '../components/transactionsComponets/Table';
import { Details } from '../components/transactionsComponets/transactionDetails';
import Withdraw from '../components/transactionsComponets/WithdrawalHistory';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';

const Transactions = () => {
  return (
    <div>
      {/* Breadcrumbs */}
      <Breadcrumb className="font-semibold mt-4 ml-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <NavLink 
              to="/transactions"
              className={({ isActive }) =>
                isActive ? 'text-[#255A5D]' : ''
              }
            >
              Transactions
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <NavLink 
              to="/transactions/details"
              className={({ isActive }) =>
                isActive ? 'text-[#255A5D]' : ''
              }
            >
              Transaction Details
            </NavLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <NavLink 
              to="/transactions/withdraw"
              className={({ isActive }) =>
                isActive ? 'text-[#255A5D]' : ''
              }
            >
              Withdrawal History
            </NavLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Nested Routes */}
      <div className="mt-4">
        <Routes>
          <Route path="/" element={
            <>
              <Cards />
              <Table />
            </>
          } />
          {/* Route for transaction details */}
          <Route path="/details" element={<Details />} />
          {/* Route for withdrawal history */}
          <Route path="/withdraw" element={<Withdraw />} />
        </Routes>
      </div>
    </div>
  );
};

export default Transactions;
