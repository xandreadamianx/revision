const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name'); /* CREO que name es selector, le puse uno de ID */
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');  /* también arreglé el # de location para que aparezca */

async function displayUser(username) {    /* Hacía falta el Async para que funcione el await */
  $n.textContent = 'cargando...'; 
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();  /* falta definir el bloque de abajo como json */
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;    /* Cambié comillas simples por back ticks  */
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);