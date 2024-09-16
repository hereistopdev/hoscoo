// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Hoscoo React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Hoscoo React base styles

// Dashboard layout components

// Data
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "store/AuthContext";
import data from "./data/mock";
import AccountTab from "./components/accountTab";
import QuickActions from "./components/quickActions";
import TotalBalance from "./components/totalBalance";
import ViewTab from "./components/viewTab";
import AccountItem from "./components/accountItem";
import DepositItem from "./components/depositItem";
import CreditItem from "./components/creditItem";
import useAuth from "store/useAuth";
import { readBankAccount_ByUser } from "services/api";

function Accounts() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeView, setActiveView] = useState("list");
  const { user } = useAuth();

  const [accounts, setAccounts] = useState([]);

  async function fetchData() {
    try {
      const response = await readBankAccount_ByUser(user.userID);
      console.log(response.data);

      if (response.data)
        setAccounts(
          response.data.map((v) => {
            return {
              accountId: v._id,
              number: v.account_number,
              currency: v.currency,
              balance: v.balance,
              blocked_amount: 0,
              status: "Pending",
            };
          })
        );
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const allAccounts = data.paymentAccounts;
  const savingAccounts = data.paymentAccounts.filter((account) => account.type === "Saving");
  const checkingAccounts = data.paymentAccounts.filter((account) => account.type === "Checking");
  const loanAccounts = data.paymentAccounts.filter((account) => account.type === "Loan");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} px={3}>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center">
          <TotalBalance amount={data.totalAmount} currency={data.currency}></TotalBalance>
          <QuickActions fetchAccount={fetchData} />
        </SoftBox>
        <SoftBox
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          position="relative"
        >
          <AccountTab activeTab={activeTab} onTabChange={handleTabChange} />
          <ViewTab activeView={activeView} onViewChange={handleViewChange} />
        </SoftBox>

        {activeTab === "all" || activeTab === "saving" ? (
          <>
            {activeTab === "all" ? (
              <SoftTypography fontSize={14} color="#747A80" mt={4}>
                Saving
              </SoftTypography>
            ) : (
              <SoftTypography fontSize={14} mt={4}></SoftTypography>
            )}
            {accounts && (
              <SoftBox>
                {accounts.map((account, index) => (
                  <AccountItem
                    key={index}
                    {...account}
                    viewMode={activeView}
                    fetchData={fetchData}
                  ></AccountItem>
                ))}
              </SoftBox>
            )}
            {/* {paymentAccounts && (
              <SoftBox>
                {paymentAccounts.map((account, index) => (

            {savingAccounts && (
              <SoftBox
                style={{
                  display: "flex",
                  ...(activeView === "list"
                    ? {
                        flexDirection: "column",
                      }
                    : {
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }),
                }}
              >
                {savingAccounts.map((account, index) => (

                  <AccountItem key={index} {...account} viewMode={activeView}></AccountItem>
                ))}
              </SoftBox>
            )} */}
          </>
        ) : null}

        {activeTab === "all" || activeTab === "checking" ? (
          <>
            {activeTab === "all" ? (
              <SoftTypography fontSize={14} color="#747A80" mt={4}>
                Checking
              </SoftTypography>
            ) : (
              <SoftTypography fontSize={14} mt={4}></SoftTypography>
            )}
            {checkingAccounts && (
              <SoftBox
                style={{
                  display: "flex",
                  ...(activeView === "list"
                    ? {
                        flexDirection: "column",
                      }
                    : {
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }),
                }}
              >
                {checkingAccounts.map((deposit, index) => (
                  <AccountItem key={index} {...deposit} viewMode={activeView}></AccountItem>
                ))}
              </SoftBox>
            )}
          </>
        ) : null}

        {activeTab === "all" || activeTab === "loan" ? (
          <>
            {activeTab === "all" ? (
              <SoftTypography fontSize={14} color="#747A80" mt={4}>
                Loan
              </SoftTypography>
            ) : (
              <SoftTypography fontSize={14} mt={4}></SoftTypography>
            )}
            {loanAccounts && (
              <SoftBox
                style={{
                  display: "flex",
                  ...(activeView === "list"
                    ? {
                        flexDirection: "column",
                      }
                    : {
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }),
                }}
              >
                {loanAccounts.map((credit, index) => (
                  <AccountItem key={index} {...credit} viewMode={activeView}></AccountItem>
                ))}
              </SoftBox>
            )}
          </>
        ) : null}
      </SoftBox>
    </DashboardLayout>
  );
}

export default Accounts;
