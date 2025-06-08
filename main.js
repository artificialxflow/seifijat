// Product data with descriptions for each item
const products = [
  {
    title: "کدو سبز",
    description: "کدو سبز تازه و لطیف، مناسب برای خورش و آشپزی سالم. برداشت روز.",
    features: ["تازه و لطیف", "سایز متوسط", "مناسب آشپزی", "برداشت روز"],
    image: "./public/kadoo.jpg"
  },
  {
    title: "کاهو بسته بندی",
    description: "کاهو بسته بندی شده با کیفیت عالی و مناسب برای فروشگاه‌ها و رستوران‌ها.",
    features: ["بسته بندی بهداشتی", "تازه و سالم", "مناسب فروشگاه", "ماندگاری بالا"],
    image: "./public/kahoo-bastebandi.jpg"
  },
  {
    title: "کاهو",
    description: "کاهو رسمی با برگ‌های سبز و لطیف، مناسب برای انواع سالاد و مصرف روزانه.",
    features: ["برگ لطیف", "تازه و سالم", "مناسب رستوران", "برداشت روز"],
    image: "./public/kahoo.jpg"
  },
  {
    title: "کلم 7",
    description: "کلم تازه و ترد، مناسب برای سالاد و ترشی. برداشت مستقیم از مزارع سالم.",
    features: ["تازه و ترد", "سایز بزرگ", "مناسب سالاد", "قیمت مناسب"],
    image: "./public/kalam7.jpg"
  },
  {
    title: "سبزی",
    description: "سبزی تازه و معطر، مناسب برای مصرف روزانه و آشپزی ایرانی.",
    features: ["تازه و معطر", "مناسب آشپزی", "برداشت روز", "قیمت مناسب"],
    image: "./public/sabji.jpg"
  },
  {
    title: "چغندر3",
    description: "چغندر تازه و شیرین، مناسب برای آبگیری و مصرف خام یا پخته.",
    features: ["شیرین و تازه", "مناسب آبگیری", "سرشار از ویتامین", "برداشت روز"],
    image: "./public/choghondar3.jpg"
  },
  {
    title: "کاهو 8",
    description: "کاهو تازه و لطیف، مناسب برای سالاد و مصرف روزانه.",
    features: ["تازه و لطیف", "مناسب سالاد", "برداشت روز", "قیمت مناسب"],
    image: "./public/kahoo8.jpg"
  },
  {
    title: "سیر",
    description: "سیر تازه و خوش‌عطر، مناسب برای مصرف خام و پخت و پز.",
    features: ["خوش‌عطر", "تازه و سالم", "مناسب آشپزی", "برداشت روز"],
    image: "./public/sir.jpg"
  },
  {
    title: "کاهو 7",
    description: "کاهو تازه و لطیف، مناسب برای سالاد و مصرف روزانه.",
    features: ["تازه و لطیف", "مناسب سالاد", "برداشت روز", "قیمت مناسب"],
    image: "./public/kahoo7.jpg"
  },
  {
    title: "کاهو6",
    description: "کاهو تازه و لطیف، مناسب برای سالاد و مصرف روزانه.",
    features: ["تازه و لطیف", "مناسب سالاد", "برداشت روز", "قیمت مناسب"],
    image: "./public/kahoo6.jpg"
  },
  {
    title: "کلم 5",
    description: "کلم تازه و ترد، مناسب برای سالاد و ترشی.",
    features: ["تازه و ترد", "مناسب سالاد", "برداشت روز", "قیمت مناسب"],
    image: "./public/kalam5.jpg"
  },
  {
    title: "کاهو4",
    description: "کاهو تازه و لطیف، مناسب برای سالاد و مصرف روزانه.",
    features: ["تازه و لطیف", "مناسب سالاد", "برداشت روز", "قیمت مناسب"],
    image: "./public/kahoo4.jpg"
  },
  {
    title: "کاهو3",
    description: "کاهو تازه و لطیف، مناسب برای سالاد و مصرف روزانه.",
    features: ["تازه و لطیف", "مناسب سالاد", "برداشت روز", "قیمت مناسب"],
    image: "./public/kahoo3.jpg"
  },
  {
    title: "مزرعه ای",
    description: "محصولات تازه و سالم برداشت شده از مزارع ایرانی.",
    features: ["تازه و سالم", "برداشت روز", "مناسب فروشگاه", "قیمت مناسب"],
    image: "./public/mazraei.jpg"
  },
  {
    title: "لیمو",
    description: "لیمو ترش تازه و آبدار، مناسب برای آبگیری و مصرف روزانه.",
    features: ["آبدار", "ویتامین C بالا", "پوست نازک", "مناسب آبگیری"],
    image: "./public/limoo.jpg"
  },
  {
    title: "هندونه سبز",
    description: "هندوانه سبز تازه و آبدار، مناسب برای مصرف تابستانی.",
    features: ["آبدار و شیرین", "درشت و سالم", "برداشت روز", "ارسال سریع"],
    image: "./public/hendevane-sabz.jpg"
  },
  {
    title: "سیب زمینی",
    description: "سیب زمینی تازه و یکدست، مناسب برای سرخ‌کردن و پخت انواع غذاها.",
    features: ["یکدست و سالم", "مناسب سرخ‌کردن", "برداشت تازه", "قیمت مناسب"],
    image: "./public/sibzamini2.jpg"
  },
  {
    title: "کلم 3",
    description: "کلم تازه و ترد، مناسب برای سالاد و ترشی.",
    features: ["تازه و ترد", "مناسب سالاد", "برداشت روز", "قیمت مناسب"],
    image: "./public/kalam3.jpg"
  },
  {
    title: "بادمجان",
    description: "بادمجان قلمی با پوست براق و بدون تخم زیاد، مناسب برای سرخ‌کردن و خورش.",
    features: ["پوست براق", "بدون تلخی", "مناسب خورش", "سایز یکدست"],
    image: "./public/bademjan.jpg"
  },
  {
    title: "کلم سبز",
    description: "کلم سبز تازه و ترد، مناسب برای سالاد و ترشی.",
    features: ["تازه و ترد", "مناسب سالاد", "برداشت روز", "قیمت مناسب"],
    image: "./public/kalam-sabz.jpg"
  },
  {
    title: "توت فرنگی",
    description: "توت فرنگی تازه و خوش‌طعم، مناسب برای مصرف خام و تهیه مربا.",
    features: ["خوش‌طعم", "تازه و سالم", "مناسب مربا", "برداشت روز"],
    image: "./public/toot-farangi.jpg"
  },
  {
    title: "هندوانه",
    description: "هندوانه‌های تازه و آبدار، برداشت روز از بهترین مزارع ایران.",
    features: ["آبدار و شیرین", "درشت و سالم", "برداشت روز", "ارسال سریع"],
    image: "./public/hendevane.jpg"
  },
  {
    title: "چغندر",
    description: "چغندر تازه و شیرین، مناسب برای آبگیری و مصرف خام یا پخته.",
    features: ["شیرین و تازه", "مناسب آبگیری", "سرشار از ویتامین", "برداشت روز"],
    image: "./public/chohgondar.jpg"
  },
  {
    title: "کلم",
    description: "کلم تازه و ترد، مناسب برای سالاد و ترشی.",
    features: ["تازه و ترد", "مناسب سالاد", "برداشت روز", "قیمت مناسب"],
    image: "./public/kalam.jpg"
  },
  {
    title: "پیاز سفید",
    description: "پیاز سفید تازه و خوش‌طعم، مناسب برای پخت و پز و نگهداری.",
    features: ["ماندگاری بالا", "طعم ملایم", "سایز متوسط", "مناسب بسته‌بندی"],
    image: "./public/piazsefid.jpg"
  },
  {
    title: "لبو",
    description: "لبو تازه و شیرین، مناسب برای مصرف خام یا پخته.",
    features: ["شیرین و تازه", "مناسب آبگیری", "سرشار از ویتامین", "برداشت روز"],
    image: "./public/laboo.jpg"
  },
  {
    title: "زردآلو",
    description: "زردآلو تازه و شیرین، مناسب برای مصرف خام و تهیه مربا.",
    features: ["شیرین و خوش‌طعم", "تازه و سالم", "مناسب مربا", "برداشت روز"],
    image: "./public/zardaloo.jpg"
  },
  {
    title: "انبه",
    description: "انبه تازه و خوش‌عطر، مناسب برای مصرف خام و تهیه آبمیوه.",
    features: ["خوش‌عطر", "تازه و سالم", "مناسب آبمیوه", "برداشت روز"],
    image: "./public/anbe.jpg"
  },
  {
    title: "بلال",
    description: "بلال تازه و شیرین، مناسب برای کبابی و مصرف خام.",
    features: ["شیرین و تازه", "مناسب کبابی", "برداشت روز", "قیمت مناسب"],
    image: "./public/balal.jpg"
  },
  {
    title: "گوجه",
    description: "گوجه تازه و خوش‌طعم، مناسب برای سالاد و پخت و پز.",
    features: ["خوش‌طعم", "تازه و سالم", "مناسب سالاد", "برداشت روز"],
    image: "./public/goje-farangi.jpg"
  },
  {
    title: "پیاز",
    description: "پیاز زرد با طعم ملایم و ماندگاری بالا، مناسب برای پخت و پز و نگهداری.",
    features: ["ماندگاری بالا", "طعم ملایم", "سایز متوسط", "مناسب بسته‌بندی"],
    image: "./public/piaz.jpg"
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