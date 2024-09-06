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

// Hoscoo React base styles
import colors from "assets/theme/base/colors";

// Hoscoo React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { transparent } = colors;

const select = {
  styleOverrides: {
    select: {
      display: "grid",
      alignItems: "center",
      padding: `0 ${pxToRem(12)} !important`,

      "& .Mui-selected": {
        backgroundColor: transparent.main,
      },
    },

    selectMenu: {
      background: "none",
      height: "none",
      minHeight: "none",
      overflow: "unset",
    },

    icon: {
      display: "none",
    },
  },
};

export default select;
