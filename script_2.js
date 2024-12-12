const myfoto = document.getElementById("myfoto");

myfoto.addEventListener("mouseover", () => {
    myfoto.style.width = "30%";
    myfoto.style.height = "30%";
    myfoto.classList.add("rotate");
});

myfoto.addEventListener("mouseout", () => {
    myfoto.style.width = "";
    myfoto.style.height = "";
    myfoto.classList.remove("rotate");
});


myfoto.addEventListener("click", () => {
    myfoto.src = "image/my_trener.jpg";
});

myfoto.addEventListener("dblclick", () => {
    alert("Хватит тыкать!");
});


const swapElement = document.getElementById("Swap");

swapElement.addEventListener("mouseover", () => {
    swapElement.classList.add("enlarged");
});

swapElement.addEventListener("mouseout", () => {
    swapElement.classList.remove("enlarged");
});


const swapcolorElement = document.getElementById("swapcolor");

swapcolorElement.addEventListener("click", () => {
    swapcolorElement.classList.toggle("highlight");
});
