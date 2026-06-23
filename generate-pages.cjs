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
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#0d0d0d">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${ogTitle.replace(/"/g, '&quot;')}">
  <meta property="og:description" content="${desc.replace(/"/g, '&quot;')}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="1200">
  <meta property="og:url" content="${pageUrl}">
  <noscript>
    <meta http-equiv="refresh" content="0;url=product.html?id=${index}">
  </noscript>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0d0d0d;
      color: #fff;
      font-family: 'Poppins', sans-serif;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .brand {
      font-family: 'Pacifico', cursive;
      font-size: 2rem;
      margin-bottom: 20px;
      color: #fff;
      text-decoration: none;
    }
    .brand span {
      color: #d4af37;
    }
    .loader {
      width: 40px;
      height: 40px;
      border: 3px solid rgba(212, 175, 55, 0.3);
      border-radius: 50%;
      border-top-color: #d4af37;
      animation: spin 1s ease-in-out infinite;
      margin-bottom: 20px;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    p {
      color: #aaa;
      font-size: 0.9rem;
    }
    a {
      color: #d4af37;
      text-decoration: none;
    }
  </style>
  <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
  <script>
    window.location.replace("product.html?id=${index}");
  </script>
</head>
<body>
</body>
</html>`;

  const filename = "product-" + index + ".html";
  fs.writeFileSync(path.join(__dirname, filename), html, "utf-8");
  console.log("Created redirect page: " + filename);
});

console.log("\nDone! Generated " + products.length + " minimal redirect pages.");
