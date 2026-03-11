"use strict";
exports.id = 639;
exports.ids = [639];
exports.modules = {

/***/ 8202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// Custom App component to set up asset paths
function App({ Component, pageProps }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Client-side only
        if (false) {}
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}


/***/ }),

/***/ 2870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Document)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
;// CONCATENATED MODULE: ./src/utils/publicPath.js
// This file is used to configure the public path for assets
// It is included in the HTML via _document.js
const publicPathScript = `
  (function() {
    try {
      const repoName = '${process.env.REPO_NAME || "personal-webpage"}';
      const isProduction = ${process.env.IS_PRODUCTION || "production" === "production"};
      
      if (isProduction) {
        // Set correct public path for GitHub Pages deployment
        window.__PUBLIC_PATH__ = '/' + repoName + '/';
        
        // For dynamically loaded assets
        if (typeof window.__webpack_public_path__ !== 'undefined') {
          window.__webpack_public_path__ = window.__PUBLIC_PATH__;
        }
      }
    } catch (e) {
      console.error('Failed to set public path:', e);
    }
  })();
`;
/* harmony default export */ const publicPath = (publicPathScript);

;// CONCATENATED MODULE: ./src/pages/_document.js



function Document() {
    const prefix =  true ? "/personal-webpage" : 0;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(next_document.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(next_document.Head, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "preload",
                        href: `${prefix}/parallax/star.gif`,
                        as: "image"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "preload",
                        href: `${prefix}/parallax/bird.webp`,
                        as: "image"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "preload",
                        href: `${prefix}/parallax/wave1.jpg`,
                        as: "image"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
              (function() {
                document.documentElement.dataset.basePath = "${prefix}";
                ${publicPath}
              })();
            `
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(next_document.Main, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(next_document.NextScript, {})
                ]
            })
        ]
    });
}


/***/ })

};
;