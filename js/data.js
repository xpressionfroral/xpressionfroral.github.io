const WHATSAPP_NUMBER = "573106009069"; // Assuming this is correct from screenshots (+57 310 6009069)

const products = [
  { name: "Caja Espejo Amor Real", price: 170000, category: "romanticos", badge: "Personalizado", description: "48 rosas, Gypso, Espejo personalizado, Tarjeta, Moño", images: ["assets/img1.jpeg", "assets/img1-2.jpeg"] },
  { name: "Encanto de Mariposas", price: 155000, category: "romanticos", badge: "Clásico", description: "48 rosas, Gypso, Mariposas, Cinta tarjeta", images: ["assets/img2.jpeg"] },
  { name: "Sueño Coquette & Girasoles", price: 175000, category: "cumpleanos", badge: "Coquette", description: "48 rosas, 3 girasoles, Gypso, Tarjeta, Mariposas, Moño coquette", images: ["assets/img3.jpeg"] },
  { name: "Majestuoso Amor 72 Rosas", price: 190000, category: "romanticos", badge: "Gigante", description: "72 rosas, Gypso, Moño tarjeta", images: ["assets/img4.jpeg", "assets/img4-2.jpeg"] },
  { name: "Explosión Primavera", price: 185000, category: "cumpleanos", badge: "Colorido", description: "48 rosas, 6 gerberas, Gypso, Tarjeta, Mariposas, Moño", images: ["assets/img5.jpeg"] },
  { name: "Reflejo de Amor & Mariposas", price: 120000, category: "romanticos", badge: "Personalizado", description: "24 rosas, Gypso, Espejo personalizado, Mariposas, Tarjeta, Cintas", images: ["assets/img6.jpeg", "assets/img6-2.jpeg"] },
  { name: "Detalle Espejo Enamorado", price: 120000, category: "romanticos", badge: "Personalizado", description: "24 rosas, Gypso, Espejo personalizado, Cinta, Mariposas, Tarjeta", images: ["assets/img7.jpeg"] },
  { name: "Momentos Inolvidables con Globos", price: 200000, category: "cumpleanos", badge: "Globos", description: "48 rosas, Gypso, Fotos, Moño, 4 globos en helio, Tarjeta", images: ["assets/img8.jpeg"] },
  { name: "Jardín Imperial con Lirios", price: 200000, category: "romanticos", badge: "Premium", description: "48 rosas, 4 lirios, Gypso, Mariposas, Tarjeta, Peluches", images: ["assets/img9.jpeg"] },
  { name: "Cariño Eterno con Llavero", price: 180000, category: "romanticos", badge: "Detalle", description: "48 rosas, Gypso, Tarjeta, Mariposas, Llavero", images: ["assets/img10.jpeg"] },
  { name: "Cilindro Mágico Mariposa", price: 110000, category: "romanticos", badge: "Popular", description: "Cilindro tradicional, Con mariposas, Tarjeta", images: ["assets/img11.jpeg"] },
  { name: "Gran Corazón de Amor Supremo", price: 190000, category: "especiales", badge: "Personalizado", description: "Corazón grande marcado, 24 rosas, Margaritas, Peluche, Ferrero Rocher de corazón, Mariposas, Tarjeta, Globo burbuja personalizado, 4 globos en helio", images: ["assets/img12.jpeg"] },
  { name: "Sorpresa Floral de Ensueño", price: 0, category: "especiales", badge: "Consultar Precio", description: "Consultar", images: ["assets/img13.jpeg"] },
  { name: "Destello Dulce de Rosas", price: 180000, category: "romanticos", badge: "Detalle", description: "48 rosas, Gypso, Tarjeta, Mariposas, Llavero", images: ["assets/img14.jpeg"] },
  { name: "Gran Triunfo de Graduación", price: 180000, category: "especiales", badge: "Grados", description: "48 te, Gerberas, Gypso, Tarjeta, Mariposas, Birrete", images: ["assets/img15.jpeg"] },
  { name: "Sinfonía Clásica de Rosas", price: 155000, category: "romanticos", badge: "Clásico", description: "48 rosas, Gypso, Tarjeta, Cinta, Mariposas", images: ["assets/img16.jpeg"] },
  { name: "Abrazo de Sol & Peluche", price: 210000, category: "romanticos", badge: "Peluche", description: "48 rosas, Gypso, 3 girasoles, Mariposas, Cinta, Tarjeta, Peluche", images: ["assets/img17.jpeg"] },
  { name: "Brisa Romántica", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.04.53 PM (1).jpeg"] },
  { name: "Pasión & Ternura", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.04.53 PM.jpeg"] },
  { name: "Secretos del Corazón", price: 0, category: "especiales", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.43 PM (1).jpeg"] },
  { name: "Sueños en Flor", price: 0, category: "especiales", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.43 PM.jpeg"] },
  { name: "Sonrisa Radiante", price: 0, category: "cumpleanos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.44 PM (1).jpeg"] },
  { name: "Día Inolvidable", price: 0, category: "cumpleanos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.44 PM (2).jpeg"] },
  { name: "Fiesta de Alegría", price: 0, category: "cumpleanos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.44 PM (3).jpeg"] },
  { name: "Jardín del Enamorado", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.44 PM.jpeg"] },
  { name: "Latidos de Rosas", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.30.43 PM.jpeg"] },
  { name: "Elegancia Suprema", price: 0, category: "especiales", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 3.57.43 PM.jpeg"] },
  { name: "Grado de Honor 24 Rosas", price: 115000, category: "especiales", badge: "Grados", description: "24 rosas, Girasol, Solidaster, Birrete, Pergamino, Cinta", images: ["assets/img18.jpeg"] },
  { name: "Magia de Graduación 72 Rosas", price: 190000, category: "especiales", badge: "Grados", description: "72 rosas, Birrete, Pergamino, Cinta personalizada, Moño", images: ["assets/img19.jpeg"] },
  { name: "Éxito & Felicidad 18 Rosas", price: 115000, category: "especiales", badge: "Grados", description: "18 rosas, Gypso, Birrete, Pergamino, Mariposas, Vinilo, Cinta", images: ["assets/img20.jpeg"] },
  { name: "Corazón de Princesa con Globos", price: 190000, category: "especiales", badge: "Personalizado", description: "Corazón mediano marcado, 24 rosas, Margaritas, Peluche, Ferrero Rocher de corazón, Mariposas, Tarjeta, Globo burbuja personalizado, 4 globos en helio", images: ["assets/img21.jpeg"] }
];

function money(value) {
  if (value === 0) return "Consultar Precio";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
}

const SITE_URL = "https://xpressionfroral.github.io/";

function whatsappLink(productOrName) {
  var parts = [];
  if (productOrName && typeof productOrName === "object") {
    var name = productOrName.name || "Arreglo Floral";
    var desc = productOrName.description || "";
    // Usamos el link a product-X.html para que WhatsApp
    // genere la vista previa con foto (via Open Graph tags).
    var productIndex = products.indexOf(productOrName);
    var productPageUrl = (productIndex >= 0) ? SITE_URL + "product-" + productIndex + ".html" : "";

    parts.push("Hola, me interesa este arreglo:");
    parts.push("");
    parts.push("Producto: " + name);
    if (desc && desc !== "Consultar") {
      parts.push("Incluye: " + desc);
    }
    if (productOrName.price > 0) {
      parts.push("Precio: " + money(productOrName.price));
    }
    if (productPageUrl) {
      parts.push("");
      parts.push("Ver arreglo: " + productPageUrl);
    }
    parts.push("");
    parts.push("Me ayudan con disponibilidad y entrega? Gracias!");
  } else if (typeof productOrName === "string") {
    parts.push("Hola, quiero informacion sobre " + productOrName + ". Me ayudan con disponibilidad y entrega?");
  } else {
    parts.push("Hola, quiero informacion sobre sus arreglos florales. Me ayudan?");
  }
  var text = parts.join("\n");
  return "https://api.whatsapp.com/send?phone=" + WHATSAPP_NUMBER + "&text=" + encodeURIComponent(text);
}