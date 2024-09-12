// Hoscoo React components
import SoftBox from "components/SoftBox";

// Hoscoo React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// Hoscoo React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components

// Data
import { useContext } from "react";
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
  const { size } = typography;

  const { user, loading } = useContext(AuthContext);
  const { paymentAccounts, openDeposits, credits } = data;
  console.log("ddddddddd", data);
  console.log("paymnet", paymentAccounts);

  return (
    <DashboardLayout>
      <SoftBox py={3} px={3}>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center">
          <TotalBalance amount={data.totalAmount} currency={data.currency}></TotalBalance>
          <QuickActions />
        </SoftBox>
        <SoftBox display="flex" justifyContent="space-between" alignItems="center" mt={4}>
          <AccountTab />
          <ViewTab />
        </SoftBox>
        {paymentAccounts && (
          <SoftBox mt={4}>
            {paymentAccounts.map((account, index) => (
              <AccountItem key={index} {...account}></AccountItem>
            ))}
          </SoftBox>
        )}

        {openDeposits && (
          <SoftBox mt={4}>
            {openDeposits.map((deposit, index) => (
              <DepositItem key={index} {...deposit}></DepositItem>
            ))}
          </SoftBox>
        )}

        {credits && (
          <SoftBox mt={4}>
            {credits.map((credit, index) => (
              <CreditItem key={index} {...credit}></CreditItem>
            ))}
          </SoftBox>
        )}
      </SoftBox>
    </DashboardLayout>
  );
}

export default Accounts;
