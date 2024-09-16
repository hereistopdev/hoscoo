import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import { TextField, Autocomplete, Box, Avatar, Typography } from "@mui/material";
import SoftButton from "components/SoftButton";

const banks = [
  { name: "Absa", logo: "brands/absa.png" },
  { name: "Akiba Commercial Bank PLC", logo: "brands/ac3.png" },
  { name: "Airtel Money", logo: "brands/airtel.png" },
  { name: "Azania Bank", logo: "brands/azania.png" },
  { name: "Bank Of Africa", logo: "brands/boa.jpg" },
  { name: "CRDB Bank", logo: "brands/cb.png" },
  { name: "Citi", logo: "brands/citi.png" },
  { name: "DPOGROUP", logo: "brands/dpo.webp" },
  { name: "Diamond Trust Bank", logo: "brands/dtb.png" },
  { name: "Equity", logo: "brands/equity.png" },
  { name: "Exim Bank", logo: "brands/exim.png" },
  { name: "First National Bank", logo: "brands/fnb.png" },
  { name: "GTBank", logo: "brands/gt.png" },
  { name: "Halopesa", logo: "brands/halopesa.png" },
  { name: "IM", logo: "brands/im.png" },
  { name: "KCB", logo: "brands/kcb.png" },
  { name: "MasterCard", logo: "brands/mastercard.png" },
  { name: "M-pesa", logo: "brands/m-pesa.png" },
  { name: "Nala", logo: "brands/nala.png" },
  { name: "NBC", logo: "brands/nbc.png" },
  { name: "NMB3", logo: "brands/NMB3.png" },
  { name: "Pesapal", logo: "brands/pesapal.png" },
  { name: "Rafiki", logo: "brands/rafiki.png" },
  { name: "SportPesa", logo: "brands/sportpesa.jpg" },
  { name: "Stanbic Bank", logo: "brands/stanbic.png" },
  { name: "Tanzania commercial Bank", logo: "brands/tanzania-commercial.png" },
  { name: "tiGopesa", logo: "brands/tigo.png" },
  { name: "T-PESA", logo: "brands/t-pesa.webp" },
  { name: "United Bank for Africa", logo: "brands/uba.gif" },
  { name: "UnionPay", logo: "brands/union-pay.png" },
  { name: "VISA", logo: "brands/visa.png" },
];

function AddAccountDialog({ open, setOpen, list, title }) {
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedBank, setSelectedBank] = useState(null);

  return (
    <Dialog fullWidth={true} open={open} onClose={handleClose}>
      <DialogTitle>{`Add new ${title}`}</DialogTitle>
      <DialogContent>
        <Box>
          <Autocomplete
            options={banks}
            getOptionLabel={(option) => option.name}
            onChange={(event, newValue) => {
              setSelectedBank(newValue);
            }}
            renderOption={(props, option) => (
              <Box component="li" sx={{ display: "flex", alignItems: "center" }} {...props}>
                <SoftBox
                  component="img"
                  src={option.logo}
                  alt={option.name}
                  sx={{ marginRight: 1, width: "50px", paddingTop: 1, paddingBottom: 1 }}
                />
                {option.name}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: "12px", // Adjusts the placeholder font size
                    lineHeight: 1,
                  },
                }}
                label="Select your account to add"
              />
            )}
          />
          {selectedBank && (
            <Box
              mt={2}
              sx={{
                display: "flex", // Flexbox to place items side by side
                alignItems: "center", // Vertically align input and button
                gap: 1, // Space between the input and button
              }}
            >
              <SoftBox
                component="img"
                src={selectedBank.logo}
                alt="bank logo"
                sx={{ width: "50px" }}
              />
              <TextField
                variant="outlined"
                label={`Enter your email address of selected ${title}`}
                sx={{
                  "& .MuiInputLabel-root": {
                    fontSize: "12px", // Adjusts the placeholder font size
                    lineHeight: 1,
                  },
                  flexGrow: 1,
                }}
              />
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Add</Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddAccountDialog;
