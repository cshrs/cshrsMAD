// Basic page transitions 

// This function fades out the body element
function fadeOutBody(targetUrl) {
    document.body.style.opacity = '0';
    // Wait for the transition to finish before navigating away
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 500); // This timeout should match the duration of the transition
  }
  
  // Event listener for DOM content loaded
  document.addEventListener('DOMContentLoaded', (event) => {
    // Select all links
    const links = document.querySelectorAll('a');
  
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        // Ignore if the link has a target attribute (like _blank) or is meant to download
        if (!this.target && !this.hasAttribute('download')) {
          e.preventDefault(); // Prevent the default navigation
          fadeOutBody(this.href); // Call the fade out function
        }
      });
    });
  });
  