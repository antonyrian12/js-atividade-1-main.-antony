alert('Olá!');
const T2 = document.querySelector('#original')
const efeito = document.querySelector('#efeito')
const contador = document.querySelector('#contador')
contador.innerHTML = 0 

T2.addEventListener('keyup', function(){ 
    contador.innerHTML = 0 + T2.value.length
    
    if (efeito.value == 'uppercase' ) {
        modificado.innerHTML = original.value.toUpperCase();
    } 
    else{
        modificado.innerHTML = original.value.toLowerCase();
    }
}
)
efeito.addEventListener('change', function(){
    if (efeito.value == 'lowercase' ){ 
        modificado.innerHTML = original.value.toLowerCase();
    }
    
    else{
        modificado.innerHTML = original.value.toUpperCase();
    }
}


)

