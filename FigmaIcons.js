const figma = require("./figma.config.json");

const { writeIndex } = require("create-index");
const path = require("path");

const figmaApiExporter = require("figma-api-exporter").default;

const exporter = figmaApiExporter(figma.FIGMA_APIKEY);

exporter
  .getSvgs({
    fileId: figma.FIGMA_ID,
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
