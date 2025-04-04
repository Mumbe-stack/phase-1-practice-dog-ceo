document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
      .then(response => response.json())  
      .then(data => {
        const imageContainer = document.querySelector('#dog-image-container'); 
        
        data.message.forEach(url => {
          const imgElement = document.createElement('img');
          imgElement.src = url;
          imgElement.alt = 'A random dog';
          imageContainer.appendChild(imgElement);
        });
      })
      .catch(error => error);
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    fetch(breedUrl)
      .then(response => response.json()) 
      .then(data => {
        const breedList = document.querySelector('#dog-breeds'); 
        
        for (const breed in data.message) {
          const li = document.createElement('li');
          li.textContent = breed;
          breedList.appendChild(li);
        }
      })
      .catch(error => error);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.querySelector('#dog-breeds');
        
        for (const breed in data.message) {
          const li = document.createElement('li');
          li.textContent = breed;
          
    
          li.addEventListener('click', () => {
            li.style.color = 'blue';  
          });
          
          breedList.appendChild(li);
        }
      })
      .catch(error => error);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breedList = document.querySelector('#dog-breeds');
        const filterDropdown = document.querySelector('#breed-filter'); 
        
      r
        const displayBreeds = (letter) => {
          breedList.innerHTML = '';  
          for (const breed in data.message) {
            if (breed[0].toLowerCase() === letter) {  
              const li = document.createElement('li');
              li.textContent = breed;
              breedList.appendChild(li);
            }
          }
        };
  
        filterDropdown.addEventListener('change', (event) => {
          const selectedLetter = event.target.value;
          displayBreeds(selectedLetter);
        });
  
       
        displayBreeds('a');  
      })
      .catch(error =>error);
  });
  