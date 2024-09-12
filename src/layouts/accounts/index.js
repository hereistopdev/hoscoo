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

function Accounts() {
  const { size } = typography;

  const { user, loading } = useContext(AuthContext);

  return (
    <DashboardLayout>
      <SoftBox py={3}>
        <TotalBalance amount={123123123} currency={"USD"}></TotalBalance>
      </SoftBox>
    </DashboardLayout>
  );
}

export default Accounts;
