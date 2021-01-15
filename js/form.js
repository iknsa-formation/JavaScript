function verif()
{
    /*var male = document.getElementById('mr').checked;
    var female = document.getElementById('miss').checked;
    if (!male && !female)  {
   
      alert("vous devez selectionné votre civilité");
      document.formul.mr.focus();
      document.formul.mr.style.backgroundColor = "#f2dede";
      return false;
    }*/

    console.log(document.getElementById('firstname').value);

   if(document.getElementById('firstname').value == "" )  {
     alert("Attention un des champs doit etre rempli \n\n - Nom \n   ");
     document.getElementById('firstname').focus();
     document.getElementById('firstname').style.backgroundColor = "#f2dede";
     
     return false;
    }
 
   if(document.getElementById('lastname').value == "" )  {

     alert("Attention un des champs doit etre rempli \n\n - Prenom \n   ");
     document.getElementById('lastname').focus();
     document.getElementById('lastname').style.backgroundColor = "#f2dede";
     
     return false;
    }


    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,3})+$/;
    if (!regex.test(document.getElementById('email').value))  
    {  
      alert("Entrez email valide!");
      document.getElementById('email').focus();
      document.getElementById('email').style.backgroundColor = "#f2dede";
      return false;
    }

    var mobile = /^(01|02|03|04|05|06|08|0033|\+33)[0-9]{8}/;

    if (!mobile.test(document.getElementById('tel').value))
    {
        alert(" Entrez un numero de téléphone valide ");
       document.getElementById('tel').focus();
       document.getElementById('tel').style.backgroundColor = "#f2dede";
        return false;
      
    }
    
    if(document.getElementById('categories').value == "" )  {

     alert("Attention un des champs doit etre rempli \n\n - Categories \n   ");
     document.getElementById('categories').focus();
     document.getElementById('categories').style.backgroundColor = "#f2dede";
     
     return false;
    }

    if(document.getElementById('message').value == "" )  {

     alert("Attention un des champs doit etre rempli \n\n - message \n   ");
     document.getElementById('message').focus();
     document.getElementById('message').style.backgroundColor = "#f2dede";
     
     return false;
    }
}

var resultat = document.getElementById('afpa');

//console.log(resultat.value);
console.log(resultat.innerHTML);