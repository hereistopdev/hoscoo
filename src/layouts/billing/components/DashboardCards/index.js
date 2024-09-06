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
import masterCardLogo from "assets/images/logos/mastercard.png";
import visaLogo from "assets/images/logos/visa.png";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import typography from "assets/theme/base/typography";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { Box, Typography } from "@mui/material";
import USAFlag from "assets/icons/united-states.png";

function DashboardCards() {
  const { borderWidth, borderColor } = borders;

  const { size } = typography;

  return (
    <Card id="delete-account">
      <SoftBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
        <SoftTypography variant="h6" fontWeight="medium">
          Your Assets
        </SoftTypography>
        {/* <SoftButton variant="gradient" color="dark">
          <Icon sx={{ fontWeight: "bold" }}>add</Icon>
          &nbsp;add new card
        </SoftButton> */}
      </SoftBox>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <GradientLineChart
              // title="Your Assets"
              // description={
              //   <SoftBox display="flex" alignItems="center">
              //     <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
              //       <Icon className="font-bold">arrow_upward</Icon>
              //     </SoftBox>
              //     <SoftTypography variant="button" color="text" fontWeight="medium">
              //       4% more{" "}
              //       <SoftTypography variant="button" color="text" fontWeight="regular">
              //         in 2024
              //       </SoftTypography>
              //     </SoftTypography>
              //   </SoftBox>
              // }
              height="20.25rem"
              chart={gradientLineChartData}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftBox component="img" src={masterCardLogo} alt="master card" width="10%" mr={2} />
              <SoftBox>
                <SoftTypography variant="h6" fontWeight="medium">
                  ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;7852
                </SoftTypography>
                <Typography sx={{ fontSize: "16px" }}>Account Number</Typography>
              </SoftBox>
              <Box ml="auto" lineHeight={0} sx={{ textAlign: "right" }}>
                <SoftTypography variant="h6" fontWeight="medium">
                  $31,400.00
                </SoftTypography>
                <Typography sx={{ fontSize: "16px" }}>Account Balance</Typography>
              </Box>
            </SoftBox>
          </Grid>
          <Grid item xs={12} md={12}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftBox component="img" src={visaLogo} alt="master card" width="10%" mr={2} />

              <SoftBox>
                <SoftTypography variant="h6" fontWeight="medium">
                  ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5248
                </SoftTypography>
                <Typography sx={{ fontSize: "16px" }}>Account Number</Typography>
              </SoftBox>
              <Box ml="auto" lineHeight={0} sx={{ textAlign: "right" }}>
                <SoftTypography variant="h6" fontWeight="medium">
                  €64,120.50
                </SoftTypography>
                <Typography sx={{ fontSize: "16px" }}>Account Balance</Typography>
              </Box>
            </SoftBox>
          </Grid>

          <Grid item xs={12} md={12}>
            <SoftBox
              border={`${borderWidth[1]} solid ${borderColor}`}
              borderRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p={3}
            >
              <SoftBox component="img" src={USAFlag} alt="master card" width="10%" mr={2} />

              <SoftBox>
                <SoftTypography variant="h6" fontWeight="medium">
                  ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;5864
                </SoftTypography>
                <Typography sx={{ fontSize: "16px" }}>Account Number</Typography>
              </SoftBox>
              <Box ml="auto" lineHeight={0} sx={{ textAlign: "right" }}>
                <SoftTypography variant="h6" fontWeight="medium">
                  $1,000.00
                </SoftTypography>
                <Typography sx={{ fontSize: "16px" }}>Account Balance</Typography>
              </Box>
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default DashboardCards;
