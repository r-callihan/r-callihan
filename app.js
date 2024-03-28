document.getElementById("searchBar").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        const searchTerm = event.target.value;
        // Use the searchTerm to search your wiki content
        // Highlight the keyword in yellow (you can use CSS classes)
        // Scroll to the relevant position on the page
        // Example: scrollToKeyword(searchTerm);
    }
});
