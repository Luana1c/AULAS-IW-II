const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lampada = document.getElementById('lamp')

function estaQuebrada(){
    return lampada.src.indexOf('quebrada') > -1
   
}
 
function lampLigada(){
        if(!estaQuebrada()){
        lampada.src = "img/ligada.jpg"
        }
}

function lampDesligada(){
    if(!estaQuebrada()){
     lampada.src = "img/desligada.jpg"  
    }
    
}
function lampQuebrada(){
    lampada.src = "img/quebrada.jpg"
}

// função para trocar a imagem quando apertar o 'click'
ligar.addEventListener('click',lampLigada)
desligar.addEventListener('click',lampDesligada)

// função para ação 
lampada.addEventListener('mouseover',lampLigada)
lampada.addEventListener('mouseleave',lampDesligada)
lampada.addEventListener('dblclick', lampQuebrada)
