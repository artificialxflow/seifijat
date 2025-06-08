// Product data with descriptions for each item
const products = [
  {
    id: 1,
    title: "Traditional Persian Carpet",
    description: "Handwoven masterpiece featuring intricate geometric patterns and rich colors. Made with premium wool and silk threads using traditional Persian weaving techniques passed down through generations.",
    features: ["Handwoven", "Wool & Silk", "Traditional Design", "Premium Quality"],
    image: "./assets/01.jfif"
  },
  {
    id: 2,
    title: "Persian Ceramic Vase",
    description: "Elegant ceramic vase with traditional Persian motifs and calligraphy. Each piece is hand-painted by skilled artisans using authentic Persian glazing techniques.",
    features: ["Hand-painted", "Ceramic", "Traditional Motifs", "Decorative"],
    image: "./assets/02.jfif"
  },
  {
    id: 3,
    title: "Miniature Persian Painting",
    description: "Exquisite miniature painting depicting classical Persian poetry scenes. Created using traditional pigments and gold leaf on handmade paper.",
    features: ["Miniature Art", "Gold Leaf", "Handmade Paper", "Classical Scenes"],
    image: "./assets/03.jfif"
  },
  {
    id: 4,
    title: "Persian Brass Samovar",
    description: "Authentic brass samovar for traditional tea preparation. Handcrafted with intricate engravings and traditional Persian designs, perfect for ceremonial use.",
    features: ["Brass", "Handcrafted", "Functional", "Ceremonial"],
    image: "./assets/04.jfif"
  },
  {
    id: 5,
    title: "Khatam Jewelry Box",
    description: "Beautiful jewelry box featuring Khatam-kari (Persian marquetry) with geometric patterns made from wood, bone, and metal inlays.",
    features: ["Khatam-kari", "Marquetry", "Geometric Patterns", "Storage"],
    image: "./assets/05.jfif"
  },
  {
    id: 6,
    title: "Persian Silk Scarf",
    description: "Luxurious silk scarf with traditional Persian paisley patterns. Hand-printed using natural dyes and featuring elegant fringe details.",
    features: ["Pure Silk", "Hand-printed", "Paisley Design", "Natural Dyes"],
    image: "./assets/06.jfif"
  },
  {
    id: 7,
    title: "Traditional Persian Mirror",
    description: "Ornate mirror with intricate metalwork frame featuring traditional Persian motifs. The frame is hand-engraved with floral and geometric patterns.",
    features: ["Metalwork", "Hand-engraved", "Ornate Design", "Traditional"],
    image: "./assets/07.jfif"
  },
  {
    id: 8,
    title: "Persian Calligraphy Art",
    description: "Beautiful calligraphy artwork featuring classical Persian poetry. Created by master calligraphers using traditional reed pens and natural inks.",
    features: ["Calligraphy", "Poetry", "Reed Pen", "Natural Inks"],
    image: "./assets/08.jfif"
  },
  {
    id: 9,
    title: "Handwoven Persian Kilim",
    description: "Flat-woven kilim rug with traditional tribal patterns and natural dyes. Lightweight yet durable, perfect for both floor covering and wall decoration.",
    features: ["Flat-woven", "Tribal Patterns", "Natural Dyes", "Versatile"],
    image: "./assets/09.jfif"
  },
  {
    id: 10,
    title: "Persian Enamel Plate",
    description: "Decorative plate featuring traditional Persian enamelwork (Minakari) with vibrant colors and intricate floral designs.",
    features: ["Minakari", "Enamelwork", "Floral Design", "Decorative"],
    image: "./assets/10.jfif"
  },
  {
    id: 11,
    title: "Traditional Persian Hookah",
    description: "Authentic Persian water pipe (hookah) with brass base and traditional decorations. Handcrafted with attention to both functionality and aesthetics.",
    features: ["Brass Base", "Traditional", "Functional", "Decorative"],
    image: "./assets/11.jfif"
  },
  {
    id: 12,
    title: "Persian Wooden Chess Set",
    description: "Handcrafted wooden chess set with pieces inspired by Persian historical figures. The board features traditional Persian geometric patterns.",
    features: ["Handcrafted Wood", "Historical Figures", "Geometric Board", "Game Set"],
    image: "./assets/12.jfif"
  },
  {
    id: 13,
    title: "Persian Copper Tray",
    description: "Large decorative copper tray with hand-engraved traditional patterns. Perfect for serving or as a wall decoration piece.",
    features: ["Copper", "Hand-engraved", "Large Size", "Dual Purpose"],
    image: "./assets/13.jfif"
  },
  {
    id: 14,
    title: "Traditional Persian Lamp",
    description: "Ornate table lamp with traditional Persian metalwork and colored glass panels. Creates beautiful ambient lighting with traditional patterns.",
    features: ["Metalwork", "Colored Glass", "Ambient Lighting", "Traditional"],
    image: "./assets/14.jfif"
  },
  {
    id: 15,
    title: "Persian Embroidered Tablecloth",
    description: "Elegant tablecloth with hand-embroidered Persian motifs using silk threads. Features traditional floral and vine patterns.",
    features: ["Hand-embroidered", "Silk Threads", "Floral Motifs", "Table Linen"],
    image: "./assets/15.jfif"
  },
  {
    id: 16,
    title: "Persian Ceramic Tile Set",
    description: "Set of decorative ceramic tiles with traditional Persian geometric and floral patterns. Perfect for creating accent walls or backsplashes.",
    features: ["Ceramic Tiles", "Geometric Patterns", "Decorative", "Set"],
    image: "./assets/16.jfif"
  },
  {
    id: 17,
    title: "Traditional Persian Backgammon",
    description: "Handcrafted backgammon set with Khatam-kari inlay work. The board features traditional Persian geometric patterns and comes with wooden pieces.",
    features: ["Khatam-kari", "Inlay Work", "Game Board", "Wooden Pieces"],
    image: "./assets/17.jfif"
  },
  {
    id: 18,
    title: "Persian Silver Jewelry",
    description: "Elegant silver jewelry set featuring traditional Persian designs with turquoise stones. Handcrafted by skilled Persian silversmiths.",
    features: ["Sterling Silver", "Turquoise Stones", "Traditional Design", "Handcrafted"],
    image: "./assets/18.jfif"
  },
  {
    id: 19,
    title: "Persian Leather Bag",
    description: "Handcrafted leather bag with traditional Persian tooling and brass hardware. Made from premium leather with intricate embossed patterns.",
    features: ["Premium Leather", "Hand-tooled", "Brass Hardware", "Traditional"],
    image: "./assets/19.jfif"
  },
  {
    id: 20,
    title: "Traditional Persian Incense Burner",
    description: "Ornate brass incense burner with traditional Persian engravings. Features intricate cutout patterns that create beautiful light effects.",
    features: ["Brass", "Engraved", "Cutout Patterns", "Functional"],
    image: "./assets/20.jfif"
  },
  {
    id: 21,
    title: "Persian Wooden Box",
    description: "Decorative wooden box with Khatam-kari marquetry work. Features geometric patterns made from various woods, bone, and metal inlays.",
    features: ["Khatam-kari", "Marquetry", "Multi-material", "Storage"],
    image: "./assets/21.jfif"
  },
  {
    id: 22,
    title: "Persian Textile Wall Hanging",
    description: "Beautiful textile wall hanging with traditional Persian patterns. Hand-woven using natural fibers and dyes with fringe details.",
    features: ["Hand-woven", "Natural Fibers", "Wall Decoration", "Traditional"],
    image: "./assets/22.jfif"
  },
  {
    id: 23,
    title: "Traditional Persian Tea Set",
    description: "Complete tea set with traditional Persian design including teapot, glasses, and serving tray. Perfect for authentic Persian tea ceremony.",
    features: ["Complete Set", "Traditional Design", "Tea Ceremony", "Authentic"],
    image: "./assets/23.jfif"
  },
  {
    id: 24,
    title: "Persian Mosaic Art",
    description: "Intricate mosaic artwork featuring traditional Persian geometric patterns. Made with hand-cut tiles in vibrant colors and gold accents.",
    features: ["Mosaic Art", "Hand-cut Tiles", "Geometric", "Gold Accents"],
    image: "./assets/24.jfif"
  },
  {
    id: 25,
    title: "Persian Carved Wooden Panel",
    description: "Decorative wooden panel with intricate hand-carved Persian motifs. Features traditional floral and geometric patterns in relief.",
    features: ["Hand-carved", "Wooden Panel", "Relief Patterns", "Decorative"],
    image: "./assets/25.jfif"
  },
  {
    id: 26,
    title: "Traditional Persian Cushion",
    description: "Luxurious cushion with traditional Persian embroidery and silk fabric. Features intricate needlework with metallic threads.",
    features: ["Silk Fabric", "Hand-embroidered", "Metallic Threads", "Luxury"],
    image: "./assets/26.jfif"
  },
  {
    id: 27,
    title: "Persian Brass Candlestick",
    description: "Elegant brass candlestick with traditional Persian engravings. Handcrafted with intricate details and stable base design.",
    features: ["Brass", "Hand-engraved", "Stable Base", "Traditional"],
    image: "./assets/27.jfif"
  },
  {
    id: 28,
    title: "Persian Ceramic Bowl Set",
    description: "Set of decorative ceramic bowls with traditional Persian glazing and patterns. Each bowl features unique hand-painted designs.",
    features: ["Ceramic", "Hand-painted", "Traditional Glazing", "Bowl Set"],
    image: "./assets/28.jfif"
  },
  {
    id: 29,
    title: "Traditional Persian Doll",
    description: "Handcrafted Persian doll wearing traditional costume with intricate embroidery and authentic accessories. Cultural collectible piece.",
    features: ["Handcrafted", "Traditional Costume", "Embroidery", "Collectible"],
    image: "./assets/29.jfif"
  },
  {
    id: 30,
    title: "Persian Metal Wall Art",
    description: "Decorative metal wall art featuring traditional Persian calligraphy and geometric patterns. Hand-forged with antique finish.",
    features: ["Metal Art", "Calligraphy", "Hand-forged", "Antique Finish"],
    image: "./assets/30.jfif"
  },
  {
    id: 31,
    title: "Persian Spice Container Set",
    description: "Traditional spice container set with brass construction and engraved labels. Perfect for storing and displaying Persian spices.",
    features: ["Brass Construction", "Engraved Labels", "Spice Storage", "Traditional"],
    image: "./assets/31.jfif"
  },
  {
    id: 32,
    title: "Persian Decorative Plate",
    description: "Large decorative plate with traditional Persian enamelwork and gold details. Features classical Persian garden motifs.",
    features: ["Enamelwork", "Gold Details", "Garden Motifs", "Large Size"],
    image: "./assets/32.jfif"
  },
  {
    id: 33,
    title: "Traditional Persian Carpet Runner",
    description: "Long carpet runner with traditional Persian border patterns. Hand-knotted with high-quality wool and natural dyes.",
    features: ["Hand-knotted", "Border Patterns", "High-quality Wool", "Runner"],
    image: "./assets/33.jfif"
  },
  {
    id: 34,
    title: "Persian Wooden Serving Tray",
    description: "Handcrafted wooden serving tray with Khatam-kari inlay work. Features traditional geometric patterns and brass handles.",
    features: ["Khatam-kari", "Inlay Work", "Brass Handles", "Serving Tray"],
    image: "./assets/34.jfif"
  },
  {
    id: 35,
    title: "Persian Textile Bag",
    description: "Traditional textile bag with Persian kilim patterns and leather trim. Handwoven with natural fibers and traditional techniques.",
    features: ["Kilim Patterns", "Leather Trim", "Handwoven", "Natural Fibers"],
    image: "./assets/35.jfif"
  },
  {
    id: 36,
    title: "Persian Decorative Clock",
    description: "Ornate wall clock with traditional Persian metalwork frame. Features Roman numerals and intricate engraved patterns.",
    features: ["Metalwork Frame", "Roman Numerals", "Engraved Patterns", "Wall Clock"],
    image: "./assets/36.jfif"
  },
  {
    id: 37,
    title: "Traditional Persian Book Cover",
    description: "Handcrafted book cover with traditional Persian leather tooling and gold embossing. Features classical Persian literary motifs.",
    features: ["Leather Tooling", "Gold Embossing", "Literary Motifs", "Book Cover"],
    image: "./assets/37.jfif"
  }
];

// DOM elements
const productGrid = document.getElementById('product-grid');
const searchBox = document.getElementById('search-box');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalFeatures = document.getElementById('modal-features');
const closeModal = document.getElementById('close-modal');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  renderProducts(products);
  setupEventListeners();
});

// Render products to the grid
function renderProducts(productsToRender) {
  productGrid.innerHTML = '';
  
  if (productsToRender.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <h3 style="color: var(--text-light); font-size: 1.5rem;">No products found matching your search.</h3>
        <p style="color: var(--text-light); margin-top: 1rem;">Try adjusting your search terms.</p>
      </div>
    `;
    return;
  }
  
  productsToRender.forEach(product => {
    const productCard = createProductCard(product);
    productGrid.appendChild(productCard);
  });
}

// Create individual product card
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('data-product-id', product.id);
  
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
    <div class="product-info">
      <h3 class="product-title">${product.title}</h3>
      <p class="product-description">${product.description}</p>
      <div class="product-features">
        ${product.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
      </div>
    </div>
  `;
  
  // Add click event to open modal
  card.addEventListener('click', () => openModal(product));
  
  return card;
}

// Open product modal
function openModal(product) {
  modalImage.src = product.image;
  modalImage.alt = product.title;
  modalTitle.textContent = product.title;
  modalDescription.textContent = product.description;
  modalFeatures.innerHTML = product.features.map(feature => 
    `<span class="feature-tag">${feature}</span>`
  ).join('');
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModalFunction() {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Setup event listeners
function setupEventListeners() {
  // Search functionality
  searchBox.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm === '') {
      renderProducts(products);
      return;
    }
    
    const filteredProducts = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.features.some(feature => feature.toLowerCase().includes(searchTerm))
    );
    
    renderProducts(filteredProducts);
  });
  
  // Modal close events
  closeModal.addEventListener('click', closeModalFunction);
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModalFunction();
    }
  });
  
  // Keyboard events
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModalFunction();
    }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add loading states for images
function addImageLoadingStates() {
  const images = document.querySelectorAll('.product-image');
  
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
    
    img.addEventListener('error', function() {
      this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill="%23f0f0f0"/><text x="150" y="100" text-anchor="middle" fill="%23999" font-family="Arial" font-size="14">Image not available</text></svg>';
    });
  });
}

// Initialize image loading states after products are rendered
const observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === 'childList') {
      addImageLoadingStates();
    }
  });
});

observer.observe(productGrid, { childList: true, subtree: true });

// Add intersection observer for lazy loading animation
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

// Observe product cards for animation
function observeCards() {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    cardObserver.observe(card);
  });
}

// Call observeCards after products are rendered
setTimeout(observeCards, 100);