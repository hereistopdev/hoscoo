import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import formatMoney from "utils/money";
import Money from "./money";

function DepositItem({ name, rate, balance, accured_interest, date }) {
  return (
    <SoftBox px={2} py={2} style={{ borderColor: "#CFDBD5B2", borderRadius: "1" }} mx={1} my={1}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center">
        <SoftBox></SoftBox>
        <SoftBox>
          <SoftTypography color="black" fontWeight="bold" fontSize={14}>
            {name}
          </SoftTypography>
          <SoftTypography color="#747A80" fontSize={14} mt={1}>
            Name
          </SoftTypography>
        </SoftBox>
        <SoftBox>
          <SoftTypography color="black" fontWeight="bold" fontSize={14}>
            {rate}%
          </SoftTypography>
          <SoftTypography color="#747A80" fontSize={14} mt={1}>
            Rate
          </SoftTypography>
        </SoftBox>
        <SoftBox>
          <Money amount={balance} currency="USD" />
          <SoftTypography color="#747A80" fontSize={14} mt={1}>
            Account balance
          </SoftTypography>
        </SoftBox>
        <SoftBox>
          <Money amount={accured_interest} currency="USD" />
          <SoftTypography color="#747A80" fontSize={14} mt={1}>
            Accured interest
          </SoftTypography>
        </SoftBox>
        <SoftBox>
          <SoftButton
            style={{
              backgroundColor: "#EBF0F0",
              textTransform: "none",
              fontColor: "#747A80",
              fontSize: "12",
              width: "110px",
            }}
          >
            {date}
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

DepositItem.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  accured_interest: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  date: PropTypes.string.isRequired,
};

// Default props
DepositItem.defaultProps = {
  name: 0,
  rate: "1.5",
  balance: "234.234",
  accured_interest: "123.12",
  date: "20 Sep 22",
};

export default DepositItem;
