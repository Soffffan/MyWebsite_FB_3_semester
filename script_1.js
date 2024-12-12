const h1 = document.getElementById("Swap");
h1.addEventListener("click", () =>{
    alert("Вы кликнули на заголовок урааа");
});


const button = document.getElementById("swapButton");
const table1 = document.getElementById("table1");
const table2 = document.getElementById("table2");

button.addEventListener("click", () => {
    if (table1.style.display === "none") {
        table2.style.display = "none";
        table1.style.display = "block";
    } else {
        table1.style.display = "none";
        table2.style.display = "block";
    }
});



const button1 = document.getElementById("swapButton1");
const tableContainer = document.getElementById("Table");

button1.addEventListener("click", () => {
    if (tableContainer.style.display === "none") {
        tableContainer.style.display = "block";
        setTimeout(() => {
            tableContainer.classList.add("visible");
        }, 0);
    } else {
        tableContainer.classList.remove("visible");
        tableContainer.addEventListener("transitionend", () => {
            tableContainer.style.display = "none";
        }, { once: true });
    }
});
