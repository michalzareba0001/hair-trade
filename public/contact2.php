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

$request_headers = getallheaders();
// if ($request_headers['referer'] != 'http://hairtrade.scharmach.pl/') {
//     die('Go away!');
// }

// Odbieranie danych z formularza
$firstName = input_clean($_POST['firstName']);
$phone = input_clean($_POST['phone']);
$preferredTime = input_clean($_POST['preferredTime']);

// Sprawdzenie, czy wszystkie wymagane pola są wypełnione
if (!empty($firstName) && !empty($phone) && !empty($preferredTime)) {
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
        $mail->Body    = "<strong>Name:</strong> $firstName<br/><strong>Phone:</strong> $phone<br/><strong>Preferred Time:</strong> $preferredTime";

         // Obsługa załącznika
         if (isset($_FILES['file']) && $_FILES['file']['error'] == UPLOAD_ERR_OK) {
            $uploadFile = $_FILES['file']['tmp_name'];
            $fileName = $_FILES['file']['name'];
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
