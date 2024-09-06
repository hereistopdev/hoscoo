import { BorderRight } from "@mui/icons-material";
import { useEffect } from "react";

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
function collapseItem(theme, ownerState) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const { active, transparentSidenav, color } = ownerState;

  const { dark, white, text, transparent, info, light, gradients } = palette;
  const { xxl } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    background: active && transparentSidenav ? white.main : transparent.main,
    color: active ? dark.main : text.main,
    display: "flex",
    alignItems: "center",
    width: "100%",
    // padding: `${pxToRem(10.8)} ${pxToRem(12.8)} ${pxToRem(10.8)} ${pxToRem(16)}`,
    padding: `${pxToRem(5)} ${pxToRem(12.8)} ${pxToRem(5)} ${pxToRem(16)}`,
    margin: `5px ${pxToRem(16)}`,
    // borderRadius: borderRadius.sm,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    borderRight: active && transparentSidenav ? "2px solid" : "",
    borderColor: () => {
      if (active) {
        return color === "default" ? info.main : palette[color]?.main;
      }

      return light.main;
    },
    // boxShadow: active && transparentSidenav ? xxl : "none",
    // [breakpoints.up("xl")]: {
    //   boxShadow: () => {
    //     if (active) {
    //       return transparentSidenav ? xxl : "none";
    //     }

    //     return "none";
    //   },
    //   // transition: transitions.create("box-shadow", {
    //   //   easing: transitions.easing.easeInOut,
    //   //   duration: transitions.duration.shorter,
    //   // }),
    // },
  };
}

function collapseIconBox(theme, ownerState) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const { active, transparentSidenav, color } = ownerState;

  const { white, info, light, gradients } = palette;
  const { md } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem } = functions;

  return {
    background: () => {
      if (active) {
        return color === "default" ? info.main : palette[color].main;
      }

      return light.main;
    },
    minWidth: pxToRem(32),
    minHeight: pxToRem(32),
    borderRadius: borderRadius.md,
    display: "grid",
    placeItems: "center",
    // boxShadow: md,
    transition: transitions.create("margin", {
      easing: transitions.easing.easeInOut,
      duration: transitions.duration.standard,
    }),

    [breakpoints.up("xl")]: {
      background: () => {
        let background;

        if (!active) {
          background = transparentSidenav ? white.main : light.main;
        } else if (color === "default") {
          background = info.main;
        } else if (color === "warning") {
          background = gradients.warning.main;
        } else {
          background = palette[color].main;
        }

        return background;
      },
    },

    "& svg, svg g": {
      fill: active ? white.main : gradients.dark.state,
    },
  };
}

const collapseIcon = ({ palette: { white, gradients } }, { active }) => ({
  color: active ? white.main : gradients.dark.state,
});

function collapseText(theme, ownerState) {
  const { typography, transitions, breakpoints, functions } = theme;
  const { miniSidenav, transparentSidenav, active } = ownerState;

  const { size, fontWeightMedium, fontWeightRegular } = typography;
  const { pxToRem } = functions;

  return {
    marginLeft: pxToRem(12.8),

    [breakpoints.up("xl")]: {
      opacity: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : 1,
      maxWidth: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : "100%",
      marginLeft: miniSidenav || (miniSidenav && transparentSidenav) ? 0 : pxToRem(12.8),
      transition: transitions.create(["opacity", "margin"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& span": {
      fontWeight: active ? fontWeightMedium : fontWeightRegular,
      fontSize: size.sm,
      lineHeight: 0,
    },
  };
}

export { collapseItem, collapseIconBox, collapseIcon, collapseText };
