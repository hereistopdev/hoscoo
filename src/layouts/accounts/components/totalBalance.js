import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function TotalBalance({ amount, currency }) {
  return (
    <SoftBox>
      <SoftTypography variant="h2" color="black" fontWeight="bold">
        {currency}
        {amount}
      </SoftTypography>
      <SoftBox display="flex">
        <SoftTypography color="#747A80">Total balance from all accounts</SoftTypography>
        <SoftTypography color="#0052FF" fontWeight="bold" ml={1}>
          {currency}
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

TotalBalance.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currency: PropTypes.string.isRequired,
};

// Default props
TotalBalance.defaultProps = {
  amount: 0,
  currency: "$",
};

export default TotalBalance;
