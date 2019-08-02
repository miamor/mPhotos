<?php

namespace PhotosManager\Modules;

use ZipArchive;
use \RecursiveDirectoryIterator;
use \RecursiveIteratorIterator;

final class Album
{

    private $albumIDs = null;

    public static $validExtensions = array(
        '.zip',
        '.rar',
    );

    /**
     * @return boolean Returns true when successful.
     */
    public function __construct($albumIDs)
    {

        // Init vars
        $this->albumIDs = $albumIDs;

        return true;

    }

    /**
     * @return string|false ID of the created album.
     */
    public function addFolder($title = 'Untitled', $parent_folder = null, $return_folder_id = false, $import_id = null)
    {

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Properties
        // $id = generateID();
        $sysstamp = time();

        // Database
        // $query = Database::prepare(Database::get(), "INSERT INTO ? (id, title, album_id, parent_folder, import_id) VALUES ('?', '?', '?', '?', '?')", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $id, $title, $this->albumIDs, $parent_folder, $import_id));

        $query = Database::prepare(Database::get(), "INSERT INTO ? (title, album_id, parent_folder, import_id) VALUES ('?', '?', '?', '?')", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $title, $this->albumIDs, $parent_folder, $import_id));

        if ($parent_folder === null) {
            $query = Database::prepare(Database::get(), "INSERT INTO ? (title, album_id, import_id) VALUES ('?', '?', '?')", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $title, $this->albumIDs, $import_id));
        }

        $result = Database::execute_add(Database::get(), $query, __METHOD__, __LINE__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        // return array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $id, $title, $this->albumIDs);

        if ($result['result'] === false) {
            return false;
        }

        if ($return_folder_id) {
            return $result['insert_id'];
        }

        // return Slide::getSlides($this->albumIDs);
        return array('folders' => $this->getFolders(), 'slides' => Slide::getSlides($this->albumIDs));

    }

    /**
     * @return string|false ID of the created album.
     */
    public function getFolders()
    {

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Database
        $query = Database::prepare(Database::get(), "SELECT * FROM ? WHERE album_id = ? ORDER BY position ASC, id ASC", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $this->albumIDs));
        $folders = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        $result = array();
        while ($folder = $folders->fetch_assoc()) {
            $result[$folder['id']] = $folder;
        }

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        // return array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $id, $title, $this->albumIDs);

        if ($result === false) {
            return false;
        }

        return $result;

    }

    public function getFolders__()
    {
        $allow_delete = true; // Set to false to disable delete button and delete POST request.
        $allow_upload = true; // Set to true to allow upload files
        $allow_create_folder = true; // Set to false to disable folder creation
        $allow_direct_link = true; // Set to false to only allow downloads and not direct link
        $allow_show_folders = true; // Set to false to hide all subdirectories

        $disallowed_extensions = ['php']; // must be an array. Extensions disallowed to be uploaded
        $hidden_extensions = ['php']; // must be an array of lowercase file extensions. Extensions hidden in directory index

        $directory = '/media/tunguyen/Devs/htdocs/mPhotos/uploads/TuTu';
        $result = [];
        $files = array_diff(scandir($directory), ['.', '..']);
        foreach ($files as $entry) {
            if (!is_entry_ignored($entry, $allow_show_folders, $hidden_extensions)) {
                $i = $directory . '/' . $entry;
                $stat = stat($i);
                $result[] = [
                    'mtime' => $stat['mtime'],
                    'size' => $stat['size'],
                    'name' => basename($i),
                    'path' => preg_replace('@^\./@', '', $i),
                    'is_dir' => is_dir($i),
                    'is_deleteable' => $allow_delete && ((!is_dir($i) && is_writable($directory)) ||
                        (is_dir($i) && is_writable($directory) && is_recursively_deleteable($i))),
                    'is_readable' => is_readable($i),
                    'is_writable' => is_writable($i),
                    'is_executable' => is_executable($i),
                ];
            }
        }

        return $result;
    }

    public function setFolderTitle($folderID, $title = 'Untitled')
    {

        // Check dependencies
        Validator::required(isset($folderID), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Execute query
        $query = Database::prepare(Database::get(), "UPDATE ? SET title = '?' WHERE id = ?", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $title, $folderID));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($result === false) {
            return false;
        }

        return true;

    }

    /**
     * @return boolean Returns true when successful.
     */
    public function deleteFolder($folderIDs)
    {

        // Check dependencies
        Validator::required(isset($folderIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Init vars
        $slideIDs = array();

        // Execute query
        $query = Database::prepare(Database::get(), "SELECT id FROM ? WHERE folder_id IN (?)", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, $folderIDs));
        $slides = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        if ($slides === false) {
            return false;
        }

        // Only delete slides when folders contain slides
        if ($slides->num_rows > 0) {

            // Add each id to slideIDs
            while ($row = $slides->fetch_object()) {
                $slideIDs[] = $row->id;
            }

            // Convert slideIDs to a string
            $slideIDs = implode(',', $slideIDs);

            // Delete all slides
            $slide = new Slide();
            if ($slide->delete($slideIDs) !== true) {
                return false;
            }

        }

        // Delete folders
        $query = Database::prepare(Database::get(), "DELETE FROM ? WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $folderIDs));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        if ($result === false) {
            return false;
        }

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($result === false) {
            return false;
        }

        return true;

    }



    public function import(array $files, $returnOnError = false)
    {

        // Only process the first file in the array
        $file = $files[0];

        // Check if file exceeds the upload_max_filesize directive
        if ($file['error'] === UPLOAD_ERR_INI_SIZE) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'The uploaded file exceeds the upload_max_filesize directive in php.ini');
            if ($returnOnError === true) {
                return false;
            }

            Response::error('The uploaded file exceeds the upload_max_filesize directive in php.ini!');
        }

        // Check if file was only partially uploaded
        if ($file['error'] === UPLOAD_ERR_PARTIAL) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'The uploaded file was only partially uploaded');
            if ($returnOnError === true) {
                return false;
            }

            Response::error('The uploaded file was only partially uploaded!');
        }

        // Check if writing file to disk failed
        if ($file['error'] === UPLOAD_ERR_CANT_WRITE) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'Failed to write photo to disk');
            if ($returnOnError === true) {
                return false;
            }

            Response::error('Failed to write photo to disk!');
        }

        // Check if a extension stopped the file upload
        if ($file['error'] === UPLOAD_ERR_EXTENSION) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'A PHP extension stopped the file upload');
            if ($returnOnError === true) {
                return false;
            }

            Response::error('A PHP extension stopped the file upload!');
        }

        // Check if the upload was successful
        if ($file['error'] !== UPLOAD_ERR_OK) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'Upload contains an error (' . $file['error'] . ')');
            if ($returnOnError === true) {
                return false;
            }

            Response::error('Upload failed!');
        }

        // Verify extension
        $extension = getExtension($file['name'], false);
        if (!in_array(strtolower($extension), self::$validExtensions, true)) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'File format not supported');
            if ($returnOnError === true) {
                return false;
            }

            Response::error('File format not supported!');
        }

        // Verify rar or zip
        /*$type = @exif_imagetype($file['tmp_name']);
        if (!in_array($type, self::$validTypes, true)) {
        Log::error(Database::get(), __METHOD__, __LINE__, 'Photo type not supported');
        if ($returnOnError===true) return false;
        Response::error('Photo type not supported!');
        }*/

        // Generate id
        $album_id = generateID();

        // Set paths
        $tmp_name = $file['tmp_name'];
        $upload_name = $album_id . $extension;
        $zip_path = PHOTOS_MANAGER_UPLOADS . $upload_name;

        // Import if not uploaded via web
        if (!is_uploaded_file($tmp_name)) {
            if (!@copy($tmp_name, $zip_path)) {
                Log::error(Database::get(), __METHOD__, __LINE__, 'Could not copy file to uploads');
                if ($returnOnError === true) {
                    return false;
                }

                Response::error('Could not copy file to uploads!');
            } else {
                @unlink($tmp_name);
            }

        } else {
            if (!@move_uploaded_file($tmp_name, $zip_path)) {
                Log::error(Database::get(), __METHOD__, __LINE__, 'Could not move file to uploads');
                if ($returnOnError === true) {
                    return false;
                }

                Response::error('Could not move file to uploads!');
            }
        }

        $album_path = PHOTOS_MANAGER_UPLOADS . $album_id . '/';
        $zip = new ZipArchive;
        $res = $zip->open($zip_path);
        if ($res === true) {
            $zip->extractTo($album_path);
            $zip->close();

            // read data.json file
            $data = json_decode(file_get_contents($album_path . 'data.json'), true);

            $album_info = $data['album'];
            // add to database
            /*$values = array(PHOTOS_MANAGER_TABLE_ALBUMS, $album_id, $album_info['title'], $_SESSION['identifier'], $album_info['description'], $album_info['path'], $album_info['sysstamp'], $album_info['public'], $album_info['visible'], $album_info['downloadable'], $album_info['password'], $album_info['import_id']);
            $query = Database::prepare(Database::get(), "INSERT INTO ? (id, title, user_identifier, description, path, sysstamp, public, visible, downloadable, password, import_id) VALUES ('?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?')", $values);
            $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);*/

            $album_id = $this->add($album_info['title'], $album_info['description'], $album_id, $album_info['public'], $album_info['visible'], $album_info['downloadable'], $album_info['password']);
            if ($album_id === false) {
                if ($returnOnError === true) {
                    return false;
                }
                Response::error('Could not save album to database!');
            }
            // set album id
            $this->albumIDs = $album_id;

            // insert photos
            foreach ($data['photos'] as $k => $info) {
                // $photo_id = generateID();
                // add to database
                // $values = array(PHOTOS_MANAGER_TABLE_PHOTOS, $photo_id, $info['title'], $_SESSION['identifier'], $info['url'], $info['id']);
                // $query = Database::prepare(Database::get(), "INSERT INTO ? (id, title, user_identifier, url, import_id) VALUES ('?', '?', '?', '?', '?')", $values);

                // $values = array(PHOTOS_MANAGER_TABLE_PHOTOS, $info['title'], $_SESSION['identifier'], $info['url'], $info['id']);
                // $query = Database::prepare(Database::get(), "INSERT INTO ? (title, user_identifier, url, import_id) VALUES ('?', '?', '?', '?')", $values);

                $values = array(PHOTOS_MANAGER_TABLE_PHOTOS, $info['title'], $_SESSION['identifier'], $info['url'], $info['description'], $info['tags'], $info['type'], $info['width'], $info['height'], $info['size'], $info['iso'], $info['aperture'], $info['make'], $info['model'], $info['shutter'], $info['focal'], $info['takestamp'], $info['thumbUrl'], $album_id, $info['public'], $info['star'], $info['checksum'], $info['medium'], $info['id']);
                $query = Database::prepare(Database::get(), "INSERT INTO ? (title, user_identifier, url, description, tags, type, width, height, size, iso, aperture, make, model, shutter, focal, takestamp, thumbUrl, album, public, star, checksum, medium, import_id) VALUES ('?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?', '?')", $values);

                $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

                if ($result === false) {
                    // when there's error, delete this album
                    $this->delete();
                    // delete zip file
                    unlink($zip_path);

                    if ($returnOnError === true) {
                        return false;
                    }

                    Response::error('Could not save photo ' . $photo_id . ' - ' . $info['url'] . ' (' . $info['id'] . ') to database!');
                }
            }

            // insert folders
            $data_folder = $data['folders'];
            // foreach ($data_folder as $k => $info) {
            $index = 0;
            // $inserted = array();
            // echo json_encode($data_folder);
            // while (count($data_folder) > 0) {
            foreach ($data_folder as $index => $info) {
                // $info = $data_folder[$index];
                // echo $index.'~'.json_encode($info).'<br/>';

                // add parent folders first
                if (!$info['parent_folder']) {
                    // add to database
                    $folder_id = $this->addFolder($info['title'], $info['parent_folder'], true, $info['id']);

                    if ($folder_id === false) {
                        // when there's error, delete this album
                        $this->delete();
                        // delete zip file
                        unlink($zip_path);

                        if ($returnOnError === true) {
                            return false;
                        }
                        Response::error('Could not save folder to database!');
                    }

                    // remove this one from folders array
                    unset($data_folder[$index]);
                    // reset index to loop from start again
                    $index = 0;
                } else {
                    // find parent folder
                    $query = Database::prepare(Database::get(), "SELECT * FROM ? WHERE import_id = ? AND album_id = ? LIMIT 1", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $info['parent_folder'], $album_id));
                    $folders = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

                    $parent_folder = $folders->fetch_assoc();

                    if ($parent_folder === false) {
                        // the parent folder of this is not added yet
                        // then skip it for now
                        $index++;
                    } else {

                        // if parent folder of this one exists, then add this folder
                        $folder_id = $this->addFolder($info['title'], $parent_folder['id'], true, $info['id']);

                        if ($folder_id === false) {
                            // when there's error, delete this album
                            $this->delete();
                            // delete zip file
                            unlink($zip_path);

                            if ($returnOnError === true) {
                                return false;
                            }

                            Response::error('Could not save folder to database!');
                        }

                        // remove this one from folders array
                        unset($data_folder[$index]);
                        // reset k to loop over again
                        $index = 0;

                    }

                }
            }

            // insert slides
            foreach ($data['slides'] as $k => $info) {
                // get photo id
                $query = Database::prepare(Database::get(), "SELECT id FROM ? WHERE import_id = ? AND album = ? LIMIT 1", array(PHOTOS_MANAGER_TABLE_PHOTOS, $info['photo_id'], $album_id));
                $photos = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
                if ($photos === false) {
                    // when there's error, delete this album
                    $this->delete();
                    // delete zip file
                    unlink($zip_path);

                    if ($returnOnError === true) {
                        return false;
                    }

                    Response::error('Could not get photo id of the slide ' . $info['id'] . ' (photo_id = import_id = ' . $info['photo_id'] . ')!');
                }
                $photo = $photos->fetch_assoc();

                // get folder id
                $query = Database::prepare(Database::get(), "SELECT * FROM ? WHERE import_id = ? AND album_id = ? LIMIT 1", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $info['folder_id'], $album_id));
                $folders = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

                $slide_id = false;

                if ($folders === false || $folders->num_rows <= 0) {
                    $slide_id = Slide::add($album_id, $photo['id'], null, $info['note'], $info['position']);
                } else {
                    $folder = $folders->fetch_assoc();

                    $slide_id = Slide::add($album_id, $photo['id'], $folder['id'], $info['note'], $info['position']);
                }

                if ($slide_id === false) {
                    // when there's error, delete this album
                    $this->delete();
                    // delete zip file
                    unlink($zip_path);

                    if ($returnOnError === true) {
                        return false;
                    }

                    Response::error('Could not save slide to database!');
                }
            }

            // Call plugins
            Plugins::get()->activate(__METHOD__, 1, func_get_args());

        } else {
            // error open zip file
            Response::error('Could not read archive file!');
        }

        // delete zip file
        unlink($zip_path);
        return $album_id;

    }

    /**
     * @return string|false ID of the created album.
     */
    public function add($title = 'Untitled', $description = '', $id = null, $public = null, $visible = null, $downloadable = 0, $password = null)
    {

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Properties
        if ($id === null) {
            $id = generateID();
        }

        $sysstamp = time();
        if ($public === null) {
            $public = 0;
        }

        if ($visible === null) {
            $visible = 1;
        }

        // Database
        $query = Database::prepare(Database::get(), "INSERT INTO ? (id, user_identifier, title, description, sysstamp, public, visible, downloadable, password) VALUES ('?', '?', '?', '?', '?', '?', '?', '?', '?')", array(PHOTOS_MANAGER_TABLE_ALBUMS, $id, $_SESSION['identifier'], $title, $description, $sysstamp, $public, $visible, $downloadable, $password));
        // $query = Database::prepare(Database::get(), "INSERT INTO ? (user_identifier, title, description, sysstamp, public, visible, downloadable, password) VALUES ('?', '?', '?', '?', '?', '?', '?', '?')", array(PHOTOS_MANAGER_TABLE_ALBUMS, $_SESSION['identifier'], $title, $description, $sysstamp, $public, $visible, $downloadable, $password));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($result === false) {
            return false;
        }

        $PHOTOS_MANAGER_UPLOADS = PHOTOS_MANAGER_UPLOADS . '/' . $id;
        if (!file_exists($PHOTOS_MANAGER_UPLOADS)) {
            mkdir($PHOTOS_MANAGER_UPLOADS, 0777, true);
            mkdir($PHOTOS_MANAGER_UPLOADS . '/big', 0777, true);
            mkdir($PHOTOS_MANAGER_UPLOADS . '/thumb', 0777, true);
            mkdir($PHOTOS_MANAGER_UPLOADS . '/medium', 0777, true);
            mkdir($PHOTOS_MANAGER_UPLOADS . '/import', 0777, true);
        }

        return $id;

    }

    /**
     * Rurns album-attributes into a front-end friendly format. Note that some attributes remain unchanged.
     * @return array Returns album-attributes in a normalized structure.
     */
    public static function prepareData(array $data)
    {

        // This function requires the following album-attributes and turns them
        // into a front-end friendly format: id, title, public, sysstamp, password
        // Note that some attributes remain unchanged

        // Init
        $album = null;

        // Set unchanged attributes
        $album['id'] = $data['id'];
        $album['title'] = $data['title'];
        $album['public'] = $data['public'];
        $album['user_identifier'] = $data['user_identifier'];

        // Additional attributes
        // Only part of $album when available
        if (isset($data['description'])) {
            $album['description'] = $data['description'];
        }

        if (isset($data['visible'])) {
            $album['visible'] = $data['visible'];
        }

        if (isset($data['downloadable'])) {
            $album['downloadable'] = $data['downloadable'];
        }

        // Parse date
        $album['sysdate'] = strftime('%B %Y', $data['sysstamp']);

        // Parse password
        $album['password'] = ($data['password'] == '' ? '0' : '1');

        // Parse thumbs or set default value
        $album['thumbs'] = (isset($data['thumbs']) ? explode(',', $data['thumbs']) : array());

        return $album;

    }

    /**
     * @return array|false Returns an array of photos and album information or false on failure.
     */
    public function get()
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Get album information
        switch ($this->albumIDs) {

            case 'f':
                $return['public'] = '0';
                $query = Database::prepare(Database::get(), "SELECT id, title, tags, public, star, album, thumbUrl, takestamp, url, medium, position, checksum FROM ? WHERE star = 1 ORDER BY position ASC, id ASC", array(PHOTOS_MANAGER_TABLE_PHOTOS));
                break;

            case 's':
                $return['public'] = '1';
                // $query = Database::prepare(Database::get(), "SELECT id, title, tags, public, star, album, thumbUrl, takestamp, url, medium FROM ? WHERE public = 1 OR album = 0 " . Settings::get()['sortingPhotos'], array(PHOTOS_MANAGER_TABLE_PHOTOS));
                $query = Database::prepare(Database::get(), "SELECT id, title, tags, public, star, album, thumbUrl, takestamp, url, medium, position, checksum FROM ? WHERE public = 1 ORDER BY position ASC, id ASC", array(PHOTOS_MANAGER_TABLE_PHOTOS));
                break;

            case 'r':
                $return['public'] = '0';
                $query = Database::prepare(Database::get(), "SELECT id, title, tags, public, star, album, thumbUrl, takestamp, url, medium, position, checksum FROM ? WHERE LEFT(id, 10) >= unix_timestamp(DATE_SUB(NOW(), INTERVAL 1 DAY)) ORDER BY position ASC, id ASC", array(PHOTOS_MANAGER_TABLE_PHOTOS));
                break;

            case '0':
                $return['public'] = '0';
                $query = Database::prepare(Database::get(), "SELECT id, title, tags, public, star, album, thumbUrl, takestamp, url, medium, position, checksum FROM ? WHERE album = 0 ORDER BY position ASC, id ASC", array(PHOTOS_MANAGER_TABLE_PHOTOS));
                break;

            default:
                $query = Database::prepare(Database::get(), "SELECT * FROM ? WHERE id = '?' LIMIT 1", array(PHOTOS_MANAGER_TABLE_ALBUMS, $this->albumIDs));
                $albums = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
                $return = $albums->fetch_assoc();
                $return = Album::prepareData($return);
                $query = Database::prepare(Database::get(), "SELECT id, title, tags, public, star, album, thumbUrl, takestamp, url, medium, position, checksum FROM ? WHERE album = '?' ORDER BY position ASC, id ASC", array(PHOTOS_MANAGER_TABLE_PHOTOS, $this->albumIDs));
                break;

        }

        // Get photos
        $photos = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        $previousPhotoID = '';

        if ($photos === false) {
            return false;
        }

        while ($photo = $photos->fetch_assoc()) {

            // Turn data from the database into a front-end friendly format
            $photo = Photo::prepareData($photo);

            // Set previous and next photoID for navigation purposes
            $photo['previousPhoto'] = $previousPhotoID;
            $photo['nextPhoto'] = '';

            // Set current photoID as nextPhoto of previous photo
            if ($previousPhotoID !== '') {
                $return['content']['p'.$previousPhotoID]['nextPhoto'] = $photo['id'];
                // $return['content'][$previousPhotoID]['nextPhoto'] = $photo['position'];
            }

            $previousPhotoID = $photo['id'];
            // $previousPhotoID = $photo['position'];

            // Add to return
            $return['content']['p'.$photo['id']] = $photo;
            // $return['content'][$photo['position']] = $photo;

        }

        if ($photos->num_rows === 0) {

            // Album empty
            $return['content'] = false;

        } else {

            // Enable next and previous for the first and last photo
            $lastElement = end($return['content']);
            $lastElementId = $lastElement['id'];
            $firstElement = reset($return['content']);
            $firstElementId = $firstElement['id'];

            if ($lastElementId !== $firstElementId) {
                $return['content']['p'.$lastElementId]['nextPhoto'] = $firstElementId;
                $return['content']['p'.$firstElementId]['previousPhoto'] = $lastElementId;
            }
            /*$lastElement = end($return['content']);
            $lastElementId = $lastElement['position'];
            $firstElement = reset($return['content']);
            $firstElementId = $firstElement['position'];

            if ($lastElementId !== $firstElementId) {
                $return['content'][$lastElementId]['nextPhoto'] = $firstElementId;
                $return['content'][$firstElementId]['previousPhoto'] = $lastElementId;
            }*/

        }

        $return['id'] = $this->albumIDs;
        $return['num'] = $photos->num_rows;

        $return['slides'] = Slide::getSlides($this->albumIDs);
        $return['folders'] = array();

        if (!in_array($return['id'], array('0', 's', 'f', 'r'))) {
            $return['folders'] = self::getFolders();
        }

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        return $return;

    }


    /**
     * Starts a download of an album.
     * @return resource|boolean Sends a ZIP-file or returns false on failure.
     */
    public function getExport()
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Illicit chars
        $badChars = array_merge(
            array_map('chr', range(0, 31)),
            array("<", ">", ":", '"', "/", "\\", "|", "?", "*")
        );

        // data to save to export
        $export_data = array();

        // Photos query
        switch ($this->albumIDs) {
            case 's':
                $photos = Database::prepare(Database::get(), 'SELECT * FROM ? WHERE public = 1', array(PHOTOS_MANAGER_TABLE_PHOTOS));
                $zipTitle = 'Public';
                break;
            case 'f':
                $photos = Database::prepare(Database::get(), 'SELECT * FROM ? WHERE star = 1', array(PHOTOS_MANAGER_TABLE_PHOTOS));
                $zipTitle = 'Starred';
                break;
            case 'r':
                $photos = Database::prepare(Database::get(), 'SELECT * FROM ? WHERE LEFT(id, 10) >= unix_timestamp(DATE_SUB(NOW(), INTERVAL 1 DAY)) GROUP BY checksum', array(PHOTOS_MANAGER_TABLE_PHOTOS));
                $zipTitle = 'Recent';
                break;
            default:
                $photos = Database::prepare(Database::get(), "SELECT * FROM ? WHERE album = '?'", array(PHOTOS_MANAGER_TABLE_PHOTOS, $this->albumIDs));
                $zipTitle = 'Unsorted';
        }

        // Get title from database when album is not a SmartAlbum
        if ($this->albumIDs != 0 && is_numeric($this->albumIDs)) {

            $query = Database::prepare(Database::get(), "SELECT * FROM ? WHERE id = '?' LIMIT 1", array(PHOTOS_MANAGER_TABLE_ALBUMS, $this->albumIDs));
            $album = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

            if ($album === false) {
                return false;
            }

            // Get album object
            $album = $album->fetch_object();

            // Album not found?
            if ($album === null) {
                Log::error(Database::get(), __METHOD__, __LINE__, 'Could not find specified album');
                return false;
            }

            // save to export data
            $export_data['album'] = json_decode(json_encode($album), true);

            // Set title
            $zipTitle = $album->title;

        }

        // Escape title
        $zipTitle = str_replace($badChars, '', $zipTitle);

        $filename = PHOTOS_MANAGER_DATA . $zipTitle . '.zip';

        // Create zip
        $zip = new ZipArchive();
        if ($zip->open($filename, ZIPARCHIVE::CREATE) !== true) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'Could not create ZipArchive');
            return false;
        }

        // Execute query
        $photos = Database::execute(Database::get(), $photos, __METHOD__, __LINE__);

        // Check if album empty
        if ($photos->num_rows == 0) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'Could not create ZipArchive without images');
            return false;
        }

        // Parse each path
        /*$files = array();
        while ($photo = $photos->fetch_object()) {

        $PHOTOS_MANAGER_UPLOADS_BIG = PHOTOS_MANAGER_UPLOADS_BIG;
        // var_dump($photo);
        if ($photo->album != 0) {
        $PHOTOS_MANAGER_UPLOADS_BIG = PHOTOS_MANAGER_UPLOADS . $photo->album . '/big/';
        }

        // Parse url
        $photo->url = $PHOTOS_MANAGER_UPLOADS_BIG . $photo->url;

        // Parse title
        $photo->title = str_replace($badChars, '', $photo->title);
        if (!isset($photo->title) || $photo->title === '') {
        $photo->title = 'Untitled';
        }

        // Check if readable
        if (!@is_readable($photo->url)) {
        continue;
        }

        // save to export data
        $export_data[] = json_decode(json_encode($photo), true);

        // Get extension of image
        $extension = getExtension($photo->url, false);

        // Set title for photo
        $zipFileName = $zipTitle . '/' . $photo->title . $extension;
        // echo $zipFileName;

        // Check for duplicates
        if (!empty($files)) {
        $i = 1;
        while (in_array($zipFileName, $files)) {

        // Set new title for photo
        $zipFileName = $zipTitle . '/' . $photo->title . '-' . $i . $extension;

        $i++;

        }
        }

        // Add to array
        $files[] = $zipFileName;

        // Add photo to zip
        $zip->addFile($photo->url, $zipFileName);

        }

        $export_data_json = json_encode($export_data);
        echo $export_data_json;

        // Finish zip
        $zip->close();*/


        // Loop throigh slides
        $query = Database::prepare(Database::get(), "SELECT * FROM ? WHERE album_id = '?'", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, $this->albumIDs));
        $slides = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        if ($slides->num_rows > 0) {
            while ($slide = $slides->fetch_object()) {
                // save to export data
                $export_data['slides'][] = json_decode(json_encode($slide), true);
            }
        }


        // Loop through folders
        $query = Database::prepare(Database::get(), "SELECT * FROM ? WHERE album_id = '?'", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $this->albumIDs));
        $folders = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        if ($folders->num_rows > 0) {
            while ($folder = $folders->fetch_object()) {
                // save to export data
                $export_data['folders'][] = json_decode(json_encode($folder), true);
            }
        }


        // Loop through photos
        while ($photo = $photos->fetch_object()) {
            // save to export data
            $export_data['photos'][] = json_decode(json_encode($photo), true);

            $PHOTOS_MANAGER_UPLOADS = PHOTOS_MANAGER_UPLOADS;
            // var_dump($photo);
            if ($photo->album != 0) {
                $PHOTOS_MANAGER_UPLOADS = PHOTOS_MANAGER_UPLOADS . $photo->album . '/';
            }
        }


        // real path to folder to zip
        $rootPath = realpath($PHOTOS_MANAGER_UPLOADS);

        // Create recursive directory iterator
        /** @var SplFileInfo[] $files */
        $files = new RecursiveIteratorIterator(
            new RecursiveDirectoryIterator($rootPath),
            RecursiveIteratorIterator::LEAVES_ONLY
        );

        foreach ($files as $name => $file) {
            // Skip directories (they would be added automatically)
            if (!$file->isDir()) {
                // Get real and relative path for current file
                $filePath = $file->getRealPath();
                $relativePath = substr($filePath, strlen($rootPath) + 1);

                // Add current file to archive
                $zip->addFile($filePath, $relativePath);
            }
        }

        $export_data_json = json_encode($export_data);
        // echo $export_data_json;
        // $export_data_json = 'hiu';

        $zip->addFromString('data.json', $export_data_json);

        // Zip archive will be created only after closing object
        $zip->close();

        // Send zip
        header("Content-Type: application/zip");
        header("Content-Disposition: attachment; filename=\"$zipTitle.zip\"");
        header("Content-Length: " . filesize($filename));
        readfile($filename);

        // Delete zip
        unlink($filename);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        return true;

    }

    public function getDownload()
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Illicit chars
        $badChars = array_merge(
            array_map('chr', range(0, 31)),
            array("<", ">", ":", '"', "/", "\\", "|", "?", "*")
        );

        // data to save to export
        $export_data = array();

        // Photos query
        switch ($this->albumIDs) {
            case 's':
                $photos = Database::prepare(Database::get(), 'SELECT * FROM ? WHERE public = 1', array(PHOTOS_MANAGER_TABLE_PHOTOS));
                $zipTitle = 'Public';
                break;
            case 'f':
                $photos = Database::prepare(Database::get(), 'SELECT * FROM ? WHERE star = 1', array(PHOTOS_MANAGER_TABLE_PHOTOS));
                $zipTitle = 'Starred';
                break;
            case 'r':
                $photos = Database::prepare(Database::get(), 'SELECT * FROM ? WHERE LEFT(id, 10) >= unix_timestamp(DATE_SUB(NOW(), INTERVAL 1 DAY)) GROUP BY checksum', array(PHOTOS_MANAGER_TABLE_PHOTOS));
                $zipTitle = 'Recent';
                break;
            default:
                $photos = Database::prepare(Database::get(), "SELECT * FROM ? WHERE album = '?'", array(PHOTOS_MANAGER_TABLE_PHOTOS, $this->albumIDs));
                $zipTitle = 'Unsorted';
        }

        // Get title from database when album is not a SmartAlbum
        if ($this->albumIDs != 0 && is_numeric($this->albumIDs)) {

            $query = Database::prepare(Database::get(), "SELECT * FROM ? WHERE id = '?' LIMIT 1", array(PHOTOS_MANAGER_TABLE_ALBUMS, $this->albumIDs));
            $album = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

            if ($album === false) {
                return false;
            }

            // Get album object
            $album = $album->fetch_object();

            // Album not found?
            if ($album === null) {
                Log::error(Database::get(), __METHOD__, __LINE__, 'Could not find specified album');
                return false;
            }

            // save to export data
            $export_data['album'] = json_decode(json_encode($album), true);

            // Set title
            $zipTitle = $album->title;

        }

        // Escape title
        $zipTitle = str_replace($badChars, '', $zipTitle);

        $filename = PHOTOS_MANAGER_DATA . $zipTitle . '.zip';

        // Create zip
        $zip = new ZipArchive();
        if ($zip->open($filename, ZIPARCHIVE::CREATE) !== true) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'Could not create ZipArchive');
            return false;
        }



        // Loop through folders to add in zip
        // $query = Database::prepare(Database::get(), "SELECT * FROM ? WHERE album_id = '?' ORDER BY parent_folder ASC", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $this->albumIDs));
        // $folders = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        // if ($folders->num_rows > 0) {
        //     while ($folder = $folders->fetch_object()) {
        //         // create new folder
        //         $zip->addEmptyDir($folder->title);
        //     }
        // }



        // Loop through slides to know which slide belongs to which folder
        $query = Database::prepare(Database::get(), "SELECT slides.*, photos.*, folders.id, folders.title AS folder_title, parent_folder.title AS parent_folder_title FROM ? slides JOIN ? photos ON slides.album_id = '?' AND slides.photo_id = photos.id JOIN ? folders ON slides.folder_id = folders.id LEFT JOIN ? parent_folder ON parent_folder.id = folders.parent_folder", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, PHOTOS_MANAGER_TABLE_PHOTOS, $this->albumIDs, PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, PHOTOS_MANAGER_TABLE_SLIDES_FOLDER));
        $slides = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        if ($slides->num_rows > 0) {
            while ($slide = $slides->fetch_object()) {
                // find photo url 
                $PHOTOS_MANAGER_UPLOADS = PHOTOS_MANAGER_UPLOADS;
                if ($slide->album != 0) {
                    $PHOTOS_MANAGER_UPLOADS = PHOTOS_MANAGER_UPLOADS . $slide->album . '/big/';
                }
                $rootPath = realpath($PHOTOS_MANAGER_UPLOADS);

                $ext = pathinfo($slide->url, PATHINFO_EXTENSION);
                $photo_name = explode('.'.$ext, $slide->url)[0];
                // add photo and note to folder
                if ($slide->parent_folder_title) {
                    // add photo to folder
                    $zip->addFile($rootPath.'/'.$slide->url, $slide->parent_folder_title.'/'.$slide->folder_title.'/'.$photo_name.'__'.$slide->id.'.'.$ext);
                    // add note file
                    if ($slide->note) {
                        $zip->addFromString($slide->parent_folder_title.'/'.$slide->folder_title.'/'.$photo_name.'__'.$slide->id.'.txt', $slide->note);
                    }
                } else {
                    // add photo to folder
                    $zip->addFile($rootPath.'/'.$slide->url, $slide->folder_title.'/'.$photo_name.'__'.$slide->id.'.'.$ext);
                    // add note file
                    if ($slide->note) {
                        $zip->addFromString($slide->folder_title.'/'.$photo_name.'__'.$slide->id.'.txt', $slide->note);
                    }
                }

            }
        }



        // Zip archive will be created only after closing object
        $zip->close();

        // Send zip
        header("Content-Type: application/zip");
        header("Content-Disposition: attachment; filename=\"$zipTitle.zip\"");
        header("Content-Length: " . filesize($filename));
        readfile($filename);

        // Delete zip
        unlink($filename);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        return true;

    }

    /**
     * @return boolean Returns true when successful.
     */
    public function setTitle($title = 'Untitled')
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Execute query
        $query = Database::prepare(Database::get(), "UPDATE ? SET title = '?' WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_ALBUMS, $title, $this->albumIDs));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($result === false) {
            return false;
        }

        return true;

    }

    public function setPosition()
    {
        // Check dependencies
        Validator::required(isset($_POST['photoOrder']), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        $id_list = implode(',', $_POST['photoOrder']);
        $indices = [];
        $size = count(explode(',', $id_list));
        for ($i = 0; $i < $size; $i++) {
            $indices[$i] = $i;
        }

        $whens = implode(
            "  ",
            array_map(
                function ($id, $value) {
                    return "WHEN {$id} THEN {$value}";
                },
                explode(',', $id_list),
                $indices
            )
        );

        $query = Database::prepare(Database::get(), "UPDATE ? SET position = CASE id ? END WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_PHOTOS, $whens, $id_list));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        // Response::json("UPDATE ? SET position = CASE id $whens END WHERE id IN ($id_list)");

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($result === false) {
            return false;
        }

        return true;
    }

    /**
     * @return boolean Returns true when successful.
     */
    public function setDescription($description = '')
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Execute query
        $query = Database::prepare(Database::get(), "UPDATE ? SET description = '?' WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_ALBUMS, $description, $this->albumIDs));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($result === false) {
            return false;
        }

        return true;

    }

    public function getIdentifier()
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        if ($this->albumIDs === '0' || $this->albumIDs === 's' || $this->albumIDs === 'f') {
            return false;
        }

        // Execute query
        $query = Database::prepare(Database::get(), "SELECT user_identifier FROM ? WHERE id = '?' LIMIT 1", array(PHOTOS_MANAGER_TABLE_ALBUMS, $this->albumIDs));
        $albums = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        if ($albums === false) {
            return false;
        }

        // Get album object
        $album = $albums->fetch_object();

        // Album not found?
        if ($album === null) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'Could not find specified album');
            return false;
        }

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        return $album->user_identifier;

    }

    /**
     * @return boolean Returns true when the album is public.
     */
    public function getPublic()
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        if ($this->albumIDs === '0' || $this->albumIDs === 's' || $this->albumIDs === 'f') {
            return false;
        }

        // Execute query
        $query = Database::prepare(Database::get(), "SELECT public FROM ? WHERE id = '?' LIMIT 1", array(PHOTOS_MANAGER_TABLE_ALBUMS, $this->albumIDs));
        $albums = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        if ($albums === false) {
            return false;
        }

        // Get album object
        $album = $albums->fetch_object();

        // Album not found?
        if ($album === null) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'Could not find specified album');
            return false;
        }

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($album->public == 1) {
            return true;
        }

        return false;

    }

    /**
     * @return boolean Returns true when the album is downloadable.
     */
    public function getDownloadable()
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        if ($this->albumIDs === '0' || $this->albumIDs === 's' || $this->albumIDs === 'f' || $this->albumIDs === 'r') {
            return false;
        }

        // Execute query
        $query = Database::prepare(Database::get(), "SELECT downloadable FROM ? WHERE id = '?' LIMIT 1", array(PHOTOS_MANAGER_TABLE_ALBUMS, $this->albumIDs));
        $albums = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        if ($albums === false) {
            return false;
        }

        // Get album object
        $album = $albums->fetch_object();

        // Album not found?
        if ($album === null) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'Could not find specified album');
            return false;
        }

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($album->downloadable == 1) {
            return true;
        }

        return false;

    }

    /**
     * @return boolean Returns true when successful.
     */
    public function setPublic($public, $password, $visible, $downloadable)
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Convert values
        $public = ($public === '1' ? 1 : 0);
        $visible = ($visible === '1' ? 1 : 0);
        $downloadable = ($downloadable === '1' ? 1 : 0);

        // Set public
        $query = Database::prepare(Database::get(), "UPDATE ? SET public = '?', visible = '?', downloadable = '?', password = NULL WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_ALBUMS, $public, $visible, $downloadable, $this->albumIDs));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        if ($result === false) {
            return false;
        }

        // Reset permissions for photos
        if ($public === 1) {

            $query = Database::prepare(Database::get(), "UPDATE ? SET public = 0 WHERE album IN (?)", array(PHOTOS_MANAGER_TABLE_PHOTOS, $this->albumIDs));
            $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

            if ($result === false) {
                return false;
            }

        }

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        // Set password
        if (isset($password) && strlen($password) > 0) {
            return $this->setPassword($password);
        }

        return true;

    }

    /**
     * @return boolean Returns true when successful.
     */
    private function setPassword($password)
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        if (strlen($password) > 0) {

            // Get hashed password
            $password = getHashedString($password);

            // Set hashed password
            // Do not prepare $password because it is hashed and save
            // Preparing (escaping) the password would destroy the hash
            $query = Database::prepare(Database::get(), "UPDATE ? SET password = '$password' WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_ALBUMS, $this->albumIDs));

        } else {

            // Unset password
            $query = Database::prepare(Database::get(), "UPDATE ? SET password = NULL WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_ALBUMS, $this->albumIDs));

        }

        // Execute query
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($result === false) {
            return false;
        }

        return true;

    }

    /**
     * @return boolean Returns when album is public.
     */
    public function checkPassword($password)
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Execute query
        $query = Database::prepare(Database::get(), "SELECT password FROM ? WHERE id = '?' LIMIT 1", array(PHOTOS_MANAGER_TABLE_ALBUMS, $this->albumIDs));
        $albums = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        if ($albums === false) {
            return false;
        }

        // Get album object
        $album = $albums->fetch_object();

        // Album not found?
        if ($album === null) {
            Log::error(Database::get(), __METHOD__, __LINE__, 'Could not find specified album');
            return false;
        }

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        // Check if password is correct
        if ($album->password == '') {
            return true;
        }

        if ($album->password === crypt($password, $album->password)) {
            return true;
        }

        return false;

    }

    /**
     * @return boolean Returns true when successful.
     */
    public function merge()
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Convert to array
        $albumIDs = explode(',', $this->albumIDs);

        // Get first albumID
        $albumID = array_splice($albumIDs, 0, 1);
        $albumID = $albumID[0];

        $query = Database::prepare(Database::get(), "DELETE FROM ? WHERE album_id IN (?)", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, $filteredIDs));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        if ($result === false) {
            return false;
        }

        $query = Database::prepare(Database::get(), "UPDATE ? SET album = ? WHERE album IN (?)", array(PHOTOS_MANAGER_TABLE_PHOTOS, $albumID, $this->albumIDs));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        if ($result === false) {
            return false;
        }

        // $albumIDs contains all IDs without the first albumID
        // Convert to string
        $filteredIDs = implode(',', $albumIDs);

        $query = Database::prepare(Database::get(), "DELETE FROM ? WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_ALBUMS, $filteredIDs));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($result === false) {
            return false;
        }

        return true;

    }

    /**
     * @return boolean Returns true when successful.
     */
    public function delete()
    {

        // Check dependencies
        Validator::required(isset($this->albumIDs), __METHOD__);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Init vars
        $photoIDs = array();

        // Execute query
        $query = Database::prepare(Database::get(), "SELECT id FROM ? WHERE album IN (?)", array(PHOTOS_MANAGER_TABLE_PHOTOS, $this->albumIDs));
        $photos = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        if ($photos === false) {
            return false;
        }

        // Only delete photos when albums contain photos
        if ($photos->num_rows > 0) {

            // Add each id to photoIDs
            while ($row = $photos->fetch_object()) {
                $photoIDs[] = $row->id;
            }

            // Convert photoIDs to a string
            $photoIDs = implode(',', $photoIDs);

            // Delete all photos
            $photo = new Photo($photoIDs);
            if ($photo->delete() !== true) {
                return false;
            }

        }

        // Delete slides
        $query = Database::prepare(Database::get(), "DELETE FROM ? WHERE album_id IN (?)", array(PHOTOS_MANAGER_TABLE_SLIDESHOW, $this->albumIDs));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        if ($result === false) {
            return false;
        }

        // Delete folders
        $query = Database::prepare(Database::get(), "DELETE FROM ? WHERE album_id IN (?)", array(PHOTOS_MANAGER_TABLE_SLIDES_FOLDER, $this->albumIDs));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        if ($result === false) {
            return false;
        }

        // Delete albums
        $query = Database::prepare(Database::get(), "DELETE FROM ? WHERE id IN (?)", array(PHOTOS_MANAGER_TABLE_ALBUMS, $this->albumIDs));
        $result = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        // Delete all the images stored on server
        $folder = PHOTOS_MANAGER_UPLOADS . '/' . $this->albumIDs;
        self::rrmdir($folder);

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        if ($result === false) {
            return false;
        }

        return true;

    }

    public static function rrmdir($dir)
    {
        if (is_dir($dir)) {
            $objects = scandir($dir);
            foreach ($objects as $object) {
                if ($object != "." && $object != "..") {
                    if (is_dir($dir . "/" . $object)) {
                        self::rrmdir($dir . "/" . $object);
                    } else {
                        unlink($dir . "/" . $object);
                    }

                }
            }
            rmdir($dir);
        }
    }
}
