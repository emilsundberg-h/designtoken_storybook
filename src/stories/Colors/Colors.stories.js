import React from "react";
import Colors from "./Colors";

export default {
  title: "DesignTokens",
  component: Colors,
  args: {
    children: "Colors",
  },
};

export const colors = () => <Colors />;
