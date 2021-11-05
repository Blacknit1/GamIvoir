const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY>10) {
        nav.style.boxShadow= "0px 1px 15px black";
    }
    else {
        nav.style.boxShadow = "none";
    }
})