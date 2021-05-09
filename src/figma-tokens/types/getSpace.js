import { getTokens, camelCase } from "../utils";

const getSpace = (layerName, stylesArtboard) => {
  const palette = { sl_space: {} };
  const decorator = (element) => {
    const { name, absoluteBoundingBox } = element;
    const tokens = {
      [camelCase(name)]: { value: `${absoluteBoundingBox.width}px` },
    };
    Object.assign(palette.sl_space, tokens);
  };

  return getTokens(layerName, stylesArtboard, palette, decorator);
};

export default getSpace;
