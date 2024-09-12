import PropTypes from "prop-types";

// @mui material components

// Hoscoo React components
import SoftTypography from "components/SoftTypography";
import formatMoney from "utils/money";

function Money({ amount, currency, fontSize }) {
  return (
    <SoftTypography fontSize={fontSize} color="black" fontWeight="bold">
      {formatMoney(amount, currency)}
    </SoftTypography>
  );
}

Money.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currency: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
};

// Default props
Money.defaultProps = {
  amount: 0,
  currency: "USD",
  fontSize: 14,
};

export default Money;
