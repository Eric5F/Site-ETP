document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);



/* Troca de Imagens */



let fotos = ["Img-Center.png", "Monofasico.png","Prevencao.png","Bomba.png","Painel.png","Eletricista.png"];


function TrocarFoto(foto){

   
    document.querySelector(".imagem-on").src = "Images/" + fotos[foto];
}


 
let FotoAtual = 0;
TrocarFoto(FotoAtual);

setInterval(function(){
    FotoAtual++;
    if(FotoAtual > 5){
        FotoAtual = 0;
    }
    TrocarFoto(FotoAtual);
} , 3000);