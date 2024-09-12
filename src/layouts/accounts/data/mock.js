/**
=========================================================
* Hoscoo React - v4.0.1
=========================================================

* Product Page: https://www.hoscoo.com
* Copyright 2024 Hoscoo (https://www.hoscoo.com)

Coded by www.hoscoo.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const data = {
  paymentAccounts: [
    {
      accountNumber: "3210 **** **** 7890",
      currency: "USD",
      accountBalance: "$88,200.00",
      blockedAmount: "$1,200.00",
      status: "Active",
      statusColor: "green",
    },
    {
      accountNumber: "8210 **** **** 4340",
      currency: "EUR",
      accountBalance: "€64,120.50",
      blockedAmount: "€1,960.00",
      status: "Active",
      statusColor: "green",
    },
    {
      accountNumber: "8210 **** **** 4990",
      currency: "GBP",
      accountBalance: "£230.50",
      blockedAmount: "£60.00",
      status: "On Hold",
      statusColor: "yellow",
    },
  ],
  openDeposits: {
    name: "Cumulative deposit",
    rate: "1.50%",
    balance: "$48,140.00",
    accruedInterest: "$1,140.00",
    date: "29 Nov 22",
  },
  credits: [
    {
      name: "Mortgage loan",
      rate: "14%",
      creditAmount: "$84,800.00",
      paidAmount: "$24,800.00",
      date: "13 Sep 22",
    },
    {
      name: "Consumer loan",
      rate: "18%",
      creditAmount: "$6,140.00",
      paidAmount: "$5,640.00",
      date: "20 Dec 22",
    },
  ],
};

export default data;
