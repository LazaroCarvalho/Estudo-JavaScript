const $prev = document.getElementById("prev");
const $next = document.getElementById("next");

const loadImages = () => {

    const arrayImg = [];
    for (let i = 1; i <= 5; i++) {
        arrayImg.push(`./img/imagem (${i}).jpg`);
    }

    return arrayImg;
}

const insertSlide = (array, $el)  => {

    const htmlImg = array.map( img => `<img class='images' src='${img}'>`).join(" ");

    const $containerImages = document.createElement("div");
    const $container = document.getElementById("container");
    $containerImages.id = "container_images";
    $containerImages.innerHTML = htmlImg;
    $container.insertBefore($containerImages, $el);

}

const next = () => {

    const $img = document.querySelectorAll(".images");
    const max = (50 * ($img.length - 1)) * -1;

    let marginLeft = $img[0].style.marginLeft.replace("vw", "");

    marginLeft = marginLeft == max ? 0 : marginLeft - 50;

    $img[0].style.marginLeft = `${marginLeft}vw`;

}

const prev = () => {

    const $img = document.querySelectorAll(".images");
    const max = (50 * ($img.length - 1)) * -1;

    let marginLeft = $img[0].style.marginLeft.replace("vw", "");
    marginLeft = marginLeft == 0 ? max : parseInt(marginLeft) + 50;
    

    $img[0].style.marginLeft = `${marginLeft}vw`;

}


insertSlide (loadImages(), $next);
setInterval(prev, 4000);

$next.addEventListener('click', next);
$prev.addEventListener('click', prev);

