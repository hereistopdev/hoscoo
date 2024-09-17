import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import { useState } from "react";
import Icon from "@mui/material/Icon";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";
import AddAccountDialog from "../AddAccountDialog";

// Hoscoo React base styles
import CardItem from "../CardItem";

const bankData = [
  {
    img: "brands/azania.png",
    bankName: "Azania Bank",
    number: 4562112245947852,
    balance: 31400.0,
    currency: "$",
    type: "bank",
    status: "Active",
    currencyString: "USD",
  },
  {
    img: "brands/boa.jpg",
    bankName: "Bank of Affrica",
    number: 4562112245947852,
    balance: 64120.5,
    currency: "€",
    type: "bank",
    status: "Active",
    currencyString: "EUR",
  },
];

function BankList() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Card id="delete-account">
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Linked Bank Accounts
        </SoftTypography>
        <SoftButton variant="gradient" color="dark" onClick={handleClickOpen}>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new bank account
        </SoftButton>
        <AddAccountDialog open={open} setOpen={setOpen} title="bank" />
      </SoftBox>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          {bankData.map((bank, index) => {
            return <CardItem card={bank} key={bank.number} isBank={true} index={index} />;
          })}
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BankList;
