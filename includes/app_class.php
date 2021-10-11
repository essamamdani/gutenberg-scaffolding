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
        }
        function mamd_admin_hook($hook)
        {
            // if ( 'edit.php' != $hook ) {
            //     return;
            // }
            wp_enqueue_script(MAMD_PLUGIN_SLUG . '_custom_script', plugin_dir_url($this->path) . 'main.js', array(), '1.0');
        }
    }
}


