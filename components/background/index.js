// import "./style.scss";
// import { __ } from '@wordpress/i18n';
import {PanelBody,
	useBlockProps,
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';

const { __ } = wp.i18n; // Import __() from wp.i18n

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
    export default (props) => {
    let attrs = {
        ...props.attributes,
        
        [`${props.prefix}_color`]: {
            type: 'string',
			default: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
        },
        [`${props.prefix}_gradient_color`]: {
            type: 'string',
            default: '#f00'
        },
    };
    let content = ({attributes,setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>
        <ColorGradientControl
					colorValue={ attributes[`${props.prefix}_color`] }
					gradientValue={ attributes[`${props.prefix}_gradient_color`] }
					colors={ [
						{ name: 'red', color: '#f00' },
						{ name: 'white', color: '#fff' },
						{ name: 'blue', color: '#00f' },
					] }
					gradients={[
						{
							name: 'Vivid cyan blue to vivid purple',
							gradient:
								'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
							slug: 'vivid-cyan-blue-to-vivid-purple',
						},
						{
							name: 'Light green cyan to vivid green cyan',
							gradient:
								'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
							slug: 'light-green-cyan-to-vivid-green-cyan',
						},
						{
							name: 'Luminous vivid amber to luminous vivid orange',
							gradient:
								'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
							slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
						},
					]}
					label={ __("Choose a color or a gradient") }
					onColorChange={ (newValue) => setAttributes({ [`${props.prefix}_color`]: newValue }) }
					onGradientChange={ (newValue) => setAttributes({ [`${props.prefix}_gradient_color`]: newValue }) }
				/>
        {/* <ColorGradientControl/> */}
        {/* <ColorIndicator/>
        <ColorPalette/>
        <ColorPicker/> */}
    </PanelBody>;
    return { attrs, content }
}