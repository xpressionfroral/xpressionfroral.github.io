

const grid = document.querySelector("#product-grid");
const emptyState = document.querySelector("#empty-state");
const search = document.querySelector("#search");
const filters = [...document.querySelectorAll(".filter")];
const modal = document.querySelector("#product-modal");

let activeFilter = "todos";

function setProductImage(element, product) {
  if (product.images && product.images.length > 0) {
    element.style.backgroundImage = `url("${product.images[0]}")`;
    element.style.backgroundSize = "cover";
    element.style.backgroundPosition = "center";
  }
}

function openProduct(index) {
  const product = products[index];
  document.querySelector("#modal-name").textContent = product.name;
  document.querySelector("#modal-description").textContent = product.description;
  document.querySelector("#modal-price").textContent = money(product.price);
  document.querySelector("#modal-buy").href = whatsappLink(product);
  
  const gallery = document.querySelector("#modal-gallery");
  gallery.innerHTML = "";
  if (product.images) {
    product.images.forEach(imgSrc => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = product.name;
      img.loading = "lazy";
      gallery.appendChild(img);
    });
  }
  modal.showModal();
}

function renderProducts() {
  const term = search ? search.value.trim().toLocaleLowerCase("es") : "";
  const visible = products.filter((product) => {
    const matchesFilter = activeFilter === "todos" || product.category === activeFilter;
    const matchesSearch = term === "" || `${product.name} ${product.description}`.toLocaleLowerCase("es").includes(term);
    return matchesFilter && matchesSearch;
  });

  grid.innerHTML = "";
  visible.forEach((product) => {
    const originalIndex = products.indexOf(product);
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
    setProductImage(card.querySelector(".product-image"), product);
    card.addEventListener("click", () => {
      window.location.href = `product-${originalIndex}.html`;
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = `product-${originalIndex}.html`;
      }
    });
    grid.appendChild(card);
  });
  emptyState.hidden = visible.length !== 0;
}

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    activeFilter = filter.dataset.filter;
    renderProducts();
  });
});
if (search) search.addEventListener("input", renderProducts);

document.querySelectorAll("[data-product]").forEach((link) => {
  link.href = whatsappLink(link.dataset.product);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menu = document.querySelector("#mobile-menu");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const backdrop = document.querySelector(".menu-backdrop");

function setMenu(open) {
  menu.classList.toggle("open", open);
  menu.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  backdrop.hidden = !open;
  document.body.classList.toggle("menu-open", open);
}

menuToggle.addEventListener("click", () => setMenu(true));
menuClose.addEventListener("click", () => setMenu(false));
backdrop.addEventListener("click", () => setMenu(false));
menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

modal.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.classList.contains("open")) setMenu(false);
});

renderProducts();
