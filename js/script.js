 function AreaLogin(){
     if (areaLogin.style.display == "none") {
         areaLogin.style.display = "inline";
     }
     else {
         areaLogin.style.display = "none"; 
     }
 }

 var loginLink = document.getElementById("loginLink");
 var areaLogin = document.getElementById("areaLogin");
 areaLogin.style.display = 'none'; //evita que tenhamos que dar dois cliques
 loginLink.addEventListener('click',AreaLogin);

// '$' vai selecionar o elemento da pagina faça alguma coisa através do click
// 'fadeToggle' e 'slideToggle' se estiver escondido, aparece e assim vice versa
$('#loginLink').click (() => {$('#areaLogin').slideToggle();});