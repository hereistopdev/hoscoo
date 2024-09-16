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

import { useState, useEffect } from "react";

// @mui material components
import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Custom styles for the Configurator
import CardDetailRoot from "examples/CardDetail/CardDetailRoot";

import Grid from "@mui/material/Grid";

// Hoscoo React components
import MasterCard from "examples/Cards/MasterCard";

// Billing page components
import Invoices from "layouts/billing/components/Invoices";
import Transactions from "layouts/billing/components/Transactions";

// Hoscoo React context
import { useSoftUIController, setOpenCardDetail } from "context";
import BankCard from "examples/Cards/BankCard";

function CardDetail() {
  const [controller, dispatch] = useSoftUIController();
  const { openCardDetail } = controller;
  const [disabled, setDisabled] = useState(false);
  console.log("carddetail", openCardDetail);

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseCardDetail = () =>
    setOpenCardDetail(dispatch, { ...openCardDetail, open: false });

  return (
    <CardDetailRoot variant="permanent" ownerState={{ openCardDetail }}>
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <SoftBox>
          <SoftTypography variant="h5">Card Detail</SoftTypography>
          <SoftTypography variant="body2" color="text">
            See detailed information for your bank account and card
          </SoftTypography>
        </SoftBox>

        <Icon
          sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
            fontSize: `${size.md} !important`,
            fontWeight: `${fontWeightBold} !important`,
            stroke: dark.main,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseCardDetail}
        >
          close
        </Icon>
      </SoftBox>

      <Divider />

      <SoftBox mt={1} pl={3} pr={2}>
        <SoftBox display="flex" justifyContent="space-between" mb={3}>
          <SoftButton variant="outlined" color="dark">
            Transfer
          </SoftButton>
          <SoftButton ml="auto" variant="outlined" color="dark">
            Deposit
          </SoftButton>
          <SoftButton ml="auto" variant="outlined" color="dark">
            Withdraw
          </SoftButton>
        </SoftBox>

        <SoftBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} xl={12}>
              {openCardDetail.card.type === "bank" ? (
                <BankCard card={openCardDetail.card} />
              ) : (
                <MasterCard card={openCardDetail.card} />
              )}
            </Grid>
            <Grid item xs={12} md={12}>
              <Transactions />
            </Grid>
            <Grid item xs={12} lg={12}>
              <Invoices />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
    </CardDetailRoot>
  );
}

export default CardDetail;
