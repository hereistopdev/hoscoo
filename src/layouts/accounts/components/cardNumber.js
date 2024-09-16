import PropTypes from "prop-types";

// @mui material components

// Hoscoo React components
import SoftTypography from "components/SoftTypography";
import formatCardNumber from "utils/cardNumber";
import { useEffect } from "react";

function CardNumber({ number, fontSize, hidden, half }) {
  const t = (evt) => {};
  useEffect(() => {
    window.addEventListener("resize", t);
    return () => {
      window.removeEventListener("resize", t);
    };
  });
  return (
    <SoftTypography fontSize={fontSize} color="black" fontWeight="bold">
      {formatCardNumber(number, hidden, half)}
    </SoftTypography>
  );
}

CardNumber.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fontSize: PropTypes.number.isRequired,
  hidden: PropTypes.bool.isRequired,
  half: PropTypes.bool.isRequired,
};

// Default props
CardNumber.defaultProps = {
  number: 1111111111111111,
  fontSize: 14,
  hidden: true,
  half: false,
};

export default CardNumber;
