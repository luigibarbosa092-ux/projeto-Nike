let body = document.querySelector("body")
let tenis = document.querySelector(".imagem-tenis")
function mudarvisual(cor,imagem){
    tenis.classList.add("troca-efeito")

    console.log(cor)
    body.style.backgroundColor=cor
tenis.src = imagem

setTimeout(() => {
    tenis.classList.remove("troca-efeito")
}, 495); 

}






