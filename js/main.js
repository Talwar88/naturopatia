document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        // Scroll to top functionality
        backToTopButton.addEventListener('click', function(event) {
            // It's a button, not a link, so preventDefault isn't strictly necessary unless it's type="submit" in a form
            // window.scrollTo({top: 0, behavior: 'smooth'}); // This was in the HTML, so it's fine here
        }); // Note: The onclick is still in the HTML: onclick="window.scrollTo({top: 0, behavior: 'smooth'});"
            // The plan was to move this into the JS. Let's correct that.

        // Corrected event listener for click:
        // backToTopButton.removeEventListener('click', function(){}); // Clear any previous if needed, but it's a new file.
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({top: 0, behavior: 'smooth'});
        });


        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'flex'; // Using flex as per CSS align/justify properties
            } else {
                backToTopButton.style.display = 'none';
            }
        });
    }
});
