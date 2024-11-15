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
    console.log(dog)
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      const img = document.createElement('img');
      img.src = dog.url;
      img.alt = `${dog.breed} Dog image `;
      img.style.width = '100%';
      img.style.borderRadius = '8px';

      // const breedName = document.createElement('h2');
      // breedName.textContent = dog.[0].id

      gridItem.appendChild(img);
      // gridItem.appendChild(breedName);
      gridContainer.appendChild(gridItem);
  });
};

createGrid();
