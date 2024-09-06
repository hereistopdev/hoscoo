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

/**
  The rgba() function helps you to create a rgba color code, it uses the hexToRgb() function
  to convert the hex code into rgb for using it inside the rgba color format.
 */

// Hoscoo React helper functions
import hexToRgb from "assets/theme/functions/hexToRgb";

function rgba(color, opacity) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
