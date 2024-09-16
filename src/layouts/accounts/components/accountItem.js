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
import { deleteBankAccount } from "services/api";

function AccountItem({
  accountId,
  number,
  currency,
  balance,
  blocked_amount,
  status,
  viewMode,
  fetchData,
}) {
  const { borderWidth, borderColor } = borders;

  const countryCode = convertCurrencyToCountryCode(currency);

  const deleteAccount = async () => {
    try {
      const response = await deleteBankAccount(accountId);
      if (response.data) {
        fetchData();
      }
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

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
            <CardNumber number={number} hidden={true} />
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

          <SoftBox width="16%" textAlign="center">
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
            <SoftButton
              style={{
                backgroundColor: "transparent",
                color: "black",
                fontSize: 16,
              }}
              variant="text"
              onClick={deleteAccount}
            >
              Del
            </SoftButton>
          </SoftBox>
        </SoftBox>
      )}
      {viewMode === "grid" && (
        <SoftBox
          p={3}
          border={`${borderWidth[1]} solid ${borderColor}`}
          borderRadius="lg"
          my={1}
          width={{ xs: "100%", lg: "49%" }}
        >
          <SoftBox display="flex" justifyContent="space-between">
            <SoftBox>
              <SoftTypography color="black" fontWeight="bold" fontSize={14}>
                {currency}
              </SoftTypography>
              <CardNumber number={number} hidden={true} />
            </SoftBox>
            <SoftBox>
              <img
                src={`https://flagcdn.com/64x48/${countryCode}.png`}
                alt="countryFlag"
                style={{ width: 24, height: 24, borderRadius: "50%" }}
              />
            </SoftBox>
          </SoftBox>

          <SoftBox display="flex" justifyContent="space-between" mt={3} alignItems="center">
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
