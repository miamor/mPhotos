<?php

namespace PhotosManager\Modules;

final class Albums
{

    /**
     * @return boolean Returns true when successful.
     */
    public function __construct()
    {

        return true;

    }

    /**
     * @return array|false Returns an array of albums or false on failure.
     */
    public function get($public = true)
    {

        // Call plugins
        Plugins::get()->activate(__METHOD__, 0, func_get_args());

        // Initialize return var
        $return = array(
            'smartalbums' => null,
            'albums' => null,
            'num' => 0,
        );

        // Get SmartAlbums
        if ($public === false) {
            $return['smartalbums'] = $this->getSmartAlbums();
        }

        if ($public === true) {
            $return['smartalbums'] = $this->getPublicPhotos();
        }

        // Albums query
        if ($public === false) {
            $query = Database::prepare(Database::get(), "SELECT id, title, public, sysstamp, password, path, user_identifier FROM ? " . Settings::get()['sortingAlbums'], array(PHOTOS_MANAGER_TABLE_ALBUMS));
        } else {
            $query = Database::prepare(Database::get(), 'SELECT id, title, public, sysstamp, password, path, user_identifier FROM ? WHERE public = 1 AND visible <> 0 ' . Settings::get()['sortingAlbums'], array(PHOTOS_MANAGER_TABLE_ALBUMS));
        }

        // Execute query
        $albums = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

        if ($albums === false) {
            return false;
        }

        // For each album
        while ($album = $albums->fetch_assoc()) {

            if ($album['id'] != 0) {
                $PHOTOS_MANAGER_URL_UPLOADS = PHOTOS_MANAGER_URL_UPLOADS . '/' . $album['id'];
                $PHOTOS_MANAGER_URL_UPLOADS_THUMB = $PHOTOS_MANAGER_URL_UPLOADS . '/thumb/';
            } else {
                $PHOTOS_MANAGER_URL_UPLOADS = PHOTOS_MANAGER_URL_UPLOADS;
                $PHOTOS_MANAGER_URL_UPLOADS_THUMB = $PHOTOS_MANAGER_URL_UPLOADS_THUMB;
            }

            // Turn data from the database into a front-end friendly format
            $album = Album::prepareData($album);

            // Thumbs
            // echo $album['user_identifier'].'~~~~~~~'.$_SESSION['identifier'].'-----';
            if (($public === true && $album['password'] === '0') ||
                ($public === false && ($album['public'] == 1 || $album['user_identifier'] === $_SESSION['identifier']))) {

                // Execute query
                // $query = Database::prepare(Database::get(), "SELECT thumbUrl FROM ? WHERE album = '?' AND user_identifier = '?' ORDER BY star DESC, " . substr(Settings::get()['sortingPhotos'], 9) . " LIMIT 3", array(PHOTOS_MANAGER_TABLE_PHOTOS, $album['id'], $_SESSION['identifier']));
                $query = Database::prepare(Database::get(), "SELECT thumbUrl FROM ? WHERE album = '?' ORDER BY star DESC, " . substr(Settings::get()['sortingPhotos'], 9) . " LIMIT 3", array(PHOTOS_MANAGER_TABLE_PHOTOS, $album['id']));
                $thumbs = Database::execute(Database::get(), $query, __METHOD__, __LINE__);

                if ($thumbs === false) {
                    return false;
                }

                // For each thumb
                $k = 0;
                while ($thumb = $thumbs->fetch_object()) {
                    $album['thumbs'][$k] = $PHOTOS_MANAGER_URL_UPLOADS_THUMB . $thumb->thumbUrl;
                    $k++;
                }

                // Add to return
                $return['albums'][] = $album;

            }

        }

        // Num of albums
        $return['num'] = $albums->num_rows;

        // Call plugins
        Plugins::get()->activate(__METHOD__, 1, func_get_args());

        return $return;

    }

    /**
     * @return array|false Returns an array of smart albums or false on failure.
     */
    private function getSmartAlbums()
    {

        // Initialize return var
        $return = array(
            'unsorted' => null,
            'public' => null,
            'starred' => null,
            'recent' => null,
        );

        /**
         * Unsorted
         */

        $query = Database::prepare(Database::get(), "SELECT thumbUrl FROM ? WHERE album = 0 AND (user_identifier = '?' OR public = 1) ORDER BY position DESC, id DESC", array(PHOTOS_MANAGER_TABLE_PHOTOS, $_SESSION['identifier']));
        $unsorted = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        $i = 0;

        if ($unsorted === false) {
            return false;
        }

        $return['unsorted'] = array(
            'thumbs' => array(),
            'num' => $unsorted->num_rows,
        );

        while ($row = $unsorted->fetch_object()) {
            if ($i < 3) {
                $PHOTOS_MANAGER_URL_UPLOADS_THUMB = PHOTOS_MANAGER_URL_UPLOADS_THUMB;

                $return['unsorted']['thumbs'][$i] = $PHOTOS_MANAGER_URL_UPLOADS_THUMB . $row->thumbUrl;
                $i++;
            } else {
                break;
            }

        }

        /**
         * Starred
         */

        $query = Database::prepare(Database::get(), "SELECT thumbUrl, album FROM ? WHERE star = 1 AND (user_identifier = '?' OR public = 1) ORDER BY position DESC, id DESC", array(PHOTOS_MANAGER_TABLE_PHOTOS, $_SESSION['identifier']));
        $starred = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        $i = 0;

        if ($starred === false) {
            return false;
        }

        $return['starred'] = array(
            'thumbs' => array(),
            'num' => $starred->num_rows,
        );

        while ($row3 = $starred->fetch_object()) {
            if ($i < 3) {
                if ($row3 && $row3->album != 0) {
                    $PHOTOS_MANAGER_URL_UPLOADS_THUMB = PHOTOS_MANAGER_URL_UPLOADS . '/' . $row3->album . '/thumb/';
                } else {
                    $PHOTOS_MANAGER_URL_UPLOADS_THUMB = PHOTOS_MANAGER_URL_UPLOADS_THUMB;
                }

                $return['starred']['thumbs'][$i] = $PHOTOS_MANAGER_URL_UPLOADS_THUMB . $row3->thumbUrl;
                $i++;
            } else {
                break;
            }

        }

        /**
         * Public
         */

        $query = Database::prepare(Database::get(), "SELECT thumbUrl, album FROM ? WHERE public = 1 ORDER BY position DESC, id DESC", array(PHOTOS_MANAGER_TABLE_PHOTOS));
        $public = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        $i = 0;

        if ($public === false) {
            return false;
        }

        $return['public'] = array(
            'thumbs' => array(),
            'num' => $public->num_rows,
        );

        while ($row2 = $public->fetch_object()) {
            if ($i < 3) {
                if ($row2 && $row2->album != 0) {
                    $PHOTOS_MANAGER_URL_UPLOADS_THUMB = PHOTOS_MANAGER_URL_UPLOADS . '/' . $row2->album . '/thumb/';
                } else {
                    $PHOTOS_MANAGER_URL_UPLOADS_THUMB = PHOTOS_MANAGER_URL_UPLOADS_THUMB;
                }

                $return['public']['thumbs'][$i] = $PHOTOS_MANAGER_URL_UPLOADS_THUMB . $row2->thumbUrl;
                $i++;
            } else {
                break;
            }

        }

        /**
         * Recent
         */

        $query = Database::prepare(Database::get(), "SELECT thumbUrl, album FROM ? WHERE LEFT(id, 10) >= unix_timestamp(DATE_SUB(NOW(), INTERVAL 1 DAY)) AND (user_identifier = '?' OR public = 1)ORDER BY position DESC, id DESC", array(PHOTOS_MANAGER_TABLE_PHOTOS, $_SESSION['identifier']));
        $recent = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        $i = 0;

        if ($recent === false) {
            return false;
        }

        $return['recent'] = array(
            'thumbs' => array(),
            'num' => $recent->num_rows,
        );

        while ($row3 = $recent->fetch_object()) {
            if ($i < 3) {
                if ($row3 && $row3->album != 0) {
                    $PHOTOS_MANAGER_URL_UPLOADS_THUMB = PHOTOS_MANAGER_URL_UPLOADS . '/' . $row3->album . '/thumb/';
                } else {
                    $PHOTOS_MANAGER_URL_UPLOADS_THUMB = PHOTOS_MANAGER_URL_UPLOADS_THUMB;
                }

                $return['recent']['thumbs'][$i] = $PHOTOS_MANAGER_URL_UPLOADS_THUMB . $row3->thumbUrl;
                $i++;
            } else {
                break;
            }

        }

        // Return SmartAlbums
        return $return;

    }

    /**
     * @return array|false Returns an array of smart albums (by grouping public photos only) or false on failure.
     */
    private function getPublicPhotos()
    {

        // Initialize return var
        $return = array(
            'public' => null,
        );

        /**
         * Public
         */

        $query = Database::prepare(Database::get(), 'SELECT thumbUrl, album FROM ? WHERE public = 1 ' . Settings::get()['sortingPhotos'], array(PHOTOS_MANAGER_TABLE_PHOTOS));
        $public = Database::execute(Database::get(), $query, __METHOD__, __LINE__);
        $i = 0;

        if ($public === false) {
            return false;
        }

        $return['public'] = array(
            'thumbs' => array(),
            'num' => $public->num_rows,
        );

        while ($row2 = $public->fetch_object()) {
            if ($i < 3) {
                if ($row2 && $row2->album != 0) {
                    $PHOTOS_MANAGER_URL_UPLOADS_THUMB = PHOTOS_MANAGER_URL_UPLOADS . '/' . $row2->album . '/thumb/';
                } else {
                    $PHOTOS_MANAGER_URL_UPLOADS_THUMB = PHOTOS_MANAGER_URL_UPLOADS_THUMB;
                }

                $return['public']['thumbs'][$i] = $PHOTOS_MANAGER_URL_UPLOADS_THUMB . $row2->thumbUrl;
                $i++;
            } else {
                break;
            }

        }

        // Return SmartAlbums get from public photos only
        return $return;

    }

}
