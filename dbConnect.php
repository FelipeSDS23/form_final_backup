<?php
    // Conexão com o banco de dados
    class dbConnect {
        // Variaveis de conexão
        private $host = "localhost";
        private $user = "root";
        private $pass = "";
        private $db = "multi_step_form";

        public function connect() {
            try {
                $conn = new mysqli($this->host, $this->user, $this->pass, $this->db);
                return $conn;
            } 
            catch (Exception $e) {
                echo "Erro de conexão: ",  $e->getMessage();
                return;
            }
        }
    }
?>