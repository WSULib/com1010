<?php

$subjects = array(
  1 => array(
    'to' => 'ac4986@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  2 => array(
    'to' => 'es3816@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  3 => array(
    'to' => 'ae3265@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  4 => array(
    'to' => 'ad9247@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  5 => array(
    'to' => 'aw8542@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  6 => array(
    'to' => 'am6705@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  7 => array(
    'to' => 'ao2552@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  8 => array(
    'to' => 'aq2569@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  9 => array(
    'to' => 'ag8022@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  10 => array(
    'to' => 'fj6636@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  11 => array(
    'to' => 'av0928@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  12 => array(
    'to' => 'ae9456@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  13 => array(
    'to' => 'er6407@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  14 => array(
    'to' => 'ab8367@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  15 => array(
    'to' => 'ak0582@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  16 => array(
    'to' => 'ek6338@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  17 => array(
    'to' => 'ed2089@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  18 => array(
    'to' => 'fc0982@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  19 => array(
    'to' => 'ad1928@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  20 => array(
    'to' => 'au9596@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  21 => array(
    'to' => 'dx1649@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  22 => array(
    'to' => 'af8151@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  23 => array(
    'to' => 'fc1912@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  24 => array(
    'to' => 'at5304@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  25 => array(
    'to' => 'dx3462@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  26 => array(
    'to' => 'ak0932@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  27 => array(
    'to' => 'fa8663@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  28 => array(
    'to' => 'fc0369@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  29 => array(
    'to' => 'ad8315@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  30 => array(
    'to' => 'ej0599@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  31 => array(
    'to' => 'ad8191@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  32 => array(
    'to' => 'dx8298@wayne.edu,RebecaPeacock@wayne.edu'
  ),
  33 => array(
    'to' => 'ey4673@wayne.edu,RebecaPeacock@wayne.edu'
  )

);

$EmailTo = ! empty($subjects[$_REQUEST['subject']]['to']) ? $subjects[$_REQUEST['subject']]['to'] : 'default@example.com';



$EmailFrom = "axa.liauw@wayne.edu";
//$EmailTo = "CHANGE-THIS@YOUR-DOMAIN.com";
$Subject = "COMM 1010 Quiz Completion Notice";
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Message = Trim(stripslashes($_POST['Message'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Student Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Student Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Total Score: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>