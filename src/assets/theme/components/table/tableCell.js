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
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

// Hoscoo React helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { borderWidth } = borders;
const { light } = colors;

const tableCell = {
  styleOverrides: {
    root: {
      padding: `${pxToRem(12)} ${pxToRem(16)}`,
      borderBottom: `${borderWidth[1]} solid ${light.main}`,
    },
  },
};

export default tableCell;
