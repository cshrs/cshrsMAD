// Scroll to top button: From W3 Schools, ChatGPT and Stack Overflow

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });
});