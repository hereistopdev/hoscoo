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
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Hoscoo React helper functions
// import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;
const { text } = colors;

const dialogContentText = {
  styleOverrides: {
    root: {
      fontSize: size.md,
      color: text.main,
    },
  },
};

export default dialogContentText;
