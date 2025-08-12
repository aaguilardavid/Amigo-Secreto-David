// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Lista=[];
let AmigoSorteado='';
let ListaSorteados=[];

function asignarTextoElemento(elemento,texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}

function agregarAmigo(){
    
    let Amigo= document.getElementById('amigo').value;
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

function MostrarLista(){
    let ListaAmigos= document.getElementById('listaAmigos');
    ListaAmigos.innerHTML='';
    for (i=0; i<Lista.length ; i++){
        ListaAmigos.innerHTML+=`<li>${Lista[i]}<li>`
    }

}

function limpiarbox(){
    valorbox=document.querySelector('#amigo').value='';
}

function sortearAmigo(){
    let AmigoSeleccionado= Math.floor(Math.random()*Lista.length);
    console.log(AmigoSeleccionado);
    console.log(Lista.length)    
 if (Lista.length<3){
     alert('Se necesitan al menos 3 nombre ingresados para hacer un sorte válido')
 }else{
    let Resultado= document.getElementById('resultado');
    Resultado.innerHTML= Lista[AmigoSeleccionado];
 }
}