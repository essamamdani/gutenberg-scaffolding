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
/* harmony import */ var _components_padding__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/padding */ "./components/padding.js");



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
registerBlockType("".concat(MAMD_PLUGIN_INFO.slug, "/").concat(blockSlug), {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: __('Gutenberg ' + blockName),
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
    },
    bb_section_padding: {
      type: 'string'
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
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_components_padding__WEBPACK_IMPORTED_MODULE_2__["BBPadding"], {
      setAttributes: setAttributes,
      attributePrefix: "bb_section",
      name: "Padding Chaiye"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, attributes.bb_section_padding), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
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

/***/ "./components/padding.js":
/*!*******************************!*\
  !*** ./components/padding.js ***!
  \*******************************/
/*! exports provided: BBPadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BBPadding", function() { return BBPadding; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


var __ = wp.i18n.__; // Import __() from wp.i18n

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
var BBPadding = function BBPadding(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __(props.name, 'blocks-bakery'),
    initialOpen: true
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
    onChange: function onChange(e) {
      return props.setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, props.attributePrefix + "_padding", e));
    }
  }));
};

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

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=main.js.map