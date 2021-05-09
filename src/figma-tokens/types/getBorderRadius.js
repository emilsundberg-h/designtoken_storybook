import { getTokens, camelCase } from "../utils";

const getBorderRadius = (layerName, stylesArtboard) => {
  const palette = { sl_borderRadius: {} };
  const decorator = (element) => {
    const { name } = element;
    const { cornerRadius } = element.children[0];
    const tokens = {
      [camelCase(name)]: { value: `${cornerRadius}px` },
    };
    Object.assign(palette.sl_borderRadius, tokens);
  };

  return getTokens(layerName, stylesArtboard, palette, decorator);
};

export default getBorderRadius;
