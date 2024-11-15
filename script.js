const fetchDogs = async () => {
  const apiUrl = "https://api.thedogapi.com/v1/images/search?limit=20&api_key=live_OMTMoJ6hlIaS7p75QfY0M7r6NeTvdaWVS2FSsGhYfKI0qEtXEFl4qWusC7c0aXa7";
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

const createGrid = async () => {
  const dogs = await fetchDogs();
  const gridContainer = document.getElementById('grid-container');

  dogs.forEach(dog => {
      console.log(dog);

      // Create the grid dinamicly and render only dogs that has breed name 
      if (dog?.breeds?.[0]?.name) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');

        // Create the image element
        const img = document.createElement('img');
        img.src = dog.url;
        img.alt = `${dog?.breeds?.[0]?.name || "Unknown breed"} Dog image`;
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
      

        // Append the image to the grid item
        gridItem.appendChild(img);
        gridItem.appendChild(breedName);
        
        gridItem.appendChild(lifeSpan);
        gridItem.appendChild(weight);
        gridItem.appendChild(temperament);
        // Append the grid item to the grid container
        gridContainer.appendChild(gridItem);
        
    }
  });
};

createGrid();
