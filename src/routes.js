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
  All of the routes for the Hoscoo React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Hoscoo React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import ForgetPass from "layouts/authentication/forget-pass";
import Accounts from "layouts/accounts";

// Hoscoo React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import {
  Add,
  AttachMoney,
  AttachMoneyRounded,
  AutoGraph,
  CurrencyExchange,
  DocumentScanner,
  Money,
  Payment,
  TableChartTwoTone,
} from "@mui/icons-material";
import USAFlag from "examples/Icons/Country/USA";
import EUFlag from "examples/Icons/Country/EU";
import UKFlag from "examples/Icons/Country/UK";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Accounts",
    key: "accounts",
    route: "/accounts",
    icon: <CustomerSupport size="12px" />,
    component: <Accounts />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Banks & Cards",
    key: "cards",
    route: "/cards",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Transactions",
    key: "transactions",
    route: "/transactions",
    icon: <TableChartTwoTone size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Payment",
    key: "payment",
    route: "/payment",
    icon: <Payment size="12px" />,
    component: <></>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Invoicing",
    key: "invoicing",
    route: "/invoicing",
    icon: <DocumentScanner size="12px" />,
    component: <></>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Trading",
    key: "trading",
    route: "/trading",
    icon: <CurrencyExchange size="12px" />,
    component: <></>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Reports",
    key: "reports",
    route: "/reports",
    icon: <AutoGraph size="12px" />,
    component: <></>,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Tables",
  //   key: "tables",
  //   route: "/tables",
  //   icon: <Office size="12px" />,
  //   component: <Tables />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Billing",
  //   key: "billing",
  //   route: "/billing",
  //   icon: <CreditCard size="12px" />,
  //   component: <Billing />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Virtual Reality",
  //   key: "virtual-reality",
  //   route: "/virtual-reality",
  //   icon: <Cube size="12px" />,
  //   component: <VirtualReality />,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   route: "/rtl",
  //   icon: <Settings size="12px" />,
  //   component: <RTL />,
  //   noCollapse: true,
  // },
  { type: "title", title: "Balances", key: "balances" },
  {
    type: "collapse",
    name: "1000.000 USD",
    key: "usd",
    route: "/usd",
    icon: <USAFlag size="24px" />,
    component: <Profile />,
    noCollapse: true,
    noback: true,
  },
  {
    type: "collapse",
    name: "314.200 EUR",
    key: "euro",
    route: "/euro",
    icon: <EUFlag size="24px" />,
    component: <Profile />,
    noback: true,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "113.200 GBP",
    key: "gbp",
    route: "/gbp",
    icon: <UKFlag size="24px" />,
    component: <Profile />,
    noback: true,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Open a balance",
    key: "openbalance",
    route: "/openbalance",
    icon: <Add size="12px" />,
    component: <></>,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <></>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Forget Password",
    key: "forget-pass",
    route: "/authentication/forget-pass",
    icon: <Document size="12px" />,
    component: <ForgetPass />,
    noCollapse: true,
  },
];

export default routes;
