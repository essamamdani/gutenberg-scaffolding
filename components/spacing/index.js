// import "./style.scss";


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
export default (props) => {
    let updateAttributes = {
        ...props.attributes,
        [`${props.prefix}_top`]: {
            type: 'number',
            default: 10
        },
        [`${props.prefix}_bottom`]: {
            type: 'number',
            default: 10
        },
        [`${props.prefix}_left`]: {
            type: 'number',
            default: 10
        },
        [`${props.prefix}_right`]: {
            type: 'number',
            default: 10
        },
    };
    let content = (setAttributes) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>
        <TextControl value={props[`${props.prefix}_top`]} onChange={e => setAttributes({ [`${props.prefix}_top`]: Number(e) })} />
        <TextControl value={props[`${props.prefix}_bottom`]} onChange={e => setAttributes({ [`${props.prefix}_bottom`]: Number(e) })} />

        <TextControl value={props[`${props.prefix}_left`]} onChange={e => setAttributes({ [`${props.prefix}_left`]: Number(e) })} />
        <TextControl value={props[`${props.prefix}_right`]} onChange={e => setAttributes({ [`${props.prefix}_right`]: Number(e) })} />

    </PanelBody>;
    return { updateAttributes, content }
}