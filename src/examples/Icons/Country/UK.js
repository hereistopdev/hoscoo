// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import USAICON from "assets/icons/united-kingdom.png";

function UKFlag({ size = "16px" }) {
  return <img src={USAICON} alt="USA Flag" width={size} height={size} />;
}

// Typechecking props for the UKFlag
UKFlag.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default UKFlag;
