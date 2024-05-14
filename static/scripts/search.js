const suggestions = ['apple', 'banana', 'orange', 'grape', 'melon', 'pineapple', 
'chicken', 'chicken teriyaki', 'teriyaki recipe', 'latest recipe', 'popular recipe', 
'trending recipe', 'cookies', 'specialty recipes', 'pastries'];

const inputElement = document.querySelector('.search-input');
const suggestionsElement = document.getElementById('suggestions');

function handleInput(value) {
    const filteredSuggestions = suggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(value.toLowerCase())
    );

    if (value.trim() === '') {
        suggestionsElement.style.display = 'none';
        suggestionsElement.innerHTML = '';
    } else {
        renderSuggestions(filteredSuggestions);
    }
}

function renderSuggestions(filteredSuggestions) {
    suggestionsElement.innerHTML = '';

    if (filteredSuggestions.length > 0) {
        filteredSuggestions.forEach(suggestion => {
            const li = document.createElement('li');
            li.classList.add('suggestion-item');
            li.textContent = suggestion;
            li.onclick = () => {
                inputElement.value = suggestion;
                suggestionsElement.style.display = 'none';
            };
            suggestionsElement.appendChild(li);
        });

        suggestionsElement.style.display = 'block';
    } else {
        suggestionsElement.style.display = 'none';
    }
}

// Close suggestions when clicking outside the input and suggestions
document.addEventListener('click', (e) => {
    if (!inputElement.contains(e.target) && !suggestionsElement.contains(e.target)) {
        suggestionsElement.style.display = 'none';
    }
});

// Function to handle search form submission
function handleSearch(event) {
    event.preventDefault(); // Prevent form submission

    const inputValue = inputElement.value.trim().toLowerCase();

    if (inputValue) {
        // Navigate to a page based on the search term (replace with your logic)
        navigateToSearchResults(inputValue);
    }
}

// Function to navigate to search results based on the entered term
function navigateToSearchResults(searchTerm) {
    const url = `/Search Result?query=${encodeURIComponent(searchTerm)}`;
    window.location.href = url;
}

