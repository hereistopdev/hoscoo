import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

// Hoscoo React base styles
import borders from "assets/theme/base/borders";

// Images
import typography from "assets/theme/base/typography";
import { Box, Typography } from "@mui/material";

const bankData = [
  {
    img: "brands/azania.png",
    bankName: "Azania Bank",
    number: "1111111111117852",
    balance: 31400.0,
    currency: "$",
  },
  {
    img: "brands/boa.jpg",
    bankName: "Bank of Affrica",
    number: "1111111111117852",
    balance: 64120.5,
    currency: "€",
  },
  {
    img: "brands/uba.gif",
    bankName: "United Bank for Africa",
    number: "1111111111117852",
    balance: 1000.0,
    currency: "$",
  },
  {
    img: "brands/stanbic.jpg",
    bankName: "Stanbic Bank",
    number: "1111111111117852",
    balance: 793.0,
    currency: "$",
  },
];

function BankList() {
  const { borderWidth, borderColor } = borders;
  const { size } = typography;

  return (
    <Card id="delete-account">
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Linked Bank Accounts
        </SoftTypography>
        <SoftButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new bank account
        </SoftButton>
      </SoftBox>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          {bankData.map((bank) => {
            return (
              <Grid item xs={12} md={12} key={bank.bankName}>
                <SoftBox
                  border={`${borderWidth[1]} solid ${borderColor}`}
                  borderRadius="lg"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                >
                  <SoftBox component="img" src={bank.img} alt="master card" width="10%" mr={2} />
                  <SoftBox>
                    <SoftTypography variant="h6" fontWeight="medium">
                      ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;
                      {bank.number.slice(bank.number.length - 4, bank.number.length)}
                    </SoftTypography>
                    <Typography sx={{ fontSize: "16px" }}>{bank.bankName}</Typography>
                  </SoftBox>
                  <Box ml="auto" lineHeight={0} sx={{ textAlign: "right" }}>
                    <SoftTypography variant="h6" fontWeight="medium">
                      {bank.currency}
                      {bank.balance}
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

export default BankList;
