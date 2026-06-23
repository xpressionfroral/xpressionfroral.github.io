// generate-pages.cjs
// Run: node generate-pages.cjs
// Generates product-0.html, product-1.html, etc. with hardcoded OG tags.

const fs = require("fs");
const path = require("path");

// Read data.js and extract products
const dataJs = fs.readFileSync(path.join(__dirname, "js", "data.js"), "utf-8");
// Replace const/let with var so eval works in this scope
const fixedJs = dataJs.replace(/\bconst\b/g, "var").replace(/\blet\b/g, "var");
eval(fixedJs);

const SITE = "https://xpressionfroral.github.io/";

// Read the template (product.html)
const template = fs.readFileSync(path.join(__dirname, "product.html"), "utf-8");

products.forEach((product, index) => {
  const name = product.name || "Arreglo Floral";
  const desc = (product.description && product.description !== "Consultar")
    ? product.description
    : "Arreglo floral de Xpression Floral. Consulta disponibilidad y precio.";
  const imageUrl = (product.images && product.images[0])
    ? SITE + product.images[0]
    : SITE + "assets/portada.jpeg";
  const pageUrl = SITE + "product-" + index + ".html";
  const priceText = (product.price > 0)
    ? " - " + new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(product.price)
    : "";
  const ogTitle = name + priceText + " | Xpression Floral";

  // Build the new HTML by replacing OG tags and injecting PRODUCT_ID
  let html = template;

  // Replace OG title
  html = html.replace(
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${ogTitle.replace(/"/g, '&quot;')}">`
  );
  // Replace OG description
  html = html.replace(
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${desc.replace(/"/g, '&quot;')}">`
  );
  // Replace OG image
  html = html.replace(
    /<meta property="og:image" id="og-image"[^>]*>/,
    `<meta property="og:image" content="${imageUrl}">`
  );
  // Replace OG url
  html = html.replace(
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${pageUrl}">`
  );
  // Replace page title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${ogTitle.replace(/</g, '&lt;')}</title>`
  );

  // Remove the inline OG-injection script (not needed in static pages)
  html = html.replace(/<script>\s*\/\/ Inyectar Open Graph[\s\S]*?\(\)\);\s*<\/script>/, "");

  // Inject PRODUCT_ID before product.js so it knows which product to load
  html = html.replace(
    '<script src="js/product.js" defer></script>',
    `<script>window.PRODUCT_ID = ${index};</script>\n  <script src="js/product.js" defer></script>`
  );

  const filename = "product-" + index + ".html";
  fs.writeFileSync(path.join(__dirname, filename), html, "utf-8");
  console.log("Created: " + filename + " -> " + name);
});

console.log("\nDone! Generated " + products.length + " product pages.");
