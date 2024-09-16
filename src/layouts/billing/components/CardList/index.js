import { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

import CardItem from "../CardItem";
import AddAccountDialog from "../AddAccountDialog";

const cardData = [
  {
    img: "brands/mastercard.png",
    number: 4562112245947852,
    balance: 31400.0,
    currency: "$",
    holder: "David Welson",
    expires: "03/27",
    type: "card",
    status: "Active",
    currencyString: "USD",
  },
  {
    img: "brands/visa.png",
    number: 4562112245947852,
    balance: 64120.5,
    currency: "€",
    holder: "David Welson",
    expires: "03/27",
    type: "card",
    status: "On Hold",
    currencyString: "EUR",
  },
  {
    img: "brands/union-pay.png",
    number: 4562112245947852,
    balance: 1000.0,
    currency: "$",
    holder: "David Welson",
    expires: "03/27",
    type: "card",
    status: "Blocked",
    currencyString: "USD",
  },
  {
    img: "brands/im.png",
    number: 4562112245947852,
    balance: 793.0,
    currency: "$",
    holder: "David Welson",
    expires: "03/27",
    type: "card",
    status: "Active",
    currencyString: "USD",
  },
];

function CardList() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Card id="delete-account">
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Linked Cards
        </SoftTypography>
        <SoftButton variant="gradient" color="dark" onClick={handleClickOpen}>
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new card
        </SoftButton>
        <AddAccountDialog open={open} setOpen={setOpen} title="card" />
      </SoftBox>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          {cardData.map((card, index) => {
            return <CardItem key={card.number} card={card} isBank={false} index={index} />;
          })}
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default CardList;
