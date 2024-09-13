import React from "react";
import { MenuItem, FormControl, InputLabel, Select, Typography } from "@mui/material";
import { styled } from "@mui/system";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Styled components using SoftUI theme
const StyledFormControl = styled(FormControl)({
  minWidth: "100%",
});

const StyledInputLabel = styled(InputLabel)({
  fontSize: "1rem",
  color: "#333",
});

const StyledSelect = styled(Select)({
  borderRadius: "4px",
  border: "1px solid #ddd",
  "&:focus": {
    borderColor: "#0052cc",
    boxShadow: "0 0 0 0.2rem rgba(0, 82, 204, 0.25)",
  },
});

const SelectBox = ({ label, value, onChange, options }) => {
  return (
    <StyledFormControl>
      <StyledInputLabel style={{ width: "1000px" }}>{label}</StyledInputLabel>
      <StyledSelect value={value} onChange={onChange} displayEmpty>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

const SoftSelect = ({ options, handleChange, value, label }) => {
  return (
    <>
      <SoftBox mb={1} ml={0.5}>
        <SoftTypography component="label" variant="caption" fontWeight="bold">
          {label}
        </SoftTypography>
      </SoftBox>
      <SelectBox value={value} onChange={handleChange} options={options} />
    </>
  );
};

export default SoftSelect;
