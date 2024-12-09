window.onload = () => {
    console.log("Window loaded");
    const targets = document.querySelectorAll(".medium"); // svi elementi sa klasom medium

    for (let target of targets) {
        target.onclick = () => {
            target.classList.toggle("circle"); // dodajemo ili uklanjamo klasu circle
        };

        target.ondblclick = () => {
            target.style.backgroundColor = "red"; // menjamo boju pozadine
        };
    }
};
