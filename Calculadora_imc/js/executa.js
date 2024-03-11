function calcular(){
    var altura=document.getElementById("altura").value / 100;
    var peso=document.getElementById("peso").value;

    var imc = peso / altura **2;
    var texto=""
   
    if (imc<18){
         texto="abaixo do ideal"
    }
    else if(imc<24){
         texto="Ideal"
    }
    else if(imc<29){
         texto="sobrepeso" 
    }
    else if(imc<39.9){
         texto="obesidade" 
    }
    else if(imc>39.9){
         texto="obesidade extrema"
    }


document.getElementById("texto").innerHTML=texto
}
