<?php
/**
 * Plugin Name: Gutenberg Scaffolding - Single Plugin
 * Plugin URI: https://www.mamdaniweb.com
 * Description: Gutenberg Scaffolding - Single Plugin
 * Author: Essa Mamdani
 * Author URI: https://www.essamamdani.com
 * Version: 1.0.0
 * License: GPL
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class MAMD_Form {
	public function __construct() {
		add_action( 'init', array( $this, 'mamd_block_form_register' ) );
	}
	public function mamd_block_form_register() {

		// Register our block script with WordPress
		wp_register_script(
			'mamd-block-form',
			plugins_url( '../../build/mamd_block_form/main.js', __FILE__ ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
		);

		// Register our block's base CSS
		wp_register_style(
			'mamd-block-form-style',
			plugins_url( '../../build/mamd_block_form/style.css', __FILE__ ),
		);

		// Register our block's editor-specific CSS

		wp_register_style(
			'mamd-block-form-edit-style',
			plugins_url( '../../build/mamd_block_form/editor.css', __FILE__ ),
		);

		// Enqueue the script in the editor
		register_block_type(
			'mamd-block/form',
			array(
				'editor_script' => 'mamd-block-form',
				'editor_style'  => 'mamd-block-form-edit-style',
				'style'         => 'mamd-block-form-style',
			)
		);
	}


}

new MAMD_Form();
