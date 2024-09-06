/**
=========================================================
* Hoscoo React - v3.1.0
=========================================================

* Product Page: https://www.hoscoo.com
* Copyright 2024 Hoscoo (https://www.hoscoo.com)

Coded by www.hoscoo.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Hoscoo React Base Styles
import colors from "assets/theme/base/colors";
import typography from "assets/theme/base/typography";
import borders from "assets/theme/base/borders";

// Hoscoo PRO helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { dark, white, grey, inputColors } = colors;
const { size, fontWeightRegular } = typography;
const { borderWidth, borderRadius } = borders;

const inputBase = {
  styleOverrides: {
    root: {
      display: "grid !important",
      placeItems: "center !important",
      width: "100% !important",
      height: "auto !important",
      padding: `${pxToRem(8)} ${pxToRem(12)}`,
      fontSize: `${size.sm} !important`,
      fontWeight: `${fontWeightRegular} !important`,
      lineHeight: "1.4 !important",
      color: `${grey[700]} !important`,
      backgroundColor: `${white.main} !important`,
      backgroundClip: "padding-box !important",
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      appearance: "none !important",
      borderRadius: borderRadius.md,
      transition: "box-shadow 150ms ease, border-color 150ms ease, padding 150ms ease !important",
    },

    input: {
      width: "100% !important",
      height: `${pxToRem(22)}`,
      padding: "0 !important",

      "&::-webkit-input-placeholder": {
        color: `${dark.main} !important`,
      },
    },
  },
};

export default inputBase;
