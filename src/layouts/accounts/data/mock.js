const data = {
  paymentAccounts: [
    {
      number: "3210123412347890",
      currency: "USD",
      balance: "88200.00",
      blocked_amount: "1200.00",
      status: "Active",
    },
    {
      number: "8210123412344340",
      currency: "EUR",
      balance: "64120.50",
      blocked_amount: "1960.00",
      status: "Active",
    },
    {
      number: "8210123412344990",
      currency: "GBP",
      balance: "230.50",
      blocked_amount: "60.00",
      status: "On Hold",
    },
  ],
  openDeposits: [
    {
      name: "Cumulative deposit",
      rate: "1.50",
      balance: "48140.00",
      accured_interest: "1140.00",
      date: "29 Nov 22",
    },
  ],
  credits: [
    {
      name: "Mortgage loan",
      rate: "14",
      credit_amount: "84800.00",
      paid_amount: "24800.00",
      date: "13 Sep 22",
    },
    {
      name: "Consumer loan",
      rate: "18",
      credit_amount: "6140.00",
      paid_amount: "5640.00",
      date: "20 Dec 22",
    },
  ],
  totalAmount: "120420.50",
  currency: "USD",
};

export default data;
