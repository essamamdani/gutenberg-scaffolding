!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),c=n(0),a=n(1),i=n.n(a);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){i()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p=wp.i18n.__,s=wp.editor,b=(s.InspectorControls,s.BlockControls,s.AlignmentToolbar,s.BlockAlignmentToolbar,s.RichText,s.MediaUpload,s.MediaUploadCheck,s.InnerBlocks,wp.components),f=b.PanelBody,m=(b.PanelRow,b.TextControl);b.SelectControl,b.RangeControl,b.Dashicon,b.ToggleControl,b.ColorPalette,b.ColorIndicator,b.Card,b.CardBody,b.Button,b.AlignmentMatrixControl,b.AnglePickerControl,b.ColorGradientControl,b.__experimentalGradientPicker,b.ColorPicker,n(5);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){i()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O=wp.blocks.registerBlockType,y=wp.blockEditor,x=y.InspectorControls,j=(y.useBlockProps,wp.i18n.__,wp.editor),_=(j.BlockControls,j.AlignmentToolbar,j.BlockAlignmentToolbar,j.MediaUpload,j.MediaUploadCheck,j.InnerBlocks,"blocks-bakery"),P="bb",h="bb_category",C=[],v=wp.i18n.__,k=(wp.blocks.registerBlockType,wp.blockEditor),w=k.RichText,E=k.useBlockProps,B=wp.editor,T=B.InspectorControls,A=(B.BlockControls,B.AlignmentToolbar,B.BlockAlignmentToolbar,B.MediaUpload,B.MediaUploadCheck,B.InnerBlocks,wp.components);A.PanelBody,A.PanelRow,A.TextControl,A.SelectControl,A.RangeControl,A.Dashicon,A.ToggleControl,A.ColorPalette,A.ColorIndicator,A.Card,A.CardBody,A.Button,A.AlignmentMatrixControl,A.AnglePickerControl,A.ColorGradientControl,A.__experimentalGradientPicker,A.ColorPicker;!function(e,t){var n=g({mainPrefix:{type:"string",default:"".concat(P,"_").concat(e)}},t.attributes);t.modules&&t.modules.spacing.length>0&&t.modules.spacing.map(function(t){var r=t.name,o=t.prefix,a=function(e){var t;return{updateAttributes:u(u({},e.attributes),{},(t={},i()(t,"".concat(e.prefix,"_top"),{type:"number",default:10}),i()(t,"".concat(e.prefix,"_bottom"),{type:"number",default:10}),i()(t,"".concat(e.prefix,"_left"),{type:"number",default:10}),i()(t,"".concat(e.prefix,"_right"),{type:"number",default:10}),t)),content:function(t){return Object(c.createElement)(f,{title:p(e.name,"blocks-bakery"),initialOpen:!0},Object(c.createElement)(m,{value:e["".concat(e.prefix,"_top")],onChange:function(n){return t(i()({},"".concat(e.prefix,"_top"),Number(n)))}}),Object(c.createElement)(m,{value:e["".concat(e.prefix,"_bottom")],onChange:function(n){return t(i()({},"".concat(e.prefix,"_bottom"),Number(n)))}}),Object(c.createElement)(m,{value:e["".concat(e.prefix,"_left")],onChange:function(n){return t(i()({},"".concat(e.prefix,"_left"),Number(n)))}}),Object(c.createElement)(m,{value:e["".concat(e.prefix,"_right")],onChange:function(n){return t(i()({},"".concat(e.prefix,"_right"),Number(n)))}}))}}}({name:r,prefix:"".concat(P,"_").concat(e).concat(o?"_".concat(o):""),attributes:n}),l=a.updateAttributes,s=a.content;n=l,C.push(s)}),O("".concat(_,"/").concat(e),g(g({},t),{},{attributes:n,category:h,edit:function(e){return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(x,null,C.map(function(t){return t(e.setAttributes)})),t.edit(e))},save:function(e){return t.save(e)}}))}("section",{title:v("Gutenberg Section"),modules:{spacing:[{name:"Padding",prefix:"padding"},{name:"Margin",prefix:"child_margin"}],background:{name:"Background Parent",prefix:"bg_abc_parent"}},attributes:{backgroundColor:{default:"yellow",type:"string"},someText:{type:"string",source:"html",selector:"h2",default:"Write Something"}},category:"widgets",edit:function(e){var t=e.attributes,n=e.setAttributes,r=E({className:"my-random-classname"});return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(T,null,Object(c.createElement)("input",{type:"text",value:t.bb_section_padding})),Object(c.createElement)(c.Fragment,null,Object(c.createElement)("h1",null,"Padding Attribute Update"),Object(c.createElement)("p",null,(void 0)(t,"child_margin","top")),Object(c.createElement)("p",null,"Top ",t["".concat(t.mainPrefix,"_padding_top")],"px"),Object(c.createElement)("p",null,"Right ",t["".concat(t.mainPrefix,"_padding_right")],"px"),Object(c.createElement)("p",null,"bottom ",t["".concat(t.mainPrefix,"_padding_bottom")],"px"),Object(c.createElement)("p",null,"left ",t["".concat(t.mainPrefix,"_padding_left")],"px"),Object(c.createElement)(w,o()({},r,{tagName:"h2",value:t.someText,allowedFormats:["core/bold","core/italic"],onChange:function(e){return n({someText:e})},placeholder:v("Heading...")}))))},save:function(e){var t=e.attributes,n=E.save();return Object(c.createElement)(w.Content,o()({},n,{tagName:"h2",value:t.someText}))}})},,function(e,t){!function(){e.exports=this.React}()}]);