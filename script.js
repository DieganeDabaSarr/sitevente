'use strict';

// ===== DONNÉES PRODUITS =====
const PRODUCTS_DATA = [
  { id:1, title:"Chanel N°5 Eau de Parfum", price:89.99, description:"Le parfum mythique de Chanel. Une fragrance florale aldéhydée intemporelle, élégante et inoubliable. Notes de jasmin et rose.", category:"Parfums", image:"https://images.unsplash.com/photo-1541643600914-78b084683702?w=400&h=400&fit=crop", rating:{rate:4.8,count:342} },
  { id:2, title:"Dior Sauvage Eau de Toilette", price:95.00, description:"Un parfum sauvage et noble. Notes de bergamote de Calabre, poivre de Sichuan et ambroxan. La fragrance emblématique Dior.", category:"Parfums", image:"https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop", rating:{rate:4.7,count:518} },
  { id:3, title:"YSL Black Opium Eau de Parfum", price:85.50, description:"Intense et addictif, Black Opium capture l'essence de la nuit. Accord café-vanille envoûtant sur un cœur de fleur blanche.", category:"Parfums", image:"https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop", rating:{rate:4.6,count:289} },
  { id:4, title:"Versace Eros Eau de Toilette", price:72.00, description:"Une ode à la passion grecque. Notes de menthe fraîche, pomme verte et tonka bean pour un homme conquérant.", category:"Parfums", image:"https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop", rating:{rate:4.5,count:201} },
  { id:5, title:"Chemise Oxford Blanche Premium", price:44.99, description:"Chemise Oxford coupe slim, 100% coton égyptien. Col boutonné discret, coutures renforcées. Idéale business ou casual chic.", category:"Vêtements", image:"https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=400&h=400&fit=crop", rating:{rate:4.3,count:156} },
  { id:6, title:"Robe Midi Élégante Noire", price:68.00, description:"Robe midi en crêpe de polyester recyclé. Décolleté V subtil, ceinture amovible, tombé parfait. De la réunion au dîner.", category:"Vêtements", image:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=400&fit=crop", rating:{rate:4.5,count:203} },
  { id:7, title:"Blazer Homme Slim Fit Gris", price:125.00, description:"Blazer coupe slim en laine mélangée. Doublure intérieure satinée, boutons nacre. Parfait pour un look professionnel ou une soirée.", category:"Vêtements", image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop", rating:{rate:4.4,count:178} },
  { id:8, title:"Jean Skinny Premium Noir", price:55.00, description:"Jean skinny taille haute en denim stretch 4 directions. Teinture profonde résistante au lavage. Confort et style au quotidien.", category:"Vêtements", image:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&h=400&fit=crop", rating:{rate:4.2,count:124} },
  { id:9, title:"Sac en Cuir Femme Caramel", price:165.00, description:"Sac à main en cuir véritable pleine fleur. Intérieur doublé, trois compartiments, fermeture dorée. Confectionné à la main.", category:"Accessoires", image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", rating:{rate:4.6,count:267} },
  { id:10, title:"Ceinture Cuir Homme Noire", price:48.00, description:"Ceinture en cuir de veau tannage végétal. Boucle en acier inoxydable poli, largeur 3,5 cm. Finition rivetée artisanale.", category:"Accessoires", image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop", rating:{rate:4.3,count:98} },
  { id:11, title:"Lunettes de Soleil Aviateur Or", price:89.00, description:"Monture aviateur en acier inoxydable doré, verres polarisés UV400. Style intemporel pour homme et femme.", category:"Accessoires", image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", rating:{rate:4.4,count:145} },
  { id:12, title:"Portefeuille Cuir Luxe Bifold", price:65.00, description:"Portefeuille bifold en cuir patiné à la main. 8 emplacements cartes, compartiment billets, fenêtre ID. RFID bloqué.", category:"Accessoires", image:"https://images.unsplash.com/photo-1627123424574-724758594785?w=400&h=400&fit=crop", rating:{rate:4.5,count:189} },
  { id:13, title:"Montre Chronographe Argent", price:345.00, description:"Chronographe automatique, boîtier 42mm en acier 316L. Cadran blanc avec compteurs noirs, bracelet acier maillé. Étanche 100m.", category:"Montres", image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", rating:{rate:4.7,count:312} },
  { id:14, title:"Montre Or Rose Élégante", price:289.00, description:"Montre quartz boîtier 36mm en acier doré rose. Cadran nacre, bracelet milanais réglable. Élégance féminine au quotidien.", category:"Montres", image:"https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&h=400&fit=crop", rating:{rate:4.6,count:241} },
  { id:15, title:"Montre Sport Étanche Noire", price:198.00, description:"Montre sport automatique boîtier 44mm. Lunette céramique unidirectionnelle, bracelet caoutchouc, étanche 200m.", category:"Montres", image:"https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=400&h=400&fit=crop", rating:{rate:4.4,count:178} },
  { id:16, title:"Montre Classique Cuir Brun", price:425.00, description:"Montre mécanique à remontage manuel, boîtier fin 38mm. Cadran argenté squelette, bracelet cuir alligator brun.", category:"Montres", image:"https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400&h=400&fit=crop", rating:{rate:4.8,count:134} },
  { id:17, title:"Chaîne Or Jaune 18K — 50cm", price:255.00, description:"Chaîne maille forçat en or jaune 18 carats. Longueur 50cm, largeur 2mm. Fermoir mousqueton sécurisé. Poinçon d'authenticité gravé.", category:"Chaînes", image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop", rating:{rate:4.7,count:198} },
  { id:18, title:"Collier Diamant Solitaire Or Blanc", price:385.00, description:"Collier solitaire en or blanc 18K serti d'un diamant naturel 0.15ct. Chaîne fine 45cm. Certificat GIA inclus.", category:"Chaînes", image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop", rating:{rate:4.9,count:87} },
  { id:19, title:"Chaîne Homme Acier Inoxydable", price:145.00, description:"Chaîne maille cubaine en acier inoxydable 316L plaqué or. Largeur 6mm, longueur 60cm. Résistante à l'eau, ne ternit pas.", category:"Chaînes", image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop", rating:{rate:4.3,count:215} },
  { id:20, title:"Pendentif Cœur Or Blanc 18K", price:215.00, description:"Pendentif cœur en or blanc 18 carats pavé de diamants. Dimensions 18×16mm. Chaîne fine 42cm incluse. Écrin cadeau fourni.", category:"Chaînes", image:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop", rating:{rate:4.5,count:163} }
];

// ===== STATE =====
let allProducts = [];
let cart = JSON.parse(localStorage.getItem('elegance2-cart')) || [];
let currentProduct = null;

const USD_TO_CFA = 600;
function toCFA(usd) {
  return Math.round(usd * USD_TO_CFA).toLocaleString('fr-FR') + ' FCFA';
}

// ===== DOM ELEMENTS =====
const productsGrid   = document.getElementById('products-grid');
const loader         = document.getElementById('loader');
const errorMsg       = document.getElementById('error-msg');
const emptyState     = document.getElementById('empty-state');
const searchInput    = document.getElementById('search-input');
const searchBtn      = document.getElementById('search-btn');
const categoryFilter = document.getElementById('category-filter');
const sortFilter     = document.getElementById('sort-filter');
const resultsCount   = document.getElementById('results-count');

const cartBtn        = document.getElementById('cart-btn');
const cartCount      = document.getElementById('cart-count');
const cartSidebar    = document.getElementById('cart-sidebar');
const cartOverlay    = document.getElementById('cart-overlay');
const cartClose      = document.getElementById('cart-close');
const cartItems      = document.getElementById('cart-items');
const cartEmpty      = document.getElementById('cart-empty');
const cartFooter     = document.getElementById('cart-footer');
const cartTotal      = document.getElementById('cart-total-price');
const clearCartBtn   = document.getElementById('clear-cart-btn');

const modalOverlay   = document.getElementById('modal-overlay');
const modalClose     = document.getElementById('modal-close');
const modalImg       = document.getElementById('modal-img');
const modalCategory  = document.getElementById('modal-category');
const modalTitle     = document.getElementById('modal-title');
const modalStars     = document.getElementById('modal-stars');
const modalRating    = document.getElementById('modal-rating-count');
const modalPrice     = document.getElementById('modal-price');
const modalDesc      = document.getElementById('modal-description');
const modalAddBtn    = document.getElementById('modal-add-btn');

const darkModeBtn    = document.getElementById('dark-mode-btn');
const moonIcon       = document.getElementById('moon-icon');
const sunIcon        = document.getElementById('sun-icon');
const retryBtn       = document.getElementById('retry-btn');

// ===== FETCH PRODUCTS =====
async function fetchProducts() {
  loader.style.display = 'flex';
  errorMsg.style.display = 'none';
  productsGrid.innerHTML = '';

  await new Promise(resolve => setTimeout(resolve, 600));

  allProducts = PRODUCTS_DATA;
  populateCategories(allProducts);
  renderProducts(allProducts);
}

// ===== POPULATE CATEGORIES =====
function populateCategories(products) {
  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const option = document.createElement('option');
    option.value = cat;
    option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    categoryFilter.appendChild(option);
  });
}

// ===== RENDER PRODUCTS =====
function renderProducts(products) {
  loader.style.display = 'none';
  productsGrid.innerHTML = '';
  emptyState.style.display = 'none';

  resultsCount.textContent = `${products.length} produit${products.length !== 1 ? 's' : ''}`;

  if (products.length === 0) {
    document.getElementById('search-term').textContent = searchInput.value;
    emptyState.style.display = 'block';
    return;
  }

  products.forEach((product, index) => {
    const card = createProductCard(product, index);
    productsGrid.appendChild(card);
  });
}

// ===== CREATE PRODUCT CARD =====
function createProductCard(product, index) {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.style.animationDelay = `${index * 0.05}s`;

  const stars = getStars(product.rating.rate);

  card.innerHTML = `
    <div class="product-img-wrap">
      <img src="${product.image}" alt="${product.title}" loading="lazy" />
    </div>
    <div class="product-body">
      <p class="product-category">${product.category}</p>
      <h3 class="product-title">${product.title}</h3>
      <div class="product-rating">
        <span class="stars">${stars}</span>
        <span>(${product.rating.count})</span>
      </div>
    </div>
    <div class="product-footer">
      <span class="product-price">${toCFA(product.price)}</span>
      <button class="add-btn" data-id="${product.id}">+ Panier</button>
    </div>
  `;

  card.addEventListener('click', (e) => {
    if (!e.target.closest('.add-btn')) openModal(product);
  });

  const addBtn = card.querySelector('.add-btn');
  addBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    addToCart(product);
    addBtn.textContent = 'Ajouté !';
    addBtn.classList.add('added');
    setTimeout(() => {
      addBtn.textContent = '+ Panier';
      addBtn.classList.remove('added');
    }, 1500);
  });

  return card;
}

// ===== STARS HELPER =====
function getStars(rate) {
  const full  = Math.round(rate);
  const empty = 5 - full;
  return '★'.repeat(full) + '☆'.repeat(empty);
}

// ===== FILTER & SORT =====
function getFilteredProducts() {
  let filtered = [...allProducts];

  const query = searchInput.value.trim().toLowerCase();
  if (query) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    );
  }

  const cat = categoryFilter.value;
  if (cat !== 'all') {
    filtered = filtered.filter(p => p.category === cat);
  }

  const sort = sortFilter.value;
  if (sort === 'price-asc')  filtered.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') filtered.sort((a, b) => b.price - a.price);
  if (sort === 'name-asc')   filtered.sort((a, b) => a.title.localeCompare(b.title));

  return filtered;
}

function applyFilters() {
  renderProducts(getFilteredProducts());
}

// ===== CART =====
function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCartUI();
  bumpCount();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) removeFromCart(productId);
  else { saveCart(); updateCartUI(); }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('elegance2-cart', JSON.stringify(cart));
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  cartCount.textContent = totalItems;

  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartEmpty.style.display = 'flex';
    cartFooter.style.display = 'none';
  } else {
    cartEmpty.style.display = 'none';
    cartFooter.style.display = 'flex';
    cartTotal.textContent = toCFA(totalPrice);

    cart.forEach(item => {
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.innerHTML = `
        <img class="cart-item-img" src="${item.image}" alt="${item.title}" />
        <div class="cart-item-info">
          <p class="cart-item-name">${item.title}</p>
          <div class="cart-item-controls">
            <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
            <span class="cart-item-qty">${item.quantity}</span>
            <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
          </div>
        </div>
        <span class="cart-item-price">${toCFA(item.price * item.quantity)}</span>
        <button class="cart-item-remove" data-id="${item.id}" aria-label="Supprimer">✕</button>
      `;

      li.querySelector('[data-action="dec"]').addEventListener('click', () => changeQty(item.id, -1));
      li.querySelector('[data-action="inc"]').addEventListener('click', () => changeQty(item.id, 1));
      li.querySelector('.cart-item-remove').addEventListener('click', () => removeFromCart(item.id));

      cartItems.appendChild(li);
    });
  }
}

function bumpCount() {
  cartCount.classList.remove('bump');
  void cartCount.offsetWidth;
  cartCount.classList.add('bump');
  setTimeout(() => cartCount.classList.remove('bump'), 300);
}

// ===== CART TOGGLE =====
function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ===== MODAL =====
function openModal(product) {
  currentProduct = product;
  modalImg.src = product.image;
  modalImg.alt = product.title;
  modalCategory.textContent = product.category;
  modalTitle.textContent = product.title;
  modalStars.textContent = getStars(product.rating.rate);
  modalRating.textContent = `${product.rating.rate} / 5 (${product.rating.count} avis)`;
  modalPrice.textContent = toCFA(product.price);
  modalDesc.textContent = product.description;

  const inCart = cart.find(i => i.id === product.id);
  modalAddBtn.textContent = inCart ? 'Ajouter encore' : 'Ajouter au panier';

  modalOverlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.style.display = 'none';
  document.body.style.overflow = '';
  currentProduct = null;
}

// ===== DARK MODE =====
function toggleDarkMode() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('elegance2-dark', isDark);
  moonIcon.style.display = isDark ? 'none' : 'block';
  sunIcon.style.display  = isDark ? 'block' : 'none';
}

function initDarkMode() {
  const saved = localStorage.getItem('elegance2-dark') === 'true';
  if (saved) {
    document.body.classList.add('dark');
    moonIcon.style.display = 'none';
    sunIcon.style.display  = 'block';
  }
}

// ===== EVENT LISTENERS =====
addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  fetchProducts();
  updateCartUI();
});

searchBtn.addEventListener('click', applyFilters);
searchInput.addEventListener('input', applyFilters);
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') applyFilters(); });

categoryFilter.addEventListener('change', applyFilters);
sortFilter.addEventListener('change', applyFilters);

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

clearCartBtn.addEventListener('click', () => {
  if (confirm('Vider le panier ?')) clearCart();
});

darkModeBtn.addEventListener('click', toggleDarkMode);
retryBtn.addEventListener('click', fetchProducts);

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});

modalAddBtn.addEventListener('click', () => {
  if (currentProduct) {
    addToCart(currentProduct);
    modalAddBtn.textContent = 'Ajouté !';
    setTimeout(() => { modalAddBtn.textContent = 'Ajouter encore'; }, 1200);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (modalOverlay.style.display === 'flex') closeModal();
    else closeCart();
  }
});
