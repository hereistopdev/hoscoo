import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import PropTypes from "prop-types"; // Importing prop-types
import SoftBox from "components/SoftBox";

// CreateBankAccountModal.jsx
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import SoftInput from "components/SoftInput";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftSelect from "components/SoftSelect";
import useAuth from "store/useAuth";
import { createBankAccount } from "services/api";

const CreateBankAccountModal = ({ open, onClose, fetchAccount }) => {
  const [accountType, setAccountType] = useState();
  const [balance, setBalance] = useState("");
  const [currency, setCurrency] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    console.log(accountType, balance, currency);
  }, [accountType, balance, currency]);

  const handleSubmit = async () => {
    if (!accountType || !currency || !user.userID) return;

    console.log({ accountType, balance, currency }, user.userID);

    try {
      const response = await createBankAccount(user.userID, accountType, currency);

      if (response.data) {
        fetchAccount();
        onClose();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const accounttypes = [
    { value: "Saving", label: "Saving" },
    { value: "Checking", label: "Checking" },
    { value: "Loan", label: "Loan" },
  ];

  const currencies = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "CAD", label: "CAD" },
    { value: "GBP", label: "GBP" },
    { value: "CHF", label: "CHF" },
    { value: "CNY", label: "CNY" },
  ];

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Bank Account</DialogTitle>
      <DialogContent>
        <SoftBox component="form" role="form">
          <SoftBox mb={2}>
            <SoftSelect
              label={"Account Type"}
              options={accounttypes}
              handleChange={(e) => setAccountType(e.target.value)}
              value={accountType}
            ></SoftSelect>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftSelect
              label={"Currency"}
              options={currencies}
              handleChange={(e) => setCurrency(e.target.value)}
              value={currency}
            ></SoftSelect>
          </SoftBox>
        </SoftBox>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Create Account
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Adding propTypes for CreateBankAccountModal
CreateBankAccountModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchAccount: PropTypes.func.isRequired,
};

export default CreateBankAccountModal;
