var FAVORITES_KEY = 'favorites';

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
    } catch {
        return [];
    }
}

function saveFavorites(favs) {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
}

var favorites = getFavorites();
var cardsContainer = document.getElementById('cardsContainer');
var noResults = document.getElementById('noResults');
var searchInput = document.getElementById('searchInput');
var filterButtons = document.querySelectorAll('.filter-btn');

var currentFilter = 'all';
var currentSearchTerm = '';

function initializeApp() {
    renderCards(cheatsheetData);
    
    searchInput.addEventListener('keyup', handleSearch);
    
    filterButtons.forEach(function(button) {
        button.addEventListener('click', handleFilter);
    });

    var clearBtn = document.getElementById('clearBtn');

    searchInput.addEventListener('input', function () {
        clearBtn.style.display = searchInput.value ? 'block' : 'none';
    });

    clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        currentSearchTerm = '';
        filterAndRenderCards();
    });
}

function handleSearch(event) {
    currentSearchTerm = event.target.value.toLowerCase();
    filterAndRenderCards();
}

function handleFilter(event) {
    filterButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    
    event.target.classList.add('active');
    currentFilter = event.target.getAttribute('data-filter');
    
    filterAndRenderCards();
}

function filterAndRenderCards() {
    var filtered = cheatsheetData.filter(function(cheatsheet) {
        var categoryMatch;

if (currentFilter === 'favorites') {
    categoryMatch = favorites.includes(cheatsheet.id);
} else {
    categoryMatch = currentFilter === 'all' || cheatsheet.category === currentFilter;
}
        
        var searchMatch =
            cheatsheet.title.toLowerCase().includes(currentSearchTerm) ||
            cheatsheet.description.toLowerCase().includes(currentSearchTerm);
        
        return categoryMatch && searchMatch;
    });
    
    renderCards(filtered);
}

function renderCards(cardsToRender) {
    var resultCount = document.getElementById('resultCount');
    resultCount.textContent = `Showing ${cardsToRender.length} of ${cheatsheetData.length} cheatsheets`;
    cardsContainer.innerHTML = '';
    
    if (cardsToRender.length === 0) {
          if (currentFilter === 'favorites') {
        noResults.innerHTML = '<p>No favorites yet ⭐</p>';
    } else {
        noResults.innerHTML = '<p>No cheatsheets found. Try adjusting your search or filters.</p>';
    }
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    cardsToRender.forEach(function(cheatsheet) {
        var card = createCardElement(cheatsheet);
        cardsContainer.appendChild(card);
    });
}

function createCardElement(cheatsheet) {
    var card = document.createElement('div');
    card.className = 'card';
    
var isFav = favorites.includes(cheatsheet.id);

card.innerHTML = 
    '<div class="card-header">' +
        '<h3 class="card-title">' + cheatsheet.title + '</h3>' +

        '<div style="display:flex; gap:10px; align-items:center;">' +
            '<span class="card-category">' + cheatsheet.category + '</span>' +

            '<button class="fav-btn" data-id="' + cheatsheet.id + '">' +
                (isFav ? '❤️' : '🤍') +
            '</button>' +
        '</div>' +
    '</div>' +

    '<p class="card-description">' + cheatsheet.description + '</p>' +
    '<pre class="card-code">' + escapeHtml(cheatsheet.code) + '</pre>' +
    '<button class="copy-btn" data-code="' + escapeHtml(cheatsheet.code) + '">Copy Code</button>';
    
    var copyButton = card.querySelector('.copy-btn');
        copyButton.addEventListener('click', handleCopyClick);
    var favButton = card.querySelector('.fav-btn');
favButton.addEventListener('click', function() {
    toggleFavorite(cheatsheet.id);
});

    
    return card;
}

function handleCopyClick(event) {
    var button = event.target;
    var code = button.getAttribute('data-code');
    
    navigator.clipboard.writeText(code).then(function() {
        var originalText = button.textContent;
        button.textContent = 'Copied!';
        button.classList.add('copied');
        
        setTimeout(function() {
            button.textContent = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(function() {
        copyToClipboardFallback(code, button);
    });
}

function copyToClipboardFallback(text, button) {
    var textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    
    textarea.select();
    document.execCommand('copy');
    
    document.body.removeChild(textarea);
    
    var originalText = button.textContent;
    button.textContent = 'Copied!';
    button.classList.add('copied');
    
    setTimeout(function() {
        button.textContent = originalText;
        button.classList.remove('copied');
    }, 2000);
}

function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(char) {
        return map[char];
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

var themeToggle = document.getElementById('themeToggle');
var htmlElement = document.documentElement;

var savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
}

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        var isDark = htmlElement.hasAttribute('data-theme');
        
        if (isDark) {
            htmlElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
}
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(function(fav) {
            return fav !== id;
        });
    } else {
        favorites.push(id);
    }

    saveFavorites(favorites);
    filterAndRenderCards();
}