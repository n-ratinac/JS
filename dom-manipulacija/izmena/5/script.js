let colorPicker;
let textTransformer;
let hideInput;

window.onload = () => {
    colorPicker = document.getElementsByName("font-color")[0];
    textTransformer = document.getElementsByName("text-transform")[0];
    hideInput = document.getElementsByName("hide")[0];

    console.log(colorPicker, textTransformer, hideInput);

    colorPicker.oninput = () => {
        document.getElementById("data").style.color = colorPicker.value;
    };

    textTransformer.oninput = () => {
        document.getElementById("data").style.textTransform =
            textTransformer.value;
    };

    hideInput.oninput = () => {
        if (hideInput.checked) {
            document.getElementById("data").style.visibility = "hidden";
        } else {
            document.getElementById("data").style.visibility = "visible";
        }
    };
};
