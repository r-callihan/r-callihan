<script>
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let searchKeyword = document.getElementById('searchInput').value.trim();
        let content = document.body.innerHTML;
        let searchRegex = new RegExp(searchKeyword, 'gi');
        let highlightedContent = content.replace(searchRegex, `<span style="background-color: yellow;">${searchKeyword}</span>`);
        document.body.innerHTML = highlightedContent;
        let searchResult = document.querySelector(`span:contains('${searchKeyword}')`);
        if (searchResult) {
            searchResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
                searchResult.style.backgroundColor = '';
            }, 5000);
        }
    });
</script>
