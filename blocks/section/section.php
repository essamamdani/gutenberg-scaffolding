<?php

/**
 * Plugin Name: Gutenberg Scaffolding - Section
 * Plugin URI: https://www.mamdaniweb.com
 * Description: Gutenberg Scaffolding - Section
 * Author: Essa Mamdani
 * Author URI: https://www.essamamdani.com
 * Version: 1.0.0
 * License: GPL
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
if (!defined("ABSPATH")) {
	exit;
}


class MAMD_Section
{
	private $slug = "section";
	public function __construct()
	{
		add_action("init", array($this, "init_block"));
		add_action("enqueue_block_assets", array($this, "enqueue_front_js"));
		if (!get_option(MAMD_PLUGIN_SLUG . "_bundle_css")) {
			add_action('wp_head', array($this, 'internal_style_tag_on_head'), 5, 0);
		}
	}

	function internal_style_tag_on_head()
	{
		global $post;
		$blocks = parse_blocks($post->post_content);

		//loop over all blocks and create styles
		foreach ($blocks as $block) {
			$blockType = $block['blockName'];
			$blockAttributes = $block['attrs']; //these are the attributes we've forced to saved in our block's save function
			$js_main_variable = MAMD_PLUGIN_NAME."_".strtoupper($this->slug);
			$json = json_encode($blockAttributes);
			//switch case so you can target different blocks
			switch ($blockType) {
				case MAMD_PLUGIN_SLUG . "/{$this->slug}":
					if (!empty($blockAttributes)) {
						echo <<<EOD
					<style>
						body {
							background:{$blockAttributes['backgroundColor']};
						}
					</style>

					<script>
						if(window.{$js_main_variable}){
							window.{$js_main_variable} = [];
						}
						window.{$js_main_variable}.push($json);
					</script>
		EOD;
					}
					return;
			}
		}
	}

	public function enqueue_front_js()
	{
		if (!is_admin() && has_block(MAMD_PLUGIN_SLUG . "/{$this->slug}")) {
			wp_enqueue_script(
				MAMD_PLUGIN_SLUG . "-{$this->slug}-front-script",
				plugins_url("../../build/{$this->slug}/front.js", __FILE__),
				array(),
				null,
				true
			);
		}
	}
	public function init_block()
	{
		// Register our block script with WordPress
		wp_register_script(
			MAMD_PLUGIN_SLUG . "-" . $this->slug,
			plugins_url("../../build/{$this->slug}/main.js", __FILE__),
			array(MAMD_PLUGIN_SLUG . '_custom_script', "wp-blocks", "wp-i18n", "wp-element", "wp-editor")
		);

		// Register our block"s base CSS
		wp_register_style(
			MAMD_PLUGIN_SLUG . "-{$this->slug}-style",
			plugins_url("../../build/{$this->slug}/style.css", __FILE__),
		);

		// Register our block"s editor-specific CSS

		wp_register_style(
			MAMD_PLUGIN_SLUG . "-{$this->slug}-edit-style",
			plugins_url("../../build/{$this->slug}/editor.css", __FILE__),
		);

		// Enqueue the script in the editor
		register_block_type(
			MAMD_PLUGIN_SLUG . "/{$this->slug}",
			array(
				"editor_script" => MAMD_PLUGIN_SLUG . "-{$this->slug}",
				"editor_style"  => MAMD_PLUGIN_SLUG . "-{$this->slug}-edit-style",
				"style"         => MAMD_PLUGIN_SLUG . "-{$this->slug}-style",
			)
		);
	}
}

new MAMD_Section();
