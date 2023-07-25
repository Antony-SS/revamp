// SlideRoute.js
import React from "react";
import { Route, useLocation } from "react-router-dom";
import SlideTransition from "./SlideTransition";

const SlideRoute = ({ path, element: Element, color }) => {
  const location = useLocation();

  return (
    <SlideTransition show={location.pathname === path} color={color}>
      <Route path={path} element={Element} />
    </SlideTransition>
  );
};

export default SlideRoute;