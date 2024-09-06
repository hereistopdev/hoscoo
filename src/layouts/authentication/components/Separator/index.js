/**
=========================================================
* Hoscoo React - v4.0.1
=========================================================

* Product Page: https://www.hoscoo.com
* Copyright 2024 Hoscoo (https://www.hoscoo.com)

Coded by www.hoscoo.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Divider from "@mui/material/Divider";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Separator() {
  return (
    <SoftBox position="relative" py={0.25}>
      <Divider />
      <SoftBox
        bgColor="white"
        position="absolute"
        top="50%"
        left="50%"
        px={1.5}
        lineHeight={1}
        sx={{ transform: "translate(-50%, -60%)" }}
      >
        <SoftTypography variant="button" fontWeight="medium" color="secondary">
          or
        </SoftTypography>
      </SoftBox>
    </SoftBox>
  );
}

export default Separator;
