const products = [
    {
        id: 'bat-elite',
        name: 'Kookaburra Kahuna Elite Bat',
        category: 'bats',
        price: 12999,
        rating: 4.8,
        description: 'Grade 1 English willow bat engineered for explosive stroke play.',
        image: 'kakburabat.jpg'
    },
    {
        id: 'bat-power',
        name: 'SS Ton Power Drive Bat',
        category: 'bats',
        price: 9999,
        rating: 4.6,
        description: 'Balanced profile with reinforced edges for power hitters.',
        image: 'sston.webp'
    },
    {
        id: 'ball-premium',
        name: 'SG Test Red Leather Ball',
        category: 'balls',
        price: 1299,
        rating: 4.7,
        description: 'Hand-stitched four-piece leather ball approved for first-class cricket.',
        image: 'sgball.webp'
    },
    {
        id: 'ball-training',
        name: 'Duke Swing Practice Ball (Pack of 4)',
        category: 'balls',
        price: 1799,
        rating: 4.4,
        description: 'Durable swing practice balls ideal for nets and fielding drills.',
        image: 'swingball.webp'
    },
    {
        id: 'gloves-pro',
        name: 'MRF Genius Limited Edition Gloves',
        category: 'gloves',
        price: 3499,
        rating: 4.9,
        description: 'Premium sheepskin leather palm with high-density finger protection.',
        image: 'mrfgloves.webp'
    },
    {
        id: 'gloves-youth',
        name: 'Gray-Nicolls Junior Protective Gloves',
        category: 'gloves',
        price: 2199,
        rating: 4.5,
        description: 'Lightweight gloves designed for youth players with extra wrist support.',
        image: 'gray.webp'
    },
    {
        id: 'legguards-pro',
        name: 'New Balance DC Pro Leg Guards',
        category: 'legguards',
        price: 4999,
        rating: 4.8,
        description: 'Contoured knee roll and triple strap system for secure fit.',
        image: 'newbalance.webp'
    },
    {
        id: 'legguards-lite',
        name: 'SG Litevate Batting Pads',
        category: 'legguards',
        price: 2799,
        rating: 4.6,
        description: 'Ultra-lightweight pads with high-density foam protection.',
        image: 'sgpads.webp'
    },
    {
        id: 'clothing-kit',
        name: 'Puma Team Cricket Kit',
        category: 'clothing',
        price: 2499,
        rating: 4.7,
        description: 'Moisture-wicking jersey and trousers for match-day comfort.',
        image: 'puma.jpg'
    },
    {
        id: 'clothing-training',
        name: 'Adidas Training Hoodie',
        category: 'clothing',
        price: 2999,
        rating: 4.5,
        description: 'Warm-up hoodie with breathable panels for pre-game sessions.',
        image: 'adidas.jpg'
    },
    {
        id: 'helmet-vision',
        name: 'Masuri Vision Series Elite Helmet',
        category: 'helmets',
        price: 5499,
        rating: 4.7,
        description: 'Lightweight ABS shell with advanced impact protection and airflow.',
        image: 'masuri.webp'
    },
    {
        id: 'helmet-strike',
        name: 'SG Aeroshield Pro Helmet',
        category: 'helmets',
        price: 3899,
        rating: 4.6,
        description: 'Adjustable steel grille helmet engineered for clear sightlines.',
        image: 'sghelmet.jpg'
    },
    {
        id: 'shoes-spike',
        name: 'Asics Gel-Speed Cricket Spikes',
        category: 'shoes',
        price: 6299,
        rating: 4.8,
        description: 'Featherlight spikes with GEL cushioning for explosive run-ups.',
        image: 'asics.jpg'
    },
    {
        id: 'shoes-allround',
        name: 'Puma EvoPower All-Rounder Shoes',
        category: 'shoes',
        price: 4499,
        rating: 4.5,
        description: 'Hybrid spikes with multi-surface grip ideal for versatile players.',
        image: 'pumashoes.jpg'
    },
    {
        id: 'accessory-kitbag',
        name: 'SS Premium Duffle Kit Bag',
        category: 'accessories',
        price: 3299,
        rating: 4.7,
        description: 'Spacious duffle with ventilated shoe tunnel and padded straps.',
        image: 'sskit.jpg'
    },
    {
        id: 'kit-complete',
        name: 'GM Champion Match-Day Kit',
        category: 'kits',
        price: 11999,
        rating: 4.9,
        description: 'Complete match pack including pads, gloves, helmet, and kit bag.',
        image: 'gm.jpg'
    }
];

const offers = [
    {
        id: 'offer-super-over',
        eyebrow: 'Game Day Deal',
        title: 'Flat 20% off on pro-grade English willow bats',
        description: 'Upgrade your stroke play with elite willow selected by national-team coaches.',
        cta: 'Shop Bats',
        link: '#catalog'
    },
    {
        id: 'offer-gear-bundle',
        eyebrow: 'Bundle & Save',
        title: 'Match-ready bundle: leg guards, gloves & balls at ₹1,999 off',
        description: 'Grab the essentials and save before the next big knock.',
        cta: 'View Bundle',
        link: '#catalog'
    },
    {
        id: 'offer-teamwear',
        eyebrow: 'New Arrivals',
        title: 'Fresh drop: breathable teamwear for training & travel',
        description: 'Stay sharp on and off the pitch with lightweight performance fabric.',
        cta: 'Explore Clothing',
        link: '#catalog'
    },
    {
        id: 'offer-helmet-shield',
        eyebrow: 'Safety First',
        title: 'Free pro helmet relining with every elite helmet purchase',
        description: 'Certified technicians ensure your headgear meets international standards.',
        cta: 'Shop Helmets',
        link: '#catalog'
    },
    {
        id: 'offer-footwork',
        eyebrow: 'Step Up',
        title: 'Save ₹1,000 on performance spikes when you add any bat to cart',
        description: 'Pair explosive shots with faster running between the wickets.',
        cta: 'Upgrade Footwear',
        link: '#catalog'
    }
];

const productGrid = document.getElementById('productGrid');
const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
const categoryLinks = Array.from(document.querySelectorAll('[data-filter-category]'));
const searchInput = document.getElementById('productSearch');
const emptyState = document.getElementById('emptyState');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const cartPanel = document.getElementById('cartPanel');
const cartItemsWrapper = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartSubtotal = document.getElementById('cartSubtotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const backdrop = document.getElementById('backdrop');
const currentYear = document.getElementById('currentYear');
const offerTrack = document.getElementById('offerTrack');
const offerPrev = document.getElementById('offerPrev');
const offerNext = document.getElementById('offerNext');
const dropdownToggles = Array.from(document.querySelectorAll('.dropdown-toggle'));
const dropdownProductContainers = Array.from(document.querySelectorAll('[data-dropdown-products]'));
const checkoutForm = document.getElementById('checkoutForm');
const checkoutSummaryList = document.getElementById('orderSummaryList');
const checkoutSubtotalEl = document.getElementById('orderSubtotal');
const checkoutShippingEl = document.getElementById('orderShipping');
const checkoutTotalEl = document.getElementById('orderTotal');
const checkoutEmptyState = document.getElementById('checkoutEmpty');
const checkoutSuccess = document.getElementById('checkoutSuccess');
const profileForm = document.getElementById('profileForm');
const profileOrdersList = document.getElementById('profileOrders');
const profileOrdersEmpty = document.getElementById('profileOrdersEmpty');
const profileNameEl = document.getElementById('profileName');
const profileEmailEl = document.getElementById('profileEmail');
const profilePhoneEl = document.getElementById('profilePhone');
const profileAddressEl = document.getElementById('profileAddress');
const profileFeedback = document.getElementById('profileFeedback');

const CART_STORAGE_KEY = 'cricket-pro-shop-cart';
const ORDER_STORAGE_KEY = 'cricket-pro-shop-orders';
const PROFILE_STORAGE_KEY = 'cricket-pro-shop-profile';
let activeCategory = 'all';
let cart = loadCart();
let currentOfferIndex = 0;
let offerIntervalId;
const OFFER_ROTATION_MS = 6000;

function loadCart() {
    try {
        const stored = localStorage.getItem(CART_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.warn('Unable to load cart from storage', error);
        return [];
    }
}

function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function loadOrders() {
    try {
        const stored = localStorage.getItem(ORDER_STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.warn('Unable to load orders from storage', error);
        return [];
    }
}

function saveOrders(orders) {
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
}

function loadProfile() {
    try {
        const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
        return stored
            ? JSON.parse(stored)
            : {
                  name: '',
                  email: '',
                  phone: '',
                  address: '',
                  city: '',
                  state: '',
                  postalCode: ''
              };
    } catch (error) {
        console.warn('Unable to load profile from storage', error);
        return {
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            postalCode: ''
        };
    }
}

function saveProfile(profile) {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

function renderProducts(list) {
    if (!productGrid) return;
    productGrid.innerHTML = '';
    if (!list.length) {
        if (emptyState) {
            emptyState.hidden = false;
        }
        return;
    }

    if (emptyState) {
        emptyState.hidden = true;
    }

    const fragment = document.createDocumentFragment();

    list.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-content">
                <span class="product-category">${formatCategory(product.category)}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-meta">
                    <span class="product-price">${formatCurrency(product.price)}</span>
                    <span class="rating">⭐ ${product.rating.toFixed(1)}</span>
                </div>
                <button class="add-to-cart" data-product="${product.id}">
                    Add to Cart
                </button>
            </div>
        `;
        fragment.appendChild(card);
    });

    productGrid.appendChild(fragment);
}

function formatCategory(category) {
    switch (category) {
        case 'bats':
            return 'Bats';
        case 'balls':
            return 'Balls';
        case 'gloves':
            return 'Gloves';
        case 'legguards':
            return 'Leg Guards';
        case 'clothing':
            return 'Clothing';
        case 'helmets':
            return 'Helmets';
        case 'shoes':
            return 'Shoes';
        case 'accessories':
            return 'Accessories';
        case 'kits':
            return 'Kits';
        default:
            return category;
    }
}

function getFilteredProducts() {
    const term = searchInput ? searchInput.value.trim().toLowerCase() : '';
    return products.filter(product => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch =
            !term ||
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term);
        return matchesCategory && matchesSearch;
    });
}

function renderCart() {
    if (!cartItemsWrapper || !cartSubtotal || !cartCount) return;
    cartItemsWrapper.innerHTML = '';

    if (!cart.length) {
        cartItemsWrapper.innerHTML = `<p class="cart-empty">Your cart is empty. Add some cricket gear!</p>`;
        updateCartCount();
        cartSubtotal.textContent = formatCurrency(0);
        return;
    }

    const fragment = document.createDocumentFragment();
    let subtotal = 0;

    cart.forEach(item => {
        const product = products.find(prod => prod.id === item.id);
        if (!product) {
            return;
        }
        const itemTotal = product.price * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="item-info">
                <span class="item-title">${product.name}</span>
                <span class="item-price">${formatCurrency(itemTotal)}</span>
                <div class="item-actions">
                    <button class="quantity-btn" aria-label="Decrease quantity" data-action="decrease" data-product="${product.id}">−</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" aria-label="Increase quantity" data-action="increase" data-product="${product.id}">+</button>
                </div>
            </div>
            <button class="remove-item" aria-label="Remove item" data-action="remove" data-product="${product.id}">&times;</button>
        `;
        fragment.appendChild(cartItem);
    });

    cartItemsWrapper.appendChild(fragment);
    cartSubtotal.textContent = formatCurrency(subtotal);
    updateCartCount();
}

function updateCartCount() {
    if (!cartCount) return;
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function addToCart(productId) {
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    saveCart();
    renderCart();
}

function adjustQuantity(productId, action) {
    cart = cart.reduce((acc, item) => {
        if (item.id === productId) {
            const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
            if (newQuantity > 0) {
                acc.push({ ...item, quantity: newQuantity });
            }
        } else {
            acc.push(item);
        }
        return acc;
    }, []);

    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
}

function setActiveCategory(category) {
    activeCategory = category;
    filterButtons.forEach(button => {
        const isActive = button.dataset.category === category;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    renderProducts(getFilteredProducts());
}

function openCart() {
    if (!cartPanel || !backdrop || !cartToggle) return;
    cartPanel.classList.add('open');
    cartPanel.setAttribute('aria-hidden', 'false');
    cartToggle.setAttribute('aria-expanded', 'true');
    backdrop.hidden = false;
    requestAnimationFrame(() => {
        backdrop.classList.add('visible');
    });
}

function closeCart() {
    if (!cartPanel || !backdrop || !cartToggle) return;
    cartPanel.classList.remove('open');
    cartPanel.setAttribute('aria-hidden', 'true');
    cartToggle.setAttribute('aria-expanded', 'false');
    backdrop.classList.remove('visible');
    setTimeout(() => {
        backdrop.hidden = true;
    }, 300);
}

function toggleCart() {
    if (cartPanel.classList.contains('open')) {
        closeCart();
    } else {
        openCart();
    }
}

function closeDropdowns() {
    dropdownToggles.forEach(toggle => {
        const parent = toggle.closest('.nav-dropdown');
        toggle.setAttribute('aria-expanded', 'false');
        parent?.classList.remove('open');
    });
}

function openDropdown(toggle) {
    const parent = toggle.closest('.nav-dropdown');
    dropdownToggles.forEach(other => {
        if (other !== toggle) {
            other.setAttribute('aria-expanded', 'false');
            other.closest('.nav-dropdown')?.classList.remove('open');
        }
    });
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    parent?.classList.toggle('open', !expanded);
}

function renderOffers() {
    if (!offerTrack) return;
    offerTrack.innerHTML = offers.map(offer => `
        <article class="offer-card" data-offer="${offer.id}">
            <strong>${offer.eyebrow}</strong>
            <h3>${offer.title}</h3>
            <p>${offer.description}</p>
            <div class="offer-actions">
                <a class="btn secondary" href="${offer.link}">${offer.cta}</a>
            </div>
        </article>
    `).join('');
    updateOfferPosition();
}

function renderDropdownProducts() {
    if (!dropdownProductContainers.length) return;
    const featured = products.slice(0, 6);
    const markup = featured
        .map(
            product => `
            <a href="product.html?id=${product.id}" data-product-link="${product.id}">
                ${product.name}
            </a>
        `
        )
        .join('');
    dropdownProductContainers.forEach(container => {
        container.innerHTML = markup;
    });
}

function updateOfferPosition() {
    if (!offerTrack) return;
    offerTrack.style.transform = `translateX(-${currentOfferIndex * 100}%)`;
}

function goToOffer(index) {
    const total = offers.length;
    currentOfferIndex = ((index % total) + total) % total;
    updateOfferPosition();
}

function nextOffer(step = 1) {
    goToOffer(currentOfferIndex + step);
}

function previousOffer() {
    nextOffer(-1);
}

function startOfferAutoPlay() {
    stopOfferAutoPlay();
    offerIntervalId = window.setInterval(() => nextOffer(1), OFFER_ROTATION_MS);
}

function stopOfferAutoPlay() {
    if (offerIntervalId) {
        window.clearInterval(offerIntervalId);
        offerIntervalId = undefined;
    }
}

function initOfferCarousel() {
    if (!offerTrack) return;
    renderOffers();
    startOfferAutoPlay();

    offerPrev?.addEventListener('click', () => {
        previousOffer();
        startOfferAutoPlay();
    });

    offerNext?.addEventListener('click', () => {
        nextOffer();
        startOfferAutoPlay();
    });

    offerTrack.addEventListener('mouseenter', stopOfferAutoPlay);
    offerTrack.addEventListener('mouseleave', startOfferAutoPlay);
}

function calculateCartTotals(targetCart = cart) {
    const subtotal = targetCart.reduce((sum, item) => {
        const product = products.find(prod => prod.id === item.id);
        if (!product) return sum;
        return sum + product.price * item.quantity;
    }, 0);
    const shipping = subtotal === 0 ? 0 : subtotal >= 7500 ? 0 : 299;
    const total = subtotal + shipping;
    return { subtotal, shipping, total };
}

function renderCheckoutSummary() {
    if (!checkoutSummaryList || !checkoutSubtotalEl || !checkoutShippingEl || !checkoutTotalEl) return;

    const totals = calculateCartTotals();

    if (!cart.length) {
        checkoutSummaryList.innerHTML = '';
        if (checkoutEmptyState) {
            checkoutEmptyState.hidden = false;
        }
        checkoutSubtotalEl.textContent = formatCurrency(0);
        checkoutShippingEl.textContent = formatCurrency(0);
        checkoutTotalEl.textContent = formatCurrency(0);
        return;
    }

    if (checkoutEmptyState) {
        checkoutEmptyState.hidden = true;
    }

    checkoutSummaryList.innerHTML = cart
        .map(item => {
            const product = products.find(prod => prod.id === item.id);
            if (!product) return '';
            return `
                <li class="summary-item">
                    <div>
                        <p class="summary-title">${product.name}</p>
                        <span class="summary-meta">Qty: ${item.quantity}</span>
                    </div>
                    <span class="summary-price">${formatCurrency(product.price * item.quantity)}</span>
                </li>
            `;
        })
        .join('');

    checkoutSubtotalEl.textContent = formatCurrency(totals.subtotal);
    checkoutShippingEl.textContent = totals.shipping === 0 ? 'Free' : formatCurrency(totals.shipping);
    checkoutTotalEl.textContent = formatCurrency(totals.total);
}

function formatDateTime(isoString) {
    try {
        return new Date(isoString).toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
    } catch {
        return isoString;
    }
}

function renderOrderHistory() {
    if (!profileOrdersList) return;
    const orders = loadOrders();

    if (!orders.length) {
        profileOrdersList.innerHTML = '';
        if (profileOrdersEmpty) {
            profileOrdersEmpty.hidden = false;
        }
        return;
    }

    if (profileOrdersEmpty) {
        profileOrdersEmpty.hidden = true;
    }

    profileOrdersList.innerHTML = orders
        .map(order => {
            const { subtotal, shipping, total } = order.totals || calculateCartTotals(order.items || []);
            const itemsLabel = order.items
                ? `${order.items.reduce((sum, item) => sum + item.quantity, 0)} item(s)`
                : '';
            return `
                <li class="order-card">
                    <header>
                        <p class="order-id">Order ${order.id}</p>
                        <span class="order-status">${order.status || 'Processing'}</span>
                    </header>
                    <p class="order-date">${formatDateTime(order.placedAt)}</p>
                    <p class="order-items">${itemsLabel}</p>
                    <ul class="order-item-list">
                        ${(order.items || [])
                            .map(
                                item => `
                            <li>
                                <span>${item.name} × ${item.quantity}</span>
                                <span>${formatCurrency(item.total)}</span>
                            </li>
                        `
                            )
                            .join('')}
                    </ul>
                    <div class="order-totals">
                        <div><span>Subtotal</span><span>${formatCurrency(subtotal || 0)}</span></div>
                        <div><span>Shipping</span><span>${shipping === 0 ? 'Free' : formatCurrency(shipping || 0)}</span></div>
                        <div class="order-grand"><span>Total</span><span>${formatCurrency(total || 0)}</span></div>
                    </div>
                </li>
            `;
        })
        .join('');
}

function renderProfileDetails(profile) {
    if (profileForm) {
        profileForm.querySelector('[name="fullName"]').value = profile.name || '';
        profileForm.querySelector('[name="email"]').value = profile.email || '';
        profileForm.querySelector('[name="phone"]').value = profile.phone || '';
        profileForm.querySelector('[name="address"]').value = profile.address || '';
        profileForm.querySelector('[name="city"]').value = profile.city || '';
        profileForm.querySelector('[name="state"]').value = profile.state || '';
        profileForm.querySelector('[name="postalCode"]').value = profile.postalCode || '';
    }
    if (profileNameEl) {
        profileNameEl.textContent = profile.name || 'Cricket Enthusiast';
    }
    if (profileEmailEl) {
        profileEmailEl.textContent = profile.email || 'Add your email to stay updated.';
    }
    if (profilePhoneEl) {
        profilePhoneEl.textContent = profile.phone || 'Add a phone number for delivery updates.';
    }
    if (profileAddressEl) {
        if (profile.address) {
            profileAddressEl.textContent = `${profile.address}, ${profile.city}, ${profile.state} - ${profile.postalCode}`;
        } else {
            profileAddressEl.textContent = 'Add your delivery address to speed through checkout.';
        }
    }
}

function initCheckout() {
    if (!checkoutForm) return;

    renderCheckoutSummary();

    checkoutForm.addEventListener('submit', event => {
        event.preventDefault();
        if (!cart.length) {
            alert('Your cart is empty. Add items before placing an order.');
            return;
        }

        const formData = new FormData(checkoutForm);
        const totals = calculateCartTotals();
        const orderId = `CPS-${Date.now().toString().slice(-6)}`;
        const orderItems = cart
            .map(item => {
                const product = products.find(prod => prod.id === item.id);
                if (!product) return null;
                return {
                    id: product.id,
                    name: product.name,
                    quantity: item.quantity,
                    price: product.price,
                    total: product.price * item.quantity
                };
            })
            .filter(Boolean);

        const order = {
            id: orderId,
            placedAt: new Date().toISOString(),
            items: orderItems,
            totals,
            shipping: {
                name: formData.get('fullName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                address: formData.get('address'),
                city: formData.get('city'),
                state: formData.get('state'),
                postalCode: formData.get('postalCode')
            },
            payment: {
                method: formData.get('paymentMethod'),
                cardLast4: (formData.get('cardNumber') || '').slice(-4)
            },
            status: 'Processing'
        };

        const orders = loadOrders();
        orders.unshift(order);
        saveOrders(orders);

        const existingProfile = loadProfile();
        const updatedProfile = {
            ...existingProfile,
            name: formData.get('fullName') || existingProfile.name,
            email: formData.get('email') || existingProfile.email,
            phone: formData.get('phone') || existingProfile.phone,
            address: formData.get('address') || existingProfile.address,
            city: formData.get('city') || existingProfile.city,
            state: formData.get('state') || existingProfile.state,
            postalCode: formData.get('postalCode') || existingProfile.postalCode
        };
        saveProfile(updatedProfile);

        cart = [];
        saveCart();
        renderCart();
        renderCheckoutSummary();

        checkoutForm.reset();

        if (checkoutSuccess) {
            checkoutSuccess.hidden = false;
            const orderIdField = checkoutSuccess.querySelector('[data-order-id]');
            if (orderIdField) {
                orderIdField.textContent = orderId;
            }
        }

        renderOrderHistory();
    });
}

function initProfile() {
    if (!profileForm) return;
    const profile = loadProfile();
    renderProfileDetails(profile);
    renderOrderHistory();

    profileForm.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(profileForm);
        const updatedProfile = {
            name: formData.get('fullName') || '',
            email: formData.get('email') || '',
            phone: formData.get('phone') || '',
            address: formData.get('address') || '',
            city: formData.get('city') || '',
            state: formData.get('state') || '',
            postalCode: formData.get('postalCode') || ''
        };
        saveProfile(updatedProfile);
        renderProfileDetails(updatedProfile);
        if (profileFeedback) {
            profileFeedback.textContent = 'Profile saved successfully.';
            profileFeedback.hidden = false;
            setTimeout(() => {
                profileFeedback.hidden = true;
            }, 3000);
        }
    });
}

// Initialize
if (productGrid) {
    renderProducts(products);
    setActiveCategory('all');
}

renderCart();
initOfferCarousel();
renderDropdownProducts();
initCheckout();
initProfile();

// Event listeners
if (filterButtons.length && productGrid) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            setActiveCategory(button.dataset.category);
        });
    });
}

if (dropdownToggles.length) {
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', event => {
            event.preventDefault();
            openDropdown(toggle);
        });
    });

    document.addEventListener('click', event => {
        const target = event.target;
        if (target?.matches('[data-product-link]')) {
            closeDropdowns();
            return;
        }
        if (!target.closest('.nav-dropdown')) {
            closeDropdowns();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            closeDropdowns();
        }
    });
}

if (categoryLinks.length) {
    categoryLinks.forEach(link => {
        link.addEventListener('click', event => {
            closeDropdowns();
            const category = link.dataset.filterCategory || 'all';
            if (productGrid) {
                event.preventDefault();
                setActiveCategory(category);
                document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

if (searchInput && productGrid) {
    searchInput.addEventListener('input', () => {
        renderProducts(getFilteredProducts());
    });
}

if (productGrid) {
    productGrid.addEventListener('click', event => {
        const button = event.target.closest('.add-to-cart');
        if (!button) return;
        addToCart(button.dataset.product);
        openCart();
    });
}

if (cartItemsWrapper) {
    cartItemsWrapper.addEventListener('click', event => {
        const button = event.target.closest('button[data-product]');
        if (!button) return;
        const { product, action } = button.dataset;
        if (action === 'remove') {
            removeFromCart(product);
            return;
        }
        adjustQuantity(product, action);
    });
}

if (cartToggle) {
    cartToggle.addEventListener('click', toggleCart);
}
if (cartClose) {
    cartClose.addEventListener('click', closeCart);
}
if (backdrop) {
    backdrop.addEventListener('click', closeCart);
}

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (!cart.length) {
            alert('Your cart is empty. Add items before proceeding to checkout.');
            return;
        }
        window.location.href = 'checkout.html';
    });
}

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

document.querySelector('.cta-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const emailField = event.currentTarget.querySelector('[type="email"]');
    if (emailField?.value) {
        alert(`Thanks for subscribing, ${emailField.value}!`);
        emailField.value = '';
    }
});
