import { createServer } from "vite";
import { renderToString } from "react-dom/server";
import React from "react";
import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const outputPath = path.join(projectRoot, "dist", "public", "index.html");
const vite = await createServer({
  configFile: path.join(projectRoot, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.tsx");
  const markup = renderToString(React.createElement(App));
  const html = await fs.readFile(outputPath, "utf8");
  const emptyRoot = '<div id="root"></div>';
  if (!html.includes(emptyRoot)) {
    throw new Error("Could not find the empty React root in the built index.html.");
  }
  await fs.writeFile(outputPath, html.replace(emptyRoot, `<div id="root">${markup}</div>`));
  console.log("Prerendered the portfolio into dist/public/index.html");
} finally {
  await vite.close();
}
