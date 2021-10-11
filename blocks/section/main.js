/**
 * Registers a new block provided a unique name and an object defining its behavior.
 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
 */
const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */
const blockSlug = 'section';
const blockName = 'Section';
registerBlockType(`${MAMD_PLUGIN_INFO.slug}/${blockSlug}`, {
    /**
     * This is the display title for your block, which can be translated with `i18n` functions.
     * The block inserter will show this name.
     */
    title: __('Gutenberg ' + blockName),

    /**
     * Blocks are grouped into categories to help users browse and discover them.
     * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
     */
    category: 'widgets', //MAMD_PLUGIN_INFO.category_slug
    /**
     * Optional block extended support features.
     */
    supports: {
        // Removes support for an HTML mode.
        html: false,
    },
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
     *
     * @param {Object} [props] Properties passed from the editor.
     * @return {Element}       Element to render.
     */
    edit: function (props) {
        return (
            <p className={props.className}>{__( 'Hello from the editor!' )}</p>
        );
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into `post_content`.
     * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
     *
     * @return {Element}       Element to render.
     */
    save: function (props) {
        return (
            <p>{__( 'Hello from the frontend!' )}</p>
        );
    },
});
