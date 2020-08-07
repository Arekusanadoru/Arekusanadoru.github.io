<?php
$to = "89048279944@mail.ru";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message = "Hello hell";

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
echo "Сообщение отправлено. Спасибо Вам, мы скоро свяжемся с Вами.";
echo "<br /><br /><a href='https://epicblog.net'>Вернуться на сайт.</a>";

?>
