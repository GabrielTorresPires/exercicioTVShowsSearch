const handleSearch = async (event) => {
  event.preventDefault();


    const entradaTexto = document.getElementById("query");
    const shows = document.getElementById("shows");
    const message = document.querySelector('#message');
 
    shows.innerHTML = '';
    message.innerHTML = 'searching...';

  const endpoint = `https://api.tvmaze.com/search/shows?q=${entradaTexto.value}`;
  const resposta = await fetch(endpoint); 
  const show = await resposta.json(); 
    
    if (show.length === 0) {
      
    message.innerHTML = 'show not found.';
    return;
    }
    
    message.innerHTML = '';
    
    show.forEach((entry)  => {
      shows.insertAdjacentHTML(
        'beforeend',
      `<li>
      <img class="poster" src="${entry?.show?.image?.medium || ''}" />
      <span class="show-name">${entry?.show?.name || ''}</span>
       </li>`);
    });

};

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#search-form')
    .addEventListener('submit', handleSearch);
});
