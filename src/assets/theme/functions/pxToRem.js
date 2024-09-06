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
  The pxToRem() function helps you to convert a px unit into a rem unit, 
 */

function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}

export default pxToRem;
