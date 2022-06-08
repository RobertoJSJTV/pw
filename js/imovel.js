var banners = ["../img/casa-sem-preocupacao-imagem-01.png", "../img/casa2.jpg","../img/apto2.jpg"];
var bannerAtual = 0;
function trocaBanner() {
    bannerAtual = (bannerAtual + 1) % 3;
    document.querySelector('.banner-destaque img').src = banners[bannerAtual];
}
setInterval(trocaBanner, 3000);