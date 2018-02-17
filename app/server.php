<?php

# リクエストのパラメータを取得
$name = $_POST['name'];
$password = $_POST['password'];


# テンプレートファイルを取得して表示
include('view/mypage.php');

?>
