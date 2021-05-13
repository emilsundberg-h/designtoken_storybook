import React from "react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  ariaLabel: "Nothing happens when you click this button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  ariaLabel: "Nothing happens when you click this button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
  primary: true,
  ariaLabel: "Nothing happens when you click this button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
  ariaLabel: "Nothing happens when you click this button",
};

export const Inaccessible = Template.bind({});
Inaccessible.args = {
  primary: false,
  backgroundColor: "#0a47c2",
  color: "#ffffff",
  label: "Inaccessible button",
  ariaLabel: "Nothing happens when you click this button",
};
export const Deuteranopia = Template.bind({});
Deuteranopia.args = {
  primary: false,
  backgroundColor: "#fe2712",
  color: "#66b032",
  label: "Deuteranopia button",
  ariaLabel: "Nothing happens when you click this button",
};
