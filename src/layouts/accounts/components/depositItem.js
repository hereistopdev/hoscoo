import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import formatMoney from "utils/money";
import Money from "./money";
import depositIcon from "assets/icons/deposit.svg";

import borders from "assets/theme/base/borders";

function DepositItem({ name, rate, balance, accured_interest, date, viewMode }) {
  const { borderWidth, borderColor } = borders;
  return (
    <SoftBox p={3} my={1} border={`${borderWidth[1]} solid ${borderColor}`} borderRadius="lg">
      {viewMode === "list" && (
        <SoftBox display="flex" width="100%" alignItems="center">
          <SoftBox width="5%" textAlign="center">
            <img
              src={depositIcon}
              alt="depositIcon"
              style={{ width: 24, height: 24, borderRadius: "50%" }}
            />
          </SoftBox>
          <SoftBox width="22%" textAlign="center">
            <SoftTypography color="black" fontWeight="bold" fontSize={14}>
              {name}
            </SoftTypography>
            <SoftTypography color="#747A80" fontSize={14} mt={1}>
              Name
            </SoftTypography>
          </SoftBox>
          <SoftBox width="14%" textAlign="center">
            <SoftTypography color="black" fontWeight="bold" fontSize={14}>
              {rate}%
            </SoftTypography>
            <SoftTypography color="#747A80" fontSize={14} mt={1}>
              Rate
            </SoftTypography>
          </SoftBox>
          <SoftBox width="19%" textAlign="center">
            <Money amount={balance} currency="USD" />
            <SoftTypography color="#747A80" fontSize={14} mt={1}>
              Account balance
            </SoftTypography>
          </SoftBox>
          <SoftBox width="19%" textAlign="center">
            <Money amount={accured_interest} currency="USD" />
            <SoftTypography color="#747A80" fontSize={14} mt={1}>
              Accured interest
            </SoftTypography>
          </SoftBox>
          <SoftBox width="16%" textAlign="center">
            <SoftBox
              width="110px"
              textAlign="center"
              style={{
                margin: "auto",
                backgroundColor: "#F4F4F4",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
            >
              <SoftTypography
                fontSize={14}
                fontWeight="bold"
                style={{
                  color: "#6C757D",
                }}
              >
                {date}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox width="5%" textAlign="center">
            <SoftButton
              style={{
                backgroundColor: "transparent",
                color: "black",
                fontSize: 16,
              }}
              variant="text"
            >
              •••
            </SoftButton>
          </SoftBox>
        </SoftBox>
      )}
    </SoftBox>
  );
}

DepositItem.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  rate: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  accured_interest: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  date: PropTypes.string.isRequired,
  viewMode: PropTypes.string.isRequired,
};

// Default props
DepositItem.defaultProps = {
  name: 0,
  rate: "1.5",
  balance: "234.234",
  accured_interest: "123.12",
  date: "20 Sep 22",
  viewMode: "list",
};

export default DepositItem;
