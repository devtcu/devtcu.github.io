(() => {
var exports = {};
exports.id = 931;
exports.ids = [931];
exports.modules = {

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 8704:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-dom/server-rendering-stub");

/***/ }),

/***/ 7897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react-server-dom-webpack/client");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 5868:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/app-render");

/***/ }),

/***/ 1844:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/get-segment-param");

/***/ }),

/***/ 6624:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/helpers/interception-routes");

/***/ }),

/***/ 5281:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module");

/***/ }),

/***/ 7085:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context");

/***/ }),

/***/ 199:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hash");

/***/ }),

/***/ 9569:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/hooks-client-context");

/***/ }),

/***/ 7160:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context");

/***/ }),

/***/ 893:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix");

/***/ }),

/***/ 2336:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url");

/***/ }),

/***/ 7887:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll");

/***/ }),

/***/ 8735:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot");

/***/ }),

/***/ 120:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url");

/***/ }),

/***/ 8231:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path");

/***/ }),

/***/ 4614:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix");

/***/ }),

/***/ 3750:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash");

/***/ }),

/***/ 982:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href");

/***/ }),

/***/ 9618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/server-inserted-html");

/***/ }),

/***/ 8423:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils");

/***/ }),

/***/ 3228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalError: () => (/* reexport default from dynamic */ next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default.a),
/* harmony export */   __next_app__: () => (/* binding */ __next_app__),
/* harmony export */   originalPathname: () => (/* binding */ originalPathname),
/* harmony export */   pages: () => (/* binding */ pages),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   tree: () => (/* binding */ tree)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);
/* harmony import */ var next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9513);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1823);
/* harmony import */ var next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_components_error_boundary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2502);
/* harmony import */ var next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__) if(["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => next_dist_server_app_render_entry_base__WEBPACK_IMPORTED_MODULE_3__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
// @ts-ignore this need to be imported from next/dist to be external


const AppPageRouteModule = next_dist_server_future_route_modules_app_page_module__WEBPACK_IMPORTED_MODULE_0__.AppPageRouteModule;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = {
        children: [
        '',
        {
        children: ['__PAGE__', {}, {
          page: [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7170)), "/Users/dev/Desktop/devtcu.github.io/src/app/page.js"],
          
        }]
      },
        {
        'layout': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2911)), "/Users/dev/Desktop/devtcu.github.io/src/app/layout.js"],
'not-found': [() => Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5493, 23)), "next/dist/client/components/not-found-error"],
        
      }
      ]
      }.children;
const pages = ["/Users/dev/Desktop/devtcu.github.io/src/app/page.js"];

// @ts-expect-error - replaced by webpack/turbopack loader

const __next_app_require__ = __webpack_require__
const __next_app_load_chunk__ = () => Promise.resolve()
const originalPathname = "/page";
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};

// Create and export the route module that will be consumed.
const routeModule = new AppPageRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: "",
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
});

//# sourceMappingURL=app-page.js.map

/***/ }),

/***/ 6117:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23))

/***/ }),

/***/ 3928:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3404))

/***/ }),

/***/ 3404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2957);
/* harmony import */ var typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typewriter_effect__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 




const isBrowser = ()=>"undefined" !== "undefined";
const isProduction = (/* unused pure expression or super */ null && ("production" === "production"));
const safeDomOperation = (callback)=>{
    if (isBrowser()) {
        setTimeout(()=>{
            try {
                callback();
            } catch (error) {
                console.warn("DOM operation failed:", error);
            }
        }, 0);
    }
};
function Home() {
    const aboutRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const projectsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const contactRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const projectCardsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)([]);
    const featuredProjectRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const parallaxRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const birdsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const starsRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isBrowser()) return;
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto"
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isBrowser()) return;
        const setupAnimations = ()=>{
            const sectionRefs = [
                aboutRef,
                projectsRef,
                contactRef,
                featuredProjectRef
            ];
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px"
            };
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-slide-in");
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            sectionRefs.forEach((ref)=>{
                if (ref.current) {
                    observer.observe(ref.current);
                }
            });
            const cardObserver = new IntersectionObserver((entries)=>{
                entries.forEach((entry, index)=>{
                    if (entry.isIntersecting) {
                        setTimeout(()=>{
                            entry.target.classList.add("animate-fade-in");
                        }, index * 150);
                        cardObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);
            projectCardsRef.current.forEach((card)=>{
                if (card) {
                    cardObserver.observe(card);
                }
            });
            return ()=>{
                sectionRefs.forEach((ref)=>{
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                });
                projectCardsRef.current.forEach((card)=>{
                    if (card) {
                        cardObserver.unobserve(card);
                    }
                });
            };
        };
        setTimeout(setupAnimations, 100);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isBrowser()) return;
        const handleParallax = ()=>{
            if (!parallaxRef.current) return;
            const scrollPosition = window.scrollY;
            const heroSection = document.getElementById("home");
            if (!heroSection) return;
            const heroHeight = heroSection.offsetHeight;
            const headerHeight = document.querySelector("nav")?.offsetHeight || 0;
            const scrollPercent = Math.min(1, scrollPosition / (heroHeight - headerHeight));
            const waveBg = parallaxRef.current.querySelector(".wave-bg");
            if (waveBg) {
                waveBg.style.transform = `translateX(-${scrollPercent * 10}%)`;
            }
        };
        window.addEventListener("scroll", handleParallax);
        handleParallax();
        return ()=>{
            window.removeEventListener("scroll", handleParallax);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!isBrowser()) return;
        let lastScrollY = window.scrollY;
        let ticking = false;
        const updateBirds = ()=>{
            if (!birdsRef.current || !aboutRef.current) return;
            const aboutSection = document.getElementById("about");
            if (!aboutSection) return;
            const aboutRect = aboutSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const isSectionVisible = aboutRect.top < windowHeight && aboutRect.bottom > 0;
            const isSectionApproaching = aboutRect.top < windowHeight + 200;
            if (isSectionApproaching) {
                const scrollProgress = Math.min(1, Math.max(0, (windowHeight - aboutRect.top) / windowHeight));
                const birds = Array.from(birdsRef.current.querySelectorAll(".bird"));
                birds.forEach((bird, index)=>{
                    const delay = index * 0.15;
                    const viewportWidth = window.innerWidth;
                    const moveDistance = viewportWidth * 1.5; // ADJUST THIS: higher = faster movement, ensure birds exit screen
                    // Calculate position based on scroll progress
                    let position = (scrollProgress - delay) * moveDistance;
                    // Keep the birds offscreen until they should enter
                    if (scrollProgress < delay) {
                        position = -bird.offsetWidth;
                        bird.style.opacity = "0";
                    } else {
                        // Fade in as they enter
                        if (position < 0) {
                            // Gradually fade in as they enter the viewport
                            bird.style.opacity = String(Math.min(1, (position + bird.offsetWidth) / bird.offsetWidth));
                        } else if (position > viewportWidth - bird.offsetWidth) {
                            // Gradually fade out as they leave the viewport
                            bird.style.opacity = String(Math.max(0, 1 - (position - (viewportWidth - bird.offsetWidth)) / bird.offsetWidth));
                        } else {
                            bird.style.opacity = "1";
                        }
                    // Allow birds to move all the way across and off screen
                    // No limit applied to position, so birds will continue to move based on scroll progress
                    }
                    // CUSTOMIZATION POINT: Adjust these constants for fine-tuning bird movement
                    const aboutTitlePositionPercent = 0.5; // Assuming title is centered (0.5 = 50% of screen width)
                    const titleWidth = aboutRef.current.offsetWidth;
                    const titlePosition = viewportWidth * aboutTitlePositionPercent - titleWidth / 2;
                    // Debug message to console when bird is crossing title
                    if (position >= titlePosition - 20 && position <= titlePosition + titleWidth + 20 && index === 0) {
                        console.log("Bird crossing title area!");
                    }
                    // Apply transform in pixels rather than percentages for more reliable positioning
                    bird.style.transform = `translateX(${position}px)`;
                });
            } else {
                // Reset birds when section not visible
                const birds = birdsRef.current.querySelectorAll(".bird");
                birds.forEach((bird)=>{
                    bird.style.opacity = "0";
                    bird.style.transform = "translateX(-120px)"; // Reset to starting position off-screen
                });
            }
            ticking = false;
        };
        const onScroll = ()=>{
            lastScrollY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(()=>{
                    updateBirds();
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        // Run once on mount
        setTimeout(updateBirds, 300);
        return ()=>{
            window.removeEventListener("scroll", onScroll);
        };
    }, []);
    // Add effect for the single giant star in About Me section
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Skip on server-side
        if (!isBrowser()) return;
        // Verify star.gif loading
        const debugImg = new Image();
        debugImg.onload = ()=>console.log("Giant star image loaded successfully");
        debugImg.onerror = ()=>console.error("Failed to load giant star image");
        debugImg.src = `${ false || ""}/parallax/star.gif`;
        // Ensure star is properly contained in the About section
        const setupStar = ()=>{
            if (!starsRef.current) return;
            const aboutSection = document.getElementById("about");
            if (!aboutSection) return;
            // Get section dimensions
            const rect = aboutSection.getBoundingClientRect();
            // Ensure the star container has the correct dimensions
            starsRef.current.style.position = "absolute";
            starsRef.current.style.top = "0";
            starsRef.current.style.left = "0";
            starsRef.current.style.width = "100%";
            starsRef.current.style.height = "100%";
            starsRef.current.style.zIndex = "0";
            starsRef.current.style.overflow = "hidden";
            console.log("Star effect is set up and contained within About section");
        };
        // Apply immediately and on window resize
        setupStar();
        window.addEventListener("resize", setupStar);
        return ()=>{
            window.removeEventListener("resize", setupStar);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Skip on server-side
        if (!isBrowser()) return;
        let isHoveringTopArea = false;
        let lastScrollY = 0;
        let headerTimeout = null;
        const handleScroll = ()=>{
            const nav = document.querySelector("nav");
            const profileImage = document.querySelector(".profile-image");
            if (nav && profileImage) {
                const imageRect = profileImage.getBoundingClientRect();
                const imageBottom = imageRect.bottom;
                const navHeight = nav.offsetHeight;
                const scrollY = window.scrollY;
                lastScrollY = scrollY;
                // Calculate how much we've scrolled past the bottom of the image
                // We subtract the nav height so we start hiding when the image bottom reaches the nav bottom
                const scrollPastImage = Math.max(0, -imageBottom + navHeight);
                // Set the maximum amount the header can be hidden (its own height)
                const maxScroll = nav.offsetHeight;
                // Calculate how much to translate the header up
                // Consider hover state if not actively scrolling down
                const translateY = isHoveringTopArea && !activeScrolling ? 0 : Math.min(scrollPastImage, maxScroll);
                // Make the header translucent when scrolling down
                const startFade = 20; // Start fading after scrolling this many pixels
                const endFade = 100; // Fully translucent at this scroll position
                if (scrollY > startFade) {
                    // Calculate opacity between 1 (solid) and 0.7 (translucent)
                    const scrollRange = endFade - startFade;
                    const scrollProgress = Math.min(1, (scrollY - startFade) / scrollRange);
                    const finalOpacity = 1 - scrollProgress * 0.3; // Opacity between 1 and 0.7
                    // Apply background with transparency
                    nav.style.backgroundColor = `rgba(17, 24, 39, ${finalOpacity})`;
                    nav.style.backdropFilter = "blur(8px)";
                    nav.style.webkitBackdropFilter = "blur(8px)";
                } else {
                    // Reset to solid when at top
                    nav.style.backgroundColor = "rgb(17, 24, 39)"; // bg-gray-900
                    nav.style.backdropFilter = "none";
                    nav.style.webkitBackdropFilter = "none";
                }
                // Apply the hide-on-scroll effect
                nav.style.transform = `translateY(-${translateY}px)`;
                // Use different transition timing for appearing (faster) vs disappearing (slower)
                const transitionTiming = translateY === 0 ? "transform 0.25s ease-out, background-color 0.3s ease" // Faster when appearing
                 : "transform 0.4s ease-in, background-color 0.3s ease"; // Slower when disappearing
                nav.style.transition = transitionTiming;
            }
        };
        // Show header when mouse is in top area
        const showHeader = ()=>{
            if (!isHoveringTopArea) {
                isHoveringTopArea = true;
                handleScroll(); // Update header visibility immediately
                // Clear existing timeout if any
                if (headerTimeout) {
                    clearTimeout(headerTimeout);
                }
            }
        };
        // Hide header after delay when mouse leaves top area
        const hideHeaderAfterDelay = ()=>{
            // Clear existing timeout if any
            if (headerTimeout) {
                clearTimeout(headerTimeout);
            }
            // Set a timeout to hide the header after a delay
            headerTimeout = setTimeout(()=>{
                isHoveringTopArea = false;
                handleScroll();
            }, 1000); // 1 second delay before hiding header
        };
        // Store last scroll position to detect direction
        let lastScrollPos = window.scrollY;
        let scrollTimer = null;
        let activeScrolling = false;
        // Handle scroll events to override hover behavior when scrolling down
        const handleScrollDirection = ()=>{
            const currentScrollPos = window.scrollY;
            // Consider scrolling down only if we've moved more than a few pixels
            // This prevents tiny scroll fluctuations from hiding the header
            const scrollingDown = currentScrollPos > lastScrollPos + 5;
            lastScrollPos = currentScrollPos;
            // Track active scrolling
            activeScrolling = true;
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(()=>{
                activeScrolling = false;
            }, 100); // Reset after 100ms of no scrolling
            // If scrolling down significantly and not at the top, hide header immediately regardless of hover
            if (scrollingDown && currentScrollPos > 100) {
                if (isHoveringTopArea) {
                    isHoveringTopArea = false;
                    handleScroll(); // Update header visibility immediately
                }
            }
        };
        // Handle mouse position to show header when near top of screen
        const handleMouseMove = (e)=>{
            // Check if mouse is in the top 20% (approximately) of the viewport
            const topFifthHeight = window.innerHeight * 0.2;
            const isInTopArea = e.clientY <= topFifthHeight;
            // Only show header if mouse is in top area and we're not actively scrolling down
            if (isInTopArea) {
                showHeader();
            } else if (isHoveringTopArea) {
                hideHeaderAfterDelay();
            }
        };
        // Handle touch events for the header trigger area
        const setupTouchEvents = ()=>{
            const triggerArea = document.getElementById("header-trigger-area");
            if (triggerArea) {
                // Show header when touching trigger area
                triggerArea.addEventListener("touchstart", (e)=>{
                    e.preventDefault(); // Prevent default touch behavior
                    showHeader();
                });
                // Setup mouse events for the trigger area
                triggerArea.addEventListener("mouseenter", showHeader);
                triggerArea.addEventListener("mouseleave", hideHeaderAfterDelay);
            }
            // Also handle direct nav interaction
            const nav = document.querySelector("nav");
            if (nav) {
                nav.addEventListener("mouseenter", showHeader);
                nav.addEventListener("mouseleave", hideHeaderAfterDelay);
                nav.addEventListener("touchstart", (e)=>{
                    showHeader();
                }, {
                    passive: true
                });
            }
        };
        // Run initial setup
        handleScroll();
        setTimeout(setupTouchEvents, 100); // Short delay to ensure DOM is ready
        // Add event listeners
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", handleScrollDirection); // Add scroll direction detection
        window.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            // Clean up all event listeners
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleScrollDirection);
            window.removeEventListener("mousemove", handleMouseMove);
            const triggerArea = document.getElementById("header-trigger-area");
            if (triggerArea) {
                triggerArea.removeEventListener("touchstart", showHeader);
                triggerArea.removeEventListener("mouseenter", showHeader);
                triggerArea.removeEventListener("mouseleave", hideHeaderAfterDelay);
            }
            const nav = document.querySelector("nav");
            if (nav) {
                nav.removeEventListener("mouseenter", showHeader);
                nav.removeEventListener("mouseleave", hideHeaderAfterDelay);
                nav.removeEventListener("touchstart", showHeader);
            }
            if (headerTimeout) {
                clearTimeout(headerTimeout);
            }
            if (scrollTimer) {
                clearTimeout(scrollTimer);
            }
        };
    }, []);
    // Contact functionality now uses direct mailto link
    // Animation styles have been moved to globals.css
    // Add gentle fade-in effect for sections and paragraphs as user scrolls down
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Skip on server-side
        if (!isBrowser()) return;
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen bg-black",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Devansh Kalluhole Matham",
                        "alternateName": [
                            "Devansh Matham",
                            "Devansh Kalluhole"
                        ],
                        "url": "https://devtcu.github.io/",
                        "image": "https://devtcu.github.io/profile-1753671946.jpg",
                        "jobTitle": "Research Associate",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Texas Christian University"
                        },
                        "alumniOf": {
                            "@type": "EducationalOrganization",
                            "name": "Texas Christian University"
                        },
                        "knowsAbout": [
                            "Physics",
                            "Machine Learning",
                            "Graph Neural Networks",
                            "Topological Data Analysis",
                            "CUDA Programming",
                            "Computational Biology",
                            "Deep Learning"
                        ],
                        "sameAs": [
                            "https://github.com/devtcu",
                            "https://www.linkedin.com/in/devansh-km/"
                        ]
                    })
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed top-0 left-0 w-full h-12 z-40 cursor-default",
                style: {
                    pointerEvents: "auto"
                },
                "aria-hidden": "true",
                id: "header-trigger-area"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "shadow-md fixed w-full z-50 transition-all duration-300 bg-gray-900",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex justify-between h-16",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-3xl font-bold text-gray-400",
                                    children: "devansh."
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "/blog",
                                        className: "text-gray-400 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium",
                                        children: "Blog"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#about",
                                        className: "text-gray-400 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium",
                                        children: "Myself"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#projects",
                                        className: "text-gray-400 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium",
                                        children: "My Work"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        href: "#contact",
                                        className: "text-gray-400 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium",
                                        children: "Reach Me"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "home",
                className: "pt-28 pb-24 relative bg-gray-900 text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-0 overflow-hidden",
                        ref: parallaxRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "parallax-layer wave-bg"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 mt-12",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative mx-auto",
                                style: {
                                    width: "270px",
                                    height: "270px"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: `${ false || ""}/profile-1753671946.jpg`,
                                    alt: "Devansh",
                                    className: "profile-image mx-auto rounded-full border-4 border-white shadow-lg object-cover hover:scale-105 transition-transform duration-300",
                                    style: {
                                        width: "100%",
                                        height: "100%"
                                    },
                                    onError: (e)=>{
                                        e.target.onerror = null;
                                        e.target.style.backgroundColor = "#4B5563"; // bg-gray-600 as fallback
                                        e.target.alt = "Profile Image";
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "min-h-[40px] md:min-h-[48px] mt-8",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    onInit: (typewriter)=>{
                                        typewriter.changeDelay(40).typeString("Hello, I'm Devansh").start();
                                    },
                                    options: {
                                        cursor: "|",
                                        cursorClassName: "big-cursor",
                                        wrapperClassName: "text-4xl md:text-5xl font-extrabold",
                                        loop: false,
                                        autoStart: false
                                    }
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "min-h-[56px] md:min-h-[64px] mt-6 mb-16",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((typewriter_effect__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    onInit: (typewriter)=>{
                                        typewriter.changeDelay(35).pauseFor(1200) // Wait for the name to finish typing
                                        .typeString("Physics enthusiast").pauseFor(500).deleteAll().typeString("Driven to create").pauseFor(500).deleteAll().typeString(":)").pauseFor(800).deleteAll().start();
                                    },
                                    options: {
                                        cursor: "|",
                                        cursorClassName: "text-white animate-pulse",
                                        wrapperClassName: "text-lg md:text-xl",
                                        loop: true,
                                        autoStart: false,
                                        cursorBlinkSpeed: 800
                                    }
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "about",
                className: "pt-20 pb-28 bg-gray-900 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "stars-container",
                        ref: starsRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "giant-star"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative",
                        style: {
                            zIndex: 2
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-center space-x-12 mb-16",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "https://github.com/devtcu",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-icon group flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-gray-400 group-hover:text-white transition-all duration-300",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "h-8 w-8",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mt-2 text-sm text-gray-400 group-hover:text-white transition-all duration-300",
                                                children: "GitHub"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "https://www.linkedin.com/in/devansh-km/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-icon group flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-gray-400 group-hover:text-blue-400 transition-all duration-300",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "h-8 w-8",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
                                                        clipRule: "evenodd"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mt-2 text-sm text-gray-400 group-hover:text-blue-400 transition-all duration-300",
                                                children: "LinkedIn"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: `${ false || ""}/files/Resume.pdf`,
                                        rel: "noopener noreferrer",
                                        className: "social-icon group flex flex-col items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "text-gray-400 group-hover:text-green-400 transition-all duration-300",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    className: "h-8 w-8",
                                                    fill: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "mt-2 text-sm text-gray-400 group-hover:text-green-400 transition-all duration-300",
                                                children: "Resume"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative text-center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "birds-container",
                                        ref: birdsRef,
                                        style: {
                                            zIndex: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bird bird-1"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bird bird-2"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bird bird-3"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        ref: aboutRef,
                                        className: "text-3xl font-bold text-blue-500 inline-block relative z-10 mb-11",
                                        children: "About Me"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "mt-4 text-lg text-gray-300 max-w-3xl mx-auto relative",
                                style: {
                                    zIndex: 2
                                },
                                children: [
                                    "\xa0\xa0\xa0\xa0Hey there! I'm a passionate researcher and current physics graduate student at CUNY (City College). Over the past few years, I've been involved in a variety of projects in computational, solid state, and atomic physics.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "\xa0\xa0\xa0\xa0 Most recently, I worked as a research associate where I combined topology and graph neural networks to simulate biological phenomena. I'm developing a framework to run agent-based models to run on NVIDIA GPU's using CUDA. You can find some of my work and updates below!",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "\xa0\xa0\xa0\xa0My previous research endeavors include working as an undergraduate research assistant at Texas Christian University, where I studied surface properties of nanocrystalline oxides through spectroscopy, while also engineering UHV components to enable cathodoluminescence imaging. I have presented my research at various APS conferences around Texas and won multiple best presenter awards.",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "\xa0\xa0\xa0\xa0I'm actively searching for opportunities/collaborations to apply and grow my skills. Feel free to reach out to my email or connect with me on Linkedin!"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                id: "projects",
                className: "pb-16 bg-gray-900 relative",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            ref: projectsRef,
                            className: "text-3xl font-bold text-blue-600 text-center mb-16",
                            children: "Projects"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-20",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-2xl font-bold text-blue-400 mb-12 text-left",
                                    children: "Featured"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    ref: featuredProjectRef,
                                    className: "mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "text-left lg:sticky lg:top-24",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                    className: "text-xl font-semibold text-white mb-4",
                                                    children: "Towards a Framework For Self-Supervised Graph-Based Machine Learning"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "text-gray-300 mb-4 leading-relaxed",
                                                    children: [
                                                        "Data represented in ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-blue-400",
                                                            children: "non-euclidean space"
                                                        }),
                                                        " in the form of graphs provide invaluable insight into objects and their relationships with neighbours. We start with an assay of unfused cells which forms our initial graph--the nuclei are our nodes. Subsequent edges are formed by implementing the delaunay triangulation algorithm on the assay."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "text-gray-300 mb-4 leading-relaxed",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-blue-400",
                                                            children: " Graph Convolutional Networks"
                                                        }),
                                                        " are used to analyze the topological properties of this graph, enabling the prediction of spatial patterns such as ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-blue-400",
                                                            children: "syncytial"
                                                        }),
                                                        "-dominated or unfused-dominated regions. By leveraging self-supervised learning on small subgraphs--given that our nodes carry no labels--and higher-order neighbor aggregation, these networks aim to uncover consistent structural features, offering a deeper understanding of spatial heterogeneity."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: "text-gray-300 mb-6 leading-relaxed",
                                                    children: [
                                                        "My work will continue to explore the integration of persistent homology and advanced GCN architectures to enhance the detection of ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-blue-400",
                                                            n: true,
                                                            children: " spatial dynamics in biological systems"
                                                        }),
                                                        ". Future efforts will focus on validating these models with Agent-Based Simulations (you can find a simple simulation ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "#agent-based-model",
                                                            onClick: (e)=>{
                                                                e.preventDefault();
                                                                const element = document.getElementById("agent-based-model");
                                                                if (element) {
                                                                    element.scrollIntoView({
                                                                        behavior: "smooth"
                                                                    });
                                                                    // Force all child text elements to be white FIRST
                                                                    const textElements = element.querySelectorAll("h3, p");
                                                                    textElements.forEach((el)=>{
                                                                        el.style.setProperty("color", "white", "important");
                                                                    });
                                                                    element.style.setProperty("background-color", "black", "important");
                                                                    element.style.setProperty("color", "white", "important");
                                                                    element.classList.add("animate-pulse");
                                                                    setTimeout(()=>{
                                                                        element.style.removeProperty("background-color");
                                                                        element.style.removeProperty("color");
                                                                        textElements.forEach((el)=>{
                                                                            el.style.removeProperty("color");
                                                                        });
                                                                        element.classList.remove("animate-pulse");
                                                                    }, 2000);
                                                                }
                                                            },
                                                            className: "text-blue-400 hover:text-blue-300 underline transition-colors duration-300 cursor-pointer",
                                                            children: "here"
                                                        }),
                                                        ") and expanding to diverse datasets, aiming to contribute meaningful insights to graph-based machine learning."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    href: "https://github.com/devtcu/Topological-Data-Analysis",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition-colors duration-300",
                                                    children: [
                                                        "View Source Code",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                            className: "ml-2 h-4 w-4",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                                                                clipRule: "evenodd"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-center lg:justify-end mt-35",
                                            children: [
                                                " ",
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "bg-gray-800 p-4 rounded-lg shadow-lg max-w-2xl",
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: `${ false || ""}/voronoi.jpg`,
                                                                            alt: "Voronoi Diagram Visualization",
                                                                            className: "w-full h-auto rounded border border-gray-600",
                                                                            onError: (e)=>{
                                                                                e.target.style.backgroundColor = "#374151";
                                                                                e.target.alt = "Voronoi Diagram Preview";
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-gray-400 text-sm mt-2",
                                                                            children: "Voronoi diagram"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "text-center",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: `${ false || ""}/delaunay.png`,
                                                                            alt: "Delaunay Triangulation Visualization",
                                                                            className: "w-full h-auto rounded border border-gray-600",
                                                                            onError: (e)=>{
                                                                                e.target.style.backgroundColor = "#374151";
                                                                                e.target.alt = "Delaunay Triangulation Preview";
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "text-gray-400 text-sm mt-2",
                                                                            children: "Delaunay triangulation"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "text-center mt-6 col-span-2",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: `${ false || ""}/GraphCL.png`,
                                                                    alt: "Contrastive Visualization",
                                                                    className: "w-full h-auto rounded border border-gray-600"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "text-gray-400 text-sm mt-2",
                                                                    children: "Graph Contrastive Learning"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "text-gray-400 text-base text-center col-span-2 mt-4"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-2xl font-bold text-blue-400 mb-8 text-left",
                                    children: "Other Projects"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "https://github.com/devtcu/Fusion",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            ref: (el)=>projectCardsRef.current[0] = el,
                                            className: "bg-white p-6 rounded-lg shadow-md transform hover:translate-y-[-5px] transition-all duration-300 block hover:bg-black group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300",
                                                    children: "Topological Data Analysis"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mt-2 text-gray-600 group-hover:text-gray-300 transition-colors duration-300",
                                                    children: "Using persistence homology to evaluate data"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            id: "agent-based-model",
                                            href: "https://abm-sigma.vercel.app",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            ref: (el)=>projectCardsRef.current[1] = el,
                                            className: "bg-white p-6 rounded-lg shadow-md transform hover:translate-y-[-5px] transition-all duration-300 block hover:bg-black group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300",
                                                    children: "Agent-Based Model"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mt-2 text-gray-600 group-hover:text-gray-300 transition-colors duration-300",
                                                    children: "Web-based simulation of cell-cell fusion, utilising Flask for backend and allowing users to adjust parameters."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: "https://github.com/devtcu/Pandemic-Simulation",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            ref: (el)=>projectCardsRef.current[2] = el,
                                            className: "bg-white p-6 rounded-lg shadow-md transform hover:translate-y-[-5px] transition-all duration-300 block hover:bg-black group",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-xl font-semibold text-gray-900 group-hover:text-white transition-colors duration-300",
                                                    children: "Pandemic Simulation"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mt-2 text-gray-600 group-hover:text-gray-300 transition-colors duration-300",
                                                    children: "Tuneable Python script that uses physical perturbation to model human movement and track virus spread in a pandemic."
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "contact",
                className: "py-16 bg-black relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-black opacity-95"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                ref: contactRef,
                                className: "text-3xl font-bold text-white text-center",
                                children: "Contact Me"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "mt-8 flex flex-col items-center justify-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "mailto:dkalluh000@citymail.cuny.edu",
                                    className: "social-icon text-gray-400 hover:text-red-400 transition-all duration-300 transform hover:scale-110 p-2 text-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: "h-20 w-20 mx-auto",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            "aria-hidden": "true",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-center text-gray-400 mt-3 font-medium",
                                            children: "dkalluh000@citymail.cuny.edu"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                className: "bg-gray-900 text-white py-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "\xa9 ",
                                new Date().getFullYear(),
                                " Devansh KM "
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: " In the event of infringement, dragons will be dispatched."
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 7170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/dev/Desktop/devtcu.github.io/src/app/page.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [613,957,160], () => (__webpack_exec__(3228)));
module.exports = __webpack_exports__;

})();