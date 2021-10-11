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
if ( ! defined( "ABSPATH" ) ) {
	exit;
}


class MAMD_Section {
	private $slug = "section";
	public function __construct() {
		add_action( "init", array( $this, "init_block" ) );
	}
	public function init_block() {

		// Register our block script with WordPress
		wp_register_script(
			MAMD_PLUGIN_SLUG."-".$this->slug,
			plugins_url( "../../build/{$this->slug}/main.js", __FILE__ ),
			array( MAMD_PLUGIN_SLUG.'_custom_script',"wp-blocks", "wp-i18n", "wp-element", "wp-editor" )
		);

		// Register our block"s base CSS
		wp_register_style(
			MAMD_PLUGIN_SLUG."-{$this->slug}-style",
			plugins_url( "../../build/{$this->slug}/style.css", __FILE__ ),
		);

		// Register our block"s editor-specific CSS

		wp_register_style(
			MAMD_PLUGIN_SLUG."-{$this->slug}-edit-style",
			plugins_url( "../../build/{$this->slug}/editor.css", __FILE__ ),
		);

		// Enqueue the script in the editor
		register_block_type(
			MAMD_PLUGIN_SLUG."/{$this->slug}",
			array(
				"editor_script" => MAMD_PLUGIN_SLUG."-{$this->slug}",
				"editor_style"  => MAMD_PLUGIN_SLUG."-{$this->slug}-edit-style",
				"style"         => MAMD_PLUGIN_SLUG."-{$this->slug}-style",
			)
		);
	}


}

new MAMD_Section();
