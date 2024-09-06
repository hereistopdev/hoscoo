// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import USAICON from "assets/icons/united-states.png";

function USAFlag({ size }) {
  return <img src={USAICON} alt="USA Flag" width={size} height={size} />;
}

// Setting default values for the props of USAFlag
USAFlag.defaultProps = {
  size: "16px",
};

// Typechecking props for the USAFlag
USAFlag.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default USAFlag;
