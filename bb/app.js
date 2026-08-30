/**
 * SURA Photography & Films - Client Application Logic
 * Pure White Aesthetic & Film-Inspired Experience
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. STORY & PHOTO ARCHIVES (Mapped to Local Media Folders)
    // =========================================================================

    const storiesDatabase = {
        'binyam-liya': {
            title: 'Binyam & Liya',
            subtitle: 'Addis Ababa • Grand Celebration',
            category: 'Wedding',
            categoryTag: 'WEDDING',
            cameraSpec: 'Sony Cinema FX3 & 35mm f/1.4 GM',
            gradeSpec: 'Kodak Portra 400 Warmth',
            description: 'An opulent celebration of love, exquisite attire, and unforgettable ballroom elegance in the heart of Addis Ababa.',
            cover: 'image1/DSC01925.jpg',
            photos: [
                'image1/DSC01192.jpg',
                'image1/DSC01417.jpg',
                'image1/DSC01454.jpg',
                'image1/DSC01534.jpg',
                'image1/DSC01537.jpg',
                'image1/DSC01600.jpg',
                'image1/DSC01631.jpg',
                'image1/DSC01705.jpg',
                'image1/DSC01792.jpg',
                'image1/DSC01925.jpg',
                'image1/DSC01954.jpg',
                'image1/DSC01993.jpg',
                'image1/DSC02150.jpg',
                'image1/DSC02522.jpg',
                'image1/DSC02528.jpg',
                'image1/DSC02540.jpg',
                'image1/DSC02544.jpg',
                'image1/DSC02570.jpg',
                'image1/DSC02585.jpg',
                'image1/DSC02670.jpg',
                'image1/DSC02673.jpg',
                'image1/DSC02686.jpg',
                'image1/DSC02697.jpg',
                'image1/DSC02705.jpg',
                'image1/DSC02738.jpg',
                'image1/DSC02750.jpg',
                'image1/DSC02759.jpg',
                'image1/DSC02783.jpg',
                'image1/DSC02798.jpg'
            ]
        },

        'dawit-selam': {
            title: 'Dawit & Selam',
            subtitle: 'Entoto Hills • Sunset Love Story',
            category: 'Pre-Wedding',
            categoryTag: 'PRE-WEDDING',
            cameraSpec: 'Leica SL2-S & Noctilux 50mm f/0.95',
            gradeSpec: 'Golden Hour Film Grading',
            description: 'Warm golden-hour intimacy, effortless smiles, and gentle embrace amidst tall eucalyptus and serene pine hills.',
            cover: 'image2/DSC06027.jpg',
            photos: [
                'image2/DSC05854.jpg',
                'image2/DSC05896.jpg',
                'image2/DSC05939.jpg',
                'image2/DSC05951.jpg',
                'image2/DSC05983.jpg',
                'image2/DSC05990.jpg',
                'image2/DSC05999.jpg',
                'image2/DSC06027.jpg',
                'image2/DSC06072.jpg',
                'image2/DSC06112.jpg',
                'image2/DSC06121.jpg',
                'image2/DSC06135.jpg',
                'image2/DSC06257.jpg',
                'image2/DSC06263.jpg',
                'image2/DSC06292.jpg',
                'image2/DSC06317.jpg',
                'image2/DSC06318.jpg',
                'image2/DSC06321.jpg',
                'image2/DSC06429.jpg',
                'image2/DSC06592.jpg',
                'image2/DSC06660.jpg',
                'image2/DSC06673.jpg',
                'image2/DSC06678.jpg',
                'image2/DSC06710.jpg',
                'image2/DSC06898.jpg',
                'image2/DSC06937.jpg',
                'image2/DSC06940.jpg',
                'image2/DSC06951.jpg',
                'image2/DSC06957.jpg',
                'image2/DSC06996.jpg',
                'image2/DSC07075.jpg',
                'image2/DSC07090.jpg',
                'image2/DSC07200.jpg',
                'image2/DSC07321.jpg',
                'image2/DSC07339.jpg',
                'image2/DSC07346.jpg',
                'image2/DSC07386.jpg',
                'image2/DSC07602.jpg',
                'image2/DSC07632.jpg',
                'image2/DSC07646.jpg',
                'image2/DSC07732.jpg',
                'image2/DSC07741.jpg'
            ]
        },

        'elias-helen': {
            title: 'Elias & Helen',
            subtitle: 'St. George Cathedral • Sacred Holy Matrimony',
            category: 'Church Wedding',
            categoryTag: 'CHURCH WEDDING',
            cameraSpec: 'Sony Cinema FX6 & 24-70mm f/2.8 GM II',
            gradeSpec: 'Cathedral Ambient Light Tone',
            description: 'Solemn holy vows beneath cathedral stained glass, radiant orthodox crowns, and eternal ancestral blessings.',
            cover: 'image3/DSC02974.jpg',
            photos: [
                'image3/DSC02954.jpg',
                'image3/DSC02961.jpg',
                'image3/DSC02971.jpg',
                'image3/DSC02974.jpg',
                'image3/DSC02991.jpg',
                'image3/DSC02994.jpg',
                'image3/DSC03004.jpg',
                'image3/DSC03015.jpg',
                'image3/DSC03061.jpg',
                'image3/DSC03091.jpg',
                'image3/DSC03099.jpg'
            ]
        },

        'yonas-meron': {
            title: 'Yonas & Meron',
            subtitle: 'The Luxury Suite • Bridal Couture Editorial',
            category: 'Bridal',
            categoryTag: 'BRIDAL',
            cameraSpec: 'Canon R5C & RF 50mm f/1.2L USM',
            gradeSpec: 'Editorial High-Key Silk Grading',
            description: 'Handcrafted bridal lacework, timeless veil portraits, quiet contemplation, and refined high-fashion elegance.',
            cover: 'image4/IMG_8819.JPG',
            photos: [
                'image4/IMG_8806.JPG',
                'image4/IMG_8807.JPG',
                'image4/IMG_8808.JPG',
                'image4/IMG_8809.JPG',
                'image4/IMG_8810.JPG',
                'image4/IMG_8811.JPG',
                'image4/IMG_8813.JPG',
                'image4/IMG_8814.JPG',
                'image4/IMG_8815.JPG',
                'image4/IMG_8816.JPG',
                'image4/IMG_8817.JPG',
                'image4/IMG_8818.JPG',
                'image4/IMG_8819.JPG',
                'image4/IMG_8820.JPG',
                'image4/IMG_8821.JPG',
                'image4/IMG_8822.JPG',
                'image4/IMG_8823.JPG',
                'image4/IMG_8824.JPG',
                'image4/IMG_8825.JPG',
                'image4/IMG_8828.JPG'
            ]
        },

        'kidus-bethlehem': {
            title: 'Kidus & Bethlehem',
            subtitle: 'Family Estate • Traditional Shemgelna',
            category: 'Shemgelna',
            categoryTag: 'SHEMGELNA',
            cameraSpec: 'Sony FX3 & Zeiss Batis 85mm f/1.8',
            gradeSpec: 'Heritage Warmth & Rich Saturation',
            description: 'Traditional Ethiopian blessing ceremony, cultural joy, woven Habesha Kemis, and elders’ honored speeches.',
            cover: 'image6/IMG_9855.JPG',
            photos: [
                'image6/IMG_9851.JPG',
                'image6/IMG_9852.JPG',
                'image6/IMG_9853.JPG',
                'image6/IMG_9854.JPG',
                'image6/IMG_9855.JPG',
                'image6/IMG_9856.JPG',
                'image6/IMG_9857.JPG',
                'image6/IMG_9858.JPG',
                'image6/IMG_9859.JPG',
                'image6/IMG_9860.JPG',
                'image6/IMG_9861.JPG',
                'image6/IMG_9862.JPG',
                'image6/IMG_9863.JPG',
                'image6/IMG_9864.JPG',
                'image6/IMG_9865.JPG',
                'image6/IMG_9866.JPG',
                'image6/IMG_9867.JPG',
                'image6/IMG_9869.JPG'
            ]
        },

        'abel-sara': {
            title: 'Abel & Sara',
            subtitle: 'Skylight Ballroom • Night Reception & Sparklers',
            category: 'Wedding',
            categoryTag: 'WEDDING',
            cameraSpec: 'Sony Cinema A7S III & 35mm f/1.4 GM',
            gradeSpec: 'Low-Light Cinema Grain & Gold Tint',
            description: 'Sparkler entrance, champagne toasts, electric midnight dancing, and joyful unforgettable party memories.',
            cover: 'image2/DSC07321.jpg',
            photos: [
                'image2/DSC07200.jpg',
                'image2/DSC07321.jpg',
                'image2/DSC07339.jpg',
                'image2/DSC07346.jpg',
                'image2/DSC07386.jpg',
                'image2/DSC07602.jpg',
                'image2/DSC07632.jpg',
                'image2/DSC07646.jpg',
                'image2/DSC07732.jpg',
                'image2/DSC07741.jpg',
                'image2/DSC06996.jpg',
                'image2/DSC07075.jpg',
                'image2/DSC07090.jpg',
                'image2/DSC06660.jpg',
                'image2/DSC06673.jpg',
                'image2/DSC06678.jpg',
                'image2/DSC06710.jpg',
                'image2/DSC06898.jpg',
                'image2/DSC06937.jpg',
                'image2/DSC06940.jpg'
            ]
        }
    };

    // =========================================================================
    // 2. HERO BANNER DRAWER MENU
    // =========================================================================
    const bannerMenuToggle = document.getElementById('bannerMenuToggle');
    const bannerDrawer = document.getElementById('bannerDrawer');
    const bannerDrawerClose = document.getElementById('bannerDrawerClose');
    const bannerDrawerBackdrop = document.getElementById('bannerDrawerBackdrop');
    const bannerNavLinks = document.querySelectorAll('.banner-nav-link');

    function openBannerDrawer() {
        bannerDrawer.classList.add('open');
        bannerDrawer.setAttribute('aria-hidden', 'false');
        bannerMenuToggle.classList.add('open');
        bannerMenuToggle.setAttribute('aria-expanded', 'true');
        bannerDrawerBackdrop.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeBannerDrawer() {
        bannerDrawer.classList.remove('open');
        bannerDrawer.setAttribute('aria-hidden', 'true');
        bannerMenuToggle.classList.remove('open');
        bannerMenuToggle.setAttribute('aria-expanded', 'false');
        bannerDrawerBackdrop.classList.remove('visible');
        document.body.style.overflow = '';
    }

    if (bannerMenuToggle) {
        bannerMenuToggle.addEventListener('click', () => {
            if (bannerDrawer.classList.contains('open')) {
                closeBannerDrawer();
            } else {
                openBannerDrawer();
            }
        });
    }

    if (bannerDrawerClose) {
        bannerDrawerClose.addEventListener('click', closeBannerDrawer);
    }

    if (bannerDrawerBackdrop) {
        bannerDrawerBackdrop.addEventListener('click', closeBannerDrawer);
    }

    bannerNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeBannerDrawer();
        });
    });

    // =========================================================================
    // 3. HERO VIDEO — MOBILE AUTOPLAY FIX
    //    iOS Safari requires a user gesture to play even muted videos.
    //    We attempt autoplay immediately; if it fails, we retry on first touch.
    // =========================================================================
    const heroVideo = document.getElementById('heroVideoMain');

    if (heroVideo) {
        // Attempt autoplay (works on Android and modern iOS with muted+playsinline)
        const playPromise = heroVideo.play();

        if (playPromise !== undefined) {
            playPromise.catch(() => {
                // Autoplay was blocked — wait for first user interaction then retry
                const unlockVideo = () => {
                    heroVideo.play().catch(() => { });
                    document.removeEventListener('touchstart', unlockVideo);
                    document.removeEventListener('click', unlockVideo);
                };
                document.addEventListener('touchstart', unlockVideo, { once: true, passive: true });
                document.addEventListener('click', unlockVideo, { once: true });
            });
        }

        // Ensure video stays muted (some browsers unmute on restore)
        heroVideo.muted = true;
    }

    // =========================================================================
    // 4. 35MM FILM GRAIN TOGGLE
    // =========================================================================
    const filmGrain = document.getElementById('filmGrain');
    const grainToggleBtn = document.getElementById('grainToggleBtn');

    let grainEnabled = localStorage.getItem('sura_grain') !== 'disabled';
    updateGrainUI();

    if (grainToggleBtn) {
        grainToggleBtn.addEventListener('click', () => {
            grainEnabled = !grainEnabled;
            localStorage.setItem('sura_grain', grainEnabled ? 'enabled' : 'disabled');
            updateGrainUI();
        });
    }

    function updateGrainUI() {
        if (grainEnabled) {
            filmGrain.classList.remove('disabled');
        } else {
            filmGrain.classList.add('disabled');
        }
    }

    // =========================================================================
    // 5. WEDDING CATEGORY & DEDICATED "WEDDING STORIES & COUPLES" PAGE SYSTEM
    // =========================================================================
    const homeView = document.getElementById('homeView');
    const weddingStoriesView = document.getElementById('weddingStoriesView');
    const weddingFilterPills = document.querySelectorAll('.wedding-filter-pill');
    const weddingStoryCards = document.querySelectorAll('#weddingStoriesGrid .story-card');
    const weddingStoriesCount = document.getElementById('weddingStoriesCount');
    const btnBackToHome = document.getElementById('btnBackToHome');
    const btnBackToHomeSecondary = document.getElementById('btnBackToHomeSecondary');
    const breadcrumbHome = document.getElementById('breadcrumbHome');
    const breadcrumbCategories = document.getElementById('breadcrumbCategories');
    const weddingCtaInquireBtn = document.getElementById('weddingCtaInquireBtn');

    function openWeddingStories(filter = 'all', updateHash = true) {
        if (weddingStoriesView && homeView) {
            homeView.style.display = 'none';
            homeView.setAttribute('aria-hidden', 'true');
            weddingStoriesView.style.display = 'block';
            weddingStoriesView.setAttribute('aria-hidden', 'false');

            filterWeddingStories(filter);
            window.scrollTo({ top: 0, behavior: 'instant' });

            if (updateHash && window.location.hash !== '#wedding-stories') {
                history.pushState({ view: 'wedding-stories' }, '', '#wedding-stories');
            }
        }
    }

    function closeWeddingStories(targetSection = 'categories', updateHash = true) {
        if (weddingStoriesView && homeView) {
            weddingStoriesView.style.display = 'none';
            weddingStoriesView.setAttribute('aria-hidden', 'true');
            homeView.style.display = 'block';
            homeView.setAttribute('aria-hidden', 'false');

            if (targetSection) {
                setTimeout(() => {
                    const targetEl = document.getElementById(targetSection.replace('#', ''));
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth' });
                    } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                }, 30);
            }

            if (updateHash) {
                history.pushState({ view: 'home' }, '', targetSection ? `#${targetSection.replace('#', '')}` : '#categories');
            }
        }
    }

    function filterWeddingStories(categoryKey = 'all') {
        let visibleCount = 0;

        weddingStoryCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (categoryKey === 'all' || cardCategory === categoryKey) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update active filter pill in Wedding Stories page
        weddingFilterPills.forEach(pill => {
            if (pill.getAttribute('data-wedding-filter') === categoryKey) {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });

        // Update counter text
        if (weddingStoriesCount) {
            weddingStoriesCount.innerHTML = `<i class="fa-solid fa-gem"></i> ${visibleCount} Curated Couple Collection${visibleCount === 1 ? '' : 's'}`;
        }
    }

    // Filter pills click inside Wedding Stories section
    weddingFilterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            const filter = pill.getAttribute('data-wedding-filter');
            filterWeddingStories(filter);
        });
    });

    // Back to home / categories buttons
    if (btnBackToHome) {
        btnBackToHome.addEventListener('click', (e) => {
            e.preventDefault();
            closeWeddingStories('categories');
        });
    }

    if (btnBackToHomeSecondary) {
        btnBackToHomeSecondary.addEventListener('click', (e) => {
            e.preventDefault();
            closeWeddingStories('categories');
        });
    }

    if (breadcrumbHome) {
        breadcrumbHome.addEventListener('click', (e) => {
            e.preventDefault();
            closeWeddingStories('hero');
        });
    }

    if (breadcrumbCategories) {
        breadcrumbCategories.addEventListener('click', (e) => {
            e.preventDefault();
            closeWeddingStories('categories');
        });
    }

    if (weddingCtaInquireBtn) {
        weddingCtaInquireBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeWeddingStories('contact');
        });
    }

    // Brand logo in header
    const brandLink = document.querySelector('.brand-link');
    if (brandLink) {
        brandLink.addEventListener('click', (e) => {
            if (weddingStoriesView && weddingStoriesView.style.display !== 'none') {
                e.preventDefault();
                closeWeddingStories('hero');
            }
        });
    }

    // Category Cards on Front Page (Wedding & Other Categories)
    const categoryCards = document.querySelectorAll('.category-card, .category-btn');
    categoryCards.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetFilter = item.getAttribute('data-category') || item.getAttribute('data-target-filter');
            if (targetFilter === 'wedding' || item.id === 'weddingCategoryCard' || item.id === 'weddingCategoryBtn') {
                e.preventDefault();
                openWeddingStories('all');
            } else if (targetFilter) {
                e.preventDefault();
                openWeddingStories(targetFilter);
            }
        });
    });

    // Front page filter pills in #categories
    const frontFilterPills = document.querySelectorAll('.filter-pill');
    frontFilterPills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            const filter = pill.getAttribute('data-filter');
            if (filter === 'wedding') {
                openWeddingStories('all');
            } else if (filter !== 'all') {
                openWeddingStories(filter);
            }
        });
    });

    // Drawer links handling
    bannerNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#wedding-stories') {
                e.preventDefault();
                openWeddingStories('all');
            } else if (weddingStoriesView && weddingStoriesView.style.display !== 'none') {
                const target = href ? href.replace('#', '') : 'hero';
                closeWeddingStories(target);
            }
        });
    });

    // Hero Explore Stories button
    const heroExploreBtn = document.getElementById('heroExploreBtn');
    if (heroExploreBtn) {
        heroExploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openWeddingStories('all');
        });
    }

    // Footer Wedding Stories links
    const footerWeddingLinks = document.querySelectorAll('#footerWeddingStoriesLink, [data-quick-filter]');
    footerWeddingLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('data-quick-filter') || 'all';
            openWeddingStories(filter);
        });
    });

    // Footer home/categories navigation when inside wedding page
    const footerHomeLinks = document.querySelectorAll('.footer-home-link, .footer-categories-link');
    footerHomeLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (weddingStoriesView && weddingStoriesView.style.display !== 'none') {
                const target = link.getAttribute('href') ? link.getAttribute('href').replace('#', '') : 'hero';
                closeWeddingStories(target);
            }
        });
    });

    // URL Hash Routing & Popstate
    function handleHashRoute() {
        const hash = window.location.hash;
        if (hash === '#wedding-stories' || hash === '#wedding-couples' || hash === '#wedding') {
            openWeddingStories('all', false);
        } else if (weddingStoriesView && weddingStoriesView.style.display !== 'none') {
            const target = hash ? hash.replace('#', '') : 'categories';
            closeWeddingStories(target, false);
        }
    }

    window.addEventListener('popstate', handleHashRoute);
    window.addEventListener('hashchange', handleHashRoute);

    // Initial route check on page load
    if (window.location.hash === '#wedding-stories' || window.location.hash === '#wedding-couples' || window.location.hash === '#wedding') {
        openWeddingStories('all', false);
    }

    // =========================================================================
    // 6. STORY GALLERY MODAL (Dedicated Couple Gallery)
    // =========================================================================
    const storyGalleryModal = document.getElementById('storyGalleryModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalCategoryBadge = document.getElementById('modalCategoryBadge');
    const modalStoryTitle = document.getElementById('modalStoryTitle');
    const modalStorySubtitle = document.getElementById('modalStorySubtitle');
    const modalCameraSpec = document.getElementById('modalCameraSpec');
    const modalGradeSpec = document.getElementById('modalGradeSpec');
    const modalPhotoCount = document.getElementById('modalPhotoCount');
    const modalMasonryGrid = document.getElementById('modalMasonryGrid');

    let currentActiveGallery = null;
    let currentPhotoList = [];

    function openStoryGallery(storyId) {
        const story = storiesDatabase[storyId];
        if (!story) return;

        currentActiveGallery = story;
        currentPhotoList = story.photos;

        modalCategoryBadge.textContent = story.categoryTag;
        modalStoryTitle.textContent = story.title;
        modalStorySubtitle.textContent = story.subtitle;
        modalCameraSpec.textContent = story.cameraSpec;
        modalGradeSpec.textContent = story.gradeSpec;
        modalPhotoCount.textContent = `${story.photos.length} High-Res Photographs`;

        // Populate masonry items
        modalMasonryGrid.innerHTML = '';
        story.photos.forEach((src, idx) => {
            const item = document.createElement('div');
            item.className = 'masonry-item';
            item.innerHTML = `
        <img src="${src}" alt="${story.title} Photograph ${idx + 1}" loading="lazy">
        <div class="masonry-item-hover">
          <i class="fa-solid fa-expand"></i>
        </div>
      `;
            item.addEventListener('click', () => {
                openLightbox(idx);
            });
            modalMasonryGrid.appendChild(item);
        });

        storyGalleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeStoryGallery() {
        storyGalleryModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    weddingStoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const storyId = card.getAttribute('data-story-id');
            if (storyId) openStoryGallery(storyId);
        });
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const storyId = card.getAttribute('data-story-id');
                if (storyId) openStoryGallery(storyId);
            }
        });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeStoryGallery);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeStoryGallery);

    // =========================================================================
    // 7. FULL-SCREEN LIGHTBOX SLIDESHOW
    // =========================================================================
    const lightboxViewer = document.getElementById('lightboxViewer');
    const lightboxBackdrop = document.getElementById('lightboxBackdrop');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
    const lightboxZoomBtn = document.getElementById('lightboxZoomBtn');
    const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
    const lightboxNextBtn = document.getElementById('lightboxNextBtn');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxIndex = document.getElementById('lightboxIndex');
    const lightboxPhotoTitle = document.getElementById('lightboxPhotoTitle');

    let currentPhotoIdx = 0;
    let isZoomed = false;

    function openLightbox(photoIndex) {
        if (!currentPhotoList || currentPhotoList.length === 0) return;
        currentPhotoIdx = photoIndex;
        updateLightbox();
        lightboxViewer.classList.add('active');
    }

    function closeLightbox() {
        lightboxViewer.classList.remove('active');
        isZoomed = false;
        lightboxImage.classList.remove('zoomed');
    }

    function updateLightbox() {
        lightboxImage.src = currentPhotoList[currentPhotoIdx];
        lightboxIndex.textContent = `${currentPhotoIdx + 1} / ${currentPhotoList.length}`;
        if (currentActiveGallery) {
            lightboxPhotoTitle.textContent = currentActiveGallery.title;
        }
        isZoomed = false;
        lightboxImage.classList.remove('zoomed');
    }

    function nextPhoto() {
        currentPhotoIdx = (currentPhotoIdx + 1) % currentPhotoList.length;
        updateLightbox();
    }

    function prevPhoto() {
        currentPhotoIdx = (currentPhotoIdx - 1 + currentPhotoList.length) % currentPhotoList.length;
        updateLightbox();
    }

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
    if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextPhoto);
    if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevPhoto);

    if (lightboxZoomBtn) {
        lightboxZoomBtn.addEventListener('click', () => {
            isZoomed = !isZoomed;
            lightboxImage.classList.toggle('zoomed', isZoomed);
        });
    }

    // Keyboard navigation for Modal & Lightbox
    window.addEventListener('keydown', (e) => {
        if (lightboxViewer.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextPhoto();
            if (e.key === 'ArrowLeft') prevPhoto();
        } else if (storyGalleryModal.classList.contains('active')) {
            if (e.key === 'Escape') closeStoryGallery();
        } else if (videoModal.classList.contains('active')) {
            if (e.key === 'Escape') closeVideoModal();
        } else if (bannerDrawer && bannerDrawer.classList.contains('open')) {
            if (e.key === 'Escape') closeBannerDrawer();
        }
    });

    // =========================================================================
    // 8. CINEMA VIDEO PLAYER MODAL
    // =========================================================================
    const videoModal = document.getElementById('videoModal');
    const videoModalBackdrop = document.getElementById('videoModalBackdrop');
    const videoModalCloseBtn = document.getElementById('videoModalCloseBtn');
    const mainCinemaPlayer = document.getElementById('mainCinemaPlayer');
    const cinemaVideoSource = document.getElementById('cinemaVideoSource');
    const videoModalTitle = document.getElementById('videoModalTitle');
    const videoModalTag = document.getElementById('videoModalTag');
    const videoInquireBtn = document.getElementById('videoInquireBtn');
    const btnVideoBack = document.getElementById('btnVideoBack');

    const cinemaCards = document.querySelectorAll('.cinema-card');

    function openVideoModal(videoSrc, videoTitle, videoCategory) {
        videoModalTitle.textContent = videoTitle || 'Cinematic Showcase';
        videoModalTag.textContent = `${(videoCategory || 'CINEMA').toUpperCase()} 4K REEL`;
        cinemaVideoSource.src = videoSrc;
        mainCinemaPlayer.load();
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        mainCinemaPlayer.play().catch(e => console.log('Autoplay handled'));
    }

    function closeVideoModal() {
        if (mainCinemaPlayer) {
            mainCinemaPlayer.pause();
        }
        if (cinemaVideoSource) {
            cinemaVideoSource.src = '';
        }
        if (videoModal) {
            videoModal.classList.remove('active');
            videoModal.setAttribute('aria-hidden', 'true');
        }
        if (!storyGalleryModal || !storyGalleryModal.classList.contains('active')) {
            document.body.style.overflow = '';
        }

        // Return to the cinema video gallery
        const cinemaSection = document.getElementById('cinema');
        if (cinemaSection) {
            cinemaSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    cinemaCards.forEach(card => {
        card.addEventListener('click', () => {
            const src = card.getAttribute('data-video-src');
            const title = card.getAttribute('data-video-title');
            const category = card.getAttribute('data-video-category');
            if (src) {
                openVideoModal(src, title, category);
            }
        });
    });

    if (btnVideoBack) {
        btnVideoBack.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeVideoModal();
        });
        btnVideoBack.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            closeVideoModal();
        }, { passive: false });
    }

    if (videoModalCloseBtn) videoModalCloseBtn.addEventListener('click', closeVideoModal);
    if (videoModalBackdrop) videoModalBackdrop.addEventListener('click', closeVideoModal);

    if (videoInquireBtn) {
        videoInquireBtn.addEventListener('click', () => {
            closeVideoModal();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }



    // =========================================================================
    // 10. FRONT-PAGE INQUIRY FORM & TOAST MODAL
    // =========================================================================
    const inquiryForm = document.getElementById('weddingInquiryForm');
    const toastModal = document.getElementById('toastModal');
    const toastCloseBtn = document.getElementById('toastCloseBtn');
    const submitInquiryBtn = document.getElementById('submitInquiryBtn');

    if (inquiryForm) {
        inquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (!inquiryForm.checkValidity()) {
                inquiryForm.reportValidity();
                return;
            }

            // Button loading state
            const originalText = submitInquiryBtn.innerHTML;
            submitInquiryBtn.disabled = true;
            submitInquiryBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> CHECKING AVAILABILITY...`;

            setTimeout(() => {
                submitInquiryBtn.disabled = false;
                submitInquiryBtn.innerHTML = originalText;
                inquiryForm.reset();
                toastModal.classList.add('active');
            }, 900);
        });
    }

    if (toastCloseBtn) {
        toastCloseBtn.addEventListener('click', () => {
            toastModal.classList.remove('active');
        });
    }

    // Footer Year
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

});
