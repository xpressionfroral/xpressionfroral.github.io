const WHATSAPP_NUMBER = "573106009069"; // Assuming this is correct from screenshots (+57 310 6009069)

const products = [
  { name: "Arreglo 48 rosas", price: 170000, category: "romanticos", badge: "Personalizado", description: "48 rosas, Gypso, Espejo personalizado, Tarjeta, Moño", images: ["assets/img1.jpeg", "assets/img1-2.jpeg"] },
  { name: "Arreglo 48 rosas", price: 155000, category: "romanticos", badge: "Clásico", description: "48 rosas, Gypso, Mariposas, Cinta tarjeta", images: ["assets/img2.jpeg"] },
  { name: "Arreglo 48 rosas", price: 175000, category: "cumpleanos", badge: "Coquette", description: "48 rosas, 3 girasoles, Gypso, Tarjeta, Mariposas, Moño coquette", images: ["assets/img3.jpeg"] },
  { name: "Arreglo 72 rosas", price: 190000, category: "romanticos", badge: "Gigante", description: "72 rosas, Gypso, Moño tarjeta", images: ["assets/img4.jpeg", "assets/img4-2.jpeg"] },
  { name: "Arreglo 48 rosas", price: 185000, category: "cumpleanos", badge: "Colorido", description: "48 rosas, 6 gerberas, Gypso, Tarjeta, Mariposas, Moño", images: ["assets/img5.jpeg"] },
  { name: "Arreglo 24 rosas", price: 120000, category: "romanticos", badge: "Personalizado", description: "24 rosas, Gypso, Espejo personalizado, Mariposas, Tarjeta, Cintas", images: ["assets/img6.jpeg", "assets/img6-2.jpeg"] },
  { name: "Arreglo 24 rosas", price: 120000, category: "romanticos", badge: "Personalizado", description: "24 rosas, Gypso, Espejo personalizado, Cinta, Mariposas, Tarjeta", images: ["assets/img7.jpeg"] },
  { name: "Arreglo 48 rosas", price: 200000, category: "cumpleanos", badge: "Globos", description: "48 rosas, Gypso, Fotos, Moño, 4 globos en helio, Tarjeta", images: ["assets/img8.jpeg"] },
  { name: "Arreglo 48 rosas", price: 200000, category: "romanticos", badge: "Premium", description: "48 rosas, 4 lirios, Gypso, Mariposas, Tarjeta, Peluches", images: ["assets/img9.jpeg"] },
  { name: "Arreglo 48 rosas", price: 180000, category: "romanticos", badge: "Detalle", description: "48 rosas, Gypso, Tarjeta, Mariposas, Llavero", images: ["assets/img10 .jpeg"] },
  { name: "Cilindro tradicional", price: 110000, category: "romanticos", badge: "Popular", description: "Cilindro tradicional, Con mariposas, Tarjeta", images: ["assets/img11.jpeg"] },
  { name: "Corazón grande marcado", price: 190000, category: "especiales", badge: "Personalizado", description: "Corazón grande marcado, 24 rosas, Margaritas, Peluche, Ferrero Rocher de corazón, Mariposas, Tarjeta, Globo burbuja personalizado, 4 globos en helio", images: ["assets/img12.jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "especiales", badge: "Consultar Precio", description: "Consultar", images: ["assets/img13.jpeg"] },
  { name: "Arreglo 48 rosas", price: 180000, category: "romanticos", badge: "Detalle", description: "48 rosas, Gypso, Tarjeta, Mariposas, Llavero", images: ["assets/img14.jpeg"] },
  { name: "Arreglo de grado", price: 180000, category: "especiales", badge: "Grados", description: "48 te, Gerberas, Gypso, Tarjeta, Mariposas, Birrete", images: ["assets/img15.jpeg"] },
  { name: "Arreglo 48 rosas", price: 155000, category: "romanticos", badge: "Clásico", description: "48 rosas, Gypso, Tarjeta, Cinta, Mariposas", images: ["assets/img16.jpeg"] },
  { name: "Arreglo 48 rosas", price: 210000, category: "romanticos", badge: "Peluche", description: "48 rosas, Gypso, 3 girasoles, Mariposas, Cinta, Tarjeta, Peluche", images: ["assets/img17.jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.04.53 PM (1).jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.04.53 PM.jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "especiales", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.43 PM (1).jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "especiales", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.43 PM.jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "cumpleanos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.44 PM (1).jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "cumpleanos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.44 PM (2).jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "cumpleanos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.44 PM (3).jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.07.44 PM.jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 1.30.43 PM.jpeg"] },
  { name: "Arreglo Floral", price: 0, category: "especiales", badge: "Consultar Precio", description: "Consultar", images: ["assets/WhatsApp Image 2026-06-12 at 3.57.43 PM.jpeg"] }
];

function money(value) {
  if (value === 0) return "Consultar Precio";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
}

function whatsappLink(productOrName) {
  let message;
  if (typeof productOrName === 'string') {
    message = `Hola, quiero información para pedir ${productOrName}. ¿Me ayudan con disponibilidad y entrega?`;
  } else {
    message = `Hola, quiero pedir el arreglo: ${productOrName.name} (${productOrName.description}). `;
    if (productOrName.price > 0) {
      message += `Vi que tiene un precio de ${money(productOrName.price)}. `;
    }
    message += `¿Me ayudan con disponibilidad y entrega?`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
