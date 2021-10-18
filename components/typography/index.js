// import "./style.scss";
const { __ } = wp.i18n; // Import _() from wp.i18n
const { __experimentalBoxControl } = wp.components;
import { all_font_families } from '../../helper/font_family_detailed';
import { color_palette_list } from '../../helper/color_palette';


const BoxControl = __experimentalBoxControl;

const { InspectorControls,
    BlockControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,
    RichText,
    MediaUpload, MediaUploadCheck, InnerBlocks } = wp.editor;
const { PanelBody, PanelRow,
    TextControl, SelectControl, RangeControl, Dashicon, ToggleControl, ColorPalette, ColorIndicator, RadioGroup, Radio,
    Card, CardBody, Button, AlignmentMatrixControl, AnglePickerControl, ColorGradientControl, __experimentalGradientPicker, ColorPicker } = wp.components;


const title_toggle = (new_val) => {
    var x = document.getElementById("prifex-toggle");
    if (x.style.display === "block") {
        x.style.display = "none"
        props.setAttributes({ text_shadow_clor: "", title_shadow_blur: 0 })
    }
    else if (x.style.display === "none") {
        x.style.display = "block";
        props.setAttributes({ text_shadow_clor: "#000000", title_shadow_blur: 10 })
    }
}

const title_reset = () => {
    props.setAttributes({ text_shadow_horizental: 0 })
    props.setAttributes({ text_shadow_vertical: 0 })
    props.setAttributes({ text_shadow_clor: '' })
    props.setAttributes({ title_shadow_blur: 0 })
}

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
        [`${props.prefix}_font_family`]: {
            type: 'string',
            default: ''
        },

    };
    let content = ({ attributes, setAttributes }) => <PanelBody title={__(props.name, 'blocks-bakery')} initialOpen={true}>


        < SelectControl
            label="Font Family"
            options={all_font_families}
            onChange={(nextValues) => setAttributes({ [`${props.prefix}_font_family`]: nextValues })}
            value={attributes[`${props.prefix}_font_family`]}
        />

        <SelectControl
            label="Font Weight"
            options={[
                { label: '100', value: 100 },
                { label: '200', value: 200 },
                { label: '300', value: 300 },
                { label: '400', value: 400 },
                { label: '500', value: 500 },
                { label: '600', value: 600 },
                { label: '700', value: 700 },
                { label: '800', value: 800 },
                { label: '900', value: 900 },
                { label: 'Default', value: '' },
                { label: 'Normal', value: 'normal' },
                { label: 'Bold', value: 'bold' }
            ]
            }
            onChange={(new_val) =>
                setAttributes({ [`${props.prefix}_font_weight`]: new_val })
            }
            value={attributes[`${props.prefix}_font_weight`]}
        />

        <SelectControl
            label="Blend Mode"
            options={[
                { label: 'Normal', value: 'normal' },
                { label: 'Multiply', value: 'multiply' },
                { label: 'Screen', value: 'screen' },
                { label: 'Overlay', value: 'overlay' },
                { label: 'Darken', value: 'darken' },
                { label: 'Lighten', value: 'lighten' },
                { label: 'Color Dodge', value: 'color-dodge' },
                { label: 'Color Burn', value: 'color-burn' },
                { label: 'Hard Light', value: 'hard-light' },
                { label: 'Soft Light', value: 'soft-light' },
                { label: 'Difference', value: 'difference' },
                { label: 'Exclusion', value: 'exclusion' },
                { label: 'HUE', value: 'hue' },
                { label: 'Saturation', value: 'saturation' },
                { label: 'Color', value: 'color' },
                { label: 'Luminosity', value: 'luminosity' },
            ]}
            value={attributes[`${props.prefix}_blend_mode`]}
            onChange={(new_val) =>
                setAttributes({ [`${props.prefix}_blend_mode`]: new_val })
            }
        />



        <SelectControl
            label="Decoration"
            options={[
                { label: 'Default', value: 'inherit' },
                { label: 'Underline', value: 'underline' },
                { label: 'line Through', value: 'line-through' },
                { label: 'Line Trough and Underline', value: 'underline line-through' },
                { label: 'overline', value: 'overline' },
                { label: 'None', value: 'none' },
            ]}
            value={attributes[`${props.prefix}_decoration`]}
            onChange={(new_val) =>
                setAttributes({ [`${props.prefix}_decoration`]: new_val })
            }
        />

        <SelectControl
            label="Style"
            options={[
                { label: 'Default', value: 'none' },
                { label: 'Normal', value: 'normal' },
                { label: 'Italic', value: 'italic' },
                { label: 'Oblique', value: 'oblique' },
            ]}
            value={attributes[`${props.prefix}_style`]}
            onChange={(new_val) =>
                setAttributes({ [`${props.prefix}_style`]: new_val })
            }
        />

        <p> Heading Color
            <span> <ColorIndicator
                style={{ backgroundColor: props.attributes.icon_clr }} /></span> </p>
        <ColorPalette
            colors={[
                { name: 'red', color: '#f00', slug: "1" },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
                { name: "HotPink ", color: "#FF69B4" },
                { name: "MediumOrchid ", color: "#BA55D3" },
                { name: "RebeccaPurple ", color: "#663399" },
                { name: "DarkSalmon ", color: " #E9967A" },
                { name: "FireBrick ", color: "#B22222" },
                { name: "DarkOrange ", color: "#FF8C00" },
                { name: "Tomato ", color: " #FF6347" },
                { name: "Moccasin ", color: "#FFE4B5" },
                { name: "DarkKhaki ", color: "#BDB76B" },
                { name: "Lime ", color: "#00FF00" },
                { name: "red", color: " #FF0000" },
                { name: "green", color: "#008000" },
                { name: "blue", color: "#0000FF" },
                { name: "yellow", color: "#FFFF00" },
                { name: "pink", color: "#FFC0CB" },
                { name: "white", color: "#FFFFFF" },
                { name: "gray", color: "#DCDCDC" },
                { name: "black", color: "#000000" },
            ]}
            headingValue={attributes[`${props.prefix}_heading_color`]}

            onChange={(nextValues) => setAttributes({ [`${props.prefix}_heading_color`]: nextValues })}

        />

        <p> Text Color
            <span> <ColorIndicator
                style={{ backgroundColor: props.attributes.icon_clr }} /></span>
        </p>
        <ColorPalette
            colors={[
                { name: 'red', color: '#f00', slug: "1" },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
                { name: "HotPink ", color: "#FF69B4" },
                { name: "MediumOrchid ", color: "#BA55D3" },
                { name: "RebeccaPurple ", color: "#663399" },
                { name: "DarkSalmon ", color: " #E9967A" },
                { name: "FireBrick ", color: "#B22222" },
                { name: "DarkOrange ", color: "#FF8C00" },
                { name: "Tomato ", color: " #FF6347" },
                { name: "Moccasin ", color: "#FFE4B5" },
                { name: "DarkKhaki ", color: "#BDB76B" },
                { name: "Lime ", color: "#00FF00" },
                { name: "red", color: " #FF0000" },
                { name: "green", color: "#008000" },
                { name: "blue", color: "#0000FF" },
                { name: "yellow", color: "#FFFF00" },
                { name: "pink", color: "#FFC0CB" },
                { name: "white", color: "#FFFFFF" },
                { name: "gray", color: "#DCDCDC" },
                { name: "black", color: "#000000" },
            ]}
            textValue={attributes[`${props.prefix}_text_color`]}

            onChange={(nextValues) => setAttributes({ [`${props.prefix}_text_color`]: nextValues })}

        />

        <p> Link Color
            <span> <ColorIndicator
                style={{ backgroundColor: props.attributes.icon_clr }} /></span>
        </p>
        <ColorPalette
            colors={[
                { name: 'red', color: '#f00', slug: "1" },
                { name: 'white', color: '#fff' },
                { name: 'blue', color: '#00f' },
                { name: "HotPink ", color: "#FF69B4" },
                { name: "MediumOrchid ", color: "#BA55D3" },
                { name: "RebeccaPurple ", color: "#663399" },
                { name: "DarkSalmon ", color: " #E9967A" },
                { name: "FireBrick ", color: "#B22222" },
                { name: "DarkOrange ", color: "#FF8C00" },
                { name: "Tomato ", color: " #FF6347" },
                { name: "Moccasin ", color: "#FFE4B5" },
                { name: "DarkKhaki ", color: "#BDB76B" },
                { name: "Lime ", color: "#00FF00" },
                { name: "red", color: " #FF0000" },
                { name: "green", color: "#008000" },
                { name: "blue", color: "#0000FF" },
                { name: "yellow", color: "#FFFF00" },
                { name: "pink", color: "#FFC0CB" },
                { name: "white", color: "#FFFFFF" },
                { name: "gray", color: "#DCDCDC" },
                { name: "black", color: "#000000" },
            ]}
            linkValue={attributes[`${props.prefix}_link_color`]}

            onChange={(nextValues) => setAttributes({ [`${props.prefix}_link_color`]: nextValues })}

        />


        <p> Link Hover Color


        </p>
        {/* <span> <ColorIndicator
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
{ name: "DarkSalmon ", color: " #E9967A" },
{ name: "FireBrick ", color: "#B22222" },
{ name: "DarkOrange ", color: "#FF8C00" },
{ name: "Tomato ", color: " #FF6347" },
{ name: "Moccasin ", color: "#FFE4B5" },
{ name: "DarkKhaki ", color: "#BDB76B" },
{ name: "Lime ", color: "#00FF00" },
{ name: "red", color: " #FF0000" },
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
/> */}
        <div>
            <div style={{ float: 'left' }}>

                <p>Text Align </p>

            </div>
            <div style={{ float: 'right' }}>
                <AlignmentToolbar
                    textalignValue={attributes[`${props.prefix}_text_alignment`]}
                    onChange={(nextValues) => setAttributes({ [`${props.prefix}_text_alignment`]: nextValues })}

                />
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
            <PanelRow>


                <p>Text Shadow</p>
                <div>
                    <Button onClick={title_reset} style={{ paddingLeft: 7, paddingRight: 7 }}><span><Dashicon icon="image-rotate" style={{ fontSize: 15 }} /></span></Button>
                    <Button onClick={title_toggle} style={{ paddingLeft: 7, paddingRight: 7 }}><span><Dashicon icon="admin-tools" style={{ fontSize: 15 }} /></span></Button>
                </div>
            </PanelRow>
        </div>

        <Card id="prifex-toggle" style={{ display: "none" }}>
            <CardBody style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 10, paddingRight: 10 }}>
                <RangeControl
                    label="Blur"
                    min={0}
                    max={100}
                    step={0.1}
                    initialPosition={10}
                    value={attributes.title_shadow_blur}
                    onChange={(new_val) =>
                        setAttributes({ title_shadow_blur: new_val })

                    }
                />
                <RangeControl
                    label="horizontal"
                    min={-100}
                    max={100}
                    step={0.1}
                    initialPosition={0}
                    value={attributes.text_shadow_horizental}
                    onChange={(new_val) =>
                        setAttributes({ text_shadow_horizental: new_val })

                    }
                />

                <RangeControl
                    label="Vertical"
                    min={-100}
                    max={100}
                    step={0.1}
                    initialPosition={0}
                    value={attributes.text_shadow_vertical}
                    onChange={(new_val) =>
                        setAttributes({ text_shadow_vertical: new_val })

                    }
                />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p> <span>Text Shadow Color</span>
                        <ColorIndicator
                            style={{ backgroundColor: attributes.text_shadow_clor }} />
                    </p>
                    <Dashicon icon="image-rotate" onClick={() => { }} />
                </div>
                <ColorPalette
                    clearable={false}
                    colors={color_palette_list}
                    onChange={(new_val) =>
                        setAttributes({ text_shadow_clor: new_val })

                    }
                    value={attributes.text_shadow_clor}
                />
            </CardBody>
        </Card>

    </PanelBody>;
    return { attrs, content }
}