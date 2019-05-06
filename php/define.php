<?php

// Define root
define('PHOTOS_MANAGER', substr(__DIR__, 0, -3));

// Define status
define('PHOTOS_MANAGER_STATUS_NOCONFIG', 0);
define('PHOTOS_MANAGER_STATUS_LOGGEDOUT', 1);
define('PHOTOS_MANAGER_STATUS_LOGGEDIN', 2);

// Define dirs
define('PHOTOS_MANAGER_PLUGINS', PHOTOS_MANAGER . 'plugins/');
define('PHOTOS_MANAGER_DATA', PHOTOS_MANAGER . 'data/');
define('PHOTOS_MANAGER_SRC', PHOTOS_MANAGER . 'src/');
define('PHOTOS_MANAGER_UPLOADS', PHOTOS_MANAGER . 'uploads/');
define('PHOTOS_MANAGER_UPLOADS_BIG', PHOTOS_MANAGER_UPLOADS . 'big/');
define('PHOTOS_MANAGER_UPLOADS_MEDIUM', PHOTOS_MANAGER_UPLOADS . 'medium/');
define('PHOTOS_MANAGER_UPLOADS_THUMB', PHOTOS_MANAGER_UPLOADS . 'thumb/');
define('PHOTOS_MANAGER_UPLOADS_IMPORT', PHOTOS_MANAGER_UPLOADS . 'import/');

/*$PHOTOS_MANAGER_UPLOADS = PHOTOS_MANAGER . 'uploads/';
$PHOTOS_MANAGER_UPLOADS_BIG = $PHOTOS_MANAGER_UPLOADS . 'big/';
$PHOTOS_MANAGER_UPLOADS_MEDIUM = $PHOTOS_MANAGER_UPLOADS . 'medium/';
$PHOTOS_MANAGER_UPLOADS_THUMB = $PHOTOS_MANAGER_UPLOADS . 'thumb/';
$PHOTOS_MANAGER_UPLOADS_IMPORT = $PHOTOS_MANAGER_UPLOADS . 'import/';
*/
// Define files
define('PHOTOS_MANAGER_CONFIG_FILE', PHOTOS_MANAGER_DATA . 'config.php');

// Define urls
define('PHOTOS_MANAGER_URL_UPLOADS', 'uploads/');
define('PHOTOS_MANAGER_URL_UPLOADS_BIG', PHOTOS_MANAGER_URL_UPLOADS . 'big/');
define('PHOTOS_MANAGER_URL_UPLOADS_MEDIUM', PHOTOS_MANAGER_URL_UPLOADS . 'medium/');
define('PHOTOS_MANAGER_URL_UPLOADS_THUMB', PHOTOS_MANAGER_URL_UPLOADS . 'thumb/');

/*$PHOTOS_MANAGER_URL_UPLOADS = 'uploads/';
$PHOTOS_MANAGER_URL_UPLOADS_BIG = $PHOTOS_MANAGER_URL_UPLOADS . 'big/';
$PHOTOS_MANAGER_URL_UPLOADS_MEDIUM = $PHOTOS_MANAGER_URL_UPLOADS . 'medium/';
$PHOTOS_MANAGER_URL_UPLOADS_THUMB = $PHOTOS_MANAGER_URL_UPLOADS . 'thumb/';
*/

function defineTablePrefix($dbTablePrefix) {

	// This part is wrapped into a function, because it needs to be called
	// after the config-file has been loaded. Other defines are available
	// before the config-file has been loaded.

	// Parse table prefix
	// Old users do not have the table prefix stored in their config-file
	if (isset($dbTablePrefix)===false) $dbTablePrefix = '';
	if ($dbTablePrefix!=='') $dbTablePrefix .= '_';

    // Define tables
    define('PHOTOS_MANAGER_TABLE_USERS', $dbTablePrefix . 'users');
    define('PHOTOS_MANAGER_TABLE_ALBUMS', $dbTablePrefix . 'albums');
	define('PHOTOS_MANAGER_TABLE_LOG', $dbTablePrefix . 'log');
	define('PHOTOS_MANAGER_TABLE_PHOTOS', $dbTablePrefix . 'photos');
	define('PHOTOS_MANAGER_TABLE_SLIDESHOW', $dbTablePrefix . 'presentation');
    define('PHOTOS_MANAGER_TABLE_SLIDES_FOLDER', $dbTablePrefix . 'presentation_folder');
	define('PHOTOS_MANAGER_TABLE_SETTINGS', $dbTablePrefix . 'settings');

}

?>