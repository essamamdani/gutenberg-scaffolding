const { __ } = wp.i18n; // Import __() from wp.i18n


const { InspectorControls,
    BlockControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,
    RichText,
    MediaUpload, MediaUploadCheck, InnerBlocks } = wp.editor;
const { PanelBody, PanelRow,
    TextControl, SelectControl, RangeControl, Dashicon, ToggleControl, ColorPalette, ColorIndicator,
    Card, CardBody, Button, AlignmentMatrixControl, AnglePickerControl, ColorGradientControl, __experimentalGradientPicker, ColorPicker } = wp.components;

export const BBPadding = (props) => {
    
    return <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>
    <TextControl onChange={(e)=>props.setAttributes({[props.attributePrefix+"_padding"]:e})} />
</PanelBody>
}