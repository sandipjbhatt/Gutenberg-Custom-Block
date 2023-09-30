<?php 
/**
* Plugin Name: Custom Block
* Author: Sandip Bhatt
* Description: Create a custom Gutenberge Block
*/

function sb_gutenberge_block(){

    wp_enqueue_script('custom-block',plugin_dir_url(__FILE__).'custom_block.js',array('wp-blocks','wp-i18n','wp-editor'),true,false);
}
add_action('enqueue_block_editor_assets','sb_gutenberge_block');
?>