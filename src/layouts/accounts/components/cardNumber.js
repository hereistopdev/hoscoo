import PropTypes from "prop-types";

// @mui material components

// Hoscoo React components
import SoftTypography from "components/SoftTypography";
import formatCardNumber from "utils/cardNumber";

function CardNumber({ number, fontSize, hidden }) {
  return (
    <SoftTypography fontSize={fontSize} color="black" fontWeight="bold">
      {formatCardNumber(number, hidden)}
    </SoftTypography>
  );
}

CardNumber.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fontSize: PropTypes.number.isRequired,
  hidden: PropTypes.bool.isRequired,
};

// Default props
CardNumber.defaultProps = {
  number: 1111111111111111,
  fontSize: 14,
  hidden: false,
};

export default CardNumber;
