
  const charactersList = document.getElementById('charactersList');
  const search = document.getElementById('search');
  let hpCharacters = {};
  
  search.addEventListener('keyup', (e) => {
      const searchString = e.target.value.toLowerCase();
  
      const filteredCharacters = hpCharacters.filter((character) => {
          return (
              character.name.toLowerCase().includes(searchString) ||
              character.house.toLowerCase().includes(searchString)
          );
      });
      displayCharacters(filteredCharacters);
  });
  
  const loadCharacters = async() => {
      try {
          const res = await fetch('https://tobitheme.net/api/characters.json');
          hpCharacters = await res.json();
          displayCharacters(hpCharacters);
      } catch (err) {
          console.error(err);
      }
  };
