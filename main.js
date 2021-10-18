import React, { useEffects } from 'react';
import spacingPanel from './components/spacing';

import backgroundPanel from './components/background';
import backgroundOverlayPanel from './components/background_overlay';
import typographyPanel from './components/typography';
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
            options.modules.spacing.map(({ name, prefix }) => {
                let spacingPanelObj = spacingPanel({ name, prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${prefix ? `_${prefix}` : ''}`, attributes });
                attributes = spacingPanelObj.attrs;
                editPanels.push(spacingPanelObj.content);
            })
        }
        if (options.modules.typography) {
            console.log(options.modules.typography);    
            let { name, prefix } = options.modules.typography;
            let typographyPanelObject = typographyPanel({ name, prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${prefix ? `_${prefix}` : ''}`, attributes });
            attributes = typographyPanelObject.attrs;
            editPanels.push(typographyPanelObject.content);
        }

        if (options.modules.backgroundOverlay) {
            console.log(options.modules.backgroundOverlay);    
            let { name, prefix } = options.modules.backgroundOverlay;
            let backgroundOverlayPanelObject = backgroundOverlayPanel({ name, prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${prefix ? `_${prefix}` : ''}`, attributes });
            attributes = backgroundOverlayPanelObject.attrs;
            editPanels.push(backgroundOverlayPanelObject.content);
        }
        // if (options.modules.background) {
        //     console.log(options.modules.background);    
        //     let { name, prefix } = options.modules.background;
        //     let backgroundPanelObject = backgroundPanel({ name, prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${prefix ? `_${prefix}` : ''}`, attributes });
        //     attributes = backgroundPanelObject.attrs;
        //     editPanels.push(backgroundPanelObject.content);
        // }
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
