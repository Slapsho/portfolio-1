function validateForm()                                 
{ 
 var name = document.forms["myForm"]["name"];         
    if (name.value == ""){ 
        document.getElementById("myDiv").style.display = "block";  
        name.focus(); 
        return false; 

    }else{
        document.getElementById('myForm').innerHTML=""; 
    }
 }
         function validateForm()
 {
   var surname = document.forms["myForm"]["surname"];         
    if (surname.value == ""){ 
        document.getElementById("myDiv").style.display = "block";  
        surname.focus(); 
        return false; 
    }else{
        document.getElementById('myForm').innerHTML=""; 
    }
 }
       
         function validateForm()
 {
   var message = document.forms["myForm"]["message"];         
    if (message.value == ""){ 
        document.getElementById("myDiv").style.display = "block";  
        message.focus(); 
        return false; 

    }else{
        document.getElementById('myForm').innerHTML=""; 
    }                   
 }

        function myEmail(){
        return mail('sanniervictor@gmail.com', 'Envoi depuis la page');
        if (retour);
        }