// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import USAICON from "assets/icons/united-states.png";

function USAFlag({ size = "16px" }) {
  return <img src={USAICON} alt="USA Flag" width={size} height={size} />;
}

USAFlag.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default USAFlag;
