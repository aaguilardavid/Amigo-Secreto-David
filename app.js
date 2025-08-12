// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Lista=[];
let AmigoSorteado='';
let ListaSorteados=[];
let AmigoSeleccionado=0;

function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}

function agregarAmigo(){
    
    let Amigo= document.getElementById('amigo').value;
if (ListaSorteados.length>0){
        alert('Sorteo iniciado, no es posible agregar mas nombres')
        limpiarbox();
    } else{
    if(Amigo.trim().length>0){
        Lista.push(Amigo);
        console.log(Lista);

        MostrarLista(); 

        limpiarbox();
    }
    else{
        alert('Por favor, inserte un nombre válido');
        limpiarbox();
    }
}
}

function MostrarLista(){
    let ListaAmigos= document.getElementById('listaAmigos');
    ListaAmigos.innerHTML='';
    for (i=0; i<Lista.length ; i++){
        ListaAmigos.innerHTML+=`<li>${Lista[i]}<li>`
    }

}

function MostrarListaSel(){
    let ListaAmigos=document.getElementById('listaAmigos');
    for (i=0; i<Lista.length ; i++){
        if (ListaSorteados.includes(i)){
        ListaAmigos.innerHTML+=`<li>${Lista[i]}: Sorteado<li>`
        }else{
        ListaAmigos.innerHTML+=`<li>${Lista[i]}<li>`
        }
    }

}

function limpiarbox(){
    valorbox=document.querySelector('#amigo').value='';
}

function borrarlista(){
    let ListaAmigos=document.getElementById('listaAmigos');
        ListaAmigos.innerHTML=''
}

function sortearAmigo(){
    borrarlista();
   AmigoSeleccionado= Math.floor(Math.random()*Lista.length);
    
    //Arreglo para guardar los números de indice de los amigos seleccionados
    console.log(AmigoSeleccionado);
    //console.log(Lista.length)    
 if (Lista.length<3){
     alert('Se necesitan al menos 3 nombre ingresados para hacer un sorte válido')
     MostrarLista();
 }else{
   
    if (ListaSorteados.length==Lista.length){
        MostrarResultado();
        //asignarTextoElemento('h2','Se han sorteado todos los nombres ingresado')
    }
    else{
        if (ListaSorteados.includes(AmigoSeleccionado)){
        sortearAmigo();
            
        } else{
            MostrarResultado();
            ListaSorteados.push(AmigoSeleccionado);
            MostrarListaSel();
            console.log(ListaSorteados);
        }

    }
 }
}


function MostrarResultado(){
    let Resultado= document.getElementById('resultado');
    if (ListaSorteados.length==Lista.length){
        Resultado.innerHTML='Se han sorteado todos los nombres ingresados'
        }else{
    Resultado.innerHTML= `El amigo secreto sorteado es: ${Lista[AmigoSeleccionado]}`;
        }
}
