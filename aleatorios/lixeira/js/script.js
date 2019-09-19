const $objeto = document.getElementById("objeto");

const posicaoMouse = () => {
    let y = event.clientY;
    console.log(y);
}

$objeto.addEventListener("click", () => posicaoMouse());