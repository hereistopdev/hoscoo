import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import CreateBankAccountModal from "./CreateBankAccountModal";
import { useState } from "react";

const handleDepositClick = () => {
  alert("Deposit");
};

function QuickActions({ fetchAccount }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <SoftBox display="flex">
      <SoftButton
        style={{
          backgroundColor: "transparent",
          color: "black",
          fontSize: 14,
        }}
        variant="text"
        onClick={handleOpen}
      >
        Open Account
      </SoftButton>
      <CreateBankAccountModal open={modalOpen} onClose={handleClose} fetchAccount={fetchAccount} />
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
