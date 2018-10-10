<?php
/**
 * Plugin Name: Gutenberg Scaffolding
 * Plugin URI: http://www.mamdaniweb.com
 * Description: Gutenberg Scaffolding
 * Author: Essa Mamdani
 * Author URI: http://www.essamamdani.com
 * Version: 1.0.0
 * License: GPL
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
if ( ! defined( 'GBF_DIR' ) ) {
	define( 'GBF_DIR', WP_PLUGIN_DIR . '/' . dirname( plugin_basename( __FILE__ ) ) );
}

require_once( GBF_DIR . "/block/form/index.php" );