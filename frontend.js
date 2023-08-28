
document.addEventListener('DOMContentLoaded', function() {
    const urlInput = document.getElementById('url');
    const addUrlButton = document.getElementById('addUrl');
    const fetchNumbersButton = document.getElementById('fetchNumbers');
    const resultDiv = document.getElementById('result');
    const urls = [];

    addUrlButton.addEventListener('click', function() {
        const url = urlInput.value.trim();
        if (url !== '') {
            urls.push(url);
            urlInput.value = '';
        }
    });

    fetchNumbersButton.addEventListener('click', function() {
        if (urls.length === 0) {
            resultDiv.textContent = 'Please add at least one URL.';
            return;
        }

        // Construct the query parameter string
        const urlParams = new URLSearchParams();
        urls.forEach((url) => {
            urlParams.append('URL', url);
        });

        // Make the API request to the microserver
        fetch(`/numbers?${urlParams}`)
            .then((response) => response.json())
            .then((data) => {
                resultDiv.textContent = JSON.stringify(data, null, 2);
            })
            .catch((error) => {
                resultDiv.textContent = 'Error fetching numbers: ' + error.message;
            });
    });
});
