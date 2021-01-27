<?php

require(APPPATH . 'libraries/REST_controller.php');

class Api_Rest extends REST_Controller {
    /*
     * Constructor
     */

    function __construct() {
        parent::__construct();
        $this->load->model('cursos_model', 'model');
    }

    /*
     * Gets all database tables
     */

    function all_get() {

        $data = $this->model->getAll();

        if ($data) {
            $this->response($data, 200);
        } else {
            $this->response(null, 204);
        }   // 204 - No Content
    }

    /*
     * Gets table where name is like...
     */

    function where_get() {

        $name = $this->get('name');
        $data = $this->model->getWhere($name);

        if ($data) {
            $this->response($data, 200);
        } else {
            $this->response(204);
        }
    }

    /*
     * Get by id
     */

    function byId_get() {
        $id = $this->get('id');
        $result = $this->model->getById($id);

        if ($result) {
            $this->response($result[0], 200);
        } else {
            $this->response(null, 204);
        }
    }
}
