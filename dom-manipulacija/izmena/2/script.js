// kada se ucita stranica
window.load = () => {};

const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
};

const handleClick = () => {
    const color = document.getElementsByName("colorPicker")[0].value;
    changeBackgroundColor(color);
};
