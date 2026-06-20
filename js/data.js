const WHATSAPP_NUMBER = "573106009069"; // Assuming this is correct from screenshots (+57 310 6009069)

const products = [
  { name: "Ramo Cumpleaños Rosado", price: 155000, category: "cumpleanos", badge: "", description: "48 rosas, Gypso, Mariposas, Cinta tarjeta.", images: ["assets/IMG-20260617-WA0000.jpg"] },
  { name: "Corazón Marcado con Peluche", price: 170000, category: "romanticos", badge: "Personalizado", description: "48 rosas, Gypso, Espejo personalizado, Tarjeta, Moño.", images: ["assets/IMG-20260612-WA0004.jpg"] },
  { name: "Corazón de Rosas y Espejo", price: 170000, category: "romanticos", badge: "", description: "48 rosas, Gypso, Espejo personalizado, Tarjeta, Moño.", images: ["assets/IMG-20260612-WA0005.jpg"] },
  { name: "Ramo 48 Rosas y Girasoles", price: 175000, category: "romanticos", badge: "Más Vendido", description: "48 rosas, 3 girasoles, Gypso, Tarjeta, Mariposas, Moño coquette.", images: ["assets/IMG-20260612-WA0006.jpg"] },
  { name: "Domo Clásico 72 Rosas", price: 190000, category: "romanticos", badge: "Gigante", description: "72 rosas, Gypso, Moño tarjeta.", images: ["assets/IMG-20260612-WA0007.jpg"] },
  { name: "Ramo 48 Rosas y Gerberas", price: 185000, category: "cumpleanos", badge: "", description: "48 rosas, 6 gerberas, Gypso, Tarjeta, Mariposas, Moño.", images: ["assets/IMG-20260612-WA0008.jpg"] },
  { name: "Ramo de Grado Especial", price: 190000, category: "especiales", badge: "Grados", description: "48 te, Gerberas, Gypso, Tarjeta, Mariposas, Birrete.", images: ["assets/IMG-20260612-WA0009.jpg"] },
  { name: "Corazón de Rosas", price: 120000, category: "romanticos", badge: "", description: "24 rosas, Gypso, Espejo personalizado, Mariposas, Tarjeta, Cintas.", images: ["assets/IMG-20260612-WA0010.jpg"] },
  { name: "Espejo Redondo con Rosas", price: 120000, category: "romanticos", badge: "Día de la Madre", description: "24 rosas, Gypso, Espejo personalizado, Cinta, Mariposas, Tarjeta.", images: ["assets/IMG-20260612-WA0011.jpg"] },
  { name: "Domo Grande con Globos", price: 200000, category: "romanticos", badge: "", description: "48 rosas, Gypso, Fotos, Moño, 4 globos en helio, Tarjeta.", images: ["assets/IMG-20260612-WA0012.jpg"] },
  { name: "Ramo con Peluche y Lirios", price: 200000, category: "romanticos", badge: "Premium", description: "48 rosas, 4 lirios, Gypso, Mariposas, Tarjeta, Peluches.", images: ["assets/IMG-20260612-WA0013.jpg"] },
  { name: "Ramo 48 Rosas con Llavero", price: 180000, category: "romanticos", badge: "", description: "48 rosas, Gypso, Tarjeta, Mariposas, Llavero.", images: ["assets/IMG-20260612-WA0014.jpg"] },
  { name: "Cilindro Clásico con Mariposas", price: 110000, category: "romanticos", badge: "Popular", description: "Cilindro tradicional, Con mariposas, Tarjeta.", images: ["assets/IMG-20260612-WA0015.jpg"] },
  { name: "Arreglo Globo y Peluche", price: 190000, category: "cumpleanos", badge: "Nuevo", description: "Corazón grande marcado, 24 rosas, Margaritas, Peluche, Ferrero Rocher de corazón, Mariposas, Tarjeta, Globo burbuja personalizado, 4 globos en helio.", images: ["assets/IMG-20260612-WA0017.jpg"] },
  { name: "Ramo Rosas con Diploma", price: 0, category: "especiales", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0018.jpg"] },
  { name: "Ramo 48 Rosas con Gato", price: 180000, category: "romanticos", badge: "", description: "48 rosas, Gypso, Tarjeta, Mariposas, Llavero.", images: ["assets/IMG-20260612-WA0019.jpg"] },
  { name: "Ramo Redondo Espejo Personalizado", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0020.jpg"] },
  { name: "Corazón Espejo Eres Mi Bendición", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0021.jpg"] },
  { name: "Ramo Variado Tonos Pastel", price: 155000, category: "romanticos", badge: "", description: "48 rosas, Gypso, Tarjeta, Cinta, Mariposas.", images: ["assets/IMG-20260612-WA0022.jpg"] },
  { name: "Ramo con Peluche y 3 Girasoles", price: 210000, category: "romanticos", badge: "", description: "48 rosas, Gypso, 3 girasoles, Mariposas, Cinta, Tarjeta, Peluche.", images: ["assets/IMG-20260612-WA0023.jpg"] },
  { name: "Ramo de Grado", price: 190000, category: "especiales", badge: "Grados", description: "48 te, Gerberas, Gypso, Tarjeta, Mariposas, Birrete.", images: ["assets/IMG-20260612-WA0026.jpg"] },
  { name: "Ramo de Grado con Birrete", price: 0, category: "especiales", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0027.jpg"] },
  { name: "Ramo Rosas y Lirios", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0028.jpg"] },
  { name: "Caja Corazón Ferrero", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0029.jpg"] },
  { name: "Caja Corazón Ferrero con Globo", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0031.jpg"] },
  { name: "Ramo con Osito Celeste", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0033.jpg"] },
  { name: "Ramo Lirios Rosa", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0034.jpg"] },
  { name: "Girasol y Rosas Blancas", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0035.jpg"] },
  { name: "Globo Burbuja Happy Birthday", price: 0, category: "cumpleanos", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0040.jpg"] },
  { name: "Ramo Rosas y Peluche Celeste", price: 0, category: "romanticos", badge: "Consultar Precio", description: "Sin descripción", images: ["assets/IMG-20260612-WA0041.jpg"] }
];

function money(value) {
  if (value === 0) return "Consultar Precio";
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(value);
}

function whatsappLink(productName) {
  const message = `Hola, quiero información para pedir ${productName}. ¿Me ayudan con disponibilidad y entrega?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
