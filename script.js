const fetchData = async (apiUrl) => {
    const loadingContainer = document.getElementById('loading-container');

    try {
        loadingContainer.style.display = 'flex'; // Show the loader
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching data, ${response.status}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching the data:", error);
        const gridContainer = document.getElementById('grid-container');
        gridContainer.innerHTML = '<p>Failed to fetch data. Please try again later.</p>';
    } finally {
        loadingContainer.style.display = 'none'; // Hide the loader
    }
};

const fetchDogs = () => {
    const apiKey = import.meta.env.VITE_DOG_API_KEY; 
    const apiUrl = `https://api.thedogapi.com/v1/images/search?limit=20&include_breeds=true&api_key=${apiKey}`;
    return fetchData(apiUrl);
};

const fetchCats = () => {
    const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";
    return fetchData(apiUrl);
};

const renderDogsGrid = async() => {
  const dogs = await fetchDogs();
  const gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = '';
  
  dogs.forEach(dog => { 
      if (dog?.breeds?.[0]?.name) {
          const gridItem = document.createElement('div');
          gridItem.classList.add('grid-item');

          const img = document.createElement('img');
          img.src = dog.url;
          img.alt = `${dog.breeds[0].name} Dog image`;

          const breedName = document.createElement('h2');
          breedName.textContent = dog.breeds[0].name;
          breedName.classList.add('breed-name');

          const lifeSpan = document.createElement('p');
          lifeSpan.textContent = `Life Span: ${dog.breeds[0].life_span}`;
          lifeSpan.classList.add('dog-detail');

          const weight = document.createElement('p');
          weight.textContent = `Weight (lb): ${dog.breeds[0].weight.imperial}`;
          weight.classList.add('dog-detail');

          const temperament = document.createElement('p');
          temperament.textContent = `Temperament: ${dog.breeds[0].temperament}`;
          temperament.classList.add('dog-detail');

          const wikipediaSearch = document.createElement('a');
          wikipediaSearch.textContent = `More on Wikipedia`;
          wikipediaSearch.classList.add('wikipedia-link');

          wikipediaSearch.addEventListener('click', () => {
              const searchUrl = `https://en.wikipedia.org/wiki/${dog.breeds[0].name}`;
              window.open(searchUrl, '_blank'); 
          });

          gridItem.appendChild(img);
          gridItem.appendChild(breedName);
          gridItem.appendChild(lifeSpan);
          gridItem.appendChild(weight);
          gridItem.appendChild(temperament);
          gridItem.appendChild(wikipediaSearch);

          gridContainer.appendChild(gridItem);
      }
  });
};

const renderCatsGrid = async() => {
    const cats = await fetchCats();
    const gridContainer = document.getElementById('grid-container');

    cats.forEach(cat => {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        const img = document.createElement('img');
        img.src = cat.url;
        img.alt = "Cat image";
     
        gridItem.appendChild(img);
        gridContainer.appendChild(gridItem);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    const homeLogo = document.getElementById('home-logo');
    if (homeLogo) {
        homeLogo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    const loadRandomCatsButton = document.getElementById('load_random_cats');
    if (loadRandomCatsButton) {
        loadRandomCatsButton.addEventListener('click', async () => {
            const gridContainer = document.getElementById('grid-container');
            gridContainer.innerHTML = ''; 
            await renderCatsGrid();
        });
    }

    const loadRandomDogsButton = document.getElementById('load_random_dogs');
    if (loadRandomDogsButton) {
        loadRandomDogsButton.addEventListener('click', async () => {
            const gridContainer = document.getElementById('grid-container');
            gridContainer.innerHTML = ''; 
            await renderDogsGrid();
        });
    }
});

const renderGrid = () => {
    const currentPath = window.location.pathname;

    if (currentPath.includes("cats.html")) {
        renderCatsGrid();
    } else if (currentPath.includes("dogs.html")) {
        renderDogsGrid();
    }
};

renderGrid();
