import { getTokens, rgbaGenObject, fullColorHex } from "../utils";

const getColors = (layerName, stylesArtboard) => {
  const palette = { sl_color: {} };
  const decorator = (element) => {
    const { name } = element;
    const { r, g, b, a } = element.children[0].fills[0].color;
    const colorRGBA = rgbaGenObject(r, g, b, a);
    const tokens = {
      [name]: {
        value: `${fullColorHex(colorRGBA.r, colorRGBA.g, colorRGBA.b)}`,
      },
    };
    Object.assign(palette.sl_color, tokens);
  };

  return getTokens(layerName, stylesArtboard, palette, decorator);
};

export default getColors;
