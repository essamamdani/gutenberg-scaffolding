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
                top: 50,
                left: 10,
                right: 10,
                bottom: 50,
            }
        },
        [`${props.prefix}_all_unit`]:{
            type:'array',
            default: props.defaults || {
                top: 'px',
                left: '%',
                right: '%',
                bottom: 'px',
            }
        },
        [`${props.prefix}_border_style`]:{
            type:'string',
            default: props.border_style_defaults || 'none',
        },
    };
    

    let content = ({attributes, setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>
        
        
        <SelectControl
                            label="Border Style"
                            options={[
                                { label: 'None', value: 'none' },
                                { label: 'Solid', value: 'solid' },
                                { label: 'Dotted', value: 'dotted' },
                                { label: 'Dashed', value: 'dashed' },
                                { label: 'Double', value: 'double' },
                                { label: 'Inset', value: 'inset' },

                            ]}
                            values={ attributes[`${props.prefix}_border_style`] }
                            onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_border_style`]:nextValues} ) }
                        />
        <BoxControl
            unit={ attributes[`${props.prefix}_all_unit`] }
			values={ attributes[`${props.prefix}_all`] }
			onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_all`]:nextValues} ) }
		/>


        
    </PanelBody>;
    return { attrs, content }
}