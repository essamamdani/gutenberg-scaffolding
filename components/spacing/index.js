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
        [`${props.prefix}_all`]:{
            type:'array',
            default:{
                top: '50px',
                left: '10%',
                right: '10%',
                bottom: '50px',
            }
        }
    };
    let content = ({attributes, setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>
        <TextControl defaultValue={attributes[`${props.prefix}_top`]} onChange={e => setAttributes({ [`${props.prefix}_top`]: Number(e) })} />
        <TextControl value={attributes[`${props.prefix}_bottom`]} onChange={e => setAttributes({ [`${props.prefix}_bottom`]: Number(e) })} />

        <TextControl value={attributes[`${props.prefix}_left`]} onChange={e => setAttributes({ [`${props.prefix}_left`]: Number(e) })} />
        <TextControl value={attributes[`${props.prefix}_right`]} onChange={e => setAttributes({ [`${props.prefix}_right`]: Number(e) })} />
        <BoxControl
			values={ attributes[`${props.prefix}_all`] }
			onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_all`]:nextValues} ) }
		/>
    </PanelBody>;
    return { attrs, content }
}