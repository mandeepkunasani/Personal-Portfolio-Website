function showMessage() {

    alert(
        "Thank you for visiting my portfolio! Feel free to connect with me."
    );

}

// Welcome Message

console.log(
    "Welcome to Mandeep's Portfolio Website"
);

// Smooth Fade Effect

window.onload = function () {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "1s";
        document.body.style.opacity = "1";

    }, 100);

};