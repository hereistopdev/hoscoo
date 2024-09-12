import React, { useState } from "react";
import PropTypes from "prop-types";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";

const StyledSoftButton = ({ onClick, children, style, isActive }) => (
  <SoftButton
    style={{
      backgroundColor: isActive ? "black" : "transparent",
      color: isActive ? "white" : "black",
      fontSize: 12,
      paddingTop: 10,
      paddingBottom: 10,
      textTransform: "none",
      ...style,
    }}
    variant="text"
    onClick={onClick}
  >
    {children}
  </SoftButton>
);

StyledSoftButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  isActive: PropTypes.bool, // Add isActive prop
};

StyledSoftButton.defaultProps = {
  style: {},
  isActive: false, // Default value for isActive
};

function AccountTab() {
  const [activeButton, setActiveButton] = useState("all");

  const handleAllClick = () => {
    setActiveButton("all");
  };

  const handleDepositClick = () => {
    setActiveButton("deposit");
  };

  const handleAccountClick = () => {
    setActiveButton("account");
  };

  const handleCreditClick = () => {
    setActiveButton("credit");
  };

  return (
    <SoftBox display="flex" px={1} py={1} style={{ backgroundColor: "#EBF0F0", borderRadius: 10 }}>
      <StyledSoftButton onClick={handleAllClick} isActive={activeButton === "all"}>
        All
      </StyledSoftButton>
      <StyledSoftButton onClick={handleAccountClick} isActive={activeButton === "account"}>
        Payment accounts
      </StyledSoftButton>
      <StyledSoftButton onClick={handleDepositClick} isActive={activeButton === "deposit"}>
        Open deposits
      </StyledSoftButton>
      <StyledSoftButton onClick={handleCreditClick} isActive={activeButton === "credit"}>
        Your credits
      </StyledSoftButton>
    </SoftBox>
  );
}

export default AccountTab;
