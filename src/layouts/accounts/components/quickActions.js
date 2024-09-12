import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";

const handleOpenClick = () => {
  alert("Open");
};

const handleDepositClick = () => {
  alert("Deposit");
};

function QuickActions() {
  return (
    <SoftBox display="flex">
      <SoftButton
        style={{
          backgroundColor: "transparent",
          color: "black",
          fontSize: 14,
        }}
        variant="text"
        onClick={handleOpenClick}
      >
        Open Account
      </SoftButton>
      <SoftButton
        style={{
          backgroundColor: "transparent",
          color: "black",
          fontSize: 14,
        }}
        variant="text"
        onClick={handleDepositClick}
      >
        Deposit
      </SoftButton>
    </SoftBox>
  );
}

export default QuickActions;
