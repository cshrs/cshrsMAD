// Scroll to top button: From W3 Schools, ChatGPT and Stack Overflow

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Show or hide the scroll-to-top button based on scroll position
window.onscroll = function () {
    var scrollButton = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
};

