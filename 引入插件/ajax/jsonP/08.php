<?php 
	
	$user = array(
		'name'=>'jack',
		'age' => 18,
		'sex' => '男'
	);

	// echo json_encode($user);

	echo $_GET['callback'].'('.json_encode($user).')';
	
	

 ?>