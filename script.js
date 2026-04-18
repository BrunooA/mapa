// 1. Inicialização
const map = L.map('map').setView([-20.3297, -40.2944], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);

const searchInput = document.getElementById('map-search');
const resultsContainer = document.getElementById('search-results');

// 2. Funções de Cliques nos Botões
function irParaVilaVelha() {
    map.flyTo([-20.3297, -40.2944], 14);
}

function irParaVitoria() {
    map.flyTo([-20.2976, -40.2958], 14);
}

function minhaLocalizacao() {
    map.locate({ setView: true, maxZoom: 16 });
}

map.on('locationfound', (e) => {
    L.marker(e.latlng).addTo(map).bindPopup("Estás aqui!").openPopup();
});

// 3. Lógica de Autocomplete (Pesquisar enquanto digita)
searchInput.addEventListener('input', async function() {
    const query = this.value;

    if (query.length < 3) {
        resultsContainer.style.display = 'none';
        return;
    }

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5&addressdetails=1`);
        const data = await response.json();

        if (data.length > 0) {
            resultsContainer.innerHTML = '';
            resultsContainer.style.display = 'block';

            data.forEach(place => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.innerHTML = `<i class="bi bi-geo-alt"></i> ${place.display_name}`;
                
                div.onclick = () => {
                    const lat = parseFloat(place.lat);
                    const lon = parseFloat(place.lon);
                    map.flyTo([lat, lon], 16);
                    L.marker([lat, lon]).addTo(map).bindPopup(place.display_name).openPopup();
                    
                    resultsContainer.style.display = 'none';
                    searchInput.value = place.display_name;
                };
                
                resultsContainer.appendChild(div);
            });
        }
    } catch (error) {
        console.error("Erro no autocomplete:", error);
    }
});

// Fechar lista se clicar fora
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
        resultsContainer.style.display = 'none';
    }
});