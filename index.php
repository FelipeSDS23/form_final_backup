<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include_once "DbConnect.php";
    $objCon = new DbConnect;
    $conn = $objCon->connect();
    
    // Transforms JSON em um obj php
    $client = json_decode( file_get_contents("php://input") );

    // Verifica qual metodo da requisição
    if($_SERVER["REQUEST_METHOD"] === "POST") {
        postData($conn, $client);
    }

    // Insere dados no banco de dados
    function postData($conn, $client) {
        
        // Tabela atual
        $table = "clientes";

        // Dados a inserir
        $name = $client->name;
        $email = $client->email;
        $phone = $client->phone;
        $plan = $client->plan;
        $planPeriod = $client->planPeriod;
        $onlineService = $client->onlineService;
        $largeStorage = $client->largeStorage;
        $customizableProfile = $client->customizableProfile;

        // Valida se alguma variavel não está preenchida
        foreach($client as $data) {
            if($data === "") {
                $response = ["status" => 0, "message" => "Failed to create record."];
                echo json_encode($response);
                return;
            }
        }

        // Query para inserir dados 
        $stmt = $conn->prepare("INSERT INTO $table (name, email, phone,
        plan, planPeriod, onlineService, largeStorage, customizableProfile)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)");

        $stmt->bind_param("ssssssss", $name, $email, $phone, $plan, $planPeriod, $onlineService, $largeStorage, $customizableProfile);

        if ($stmt->execute()) {
            $response = ["status" => 1, "message" => "Record created successfully."];
            echo json_encode($response);
        } else {
            $response = ["status" => 0, "message" => "Failed to create record."];
            echo json_encode($response);
        }

    }

    $conn->close();

    // var_dump($conn);

?>