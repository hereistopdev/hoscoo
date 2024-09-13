// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Hoscoo React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Hoscoo React base styles

// Dashboard layout components

// Data
import { useState } from "react";
import AccountItem from "./components/accountItem";
import AccountTab from "./components/accountTab";
import QuickActions from "./components/quickActions";
import TotalBalance from "./components/totalBalance";
import ViewTab from "./components/viewTab";
import data from "./data/mock";

function Accounts() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeView, setActiveView] = useState("list");

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
          <QuickActions />
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
            )}
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
              <SoftBox>
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
              <SoftBox>
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
