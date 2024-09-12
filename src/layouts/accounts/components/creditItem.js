import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import formatMoney from "utils/money";
import Money from "./money";

import borders from "assets/theme/base/borders";

function CreditItem({ name, rate, credit_amount, paid_amount, date }) {
  const { borderWidth, borderColor } = borders;
  return (
    <SoftBox p={3} my={1} border={`${borderWidth[1]} solid ${borderColor}`} borderRadius="lg">
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
          <Money amount={credit_amount} currency="USD" />
          <SoftTypography color="#747A80" fontSize={14} mt={1}>
            Credit amount
          </SoftTypography>
        </SoftBox>
        <SoftBox>
          <Money amount={paid_amount} currency="USD" />
          <SoftTypography color="#747A80" fontSize={14} mt={1}>
            Paid amount
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

CreditItem.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  credit_amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  paid_amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  date: PropTypes.string.isRequired,
};

// Default props
CreditItem.defaultProps = {
  name: 0,
  rate: "1.5",
  credit_amount: "234.234",
  paid_amount: "123.12",
  date: "20 Sep 22",
};

export default CreditItem;
