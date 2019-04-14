<?php

namespace PhotosManager\Access;

use PhotosManager\Modules\Config;
use PhotosManager\Modules\Response;
use PhotosManager\Modules\Validator;

final class Installation extends Access {

	public static function init($fn) {

		switch ($fn) {

			case 'Config::create': self::configCreateAction(); break;

			default:               self::initAction(); break;

		}

		self::fnNotFound();

	}

	private static function configCreateAction() {

		Validator::required(isset($_POST['dbHost'], $_POST['dbUser'], $_POST['dbPassword'], $_POST['dbName'], $_POST['dbTablePrefix']), __METHOD__);

		Response::json(Config::create($_POST['dbHost'], $_POST['dbUser'], $_POST['dbPassword'], $_POST['dbName'], $_POST['dbTablePrefix']));

	}

	private static function initAction() {

		$return = array(
			'status' => PHOTOS_MANAGER_STATUS_NOCONFIG
		);

		Response::json($return);

	}

}

?>