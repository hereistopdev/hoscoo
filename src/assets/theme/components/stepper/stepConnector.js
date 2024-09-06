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

const { dark } = colors;
const { borderWidth, borderColor } = borders;

const stepConnector = {
  styleOverrides: {
    root: {
      color: borderColor,
      transition: "all 200ms linear",

      "&.Mui-active": {
        color: dark.main,
      },

      "&.Mui-completed": {
        color: dark.main,
      },
    },

    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%",
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: "currentColor",
    },
  },
};

export default stepConnector;
