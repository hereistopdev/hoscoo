// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import USAICON from "assets/icons/eu.png";

function EUFlag({ size }) {
  return <img src={USAICON} alt="USA Flag" width={size} height={size} />;
}

// Setting default values for the props of EUFlag
EUFlag.defaultProps = {
  size: "16px",
};

// Typechecking props for the EUFlag
EUFlag.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default EUFlag;
