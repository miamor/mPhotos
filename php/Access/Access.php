<?php

namespace PhotosManager\Access;

use PhotosManager\Modules\Response;

abstract class Access {

	final protected static function fnNotFound() {

		Response::error('Function not found! Please check the spelling of the called function.');

	}

}

?>