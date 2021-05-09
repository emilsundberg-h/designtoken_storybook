import React from "react";
import Breakpoints from "./Breakpoints";

export default {
  title: "DesignTokens",
  component: Breakpoints,
  args: {
    children: "Breakpoints",
  },
};

export const breakpoints = () => <Breakpoints>Breakpoints</Breakpoints>;
