function trocaImg(){
    function verificarLargura(){
        var largura = window.screen.width;
        console.log(largura);
            if(largura<=500){
                document.getElementById("bg-sobre-img").src = 'img/Mobile - Tela 2 - Sobre Nós.png';
                document.getElementById("bg-projetos-img").src = 'img/Mobile - Tela 5 - Projetos.png';
                document.getElementById("bg-email-img").src = 'img/Mobile - Tela 6 - Email.png';
                document.getElementById("bg-doar-img").src = 'img/Mobile - Tela 7 - Doar.png';
                
            }else{
                document.getElementById("bg-sobre-img").src = 'img/Tela 2 - Sobre Nós.png';
                document.getElementById("bg-projetos-img").src = 'img/Tela 5 - Projetos.png';
                document.getElementById("bg-email-img").src = 'img/Tela 6 - Doar.png';
                document.getElementById("bg-doar-img").src = 'img/Tela 7 - Doar.png';
            }  
    }
    window.addEventListener('resize', verificarLargura);
    window.onload = verificarLargura();
}
window.addEventListener('load', trocaImg);