class Pagina {
    constructor() {
        this.carregarIframes()
        // this.carregarImagensCarrossel()
    }

    // carregarImagensCarrossel(){
    //     let carrossel = document.querySelector('#carrossel').style;
    //     carrossel.backgroundImage = "url('../images/mico.jpg')";
    //     carrossel.backgroundRepeat = "no-repeat";
    //     carrossel.backgroundSize = "contain";
    //     carrossel.backgroundPosition = "center";

    //     let paragrafo = document.querySelector('#carrossel>p');
    //     paragrafo.innerHTML = 'texto aqui'
    // }

    carregarIframes(){
        let links = ["https://www.youtube.com/embed/zO2uTiOxSS4", 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5176.702824933274!2d-46.551623844070136!3d-23.443083977383687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1663693326796!5m2!1spt-BR!2sbr'];

        document.querySelectorAll('iframe').forEach((iframe, i)=> iframe.setAttribute('src', links[i]));
    }
}

var pagina = new Pagina()