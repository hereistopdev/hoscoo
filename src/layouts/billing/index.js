import Grid from "@mui/material/Grid";

// Hoscoo React components
import SoftBox from "components/SoftBox";

import BankList from "./components/BankList";
import CardList from "./components/CardList";

// Hoscoo React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox mt={4}>
        <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <BankList />
            </Grid>
            <Grid item xs={12} lg={6}>
              <CardList />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
