# 📍 Projeto Mapa (PIE) - UniFoco

O objetivo principal é integrar geolocalização com persistência de dados local (CRUD) para auxiliar na organização e foco acadêmico.

## 🚀 Funcionalidades
- **Mapeamento em Tempo Real:** Utiliza a biblioteca Leaflet para renderização de mapas.
- **Busca via API:** Integração com a API **Nominatim (OpenStreetMap)** para localização de endereços no Espírito Santo.
- **CRUD Local:** - **Create:** Salva locais favoritos no `localStorage`.
  - **Read:** Lista buscas recentes e favoritos salvos.
  - **Delete:** Remove locais da lista de favoritos ou limpa todo o histórico.
- **Interface Responsiva:** UI/UX focada em dispositivos móveis com suporte a Favicon personalizado.

## 🛠️ Tecnologias Utilizadas
- **Frontend:** HTML5, CSS3, JavaScript (ES6+).
- **Mapas:** [Leaflet.js](https://leafletjs.org/).
- **Componentes:** [Bootstrap Icons](https://icons.getbootstrap.com/).
- **Dados:** API de busca Nominatim.
- **Mobile Workflow:** Estrutura baseada em Expo/React Native (Pasta `mapa-mobile`).

## 📁 Estrutura de Pastas
```text
mapa/
├── mapa-mobile/        # Estrutura do app Expo
│   ├── assets/         # Arquivos estáticos (Logo, Favicon, HTML)
│   ├── app/            # Rotas e telas do sistema
│   └── components/     # Componentes reutilizáveis
└── README.md           # Documentação do projeto
