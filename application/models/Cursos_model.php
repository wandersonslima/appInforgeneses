<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Cursos_model extends CI_Model {

    function __construct()
    {
        parent:: __construct();
        //$this->load->database();
        $this->load->dbutil();
        $this->load->dbforge();
    }
	public function getCursos()
	{
       $this->db->select('*');
       $this->db->from('cursos');
       $query = $this->db->get();

       //return $query->result();
    
       return json_encode($query->result());
    }
    public function getAll() {

        $query = $this->db->get('cursos');

        return $query->result();
        //return json_encode($query->result());
    }
    public function getWhere($name) {

        $this->db->like('nome', $name);
        $query = $this->db->get('cursos');

        return $query->result();
    }
    public function getById($id) {

        $this->db->where('id', $id);
        $query = $this->db->get('cursos');

        return $query->result();
    }

}