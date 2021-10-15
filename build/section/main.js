/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/section/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/section/main.js":
/*!********************************!*\
  !*** ./blocks/section/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_spacing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/spacing */ "./components/spacing/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../main */ "./main.js");



/**
 * Registers a new block provided a unique name and an object defining its behavior.
 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
 */


var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    useBlockProps = _wp$blockEditor.useBlockProps;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */

var blockSlug = 'section';
var blockName = 'Section';
Object(_main__WEBPACK_IMPORTED_MODULE_3__["blockBakeryRegisterBlock"])(blockSlug, {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: __('Gutenberg ' + blockName),
  modules: {
    spacing: [{
      name: "Padding",
      prefix: "padding",
      defaults: {
        top: '24px',
        left: '45%',
        right: '10%',
        bottom: '50px'
      }
    }, {
      name: "Margin",
      prefix: "child_margin",
      defaults: {
        top: '23px',
        left: '10%',
        right: '10%',
        bottom: '50px'
      }
    }],
    background: {
      name: "Background Parent",
      prefix: "bg_abc_parent"
    },
    border: {
      name: "Border",
      prefix: "border",
      defaults: {
        top: '23px',
        left: '10%',
        right: '10%',
        bottom: '50px'
      }
    },
    border_radius: {
      name: "Border Radius",
      prefix: "border_radius",
      defaults: {
        top: '111px',
        left: '110%',
        right: '10%',
        bottom: '50px'
      }
    },
    border_style: {
      name: "Border Style",
      prefix: "border_style",
      defaults: 'none'
    }
  },
  attributes: {
    backgroundColor: {
      default: "yellow",
      type: "string"
    },
    someText: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      default: "Write Something"
    }
  },

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'widgets',
  //MAMD_PLUGIN_INFO.category_slug

  /**
   * Optional block extended support features.
   */
  // supports: {
  //     // Removes support for an HTML mode.
  //     html: false,
  // },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   * @return {Element}       Element to render.
   */
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var blockProps = useBlockProps({
      className: 'my-random-classname'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Some Text Here')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      placeholder: "Some Dummy",
      type: "number",
      value: attributes.bb_section_padding
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h1", null, "Padding Attribute Update"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_main__WEBPACK_IMPORTED_MODULE_3__["getAttribute"])(attributes, 'padding', 'top')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Top ", attributes["".concat(attributes.mainPrefix, "_padding_top")], "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Right ", attributes["".concat(attributes.mainPrefix, "_padding_right")], "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "bottom ", attributes["".concat(attributes.mainPrefix, "_padding_bottom")], "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "left ", attributes["".concat(attributes.mainPrefix, "_padding_left")], "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      tagName: "h2" // The tag here is the element output and editable in the admin
      ,
      value: attributes.someText // Any existing content, either from the database or an attribute default
      ,
      allowedFormats: ['core/bold', 'core/italic'] // Allow the content to be made bold or italic, but do not allow other formatting options
      ,
      onChange: function onChange(someText) {
        return setAttributes({
          someText: someText
        });
      } // Store updated content as a block attribute
      ,
      placeholder: __('Heading...') // Display this text before any content has been added by the user

    }))));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into `post_content`.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
   *
   * @return {Element}       Element to render.
   */
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var blockProps = useBlockProps.save();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      tagName: "h2",
      value: attributes.someText
    }));
  }
});

/***/ }),

/***/ "./components/background/index.js":
/*!****************************************!*\
  !*** ./components/background/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";
// import { __ } from '@wordpress/i18n';

var __ = wp.i18n.__; // Import __() from wp.i18n
// const { InspectorControls,
//     BlockControls,
//     AlignmentToolbar,
//     BlockAlignmentToolbar,
//     RichText,
//     MediaUpload, MediaUploadCheck, InnerBlocks } = wp.editor;
// const { PanelBody, PanelRow,
//     TextControl, SelectControl, RangeControl, Dashicon, ToggleControl, ColorPalette, ColorIndicator,
//     Card, CardBody, Button, AlignmentMatrixControl, AnglePickerControl, ColorGradientControl, __experimentalGradientPicker, ColorPicker } = wp.components;
// let DDD = __experimentalGradientPicker;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _objectSpread2;

  var attrs = _objectSpread(_objectSpread({}, props.attributes), {}, (_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(props.prefix, "_color"), {
    type: 'string',
    default: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(props.prefix, "_gradient_color"), {
    type: 'string',
    default: '#f00'
  }), _objectSpread2));

  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: __(props.name, 'blocks-bakery'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["__experimentalColorGradientControl"], {
      colorValue: attributes["".concat(props.prefix, "_color")],
      gradientValue: attributes["".concat(props.prefix, "_gradient_color")],
      colors: [{
        name: 'red',
        color: '#f00'
      }, {
        name: 'white',
        color: '#fff'
      }, {
        name: 'blue',
        color: '#00f'
      }],
      gradients: [{
        name: 'Vivid cyan blue to vivid purple',
        gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
        slug: 'vivid-cyan-blue-to-vivid-purple'
      }, {
        name: 'Light green cyan to vivid green cyan',
        gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
        slug: 'light-green-cyan-to-vivid-green-cyan'
      }, {
        name: 'Luminous vivid amber to luminous vivid orange',
        gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
        slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
      }],
      label: __("Choose a color or a gradient"),
      onColorChange: function onColorChange(newValue) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_color"), newValue));
      },
      onGradientChange: function onGradientChange(newValue) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_gradient_color"), newValue));
      }
    }));
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./components/border/index.js":
/*!************************************!*\
  !*** ./components/border/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\components\\border\\index.js: Unexpected token, expected \",\" (24:55)\n\n\u001b[0m \u001b[90m 22 | \u001b[39m    let attrs \u001b[33m=\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m        \u001b[33m...\u001b[39mprops\u001b[33m.\u001b[39mattributes\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 24 | \u001b[39m        \u001b[33m...\u001b[39mmakeResponsive([\u001b[32m`${props.prefix}_all_hover`\u001b[39m]\u001b[33m:\u001b[39m{\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 | \u001b[39m            type\u001b[33m:\u001b[39m\u001b[32m'array'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m            \u001b[36mdefault\u001b[39m\u001b[33m:\u001b[39m props\u001b[33m.\u001b[39mdefaults \u001b[33m||\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 27 | \u001b[39m                top\u001b[33m:\u001b[39m \u001b[32m'50px'\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    at Object._raise (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:748:17)\n    at Object.raiseWithData (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Object.raise (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Object.unexpected (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9101:16)\n    at Object.expect (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9087:28)\n    at Object.parseCallExpressionArguments (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10334:14)\n    at Object.parseCoverCallAndAsyncArrowHead (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10258:29)\n    at Object.parseSubscript (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10194:19)\n    at Object.parseSubscripts (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10167:19)\n    at Object.parseExprSubscripts (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10156:17)\n    at Object.parseUpdate (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Object.parseMaybeUnary (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Object.parseExprOps (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Object.parseMaybeConditional (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)\n    at Object.parseMaybeAssign (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9926:21)\n    at C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9893:39\n    at Object.allowInAnd (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:11547:12)\n    at Object.parseMaybeAssignAllowIn (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9893:17)\n    at Object.parseSpread (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9470:26)\n    at Object.parsePropertyDefinition (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10996:19)\n    at Object.parseObjectLike (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10931:25)\n    at Object.parseExprAtom (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10491:23)\n    at Object.parseExprAtom (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:4763:20)\n    at Object.parseExprSubscripts (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10150:23)\n    at Object.parseUpdate (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Object.parseMaybeUnary (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Object.parseExprOps (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Object.parseMaybeConditional (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)\n    at Object.parseMaybeAssign (C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9926:21)\n    at C:\\xampp\\htdocs\\zagop\\wp-content\\plugins\\gutenberg-scaffolding\\node_modules\\@babel\\parser\\lib\\index.js:9893:39");

/***/ }),

/***/ "./components/spacing/index.js":
/*!*************************************!*\
  !*** ./components/spacing/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";
var __ = wp.i18n.__; // Import __() from wp.i18n

var __experimentalBoxControl = wp.components.__experimentalBoxControl;
var BoxControl = __experimentalBoxControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var attrs = _objectSpread(_objectSpread({}, props.attributes), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_all"), {
    type: 'array',
    default: props.defaults || {
      top: '50px',
      left: '10%',
      right: '10%',
      bottom: '50px'
    }
  }));

  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __(props.name, 'blocks-bakery'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BoxControl, {
      values: attributes["".concat(props.prefix, "_all")],
      onChange: function onChange(nextValues) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_all"), nextValues));
      }
    }));
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: blockBakeryRegisterBlock, getAttribute, makeResponsive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockBakeryRegisterBlock", function() { return blockBakeryRegisterBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttribute", function() { return getAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeResponsive", function() { return makeResponsive; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/spacing */ "./components/spacing/index.js");
/* harmony import */ var _components_border__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/border */ "./components/border/index.js");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/background */ "./components/background/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    useBlockProps = _wp$blockEditor.useBlockProps;
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var MAMD_PLUGIN_INFO = {
  name: 'BB',
  slug: 'blocks-bakery',
  prefix: 'bb',
  category_slug: 'bb_category'
};
var editPanels = [];
var blockBakeryRegisterBlock = function blockBakeryRegisterBlock(blockName, options) {
  var attributes = _objectSpread({
    mainPrefix: {
      type: 'string',
      default: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName)
    }
  }, options.attributes);

  if (options.modules) {
    if (options.modules.spacing.length > 0) {
      options.modules.spacing.map(function (_ref) {
        var name = _ref.name,
            prefix = _ref.prefix,
            defaults = _ref.defaults;
        var spacingPanelObj = Object(_components_spacing__WEBPACK_IMPORTED_MODULE_3__["default"])({
          name: name,
          defaults: defaults,
          prefix: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName).concat(prefix ? "_".concat(prefix) : ''),
          attributes: attributes
        });
        attributes = spacingPanelObj.attrs;
        editPanels.push(spacingPanelObj.content);
      });
    }

    if (options.modules.border) {
      var _options$modules$bord = options.modules.border,
          name = _options$modules$bord.name,
          prefix = _options$modules$bord.prefix,
          defaults = _options$modules$bord.defaults;
      var borderPanelObject = Object(_components_border__WEBPACK_IMPORTED_MODULE_4__["default"])({
        name: name,
        defaults: defaults,
        prefix: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName).concat(prefix ? "_".concat(prefix) : ''),
        attributes: attributes,
        options: options
      });
      attributes = borderPanelObject.attrs;
      editPanels.push(borderPanelObject.content);
    }
  }

  return registerBlockType("".concat(MAMD_PLUGIN_INFO.slug, "/").concat(blockName), _objectSpread(_objectSpread({}, options), {}, {
    attributes: attributes,
    category: MAMD_PLUGIN_INFO.category_slug,
    edit: function edit(props) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, editPanels.map(function (a) {
        return a(props);
      })), options.edit(props));
    },
    save: function save(props) {
      return options.save(props);
    }
  }));
};
var getAttribute = function getAttribute(attributes, prefix, itemName) {
  return attributes["".concat(attributes.mainPrefix, "_").concat(prefix, "_").concat(itemName)];
};
var makeResponsive = function makeResponsive() {};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=main.js.map