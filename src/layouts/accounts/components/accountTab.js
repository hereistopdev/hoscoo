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
    <SoftBox
      px={1}
      py={1}
      style={{ backgroundColor: "#EBF0F0", borderRadius: 10 }}
      width={{ xs: "100%", sm: "inherit" }}
      pr={{ xs: "55px", sm: "1px" }}
    >
      <SoftBox style={{ width: "100%", display: "flex" }} overflow={{ xs: "auto", sm: "inherit" }}>
        <StyledSoftButton
          onClick={() => onTabChange("all")}
          isActive={activeTab === "all"}
          style={{
            minWidth: "max-content",
          }}
        >
          All
        </StyledSoftButton>
        <StyledSoftButton
          onClick={() => onTabChange("saving")}
          isActive={activeTab === "saving"}
          style={{
            minWidth: "max-content",
          }}
        >
          Saving
        </StyledSoftButton>
        <StyledSoftButton
          onClick={() => onTabChange("checking")}
          isActive={activeTab === "checking"}
          style={{
            minWidth: "max-content",
          }}
        >
          Checking
        </StyledSoftButton>
        <StyledSoftButton
          onClick={() => onTabChange("loan")}
          isActive={activeTab === "loan"}
          style={{
            minWidth: "max-content",
          }}
        >
          Loan
        </StyledSoftButton>
      </SoftBox>
    </SoftBox>
  );
}

AccountTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default AccountTab;
