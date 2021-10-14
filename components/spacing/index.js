// import "./style.scss";


const { __ } = wp.i18n; // Import __() from wp.i18n
const { __experimentalBoxControl } = wp.components;
const BoxControl = __experimentalBoxControl;

const { InspectorControls,
    BlockControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,
    RichText,
    MediaUpload, MediaUploadCheck, InnerBlocks } = wp.editor;
const { PanelBody, PanelRow,
    TextControl, SelectControl, RangeControl, Dashicon, ToggleControl, ColorPalette, ColorIndicator,
    Card, CardBody, Button, AlignmentMatrixControl, AnglePickerControl, ColorGradientControl, __experimentalGradientPicker, ColorPicker } = wp.components;

    export default (props) => {

    let attrs = {
        ...props.attributes,
        [`${props.prefix}_all`]:{
            type:'array',
            default: props.defaults || {
                top: '50px',
                left: '10%',
                right: '10%',
                bottom: '50px',
            }
        }
    };

    let content = ({attributes, setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>
        <BoxControl
			values={ attributes[`${props.prefix}_all`] }
			onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_all`]:nextValues} ) }
		/>
    </PanelBody>;
    return { attrs, content }
}