<?php
	$email = $_POST['sEmail'];
	if($email){
		  $con = mysqli_connect("localhost","root","password","cottons_satins");
		  if (!$con)
		  {
		    die('Could not connect: ' . mysql_error());
		  }
		  $query = "insert into recordEmail(email) values('$email')";
		  mysqli_query($con,$query);

	}
	
	?>