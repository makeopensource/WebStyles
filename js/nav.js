const hamburger = document.querySelector(".hamburger");
const dropdown = document.querySelector(".dropdown");
const hamburger_close = document.querySelector(".hamburger-close");

const keyCode = {
    ESC: 27
};

function toggle_display(element, display_type = "block") {
    const display = element.style.display;
    if (display === "none" || display === "") {
        element.style.display = display_type;
    } else {
        element.style.display = "none";
    }
}

hamburger.addEventListener("click", () => {
    toggle_display(dropdown, "flex");
    toggle_display(hamburger_close, "block");
});

hamburger_close.addEventListener("click", () => toggle_display(dropdown, "flex"));
window.addEventListener("keydown", (e) => {
    if (e.keyCode === keyCode.ESC) {
        toggle_display(dropdown, "flex");
    }
});

