document.addEventListener('DOMContentLoaded', function() {
    const searchArea = document.querySelector('.search-area');
    const searchBar = document.querySelector('.search-bar');

    searchArea.addEventListener('mouseenter', function() {
        searchBar.style.display = 'block';
    });

    searchArea.addEventListener('mouseleave', function() {
        searchBar.style.display = 'none';
    });
});
