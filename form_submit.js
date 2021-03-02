function saveToFirebase() 
{
    const data = document.getElementById('emailForm').elements[0].value;
 
    
  if(ValidateEmail(data))
  {
    database.ref('emails').push({ email: data}).then(function(snapshot) {
      pass(); // some success method
      }, function(error) 
         {
            console.log('error' + error);
            fail(); // some error method
          });
     // document.getElementById('emailForm').reset();
  }

}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


function fail()
{

  $('#fail').finish().show().delay(1000).fadeOut(6000);

}
function pass()
{
 
$('#succ').finish().show().delay(1000).fadeOut(6000);

}