const fetchDogs = async () => {
  const apiUrl = "https://api.thedogapi.com/v1/images/search?limit=100&include_breeds=true&api_key=live_OMTMoJ6hlIaS7p75QfY0M7r6NeTvdaWVS2FSsGhYfKI0qEtXEFl4qWusC7c0aXa7";
  try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error(`Error fetching data, ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      console.log("Error fetching the data:", error);
  }
};

const renderGrid = (dogs) => {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = ""; // Clear previous grid content

  dogs.forEach(dog => {
      if (dog?.breeds?.[0]?.name) {
          const gridItem = document.createElement('div');
          gridItem.classList.add('grid-item');

          const img = document.createElement('img');
          img.src = dog.url;
          img.alt = `${dog.breeds[0].name} Dog image`;
          img.style.width = '100%';
          img.style.borderRadius = '8px';

          const breedName = document.createElement('h2');
          breedName.textContent = dog.breeds[0].name;

          const lifeSpan = document.createElement('p');
          lifeSpan.textContent = `Life Span: ${dog.breeds[0].life_span}`;

          const weight = document.createElement('p');
          weight.textContent = `Weight (lb): ${dog.breeds[0].weight.imperial}`;

          const temperament = document.createElement('p');
          temperament.textContent = `Temperament: ${dog.breeds[0].temperament}`;



          const wikipediaSearch = document.createElement('a');
          wikipediaSearch.textContent = `More on Wikipedia`;
          wikipediaSearch.style.cursor = 'pointer';
          wikipediaSearch.style.textDecoration = 'underline'

          // Add click event to the wikipedia button
          wikipediaSearch.addEventListener('click', () => {
              const searchUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(dog.breeds[0].name)}`;
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

const createGrid = async () => {
  const dogs = await fetchDogs();
  renderGrid(dogs);
};

// Function to filter dogs by part of the breed name
const findByBreed = async (partialBreed) => {
  const dogs = await fetchDogs();
  const filteredDogs = dogs.filter(dog => 
    dog?.breeds?.[0]?.name.toLowerCase().includes(partialBreed.toLowerCase())
  );
  renderGrid(filteredDogs);
};

// Event listener for breed search
document.getElementById('search-button').addEventListener('click', () => {
  const breedInput = document.getElementById('breed-input').value;
  findByBreed(breedInput);
});

createGrid();
