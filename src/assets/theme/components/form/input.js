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
import borders from "assets/theme/base/borders";

// Hoscoo PRO helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { inputColors } = colors;
const { borderWidth, borderRadius } = borders;

const input = {
  styleOverrides: {
    root: {
      display: "flex !important",
      padding: `${pxToRem(8)} ${pxToRem(28)} ${pxToRem(8)} ${pxToRem(12)} !important`,
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      borderRadius: `${borderRadius.md} !important`,

      "& fieldset": {
        border: "none",
      },
    },

    input: {
      height: pxToRem(22),
      width: "max-content !important",
    },

    inputSizeSmall: {
      height: pxToRem(14),
    },
  },
};

export default input;
