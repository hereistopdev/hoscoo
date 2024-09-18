import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import Money from "./money";

const handleClick = () => {
  alert(1);
};
function TotalBalance({ amount = 0, currency = "$" }) {
  return (
    <SoftBox>
      <Money amount={amount} currency={currency} fontSize={32}></Money>
      <SoftBox display="flex" alignItems="center">
        <SoftTypography fontSize={14} color="#747A80">
          Total balance from all accounts
        </SoftTypography>
        <SoftButton
          style={{
            backgroundColor: "transparent",
            color: "#0052FF",
            fontWeight: 700,
            fontSize: 14,
          }}
          variant="text"
          onClick={handleClick}
        >
          {currency}
        </SoftButton>
      </SoftBox>
    </SoftBox>
  );
}

TotalBalance.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currency: PropTypes.string.isRequired,
};

export default TotalBalance;
