import React, { useEffects } from 'react';
import spacingPanel from './components/spacing';
import borderPanel from './components/border';
import backgroundPanel from './components/background';
const { registerBlockType } = wp.blocks;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n; // Import __() from wp.i18n
const {
    BlockControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,
    MediaUpload, MediaUploadCheck, InnerBlocks } = wp.editor;

const MAMD_PLUGIN_INFO = {
    name: 'BB',
    slug: 'blocks-bakery',
    prefix: 'bb',
    category_slug: 'bb_category',

}
let editPanels = [];

export const blockBakeryRegisterBlock = (blockName, options) => {
    let attributes = {
        mainPrefix: {
            type: 'string',
            default: `${MAMD_PLUGIN_INFO.prefix}_${blockName}`,
        }, ...options.attributes
    };
    if (options.modules) {
        if (options.modules.spacing.length > 0) {
            options.modules.spacing.map(({ name, prefix, defaults }) => {
                let spacingPanelObj = spacingPanel({ name,defaults, prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${prefix ? `_${prefix}` : ''}`, attributes });
                attributes = spacingPanelObj.attrs;
                editPanels.push(spacingPanelObj.content);
            })
        }
        
        if (options.modules.border) {
            let { name , prefix ,defaults} = options.modules.border;
            let borderPanelObject = borderPanel({ name, defaults, prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${prefix ? `_${prefix}` : ''}`, attributes , options });
            attributes = borderPanelObject.attrs;
            editPanels.push(borderPanelObject.content);
        }
    }

    return registerBlockType(`${MAMD_PLUGIN_INFO.slug}/${blockName}`, {
        ...options,
        attributes,
        category: MAMD_PLUGIN_INFO.category_slug,
        edit: (props) => {
            return <>
                <InspectorControls>
                    {editPanels.map(a => a(props))}
                </InspectorControls>
                {options.edit(props)}
            </>
        },
        save: (props) => options.save(props),

    });


}

export const getAttribute = (attributes, prefix, itemName) => attributes[`${attributes.mainPrefix}_${prefix}_${itemName}`]

export const makeResponsive = () => {

    
    

}
