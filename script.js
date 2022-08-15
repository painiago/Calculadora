function insert(num){
         var numero = document.getElementById('resultt').innerHTML;
         document.getElementById('resultt').innerHTML = numero + num;  
             
}

function clean(){
  document.getElementById('resultt').innerHTML = '';
    
}

function calcular (){
    var resultt = document.getElementById('resultt').innerHTML;
    if (resultt){
        document.getElementById('resultt').innerHTML = eval(resultt);
    }
    else{
        document.getElementById('resultt').innerHTML = '';
    }
}




