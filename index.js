function loadContent(page) {
    const contentDiv = document.getElementById("content");
    fetch(page)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('File not found');
            }
        })
        .then(data => {
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            contentDiv.innerHTML = `<p>Error loading content: ${error.message}</p>`;
        });

        const listItems = document.querySelectorAll('.nav-list ul li');
        listItems.forEach(item => item.classList.remove('active'));
        const clickedItem = event.target.closest('li');
        clickedItem.classList.add('active');
}
window.onload = function () {
    loadContent('portfolio.html');
}






