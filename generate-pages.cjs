// generate-pages.cjs
// Run: node generate-pages.cjs
// Generates product-0.html, product-1.html, etc. with hardcoded OG tags.

const fs = require("fs");
const path = require("path");

// Read data.js and extract products
const dataJs = fs.readFileSync(path.join(__dirname, "js", "data.js"), "utf-8");
const fixedJs = dataJs.replace(/\bconst\b/g, "var").replace(/\blet\b/g, "var");
eval(fixedJs);

const SITE = "https://xpressionfroral.github.io/";

products.forEach((product, index) => {
  const name = product.name || "Arreglo Floral";
  const desc = (product.description && product.description !== "Consultar")
    ? product.description
    : "Arreglo floral de Xpression Floral. Consulta disponibilidad y precio.";
  const imageUrl = (product.images && product.images[0])
    ? SITE + product.images[0]
    : SITE + "assets/portada.jpeg";
  const pageUrl = SITE + "product-" + index + ".html";
  const targetUrl = SITE + "product.html?id=" + index;
  const priceText = (product.price > 0)
    ? " - " + new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(product.price)
    : "";
  const ogTitle = name + priceText + " | Xpression Floral";

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta property="og:type" content="website">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:url" content="${pageUrl}">
  <meta http-equiv="refresh" content="0; url=product.html?id=${index}">
  <script>window.location.replace("product.html?id=${index}");</script>
</head>
<body>
  <script>window.location.replace("product.html?id=${index}");</script>
</body>
</html>`;

  const filename = "product-" + index + ".html";
  fs.writeFileSync(path.join(__dirname, filename), html, "utf-8");
  console.log("Created redirect page: " + filename);
});

console.log("\nDone! Generated " + products.length + " minimal redirect pages.");
