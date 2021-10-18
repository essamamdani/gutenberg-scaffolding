// import "./style.scss";
import {
    getAttribute,
    getResponsiveMode,
    responsiveChange,
    setAttributesCustom,
    ResponsiveButtonGroup,
  } from "../../main";

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
    TextControl, SelectControl, RangeControl, Dashicon, ToggleControl, ColorPalette, ColorIndicator,FormFileUpload,Placeholder,arrowDown,NavigableMenu,ButtonGroup,Radio,
    Card, CardBody, Button, AlignmentMatrixControl, AnglePickerControl, ColorGradientControl, __experimentalGradientPicker, ColorPicker } = wp.components;

    
   

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
        [`${props.prefix}_image`]: {
            type: 'string',
            default: '#f00'
        },
        [`${props.prefix}_type`]: {
            type: 'string',
            default: "solid"
        },
        
    };
    let content = ({attributes, setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>
       
       

       
        <h4>
          Type
        </h4>

        <div style={{ alignSelf: "center" }}></div>
    
    	
      <ButtonGroup onClick={ (newValue) => setAttributes({ [`${props.prefix}_type`]: newValue }) } >
            	<Button isPrimary >Solid</Button>
	            <Button isSecondary  >Graident</Button>
	            <Button isSecondary >Media</Button>
        </ButtonGroup>

{getAttribute(attributes, props.prefix, "type")}
             {getAttribute(attributes, props.prefix, "type") === "solid" ? (
        
           <div>
          <PanelRow>
          <p>Solid</p>
         </PanelRow>

          <ColorPicker

                   color= {getAttribute(attributes, props.prefix, "color")}
                   onChange={(value) =>setAttributesCustom(
                      setAttributes,
                      value,
                      attributes,
                      props.prefix,
                      "color"
                    )
                  }
                   />
         </div>
          ): (
            'binnnn'
          ) } 

      <p> Solid Color </p>
        <ColorPicker
	                color= { attributes[`${props.prefix}_color`] }
                    onColorChange={ (newValue) => setAttributes({ [`${props.prefix}_color`]: newValue }) }
          
        />
       
      <p> Graident </p>
        <__experimentalGradientPicker

                       values={ attributes[`${props.prefix}_gradient_color`] }
			           onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_gradient_color`]:nextValues} ) }
              
         />

        <p>Image

        <FormFileUpload
	accept="image/*"
	onChange={ (e) => console.log('new image', e) }
	render={ ( { openFileDialog } ) => (
		<div>
			<p>Upload an image below: </p>
			<Button isSecondary onClick={ openFileDialog }>
				Upload image
			</Button>
		</div>
	)}
/>
        </p>
			 
      

    </PanelBody>;
    return { attrs, content }
}