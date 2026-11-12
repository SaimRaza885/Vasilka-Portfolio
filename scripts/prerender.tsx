import { createServer } from "vite";
import { renderToString } from "react-dom/server";
import React from "react";
import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const outputRoot = path.join(projectRoot, "dist", "public");
const vite = await createServer({
  configFile: path.join(projectRoot, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
});

function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

try {
  const { default: App } = await vite.ssrLoadModule("/src/App.tsx");
  const { siteRoutes } = await vite.ssrLoadModule("/src/data/routes.ts");
  const baseHtml = await fs.readFile(path.join(outputRoot, "index.html"), "utf8");

  for (const route of siteRoutes) {
    (globalThis as typeof globalThis & { __PORTFOLIO_RENDER_PATH__?: string }).__PORTFOLIO_RENDER_PATH__ = route.path;
    const markup = renderToString(React.createElement(App));
    const safeTitle = escapeHtml(route.title);
    const safeDescription = escapeHtml(route.description);
    let html = baseHtml.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`);
    html = html.replace(/(<meta name="description" content=")[^"]*("\s*\/>)/, `$1${safeDescription}$2`);
    html = html.replace(/(<meta property="og:title" content=")[^"]*("\s*\/>)/, `$1${safeTitle}$2`);
    html = html.replace(/(<meta property="og:description" content=")[^"]*("\s*\/>)/, `$1${safeDescription}$2`);
    html = html.replace(/(<meta name="twitter:title" content=")[^"]*("\s*\/>)/, `$1${safeTitle}$2`);
    html = html.replace(/(<meta name="twitter:description" content=")[^"]*("\s*\/>)/, `$1${safeDescription}$2`);

    if (route.path === "/") {
      html = html.replace("</head>", '<link rel="preload" as="image" href="/image-1.webp" fetchpriority="high" />\n  </head>');
      await fs.writeFile(path.join(outputRoot, "index.html"), html);
    } else {
      const routeDirectory = path.join(outputRoot, route.path.replace(/^\//, ""));
      await fs.mkdir(routeDirectory, { recursive: true });
      await fs.writeFile(path.join(routeDirectory, "index.html"), html);
    }
  }

  delete (globalThis as typeof globalThis & { __PORTFOLIO_RENDER_PATH__?: string }).__PORTFOLIO_RENDER_PATH__;
  console.log(`Prerendered ${siteRoutes.length} portfolio routes into dist/public.`);
} finally {
  await vite.close();
}
