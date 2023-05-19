const handleSearch = async (event) => {
  event.preventDefault();


    const entradaTexto = document.getElementById("query");
    const shows = document.getElementById("shows");
 
  const endpoint = `https://api.tvmaze.com/search/shows?q=${entradaTexto.value}`;
  const resposta = await fetch(endpoint); 

  
    const show = await resposta.json(); 
    
    if (!resposta.ok) {
      const message = document.querySelector('#message');
      message.innerHTML = "Show não encontrado.";
    return;
    }
    shows.innerHTML = 
    `<li>
    <img class="poster" src="${show[0].show.image.medium}" />
    <span class="show-name">${show[0].show.name}</span>
     </li>`;
};

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', handleSearch);
});
