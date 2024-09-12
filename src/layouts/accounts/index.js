// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Hoscoo React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Hoscoo React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components

// Data
import { useContext, useState } from "react";
import { AuthContext } from "store/AuthContext";
import TotalBalance from "./components/totalBalance";
import QuickActions from "./components/quickActions";
import data from "./data/mock";
import AccountTab from "./components/accountTab";
import ViewTab from "./components/viewTab";
import AccountItem from "./components/accountItem";
import DepositItem from "./components/depositItem";
import CreditItem from "./components/creditItem";

function Accounts() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeView, setActiveView] = useState("list");

  const { paymentAccounts, openDeposits, credits } = data;

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
        <SoftBox display="flex" justifyContent="space-between" alignItems="center" mt={4}>
          <AccountTab activeTab={activeTab} onTabChange={handleTabChange} />
          <ViewTab activeView={activeView} onViewChange={handleViewChange} />
        </SoftBox>

        {activeTab === "all" || activeTab === "account" ? (
          <>
            {activeTab === "all" ? (
              <SoftTypography fontSize={14} color="#747A80" mt={4}>
                Payment accounts
              </SoftTypography>
            ) : (
              <SoftTypography fontSize={14} mt={4}></SoftTypography>
            )}
            {paymentAccounts && (
              <SoftBox>
                {paymentAccounts.map((account, index) => (
                  <AccountItem key={index} {...account} viewMode={activeView}></AccountItem>
                ))}
              </SoftBox>
            )}
          </>
        ) : null}

        {activeTab === "all" || activeTab === "deposit" ? (
          <>
            {activeTab === "all" ? (
              <SoftTypography fontSize={14} color="#747A80" mt={4}>
                Open deposits
              </SoftTypography>
            ) : (
              <SoftTypography fontSize={14} mt={4}></SoftTypography>
            )}
            {openDeposits && (
              <SoftBox>
                {openDeposits.map((deposit, index) => (
                  <DepositItem key={index} {...deposit} viewMode={activeView}></DepositItem>
                ))}
              </SoftBox>
            )}
          </>
        ) : null}

        {activeTab === "all" || activeTab === "credit" ? (
          <>
            {activeTab === "all" ? (
              <SoftTypography fontSize={14} color="#747A80" mt={4}>
                Your credits
              </SoftTypography>
            ) : (
              <SoftTypography fontSize={14} mt={4}></SoftTypography>
            )}
            {credits && (
              <SoftBox>
                {credits.map((credit, index) => (
                  <CreditItem key={index} {...credit} viewMode={activeView}></CreditItem>
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
