import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import useAuth from "store/useAuth";

import PropTypes from "prop-types";

const RouteList = ({ routes }) => {
  const { user } = useAuth();

  const renderRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return renderRoutes(route.collapse);
      }

      if (route.route) {
        if (route.protected && !user) {
          return (
            <Route
              path={route.route}
              element={<Navigate to="/authentication/sign-in" />}
              key={route.key}
            />
          );
        }
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <Routes>
      {renderRoutes(routes)}
      <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
    </Routes>
  );
};

RouteList.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      route: PropTypes.string,
      component: PropTypes.element,
      protected: PropTypes.bool,
      collapse: PropTypes.array,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RouteList;
