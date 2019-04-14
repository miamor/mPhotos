<?php

spl_autoload_register(function($class) {

	$classPath = str_replace('PhotosManager\\', '', $class);
	$classPath = str_replace('\\', DIRECTORY_SEPARATOR, $classPath);

	$file = PHOTOS_MANAGER . 'php/' . $classPath . '.php';

	if (file_exists($file)===true) require $file;

});

spl_autoload_register(function($class) {

	$classPath = str_replace('\\', DIRECTORY_SEPARATOR, $class);

	$file = PHOTOS_MANAGER . 'plugins/' . $classPath . '.php';

	if (file_exists($file)===true) require $file;

});

?>