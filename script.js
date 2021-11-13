
document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);


/*background-squares*/
function FundoQuad(){
const ulSquares = document.querySelector("ul.squares");

for (let i = 0; i < 20; i++){
    const li = document.createElement("li");

    const random = (min, max) => Math.random() * (max - min) + min;

    const size = Math.floor(random(10, 80));
    const position = random(1, 80);
    const delay = random(5,  0.1);
    const duration = random(24, 12);

    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`

    ulSquares.appendChild(li);
};
}

function TrocaImagem(){

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
    } , 3000);}

    function SelectionH2(){

        const slides = document.querySelectorAll('.slides');
        const dots = document.querySelectorAll('.dot');
        
        function setActive(i){
            for(slide of slides)
            slide.classList.remove('active');
            slides[i].classList.add('active');
        
            for(dot of dots)
            dot.classList.remove('active');
            dots[i].classList.add('active');
        }
        for (let j = 0; j<dots.length; j++){
            dots[j].addEventListener('click', function(){
                setActive(j)
            })
        }}
