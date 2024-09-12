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

function AccountTab({ activeTab, onTabChange }) {
  return (
    <SoftBox display="flex" px={1} py={1} style={{ backgroundColor: "#EBF0F0", borderRadius: 10 }}>
      <StyledSoftButton onClick={() => onTabChange("all")} isActive={activeTab === "all"}>
        All
      </StyledSoftButton>
      <StyledSoftButton onClick={() => onTabChange("account")} isActive={activeTab === "account"}>
        Payment accounts
      </StyledSoftButton>
      <StyledSoftButton onClick={() => onTabChange("deposit")} isActive={activeTab === "deposit"}>
        Open deposits
      </StyledSoftButton>
      <StyledSoftButton onClick={() => onTabChange("credit")} isActive={activeTab === "credit"}>
        Your credits
      </StyledSoftButton>
    </SoftBox>
  );
}

AccountTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default AccountTab;
