import React, { useEffects } from 'react';
import spacingPanel from './components/spacing/panel';
const { registerBlockType } = wp.blocks;
const { InspectorControls, useBlockProps } = wp.blockEditor;
const { __ } = wp.i18n; // Import __() from wp.i18n
const {
    BlockControls,
    AlignmentToolbar,
    BlockAlignmentToolbar,

    MediaUpload, MediaUploadCheck, InnerBlocks } = wp.editor;
const MAMD_PLUGIN_INFO = {
    name: 'MAMD',
    slug: 'blocks-bakery',
    prefix: 'bb',
    category_slug: 'mamd_category',

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
                let { updateAttributes, content } = spacingPanel({ name, prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${prefix ? `_${prefix}` : ''}`, attributes });
                attributes = updateAttributes;
                editPanels.push(content);
            })
        }
    }

    return registerBlockType(`${MAMD_PLUGIN_INFO.slug}/${blockName}`, {
        ...options,
        attributes,
        category: MAMD_PLUGIN_INFO.category_slug,
        edit: (props) => {
            return <>
                <InspectorControls>
                    {editPanels.map(a => a(props.setAttributes))}
                </InspectorControls>
                {options.edit(props)}
            </>
        },
        save: (props) => options.save(props),

    });
}

