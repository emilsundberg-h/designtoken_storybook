import { getTokens } from "../utils";

const getTypography = (layerName, stylesArtboard) => {
  const palette = { typography: {} };
  const decorator = (element) => {
    const { name } = element;
    const {
      fontFamily,
      fontSize,
      lineHeightPx,
      fontWeight,
    } = element.children[0].style;

    const tokens = {
      [name]: {
        font: {
          value: ` ${fontWeight} ${fontSize}px/${Math.floor(
            lineHeightPx
          )}px '${fontFamily}'`,
        },
        fontFamily: {
          value: ` '${fontFamily}'`,
        },
        fontSize: { value: `${fontSize}px` },
        lineHeight: { value: `${Math.floor(lineHeightPx)}px` },
        fontWeight: { value: fontWeight },
      },
    };
    Object.assign(palette.typography, tokens);
  };

  return getTokens(layerName, stylesArtboard, palette, decorator);
};

export default getTypography;
