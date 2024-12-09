window.onload = () => {
    let data = document.querySelector("#data");
    let words = data.innerText.split(" ");

    data.innerHTML = "";

    for (let word of words) {
        let modifiedWord = word;
        if (word.length <= 3)
            modifiedWord = `<u style="color: red">${word}</u>`;
        if (word.length >= 10)
            modifiedWord = `<b style="color: blue">${word}</b>`;
        data.innerHTML += modifiedWord + " ";
    }
};
