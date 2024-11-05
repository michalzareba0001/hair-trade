<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

ini_set('display_errors', 0);
require 'vendor/autoload.php';

function input_clean($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Pobranie danych z formularza
$hairType = input_clean($_POST['hairType']);
$hairColor = input_clean($_POST['hairColor']);
$hairLength = input_clean($_POST['hairLength']);
$phoneNumber = input_clean($_POST['phoneNumber']);
$name = input_clean($_POST['name']);

// Sprawdzenie, czy wszystkie wymagane pola są wypełnione
if (!empty($name) && !empty($phoneNumber) && !empty($hairType) && !empty($hairColor)) {
    $mail = new PHPMailer(true);

    try {
        // Konfiguracja serwera SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.iq.pl';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'michal@scharmach.pl';
        $mail->Password   = 'e6Mp5Z1zyVDmi45r2iOD';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Odbiorcy
        $mail->setFrom('michal@scharmach.pl', 'Hair Trade Forms');
        $mail->addAddress('michal@scharmach.pl', 'Hair Trade Office');

        // Treść wiadomości
        $mail->isHTML(true);
        $mail->Subject = 'Message from hair-trade';
        $mail->Body    = "<strong>Name:</strong> $name<br/><strong>Phone Number:</strong> $phoneNumber<br/><strong>Hair Type:</strong> $hairType<br/><strong>Hair Color:</strong> $hairColor<br/><strong>Hair Length:</strong> $hairLength";

        // Obsługa załącznika
        if (isset($_FILES['photo']) && $_FILES['photo']['error'] == UPLOAD_ERR_OK) {
            $uploadFile = $_FILES['photo']['tmp_name'];
            $fileName = $_FILES['photo']['name'];
            $mail->addAttachment($uploadFile, $fileName);
        }

        $mail->send();

        // Zwróć odpowiedź sukcesu
        echo json_encode([
            'error'   => false,
            'message' => "Wiadomość wysłana poprawnie."
        ]);
    } catch (Exception $e) {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode([
            'error'   => true,
            'message' => "Nieprawidłowe żądanie. Błąd serwera."
        ]);
    }
} else {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode([
        'error'   => true,
        'message' => "Nieprawidłowe żądanie. Brak wymaganych danych."
    ]);
}
?>
