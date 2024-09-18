import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Custom styles for the SoftBadge
import SoftBadgeRoot from "components/SoftBadge/SoftBadgeRoot";

const SoftBadge = forwardRef(
  (
    {
      color = "info",
      variant = "gradient",
      size = "sm",
      circular = false,
      indicator = false,
      border = false,
      container = false,
      children = false,
      ...rest
    },
    ref
  ) => (
    <SoftBadgeRoot
      {...rest}
      ownerState={{ color, variant, size, circular, indicator, border, container, children }}
      ref={ref}
      color="default"
    >
      {children}
    </SoftBadgeRoot>
  )
);

// Typechecking props of the SoftBadge
SoftBadge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  variant: PropTypes.oneOf(["gradient", "contained"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  circular: PropTypes.bool,
  indicator: PropTypes.bool,
  border: PropTypes.bool,
  children: PropTypes.node,
  container: PropTypes.bool,
};

export default SoftBadge;
