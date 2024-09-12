import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Hoscoo React base styles
import borders from "assets/theme/base/borders";

// Images
import typography from "assets/theme/base/typography";
import { Box, Typography } from "@mui/material";

const cardData = [
  {
    img: "brands/mastercard.png",
    number: "1111111111117852",
    balance: 31400.0,
    currency: "$",
  },
  {
    img: "brands/visa.jpg",
    number: "1111111111117852",
    balance: 64120.5,
    currency: "€",
  },
  {
    img: "brands/union-pay.webp",
    number: "1111111111117852",
    balance: 1000.0,
    currency: "$",
  },
  {
    img: "brands/im.jpeg",
    number: "1111111111117852",
    balance: 793.0,
    currency: "$",
  },
];

function CardList() {
  const { borderWidth, borderColor } = borders;

  const { size } = typography;

  return (
    <Card id="delete-account">
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Linked Cards
        </SoftTypography>
        <SoftButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new card
        </SoftButton>
      </SoftBox>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          {cardData.map((card) => {
            return (
              <Grid item xs={12} md={12} key={card.cardName}>
                <SoftBox
                  border={`${borderWidth[1]} solid ${borderColor}`}
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                >
                  <SoftBox component="img" src={card.img} alt="master card" width="10%" mr={2} />
                  <SoftBox>
                    <SoftTypography variant="h6" fontWeight="medium">
                      ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;
                      {card.number.slice(card.number.length - 4, card.number.length)}
                    </SoftTypography>
                    <Typography sx={{ fontSize: "16px" }}>Account Number</Typography>
                  </SoftBox>
                  <Box ml="auto" lineHeight={0} sx={{ textAlign: "right" }}>
                    <SoftTypography variant="h6" fontWeight="medium">
                      {card.currency}
                      {card.balance}
                    </SoftTypography>
                    <Typography sx={{ fontSize: "16px" }}>Account Balance</Typography>
                  </Box>
                </SoftBox>
              </Grid>
            );
          })}
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default CardList;
