import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import formatMoney from "utils/money";
import Money from "./money";
import CardNumber from "./cardNumber";

function AccountItem({ number, currency, balance, blocked_amount, status }) {
  return (
    <SoftBox
      px={2}
      py={2}
      style={{ borderColor: "#CFDBD5B2", borderWidth: "1", borderRadius: "1" }}
      mx={1}
      my={1}
    >
      <SoftBox display="flex" justifyContent="space-between" alignItems="center">
        <SoftBox></SoftBox>
        <SoftBox>
          <CardNumber number={number} hidden={true} />
          <SoftTypography color="#747A80" fontSize={14} mt={1}>
            Account Number
          </SoftTypography>
        </SoftBox>
        <SoftBox>
          <SoftTypography color="black" fontWeight="bold" fontSize={14}>
            {currency}
          </SoftTypography>
          <SoftTypography color="#747A80" fontSize={14} mt={1}>
            Currency
          </SoftTypography>
        </SoftBox>
        <SoftBox>
          <Money amount={balance} currency={currency} />
          <SoftTypography color="#747A80" fontSize={14} mt={1}>
            Account balance
          </SoftTypography>
        </SoftBox>
        <SoftBox>
          <Money amount={balance} currency={currency} />
          <SoftTypography color="#747A80" fontSize={14} mt={1}>
            Blocked amount
          </SoftTypography>
        </SoftBox>
        <SoftBox>
          <SoftButton
            style={{
              backgroundColor: "#E0F6E6",
              textTransform: "none",
              fontColor: "#23E33E",
              fontSize: "12",
              width: "110px",
            }}
          >
            {status}
          </SoftButton>
        </SoftBox>
        <SoftBox>
          <SoftTypography color="black" fontWeight="bold">
            ...
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </SoftBox>
  );
}

AccountItem.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currency: PropTypes.string.isRequired,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  blocked_amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  status: PropTypes.string.isRequired,
};

// Default props
AccountItem.defaultProps = {
  number: 0,
  currency: "USD",
  balance: "234.234",
  blocked_amount: "123.12",
  status: "Active",
};

export default AccountItem;
