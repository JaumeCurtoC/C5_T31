const images = document.getElementsByTagName("img");

const imagePressed = e => {
    console.log(e.target.alt);  
    document.getElementById("imagenGrande").src = e.target.src;
    document.getElementById("imagenGrande").alt = e.target.alt;
    document.getElementById("altImage").innerHTML = e.target.alt;
}

for (let image of images) {
    image.addEventListener("click", imagePressed);
}
