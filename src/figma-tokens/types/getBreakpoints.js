import { getTokens, camelCase } from "../utils";

const getBreakpoints = (layerName, stylesArtboard) => {
  const palette = { sl_breakpoint: {} };
  const decorator = (element) => {
    const { name, absoluteBoundingBox } = element;
    const tokens = {
      [camelCase(name)]: { value: `${absoluteBoundingBox.width}px` },
    };
    Object.assign(palette.sl_breakpoint, tokens);
  };

  return getTokens(layerName, stylesArtboard, palette, decorator);
};

export default getBreakpoints;
