<?php

/**
 * Plugin Name: Gutenberg Scaffolding
 * Plugin URI: https://www.mamdaniweb.com
 * Description: Gutenberg Scaffolding
 * Author: Essa Mamdani
 * Author URI: https://www.essamamdani.com
 * Version: 1.0.0
 * License: GPL
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
if (!defined('ABSPATH')) {
	exit;
}
require_once('includes/constants.php');
require_once('includes/app_class.php');

new MAMD_App(__FILE__);