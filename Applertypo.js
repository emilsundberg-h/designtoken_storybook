// const { FIGMA_APIKEY, FIGMA_ID } = "../figma.config.json";
const { writeIndex } = require("create-index");
const path = require("path");

const figmaApiExporter = require("figma-api-exporter").default;

const exporter = figmaApiExporter(
  "183589-d31110bf-5de6-40a5-a1cc-85a8432fa216"
);

exporter
  .getSvgs({
    fileId: "XPQmqjdEEZHw3x43p1HND5",
    canvas: "Icons",
  })
  .then(async (svgsData) => {
    await exporter.downloadSvgs({
      saveDirectory: "./src/Icons",
      svgsData: svgsData.svgs,
      lastModified: svgsData.lastModified,
      clearDirectory: true,
    });
    writeIndex([path.join(__dirname, "./src/Icons")], {
      update: true,
      extensions: ["svg"],
    });
  });
