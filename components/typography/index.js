// import "./style.scss";


const { __ } = wp.i18n; // Import __() from wp.i18n
const { __experimentalBoxControl } = wp.components;

const BoxControl = __experimentalBoxControl;

const { InspectorControls,
    BlockControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,
    RichText,
    MediaUpload, MediaUploadCheck, InnerBlocks} = wp.editor;
const { PanelBody, PanelRow,
    TextControl, SelectControl, RangeControl, Dashicon, ToggleControl, ColorPalette, ColorIndicator, RadioGroup,Radio,
    Card, CardBody, Button, AlignmentMatrixControl, AnglePickerControl, ColorGradientControl, __experimentalGradientPicker, ColorPicker } = wp.components;
export default (props) => {
    let attrs = {
        ...props.attributes,
        [`${props.prefix}_heading_color`]: {
            type: 'string',
            default: ''
        },
        [`${props.prefix}_text_color`]: {
            type: 'string',
            default: ''
        },
        [`${props.prefix}_link_color`]: {
            type: 'string',
            default: ''
        },
        [`${props.prefix}_link_hover_color`]: {
            type: 'string',
            default: ''
        },
        [`${props.prefix}_text_alignment`]: {
            type: 'string',
            default: ''
        },
        
    };
    let content = ({attributes, setAttributes}) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>



                  


                       <p>   Heading Color 
                       <span> <ColorIndicator
                                style={{ backgroundColor: props.attributes.icon_clr }} /></span> </p>
                           <ColorPalette
	                                            colors={ [
	                                                	{ name: 'red', color: '#f00', slug: "1" },
		                                                { name: 'white', color: '#fff' },
	                                                	{ name: 'blue', color: '#00f' },
                                                        { name: "HotPink ", color: "#FF69B4" },
                                                        { name: "MediumOrchid ", color: "#BA55D3" },
                                                        { name: "RebeccaPurple ", color: "#663399" },
                                                        { name: "DarkSalmon ", color: "	#E9967A" },
                                                        { name: "FireBrick ", color: "#B22222" },
                                                        { name: "DarkOrange ", color: "#FF8C00" },
                                                        { name: "Tomato ", color: "	#FF6347" },
                                                        { name: "Moccasin ", color: "#FFE4B5" },
                                                        { name: "DarkKhaki ", color: "#BDB76B" },
                                                        { name: "Lime ", color: "#00FF00" },
                                                        { name: "red", color: "	#FF0000" },
                                                        { name: "green", color: "#008000" },
                                                        { name: "blue", color: "#0000FF" },
                                                        { name: "yellow", color: "#FFFF00" },
                                                        { name: "pink", color: "#FFC0CB" },
                                                        { name: "white", color: "#FFFFFF" },
                                                        { name: "gray", color: "#DCDCDC" },
                                                        { name: "black", color: "#000000" },
	                                                    ] }
                                                        headingValue={ attributes[`${props.prefix}_heading_color`]}
                                                        
                                                        onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_heading_color`]:nextValues} ) }
                                                      
                             />
                                   
                                   <p>   Text Color  
                                   <span> <ColorIndicator
                                style={{ backgroundColor: props.attributes.icon_clr }} /></span>
                                   </p>
                           <ColorPalette
	                                            colors={ [
	                                                	{ name: 'red', color: '#f00', slug: "1" },
		                                                { name: 'white', color: '#fff' },
	                                                	{ name: 'blue', color: '#00f' },
                                                        { name: "HotPink ", color: "#FF69B4" },
                                                        { name: "MediumOrchid ", color: "#BA55D3" },
                                                        { name: "RebeccaPurple ", color: "#663399" },
                                                        { name: "DarkSalmon ", color: "	#E9967A" },
                                                        { name: "FireBrick ", color: "#B22222" },
                                                        { name: "DarkOrange ", color: "#FF8C00" },
                                                        { name: "Tomato ", color: "	#FF6347" },
                                                        { name: "Moccasin ", color: "#FFE4B5" },
                                                        { name: "DarkKhaki ", color: "#BDB76B" },
                                                        { name: "Lime ", color: "#00FF00" },
                                                        { name: "red", color: "	#FF0000" },
                                                        { name: "green", color: "#008000" },
                                                        { name: "blue", color: "#0000FF" },
                                                        { name: "yellow", color: "#FFFF00" },
                                                        { name: "pink", color: "#FFC0CB" },
                                                        { name: "white", color: "#FFFFFF" },
                                                        { name: "gray", color: "#DCDCDC" },
                                                        { name: "black", color: "#000000" },
	                                                    ] }
                                                        textValue={ attributes[`${props.prefix}_text_color`]}
                                                        
                                                        onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_text_color`]:nextValues} ) }
                                                      
                             />

                               <p>   Link Color  
                               <span> <ColorIndicator
                                style={{ backgroundColor: props.attributes.icon_clr }} /></span>
                               </p>
                           <ColorPalette
	                                            colors={ [
	                                                	{ name: 'red', color: '#f00', slug: "1" },
		                                                { name: 'white', color: '#fff' },
	                                                	{ name: 'blue', color: '#00f' },
                                                        { name: "HotPink ", color: "#FF69B4" },
                                                        { name: "MediumOrchid ", color: "#BA55D3" },
                                                        { name: "RebeccaPurple ", color: "#663399" },
                                                        { name: "DarkSalmon ", color: "	#E9967A" },
                                                        { name: "FireBrick ", color: "#B22222" },
                                                        { name: "DarkOrange ", color: "#FF8C00" },
                                                        { name: "Tomato ", color: "	#FF6347" },
                                                        { name: "Moccasin ", color: "#FFE4B5" },
                                                        { name: "DarkKhaki ", color: "#BDB76B" },
                                                        { name: "Lime ", color: "#00FF00" },
                                                        { name: "red", color: "	#FF0000" },
                                                        { name: "green", color: "#008000" },
                                                        { name: "blue", color: "#0000FF" },
                                                        { name: "yellow", color: "#FFFF00" },
                                                        { name: "pink", color: "#FFC0CB" },
                                                        { name: "white", color: "#FFFFFF" },
                                                        { name: "gray", color: "#DCDCDC" },
                                                        { name: "black", color: "#000000" },
	                                                    ] }
                                                        linkValue={ attributes[`${props.prefix}_link_color`]}
                                                        
                                                        onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_link_color`]:nextValues} ) }
                                                      
                             />
                               <p>   Link Hover Color   
                                   
                            
                                
                               <span> <ColorIndicator
                                style={{ backgroundColor: props.attributes.icon_clr }} /></span>
                               </p>
                           <ColorPalette
	                                            colors={ [
	                                                	{ name: 'red', color: '#f00', slug: "1" },
		                                                { name: 'white', color: '#fff' },
	                                                	{ name: 'blue', color: '#00f' },
                                                        { name: "HotPink ", color: "#FF69B4" },
                                                        { name: "MediumOrchid ", color: "#BA55D3" },
                                                        { name: "RebeccaPurple ", color: "#663399" },
                                                        { name: "DarkSalmon ", color: "	#E9967A" },
                                                        { name: "FireBrick ", color: "#B22222" },
                                                        { name: "DarkOrange ", color: "#FF8C00" },
                                                        { name: "Tomato ", color: "	#FF6347" },
                                                        { name: "Moccasin ", color: "#FFE4B5" },
                                                        { name: "DarkKhaki ", color: "#BDB76B" },
                                                        { name: "Lime ", color: "#00FF00" },
                                                        { name: "red", color: "	#FF0000" },
                                                        { name: "green", color: "#008000" },
                                                        { name: "blue", color: "#0000FF" },
                                                        { name: "yellow", color: "#FFFF00" },
                                                        { name: "pink", color: "#FFC0CB" },
                                                        { name: "white", color: "#FFFFFF" },
                                                        { name: "gray", color: "#DCDCDC" },
                                                        { name: "black", color: "#000000" },
	                                                    ] }
                                                        linkhoverValue={ attributes[`${props.prefix}_link_hover_color`]}
                                                        
                                                        onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_link_hover_color`]:nextValues} ) }
                                                     />




                                        <p>Text Align </p>   
                     <AlignmentToolbar
					   textalignValue={ attributes[`${props.prefix}_text_alignment`] }
                       onChange={ ( nextValues ) => setAttributes( {[`${props.prefix}_text_alignment`]:nextValues} ) }

			         />
                       
    </PanelBody>;
    return { attrs, content }
}