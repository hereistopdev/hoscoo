import React, { useEffect, useState } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import useAuth from "store/useAuth";

import PropTypes from "prop-types";
import { fetchUser } from "services/api";

const RouteList = ({ routes }) => {
  const [userid, setUserID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      fetchUser(token)
        .then((response) => {
          console.log("res", response.data.userId);
          setUserID(response.data.userId);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return renderRoutes(route.collapse);
      }

      if (route.route) {
        if (route.protected && !userid) {
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
