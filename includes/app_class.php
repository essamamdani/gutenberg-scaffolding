<?php
if (!class_exists('MAMD_App')) {
    class MAMD_App
    {
        function __construct($path)
        {
            $this->path = $path;
            $this->init_hooks();
            $this->add_blocks();
        }
        function add_blocks()
        {
            foreach (glob(plugin_dir_path($this->path) . 'blocks/{,*/,*/*/,*/*/*/}*.php', GLOB_BRACE) as $file) {
                include_once $file;
            }
        }
        function init_hooks()
        {
            add_action('admin_enqueue_scripts', array($this, 'mamd_admin_hook'), 0);
            if (get_option(MAMD_PLUGIN_SLUG . "_bundle_css")) {
                add_action('wp_head', array($this, 'generate_bundle_css'), 5, 0);
            }
        }

        public function generate_bundle_css()
	{
		global $post;
		$styleSheetPath = plugin_dir_path(__FILE__) . MAMD_PLUGIN_SLUG . '-generate-bundle-css';
		$styleSheet = '';
		$blocks = parse_blocks($post->post_content);

		//loop over all blocks and create styles
		foreach ($blocks as $block) {
			$blockType = $block['blockName'];
			$blockAttributes = $block['attrs']; //these are the attributes we've forced to saved in our block's save function

			//switch case so you can target different blocks
			switch ($blockType) {
				case 'cgb/your-block-type':
					$styleSheet .= '.your-block-class {' . PHP_EOL;
					$styleSheet .= 'background-color: ' . $blockAttributes['background_color'] . ';' . PHP_EOL;
					$styleSheet .= '}' . PHP_EOL;
					break;
			}
		}

		file_put_contents($styleSheetPath, $styleSheet);
	}

        function mamd_admin_hook($hook)
        {
            // die($hook);
            if ( 'post.php' != $hook ) {
                return;
            }
            wp_enqueue_script(MAMD_PLUGIN_SLUG . '_custom_script', plugin_dir_url($this->path) . 'main.js', array(), '1.0');
        }
    }
}


