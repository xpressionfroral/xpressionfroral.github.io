document.addEventListener("DOMContentLoaded", () => {
  var productId = (typeof window.PRODUCT_ID === "number") ? window.PRODUCT_ID : parseInt(new URLSearchParams(window.location.search).get("id"));

  if (isNaN(productId) || productId < 0 || productId >= products.length) {
    // If not found, redirect to index
    window.location.href = "index.html";
    return;
  }

  const product = products[productId];

  // Update Page Title
  document.title = `${product.name} | Xpression`;

  // Populate info
  document.querySelector("#detail-name").textContent = product.name;
  document.querySelector("#detail-category").textContent = product.category === 'romanticos' ? 'Románticos' : (product.category === 'cumpleanos' ? 'Cumpleaños' : 'Especiales');
  document.querySelector("#detail-description").textContent = product.description;
  document.querySelector("#detail-price").textContent = money(product.price);
  
  const buyBtn = document.querySelector("#detail-buy-btn");
  buyBtn.href = whatsappLink(product);
  
  const floatingWsp = document.querySelector("#floating-wsp");
  floatingWsp.href = whatsappLink("información sobre sus arreglos florales");

  // Images
  const mainImage = document.querySelector("#detail-main-image");
  const thumbnailsContainer = document.querySelector("#detail-thumbnails");

  if (product.images && product.images.length > 0) {
    mainImage.src = product.images[0];

    if (product.images.length > 1) {
      product.images.forEach((imgSrc, index) => {
        const thumb = document.createElement("img");
        thumb.src = imgSrc;
        thumb.className = "thumbnail" + (index === 0 ? " active" : "");
        thumb.alt = `Miniatura ${index + 1}`;
        thumb.addEventListener("click", () => {
          mainImage.src = imgSrc;
          document.querySelectorAll(".thumbnail").forEach(t => t.classList.remove("active"));
          thumb.classList.add("active");
        });
        thumbnailsContainer.appendChild(thumb);
      });
    } else {
      thumbnailsContainer.style.display = "none";
    }
  }

  // Render Recommended Products
  renderRecommended(productId);
});

function renderRecommended(currentId) {
  const grid = document.querySelector("#recommended-grid");
  if (!grid) return;

  // Pick 3 random products that are not the current one
  const others = products.map((p, index) => ({ p, index })).filter(item => item.index !== currentId);
  others.sort(() => 0.5 - Math.random());
  const recommended = others.slice(0, 3);

  grid.innerHTML = "";
  recommended.forEach((item) => {
    const product = item.p;
    const card = document.createElement("article");
    card.className = "product-card";
    card.tabIndex = 0;
    card.setAttribute("aria-label", `Ver ${product.name}`);
    card.innerHTML = `
      <div class="product-image">
        <span class="product-badge">${product.badge}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-bottom">
          <span class="product-price">${money(product.price)}</span>
          <span class="product-open" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>`;
    
    const imgEl = card.querySelector(".product-image");
    if (product.images && product.images.length > 0) {
      imgEl.style.backgroundImage = `url("${product.images[0]}")`;
      imgEl.style.backgroundSize = "cover";
      imgEl.style.backgroundPosition = "center";
    }

    card.addEventListener("click", () => {
      window.location.href = `product-${item.index}.html`;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = `product-${item.index}.html`;
      }
    });
    grid.appendChild(card);
  });
}

// Mobile Menu logic
const menu = document.querySelector("#mobile-menu");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const backdrop = document.querySelector(".menu-backdrop");

function setMenu(open) {
  if(!menu) return;
  menu.classList.toggle("open", open);
  menu.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  backdrop.hidden = !open;
  document.body.classList.toggle("menu-open", open);
}

if (menuToggle) menuToggle.addEventListener("click", () => setMenu(true));
if (menuClose) menuClose.addEventListener("click", () => setMenu(false));
if (backdrop) backdrop.addEventListener("click", () => setMenu(false));
if (menu) menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu && menu.classList.contains("open")) setMenu(false);
});
