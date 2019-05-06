<?php

namespace PhotosManager\Modules;

use ZipArchive;

final class Slide {

	/**
	 * @return boolean Returns true when successful.
	 */
	public function __construct() {

        $this->PHOTOS_MANAGER_URL_UPLOADS = PHOTOS_MANAGER_URL_UPLOADS;
        $this->PHOTOS_MANAGER_URL_UPLOADS_BIG = PHOTOS_MANAGER_URL_UPLOADS_BIG;
        $this->PHOTOS_MANAGER_URL_UPLOADS_THUMB = PHOTOS_MANAGER_URL_UPLOADS_THUMB;
        $this->PHOTOS_MANAGER_URL_UPLOADS_MEDIUM = PHOTOS_MANAGER_URL_UPLOADS_MEDIUM;

		return true;

	}

    public function add($albumID, $photoID, $folderID = null) {

        //if ($albumID !== null && $photoID !== null) {
        if ($albumID && $photoID) {
            // Call plugins
            Plugins::get()->activate(__METHOD__, 0, func_get_args());

            // Properties
            $id       = generateID();
            $sysstamp = time();

            //Response::error("INSERT INTO ? (id, album_id, photo_id) VALUES ('?', '?', '?') ~~~~~ ".PHOTOS_MANAGER_TABLE_SLIDESHOW.' ---- '.$id.'~'.$albumID.'~'.$photoID);
            // Database
            $query  = Database::prepare(Database::get(), "INSERT INTO ? (id, album_id, photo_id, folder_id) VALUES ('?', '?', '?', '?')", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, $id, $albumID, $photoID, $folderID));
            $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

            /*$values = array(PHOTOS_MANAGER_TABLE_PHOTOS, $id, $info['title'], $photo_name, $info['description'], $info['tags'], $info['type'], $info['width'], $info['height'], $info['size'], $info['iso'], $info['aperture'], $info['make'], $info['model'], $info['shutter'], $info['focal'], $info['takestamp'], $path_thumb, $albumID, $public, $star, $checksum, $medium);
            $query  = Database::prepare(Database::get(), "INSERT INTO ? (id, title, url, description, tags, type, width, height, size, iso, aperture, make, model, shutter, focal, takestamp, thumbUrl, album, public, star, checksum, medium) VALUES ('?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?')", $values);
            $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
            */
    
    
            // Call plugins
            Plugins::get()->activate(__METHOD__, 1, func_get_args());

            if ($result === false) return false;
            return $id;
        } else {
            Response::error('No album or photo detected!');
        }
    }

	public function setNote($slideID, $note = '') {

		// Check dependencies
		Validator::required(isset($slideID), isset($note), __METHOD__);

		// Call plugins
		Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Set note
		$query  = Database::prepare(Database::get(), "UPDATE ? SET note = '?' WHERE id = '?'", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, $note, $slideID));
		$result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

		// Call plugins
		Plugins::get()->activate(__METHOD__, 1, func_get_args());

		if ($result===false) return false;
		return true;

	}

    public function getSlides($albumID) {

		// Check dependencies
		Validator::required(isset($albumID), __METHOD__);

		// Call plugins
		Plugins::get()->activate(__METHOD__, 0, func_get_args());


        $query = Database::prepare(Database::get(), "SELECT s.id slide_id, p.*, s.* FROM ? s LEFT JOIN ? p ON s.photo_id = p.id WHERE s.album_id = ? ORDER BY s.position ASC, s.id ASC", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, PHOTOS_MANAGER_TABLE_PHOTOS, $albumID));
        // Get photos
        $photos = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        $previousPhotoID = '';

        if ($photos===false) return false;

        while ($photo_orig = $photos->fetch_assoc()) {

			// Turn data from the database into a front-end friendly format
            $photo = Photo::prepareData($photo_orig);
            $photo['photo'] = $photo_orig['photo_id'];
            $photo['id'] = $photo_orig['slide_id'];
            $photo['folder_id'] = $photo_orig['folder_id'];


			// Set previous and next photoID for navigation purposes
			$photo['previousPhoto'] = $previousPhotoID;
			$photo['nextPhoto']     = '';

			// Set current photoID as nextPhoto of previous photo
			if ($previousPhotoID!=='') $return['content'][$previousPhotoID]['nextPhoto'] = $photo['id'];
			$previousPhotoID = $photo['id'];


			// Add to return
			$return['content'][$photo['id']] = $photo;

		}

		if ($photos->num_rows===0) {
			// Slides empty
			$return['content'] = false;
		} else {

			// Enable next and previous for the first and last photo
			$lastElement    = end($return['content']);
			$lastElementId  = $lastElement['id'];
			$firstElement   = reset($return['content']);
			$firstElementId = $firstElement['id'];

			if ($lastElementId!==$firstElementId) {
				$return['content'][$lastElementId]['nextPhoto']      = $firstElementId;
				$return['content'][$firstElementId]['previousPhoto'] = $lastElementId;
			}

		}

		$return['id']  = $albumID;
		$return['num'] = $photos->num_rows;

		// Call plugins
		Plugins::get()->activate(__METHOD__, 1, func_get_args());

		return $return;

    }



    public function setPosition() {
		// Check dependencies
		Validator::required(isset($_POST['photoOrder']), __METHOD__);

		// Call plugins
		Plugins::get()->activate(__METHOD__, 0, func_get_args());

		$id_list = implode(',', $_POST['photoOrder']);
		$indices = [];
		$size = count(explode(',',$id_list));
		for($i = 0; $i < $size; $i++){
			$indices[$i] = $i;
		}

		$whens = implode(
			"  ",
			array_map(
				function ($id, $value) {
					return "WHEN {$id} THEN {$value}";
				},
				explode(',',$id_list),
				$indices
			)
        );
        
        # insert if not exist
        /*
        INSERT INTO table_listnames (name, address, tele)
        SELECT * FROM (SELECT 'Rupert', 'Somewhere', '022') AS tmp
        WHERE NOT EXISTS (
            SELECT name FROM table_listnames WHERE name = 'Rupert'
        ) LIMIT 1;

        INSERT INTO users (full_name, login, password) 
        SELECT 'Mahbub Tito','tito',SHA1('12345') FROM DUAL
        WHERE NOT EXISTS 
        (SELECT login FROM users WHERE login='tito');
        */

		$query  = Database::prepare(Database::get(), "UPDATE ? SET position = CASE id ? END WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, $whens, $id_list));
		$result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

		// Call plugins
		Plugins::get()->activate(__METHOD__, 1, func_get_args());

		if ($result===false) return false;
		return true;
    }

    public function getSlide($slideID, $albumID) {

		// Excepts the following:
		// (string) $albumID = Album which is currently visible to the user

		// Check dependencies
		Validator::required(isset($slideID), isset($albumID), __METHOD__);

		// Call plugins
		Plugins::get()->activate(__METHOD__, 0, func_get_args());

		// Get photo
		$query  = Database::prepare(Database::get(), "SELECT s.id slide_id, p.*, s.* FROM ? s LEFT JOIN ? p ON s.photo_id = p.id WHERE s.id = ? LIMIT 1", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, PHOTOS_MANAGER_TABLE_PHOTOS, $slideID));
		$photos = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

		if ($photos===false) return false;

		// Get photo object
        $photo = $photos->fetch_assoc();
        
		// Photo not found?
		if ($photo===null) {
			Log::error(Database::get(), __METHOD__, __LINE__, 'Could not find specified photo');
			return false;
		}

		// Parse photo
		$photo['sysdate'] = strftime('%d %b. %Y', substr($photo['id'], 0, -4));
		if (strlen($photo['takestamp'])>1) $photo['takedate'] = strftime('%d %b. %Y %T', $photo['takestamp']);


        if ($photo['album'] != 0) {
            $this->PHOTOS_MANAGER_URL_UPLOADS = PHOTOS_MANAGER_URL_UPLOADS.'/'.$photo['album'];
            $this->PHOTOS_MANAGER_URL_UPLOADS_THUMB = $this->PHOTOS_MANAGER_URL_UPLOADS.'/thumb/';
            $this->PHOTOS_MANAGER_URL_UPLOADS_MEDIUM = $this->PHOTOS_MANAGER_URL_UPLOADS.'/medium/';
            $this->PHOTOS_MANAGER_URL_UPLOADS_BIG = $this->PHOTOS_MANAGER_URL_UPLOADS.'/big/';
        }


		// Parse medium
		if ($photo['medium']==='1') $photo['medium'] = $this->PHOTOS_MANAGER_URL_UPLOADS_MEDIUM . $photo['url'];
		else                        $photo['medium'] = '';

		// Parse paths
		$photo['url']      = $this->PHOTOS_MANAGER_URL_UPLOADS_BIG . $photo['url'];
		$photo['thumbUrl'] = $this->PHOTOS_MANAGER_URL_UPLOADS_THUMB . $photo['thumbUrl'];

        // Reset slide id
        $photo['id'] = $photo['slide_id'];

        // set slide note if empty
        if ($photo['note'] === null) {
            $photo['note'] = $photo['description'];
        }

		if ($albumID!='false') {

			$photo['original_album'] = $photo['album'];
			$photo['album']          = $albumID;

		}

		// Call plugins
		Plugins::get()->activate(__METHOD__, 1, func_get_args());

		return $photo;

    }
    

    public function delete($slideIDs) {

		// Check dependencies
		Validator::required(isset($slideIDs), __METHOD__);

		// Call plugins
		Plugins::get()->activate(__METHOD__, 0, func_get_args());

		// Remove slides
		$query  = Database::prepare(Database::get(), "DELETE FROM ? WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, $slideIDs));
		$result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

		// Call plugins
		Plugins::get()->activate(__METHOD__, 1, func_get_args());

		if ($result===false) return false;
		return true;

	}

}

?>
