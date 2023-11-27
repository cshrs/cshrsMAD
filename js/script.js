// Scroll to top button: From W3 Schools, ChatGPT, and Stack Overflow

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Show or hide the scroll-to-top button based on scroll position
window.onscroll = function () {
    var scrollButton = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

// comments.js using Utterances

document.addEventListener('DOMContentLoaded', function () {
    var script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'cshrs/cshrsMAD');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    document.getElementById('comments-container').appendChild(script);
});
