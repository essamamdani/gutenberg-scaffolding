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

    let Radius = false;
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
        },
        [`${props.prefix}_style`]:{
            type:'string',
            default: props.border_style_defaults || 'none',
        },
        [`${props.prefix}_radius_all`]:{
            type:'array',
            default: props.defaults || {
                top: '50px',
                left: '10%',
                right: '10%',
                bottom: '50px',
            }
        },
    };


    
    
    let content = ({attributes, setAttributes}) => 
    <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>

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
                            values={ attributes[`${props.prefix}_style`] }
                            onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_style`]:nextValues} ) 
                                (nextValues !='none'?Radius=true:Radius=false)
                        }
                               
                        />
        
        <BoxControl label={'Border'}
			values={ attributes[`${props.prefix}_all`] }
			onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_all`]:nextValues} ) }
		/>

        {Radius ==true?<BoxControl label={'Border Radius'}
			values={ attributes[`${props.prefix}_radius_all`] }
			onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_radius_all`]:nextValues} ) }
		/>:''}
    </PanelBody>;
    return { attrs, content }
}