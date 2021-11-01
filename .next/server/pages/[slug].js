module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+BZ4":
/***/ (function(module, exports) {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Ritt");


/***/ }),

/***/ "9Oib":
/***/ (function(module, exports) {

module.exports = require("highlight.js");

/***/ }),

/***/ "Aog/":
/***/ (function(module, exports) {

module.exports = require("@sanity/client");

/***/ }),

/***/ "CafY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./components/my-navbar.js



/* harmony default export */ var my_navbar = (() => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Navbar"], {
    className: "fj-navbar fj-nav-base",
    bg: "transparent",
    expand: "lg",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Navbar"].Brand, {
      className: "fj-navbar-brand",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "#",
        children: "\u0428\u0430\u0433\u0430\u0439 \u0411\u041B\u041E\u0413"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Navbar"].Toggle, {
      "aria-controls": "basic-navbar-nav"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Navbar"].Collapse, {
      id: "basic-navbar-nav",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"], {
        className: "ml-auto",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Nav"].Link, {
          className: "fj-navbar-item fj-navbar-link",
          href: "/",
          children: "\u041D\u04AE\u04AE\u0420"
        })
      })
    })]
  });
});
// CONCATENATED MODULE: ./components/layout.js




/* harmony default export */ var layout = __webpack_exports__["a"] = (({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Container"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(my_navbar, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "blog-detail-page",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: `page-wrapper`,
        children: children
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("footer", {
      className: "page-footer",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "#",
          children: "\u043D\u04AF\u04AF\u0440"
        }), " | ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "#",
          children: "\u0441\u0443\u0440\u0433\u0430\u043B\u0442"
        }), " | ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          href: "#",
          children: "\u0444\u044D\u0439\u0441\u0431\u04AF\u04AF\u043A"
        })]
      })
    })]
  });
});

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "Ritt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/layout.js + 1 modules
var layout = __webpack_require__("CafY");

// EXTERNAL MODULE: ./lib/api.js + 1 modules
var api = __webpack_require__("qoWs");

// EXTERNAL MODULE: external "@sanity/block-content-to-react"
var block_content_to_react_ = __webpack_require__("gEUu");
var block_content_to_react_default = /*#__PURE__*/__webpack_require__.n(block_content_to_react_);

// EXTERNAL MODULE: external "highlight.js"
var external_highlight_js_ = __webpack_require__("9Oib");
var external_highlight_js_default = /*#__PURE__*/__webpack_require__.n(external_highlight_js_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./components/higlight-code.js



/* harmony default export */ var higlight_code = (({
  children,
  language
}) => {
  const codeRef = /*#__PURE__*/Object(external_react_["createRef"])();
  Object(external_react_["useEffect"])(() => {
    external_highlight_js_default.a.highlightBlock(codeRef.current);
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("pre", {
    className: language,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("code", {
      ref: codeRef,
      children: children
    })
  });
});
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/post-header.js




/* harmony default export */ var post_header = (({
  post
}) => {
  external_moment_default.a.locale("mn");
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "blog-detail-header",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      className: "lead mb-0",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: post.publisher.picture,
        className: "rounded-circle mr-3",
        height: "50px",
        width: "50px"
      }), post.publisher.title, ", ", external_moment_default()(post.date).format("lll")]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: "font-weight-bold blog-detail-header-title mb-0",
      children: post.title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: "blog-detail-header-subtitle mb-3",
      children: post.subtitle
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: "img-fluid rounded",
      src: Object(api["c" /* urlFor */])(post.cover_image).height(800).url(),
      alt: post.cover_image.alt
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "code-filename",
      style: {
        textAlign: "center"
      },
      children: post.cover_image.alt
    })]
  });
});
// CONCATENATED MODULE: ./pages/[slug].js









const serializers = {
  types: {
    code: props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(higlight_code, {
      language: props.node.language,
      children: [props.node.code, /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "code-filename",
        children: props.node.filename
      })]
    }),
    image: props => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `blog-image blog-image-${props.node.position}`,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        src: Object(api["c" /* urlFor */])(props.node).height(400).url()
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "code-filename",
        style: {
          textAlign: "center"
        },
        children: props.node.alt
      })]
    })
  }
};
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (({
  post
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout["a" /* default */], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_bootstrap_["Row"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_react_bootstrap_["Col"], {
        md: "12",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("pre", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(post_header, {
          post: post
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(block_content_to_react_default.a, {
          blocks: post.content,
          serializers: serializers,
          imageOptions: {
            w: 320,
            h: 240,
            fit: "max"
          }
        })]
      })
    })
  });
});
const getStaticProps = async ({
  params
}) => {
  const post = await Object(api["b" /* getPostBySlug */])(params.slug);
  return {
    props: {
      post: post[0]
    }
  };
};
const getStaticPaths = async () => {
  const posts = await Object(api["a" /* getAllPosts */])();
  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  };
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "gEUu":
/***/ (function(module, exports) {

module.exports = require("@sanity/block-content-to-react");

/***/ }),

/***/ "qoWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ urlFor; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ getAllPosts; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ getPostBySlug; });

// CONCATENATED MODULE: ./lib/sanity.js
const sanityClient = __webpack_require__("Aog/");

const client = sanityClient({
  projectId: "zssjirgv",
  dataset: "production",
  useCdn: process.NODE_ENV === "production"
});
/* harmony default export */ var sanity = (client);
// EXTERNAL MODULE: external "@sanity/image-url"
var image_url_ = __webpack_require__("+BZ4");
var image_url_default = /*#__PURE__*/__webpack_require__.n(image_url_);

// CONCATENATED MODULE: ./lib/api.js


const builder = image_url_default()(sanity);
const urlFor = source => {
  return builder.image(source);
};
const getAllPosts = async () => {
  const posts = await sanity.fetch(`*[_type=="post"]{_createdAt, title, subtitle, date, 'image': cover_image.asset->url, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url }}`);
  return posts;
};
const getPostBySlug = async slug => {
  const post = await sanity.fetch(`*[_type=="post" && slug.current==$slug]{_createdAt, title, subtitle, date, content[]{...,'asset': asset->} , cover_image, 'slug':slug.current, 'publisher':publisher->{title, 'picture': picture.asset->url,  }}`, {
    slug
  });
  return post;
};

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });