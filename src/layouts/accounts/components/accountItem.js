import React, { useState } from "react";
import PropTypes from "prop-types";

// @mui material components

// Hoscoo React components
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftTypography from "components/SoftTypography";
import CardNumber from "./cardNumber";
import Money from "./money";

import borders from "assets/theme/base/borders";
import convertCurrencyToCountryCode from "utils/flag";

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

function AccountItem({ number, currency, balance, blocked_amount, status, viewMode }) {
  const { borderWidth, borderColor } = borders;
  const [visible, setVisible] = useState(false);
  const [activeAction, setActiveAction] = useState("delete");

  const countryCode = convertCurrencyToCountryCode(currency);

  return (
    <>
      {viewMode === "list" && (
        <SoftBox
          display="flex"
          width="100%"
          alignItems="center"
          p={3}
          my={1}
          border={`${borderWidth[1]} solid ${borderColor}`}
          borderRadius="lg"
        >
          <SoftBox width="5%" textAlign="center">
            <img
              src={`https://flagcdn.com/64x48/${countryCode}.png`}
              alt="countryFlag"
              style={{ width: 24, height: 24, borderRadius: "50%" }}
            />
          </SoftBox>

          <SoftBox width="22%" textAlign="center">
            <CardNumber number={number} />
            <SoftTypography color="#747A80" fontSize={14} mt={1}>
              Account Number
            </SoftTypography>
          </SoftBox>
          <SoftBox width="14%" textAlign="center">
            <SoftTypography color="black" fontWeight="bold" fontSize={14}>
              {currency}
            </SoftTypography>
            <SoftTypography color="#747A80" fontSize={14} mt={1}>
              Currency
            </SoftTypography>
          </SoftBox>
          <SoftBox width="19%" textAlign="center">
            <Money amount={balance} currency={currency} />
            <SoftTypography color="#747A80" fontSize={14} mt={1}>
              Account balance
            </SoftTypography>
          </SoftBox>
          <SoftBox width="19%" textAlign="center">
            <Money amount={blocked_amount} currency={currency} />
            <SoftTypography color="#747A80" fontSize={14} mt={1}>
              Blocked amount
            </SoftTypography>
          </SoftBox>

          <SoftBox width="14%" textAlign="center">
            <SoftBox
              width="110px"
              textAlign="center"
              style={{
                margin: "auto",
                backgroundColor: "#E0F6E6",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
            >
              <SoftTypography
                fontSize={14}
                fontWeight="bold"
                style={{
                  color: "#23E33E",
                }}
              >
                {status}
              </SoftTypography>
            </SoftBox>
          </SoftBox>
          <SoftBox width="7%" textAlign="center">
            <SoftButton
              style={{
                backgroundColor: "transparent",
                color: "black",
                fontSize: 16,
              }}
              position="absolute"
              variant="text"
              onClick={() => setVisible(!visible)}
            >
              •••
            </SoftButton>
            {visible && (
              <SoftBox
                display="flex"
                flexDirection="column"
                p={1}
                style={{
                  backgroundColor: "#EBF0F0",
                  borderRadius: 10,
                }}
                position="absolute"
              >
                <StyledSoftButton
                  onClick={() => setActiveAction("delete")}
                  isActive={activeAction === "delete"}
                >
                  Delete
                </StyledSoftButton>
                <StyledSoftButton
                  onClick={() => setActiveAction("other")}
                  isActive={activeAction === "other"}
                >
                  Other
                </StyledSoftButton>
              </SoftBox>
            )}
          </SoftBox>
        </SoftBox>
      )}
      {viewMode === "grid" && (
        <SoftBox
          p={3}
          border={`${borderWidth[1]} solid ${borderColor}`}
          borderRadius="lg"
          my={1}
          width={{ xs: "100%", lg: "49.5%" }}
        >
          <SoftBox display="flex" justifyContent="space-between" alignItems="center">
            <SoftBox display="flex" alignItems="center">
              <SoftBox mr={2}>
                <img
                  src={`https://flagcdn.com/64x48/${countryCode}.png`}
                  alt="countryFlag"
                  style={{ width: 24, height: 24, borderRadius: "50%" }}
                />
              </SoftBox>
              <SoftBox>
                <SoftTypography color="black" fontWeight="bold" fontSize={14}>
                  {currency}
                </SoftTypography>
                <CardNumber number={number} />
              </SoftBox>
            </SoftBox>
            <SoftBox>
              <SoftTypography
                fontSize={14}
                fontWeight="bold"
                style={{
                  color: "#23E33E",
                }}
              >
                {status}
              </SoftTypography>
            </SoftBox>
          </SoftBox>

          <SoftBox display="flex" justifyContent="space-between" mt={3} alignItems="end">
            <SoftBox>
              <Money amount={balance} currency={currency} fontSize={24} />
              <SoftBox display="flex" alignItems="center">
                <SoftTypography color="#747A80" fontSize={14} mr={1}>
                  Blocked amount
                </SoftTypography>
                <Money amount={blocked_amount} currency={currency} />
              </SoftBox>
            </SoftBox>
            <SoftBox>
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
        </SoftBox>
      )}
    </>
  );
}

AccountItem.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currency: PropTypes.string.isRequired,
  balance: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  blocked_amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  status: PropTypes.string.isRequired,
  viewMode: PropTypes.string.isRequired,
};

// Default props
AccountItem.defaultProps = {
  number: 0,
  currency: "USD",
  balance: "234.234",
  blocked_amount: "123.12",
  status: "Active",
  viewMode: "list",
};

export default AccountItem;
