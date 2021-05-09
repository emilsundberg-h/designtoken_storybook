import { getTokens, camelCase, genElevation } from "../utils";

const getElevation = (layerName, stylesArtboard) => {
  const palette = { sl_elevation: {} };
  const decorator = (element) => {
    const { name } = element;
    const { color, offset, radius } = element.effects[0];
    const tokens = {
      [camelCase(name)]: { value: genElevation(color, offset, radius) },
    };
    Object.assign(palette.sl_elevation, tokens);
  };

  return getTokens(layerName, stylesArtboard, palette, decorator);
};

export default getElevation;
