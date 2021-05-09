import React from "react";
import Elevation from "./Elevation";

export default {
  title: "DesignTokens",
  component: Elevation,
  args: {
    children: "Elevation",
  },
};

export const elevation = () => <Elevation>Shadows</Elevation>;
