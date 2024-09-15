import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Hoscoo React base styles
import borders from "assets/theme/base/borders";

// Images
import { Box, Typography } from "@mui/material";
import { useSoftUIController, setOpenCardDetail } from "context";
import SoftButton from "components/SoftButton";

function CardItem({ card }) {
  const [open, setOpen] = useState(false);

  const { borderWidth, borderColor } = borders;

  const [controller, dispatch] = useSoftUIController();
  const { openCardDetail } = controller;

  const handleCardDetail = () => {
    setOpenCardDetail(dispatch, { open: !openCardDetail.open, card: card });
  };

  const handleDelete = () => {
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12} md={12} key={card.cardName}>
      <SoftBox
        border={`${borderWidth[1]} solid ${borderColor}`}
        borderRadius="lg"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py={2}
        px={3}
      >
        <SoftBox component="img" src={card.img} alt="master card" width="50px" mr={2} />
        <SoftBox xs={12} md={12}>
          <SoftTypography variant="h6" fontWeight="medium">
            ****&nbsp;&nbsp;****&nbsp;&nbsp;****&nbsp;&nbsp;
            {[...`${card.number}`].slice(12, 16).join("")}
          </SoftTypography>
          <Typography sx={{ fontSize: "16px" }}>
            {card.type === "bank" ? card.bankName : "Card Number"}
          </Typography>
        </SoftBox>
        <Box>
          <SoftTypography variant="h6" fontWeight="medium">
            {card.currencyString}
          </SoftTypography>
          <Typography sx={{ fontSize: "16px" }}>Currency</Typography>
        </Box>
        <Box lineHeight={0}>
          <SoftTypography variant="h6" fontWeight="medium">
            {card.currency}
            {card.balance}
          </SoftTypography>
          <Typography sx={{ fontSize: "16px" }}>Balance</Typography>
        </Box>
        <Box>
          <SoftTypography
            variant="h6"
            fontWeight="medium"
            color={
              card.status === "Active" ? "info" : card.status === "On Hold" ? "warning" : "dark"
            }
          >
            ● {card.status}
          </SoftTypography>
        </Box>
        <Box>
          <SoftButton onClick={handleCardDetail}>View Details</SoftButton>{" "}
          <SoftButton onClick={handleClickOpen}>Delete</SoftButton>
        </Box>
      </SoftBox>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: "14px" }}>
            Do you really want to delete this account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default CardItem;
